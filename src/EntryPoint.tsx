import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import RootNavigation, {
  isReadyRef,
  navigationRef,
} from './navigation/RootNavigation';
import {ThemeProvider} from './themes/theme';
import LayoutPaddingStatus from './layouts/LayoutPaddingStatus';
// import SplashScreen from 'react-native-splash-screen';

const EntryPoint = () => {
  const routeNameRef: any = React.useRef();
  useEffect(() => {
    // SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <ThemeProvider>
        <LayoutPaddingStatus>
          <NavigationContainer
            ref={navigationRef}
            onReady={() => {
              isReadyRef.current = true;
              routeNameRef.current =
                navigationRef?.current?.getCurrentRoute()?.name;
            }}>
            <RootNavigation />
          </NavigationContainer>
        </LayoutPaddingStatus>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default EntryPoint;
