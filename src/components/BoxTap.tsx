import React from 'react';

import {
  HandlerStateChangeEvent,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';
interface BoxTap {
  children: React.ReactNode;
  onPress: () => void;
  numberOfTaps: number;
}
const BoxTap = ({numberOfTaps, onPress, children}: BoxTap) => {
  const _onNumberTapRelease = (event: HandlerStateChangeEvent<any>) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      onPress();
    }
  };
  return (
    <TapGestureHandler
      onHandlerStateChange={_onNumberTapRelease}
      numberOfTaps={numberOfTaps}>
      {children}
    </TapGestureHandler>
  );
};

export default BoxTap;
