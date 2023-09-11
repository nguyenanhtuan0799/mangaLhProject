import React from 'react';
import {Box} from '../themes/theme';
import {Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  children: any;
};

const LayoutPaddingStatus = ({children}: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <Box
      style={{paddingTop: Platform.select({ios: insets.top, android: 0})}}
      flex={1}
      backgroundColor="mainBackground">
      {children}
    </Box>
  );
};

export default LayoutPaddingStatus;
