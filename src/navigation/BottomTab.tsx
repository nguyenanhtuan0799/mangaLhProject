/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from '../containers/AccountScreen';
import CategoryScreen from '../containers/CategoryScreen';
import ChatScreen from '../containers/ChatScreen';
import Feather from 'react-native-vector-icons/Feather';
import {Text} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {useTheme} from '../themes/theme';
import HomeStack from './stacks/HomeStack';

const tabBarArr = [
  {
    name: 'Trang chủ',
    icon: (focused: boolean) => (
      <Feather name="home" size={20} color={focused ? 'red' : '#111111'} />
    ),
    screenName: 'HomeScreen',
    component: HomeStack,
  },
  {
    name: 'Thể loại',
    icon: (focused: boolean) => (
      <Feather name="menu" size={20} color={focused ? 'red' : '#111111'} />
    ),
    screenName: 'CategoryScreen',
    component: CategoryScreen,
  },
  {
    name: 'Chat',
    icon: (focused: boolean) => (
      <Feather
        name="message-circle"
        size={20}
        color={focused ? 'red' : '#111111'}
      />
    ),
    screenName: 'ChatScreen',
    component: ChatScreen,
  },
  {
    name: 'Tài khoản',
    icon: (focused: boolean) => (
      <Feather name="user" size={20} color={focused ? 'red' : '#111111'} />
    ),
    screenName: 'AccountScreen',
    component: AccountScreen,
  },
];

const BottomTab = () => {
  const theme = useTheme();

  const getTabBarVisibility = (route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    const hideOnScreens: string[] = ['DetailManga', 'ViewChapterManga'];

    if (hideOnScreens.indexOf(routeName || '') > -1) {
      return 'none';
    }
    return 'flex';
  };
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {tabBarArr?.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            options={({route}) => {
              return {
                tabBarStyle: {
                  display: getTabBarVisibility(route),
                },
                tabBarLabel: ({focused}) => (
                  <Text
                    style={{
                      color: focused
                        ? theme.colors.textActive
                        : theme.colors.text,
                    }}>
                    {item.name}
                  </Text>
                ),
                tabBarIcon: ({focused}) => item.icon(focused),
              };
            }}
            name={item.screenName}
            component={item.component}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTab;
