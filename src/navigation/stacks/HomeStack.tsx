import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../containers/HomeScreen';
type Props = {};

const HomeStack = (props: Props) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
