import React, {useCallback} from 'react';
import {Box, Text} from '../../themes/theme';
import {chapter} from '../../types/data';
import {FlatList, ListRenderItem} from 'react-native';
import {upperCaseFirst} from '../../utils/string';

type Props = {
  data: chapter[];
};

const ChapterManga = ({data}: Props) => {
  const renderItem: ListRenderItem<chapter> = useCallback(({item}) => {
    return (
      <Box>
        <Text>{upperCaseFirst(item?.name)}</Text>
      </Box>
    );
  }, []);
  return (
    <Box flex={1}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
      />
    </Box>
  );
};

export default ChapterManga;
