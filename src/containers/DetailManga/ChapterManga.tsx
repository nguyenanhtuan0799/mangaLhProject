import React, {useCallback, useState} from 'react';
import {Box, Text} from '../../themes/theme';
import {chapter} from '../../types/data';
import {FlatList, ListRenderItem, TouchableOpacity} from 'react-native';
import {upperCaseFirst} from '../../utils/string';
import {navigate} from '../../navigation/RootNavigation';

type Props = {
  data: chapter[];
  slug: string;
};

const ChapterManga = ({data, slug}: Props) => {
  const [sortMangaNew, setSortMangaNew] = useState<boolean>(false);

  const handleClickSortOld = () => {
    setSortMangaNew(false);
  };
  const handleClickSortNew = () => {
    setSortMangaNew(true);
  };

  const renderItem: ListRenderItem<chapter> = useCallback(({item, index}) => {
    const handleClickReadChapter = (item: chapter) => {
      navigate('ViewChapterManga', {
        slug: slug,
        pathChapter: item?.pathChapter,
      });
    };
    return (
      <TouchableOpacity
        onPress={() => {
          handleClickReadChapter(item);
        }}>
        <Box
          paddingVertical="s"
          borderTopWidth={0.8}
          borderBottomWidth={0.8}
          borderColor="borderGray">
          <Text variant="text" fontSize={14} mb="s">
            {index + 1}. {upperCaseFirst(item?.name)}
          </Text>
          <Text variant="text" fontSize={14} color="textDisable">
            {item?.time}
          </Text>
        </Box>
      </TouchableOpacity>
    );
  }, []);
  return (
    <Box flex={1}>
      <Box
        mb="m"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Text variant="text" fontSize={15}>
          Cập nhật đến {data.length >= 1 && data[0]?.name}
        </Text>
        <Box flexDirection="row">
          <TouchableOpacity onPress={handleClickSortOld}>
            <Text
              fontSize={15}
              variant="text"
              mr="s"
              color={sortMangaNew ? 'text' : 'textActive'}>
              Cũ nhất
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleClickSortNew}>
            <Text
              fontSize={15}
              variant="text"
              color={sortMangaNew ? 'textActive' : 'text'}>
              Mới nhất
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
      />
    </Box>
  );
};

export default ChapterManga;
