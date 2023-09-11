import React, {ReactNode} from 'react';
import {Box, Text, useTheme, widthScreen} from '../themes/theme';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native';
import {goBack} from '../navigation/RootNavigation';

type Props = {
  text: string;
  component?: ReactNode;
};

const HeaderGoBack = ({text, component}: Props) => {
  const theme = useTheme();
  const handleClickGoBack = () => {
    goBack();
  };
  return (
    <Box
      height={44}
      paddingHorizontal="s"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row"
      backgroundColor="mainBackground">
      <TouchableOpacity onPress={handleClickGoBack}>
        <Box width={20}>
          <Feather name="chevron-left" size={20} color={theme.colors.text} />
        </Box>
      </TouchableOpacity>
      <Box>
        <Text variant="textBold" fontSize={18}>
          {text}
        </Text>
      </Box>
      <Box width={20}>{component}</Box>
    </Box>
  );
};
export default HeaderGoBack;
