import React, {useCallback, useMemo, useState} from 'react';
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
import {convertKeyValue} from '../../utils/array';
import {Picker} from '@react-native-picker/picker';

type Props = {};

const CategoryScreen = (props: Props) => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <Box backgroundColor="mainBackground" flex={1} p="s">
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Box>
          <TitleHome
            text="Thể Loại Truyện"
            icon={<Feather name="search" size={22} color={theme.colors.text} />}
          />
        </Box>
        <Box borderWidth={0.6} m="s" borderRadius="s">
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCategory(itemValue)
            }>
            {CATEGORY?.map((cate, index) => {
              return (
                <Picker.Item key={index} label={cate.name} value={cate.slug} />
              );
            })}
          </Picker>
        </Box>
        <Box borderWidth={0.6} m="s" borderRadius="s">
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCategory(itemValue)
            }>
            {CATEGORY?.map((cate, index) => {
              return (
                <Picker.Item key={index} label={cate.name} value={cate.slug} />
              );
            })}
          </Picker>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default CategoryScreen;
