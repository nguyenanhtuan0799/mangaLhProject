import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './BottomTab';
import DetailManga from '../containers/DetailManga';
import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

const RootNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Root">
      <Stack.Screen name="Root" component={BottomTab} />
      <Stack.Screen name="DetailManga" component={DetailManga} />
    </Stack.Navigator>
  );
};

// RootNavigation.js

// NavigationContainer is referred here - Check NavigationStack
export const navigationRef = createNavigationContainerRef();
export const isReadyRef: any = React.createRef();

export function navigate(name: any, params?: any) {
  console.log('navigate name===========', name, params);
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
export function popToTop() {
  navigationRef.dispatch(StackActions.popToTop());
}
export function resetStack(name: any, params: any) {
  navigationRef.current?.reset({
    index: 0,
    routes: [
      {
        name,
        params,
      },
    ],
  });
}

export function goBack() {
  navigationRef.current?.goBack();
}

export default RootNavigation;
