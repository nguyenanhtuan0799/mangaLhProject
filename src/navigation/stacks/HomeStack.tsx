import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../containers/HomeScreen';
import DetailManga from '../../containers/DetailManga';
import ViewChapterManga from '../../containers/ViewChapterManga';

const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailManga" component={DetailManga} />
      <Stack.Screen name="ViewChapterManga" component={ViewChapterManga} />
    </Stack.Navigator>
  );
};

export default HomeStack;
