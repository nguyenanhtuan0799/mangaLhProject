import React, {useCallback} from 'react';
import {Box, Text} from '../../themes/theme';
import {FlatList, ListRenderItem} from 'react-native';
import {LIST_MANGA_CATEGORY} from '../../mockData/mockData';
import {mangaItemByCategory} from '../../types/data';
import MangaItemByCategory from './MangaItemByCategory';

type Props = {};

const ListMangaByCategory = (props: Props) => {
  const renderItem: ListRenderItem<mangaItemByCategory> = useCallback(
    ({item}) => {
      return <MangaItemByCategory />;
    },
    [],
  );
  return (
    <Box>
      <FlatList
        data={LIST_MANGA_CATEGORY}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </Box>
  );
};

export default ListMangaByCategory;
