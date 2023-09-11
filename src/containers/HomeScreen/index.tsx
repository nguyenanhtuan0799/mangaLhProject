import React, {useCallback} from 'react';
import {Box, heightScreen, useTheme} from '../../themes/theme';
import Feather from 'react-native-vector-icons/Feather';
import TitleHome from '../../components/TitleHome';
import {FlatList, ListRenderItem, ScrollView} from 'react-native';
import {hot_to_day} from '../../mockData/mockData';
import {typeHotAndUpdated} from '../../types/data';
import MangaItem from './MangaItem';
import ListManga from './ListManga';

const HomeScreen = () => {
  const theme = useTheme();

  const renderItem: ListRenderItem<typeHotAndUpdated> = useCallback(
    ({item}) => {
      return <MangaItem data={item} />;
    },
    [],
  );
  return (
    <Box backgroundColor="mainBackground" flex={1} p="s">
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Box>
          <TitleHome
            text="Truyện Hot Trong Ngày 🔥"
            icon={<Feather name="search" size={22} color={theme.colors.text} />}
          />

          <FlatList
            data={hot_to_day}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </Box>
        <Box height={heightScreen / 2}>
          <TitleHome
            text="Truyện Mới Cập Nhật 🔥"
            icon={
              <Feather
                name="chevron-right"
                size={22}
                color={theme.colors.text}
              />
            }
          />
          <ListManga data={hot_to_day} />
        </Box>
        <Box height={heightScreen / 2}>
          <TitleHome
            text="Truyện Mới Nhất 🔥"
            icon={
              <Feather
                name="chevron-right"
                size={22}
                color={theme.colors.text}
              />
            }
          />
          <ListManga data={hot_to_day} />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;
