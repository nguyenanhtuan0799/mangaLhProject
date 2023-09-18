import React, {EventHandler, useState} from 'react';
import {Box, Text, useTheme} from '../../themes/theme';
import HeaderGoBack from '../../components/HeaderGoBack';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {BoxTap} from '../../components';
import Feather from 'react-native-vector-icons/Feather';

type Props = {
  children: React.ReactNode;
};

const LayoutMainViewManga = ({children}: Props) => {
  const [hidden, setHidden] = useState<boolean>(false);
  const theme = useTheme();

  const handleDoubleTapChildren = () => {
    setHidden(prev => !prev);
  };

  const renderBottomViewManga = () => {
    return (
      <Box
        height={Platform.select({
          android: 60,
        })}
        flexDirection="row"
        paddingTop={Platform.select({
          ios: 'm',
        })}
        backgroundColor="mainBackground"
        justifyContent="space-around"
        alignItems="center">
        <Box>
          <TouchableOpacity>
            <Feather name="chevrons-left" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </Box>
        <Box>
          <TouchableOpacity>
            <Feather name="home" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </Box>
        <Box>
          <TouchableOpacity>
            <Feather name="menu" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </Box>
        <Box>
          <TouchableOpacity>
            <Feather
              name="chevrons-right"
              size={24}
              color={theme.colors.text}
            />
          </TouchableOpacity>
        </Box>
      </Box>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: theme.colors.mainBackground}}>
      <Box flex={1}>
        <StatusBar animated hidden={hidden} />
        {!hidden && <HeaderGoBack text="Chap 1" />}
        <BoxTap numberOfTaps={2} onPress={handleDoubleTapChildren}>
          <Box flex={1}>{children}</Box>
        </BoxTap>
        {!hidden && renderBottomViewManga()}
      </Box>
    </SafeAreaView>
  );
};

export default LayoutMainViewManga;
