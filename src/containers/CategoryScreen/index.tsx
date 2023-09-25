import React, {useState} from 'react';
import {Box, useTheme} from '../../themes/theme';
import TitleHome from '../../components/TitleHome';
import Feather from 'react-native-vector-icons/Feather';
import {CATEGORY} from '../../mockData/mockData';
import {Picker} from '@react-native-picker/picker';
import ListMangaByCategory from './ListMangaByCategory';

type Props = {};

const STATUS = [
  {
    name: 'Đang tiến hành',
    value: 'dangtienhanh=1&tamngung=0&hoanthanh=0',
  },
  {
    name: 'Tạm ngưng',
    value: 'dangtienhanh=0&tamngung=1&hoanthanh=0',
  },
  {
    name: 'Hoàn thành',
    value: 'dangtienhanh=0&tamngung=0&hoanthanh=1',
  },
];

const SORT = [
  {name: 'A - Z', slug: 'az'},
  {name: 'Z - A', slug: 'za'},
  {name: 'Mới cập nhật', slug: 'update'},
  {name: 'Truyện mới', slug: 'new'},
  {name: 'Xem nhiều', slug: 'top'},
  {name: 'Được yêu thích', slug: 'like'},
];

const CategoryScreen = (props: Props) => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedStatus, setSelectedStatus] = useState();
  const [selectedSort, setSelectedSort] = useState();

  return (
    <Box backgroundColor="mainBackground" flex={1} p="s">
      <Box>
        <TitleHome
          text="Thể Loại Truyện"
          icon={<Feather name="search" size={22} color={theme.colors.text} />}
        />
      </Box>
      <Box>
        <Box borderWidth={0.6} m="s" borderRadius="s">
          <Picker
            placeholder="Thể loại"
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
        <Box flexDirection="row" justifyContent="space-between">
          <Box borderWidth={0.6} m="s" borderRadius="s" width={'45%'}>
            <Picker
              placeholder="Trạng thái truyện"
              selectedValue={selectedStatus}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedStatus(itemValue)
              }>
              {STATUS?.map((sta, index) => {
                return (
                  <Picker.Item key={index} label={sta.name} value={sta.value} />
                );
              })}
            </Picker>
          </Box>
          <Box borderWidth={0.6} m="s" borderRadius="s" width={'45%'}>
            <Picker
              placeholder="Sort"
              selectedValue={selectedSort}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedSort(itemValue)
              }>
              {SORT?.map((s, index) => {
                return (
                  <Picker.Item key={index} label={s.name} value={s.slug} />
                );
              })}
            </Picker>
          </Box>
        </Box>
      </Box>
      <Box>
        <ListMangaByCategory />
      </Box>
    </Box>
  );
};

export default CategoryScreen;
