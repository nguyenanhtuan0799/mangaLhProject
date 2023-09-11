import React from 'react';
import {Box, Text} from '../themes/theme';

type Props = {
  icon?: any;
  text: string;
};

const TitleHome = ({icon, text}: Props) => {
  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      <Text variant="textBold">{text}</Text>
      <Box
        width={34}
        height={34}
        borderRadius="xxl"
        justifyContent="center"
        alignItems="center"
        backgroundColor="cardBackground">
        {icon}
      </Box>
    </Box>
  );
};

export default TitleHome;
