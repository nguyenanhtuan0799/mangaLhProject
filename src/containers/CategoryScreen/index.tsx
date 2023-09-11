import React, {useMemo, useState} from 'react';
import {ScrollView, TouchableWithoutFeedback} from 'react-native';
import {
  Box,
  Text,
  heightScreen,
  useTheme,
  widthScreen,
} from '../../themes/theme';
import TitleHome from '../../components/TitleHome';
import Feather from 'react-native-vector-icons/Feather';
import {CATEGORY} from '../../mockData/mockData';

type Props = {};

const CategoryScreen = (props: Props) => {
  const theme = useTheme();
  return (
    <Box backgroundColor="mainBackground" flex={1} p="s">
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Box>
          <TitleHome
            text="Thể Loại Truyện"
            icon={<Feather name="search" size={22} color={theme.colors.text} />}
          />
          <Box flexDirection="row" flexWrap="wrap"></Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default CategoryScreen;
