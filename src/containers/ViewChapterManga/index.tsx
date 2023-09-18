import React, {useCallback, useState} from 'react';
import {Box, Text, heightScreen, widthScreen} from '../../themes/theme';
import {NavigationType} from '../../types/navigation';
import LayoutMainViewManga from './LayoutMainViewManga';
import {contentChapter} from '../../mockData/mockData';
import {FlatList, ListRenderItem} from 'react-native';
import {imgContents} from '../../types/data';
import {CacheImage} from '../../components';

type Props = {
  navigation: NavigationType;
  route: any;
};

const ViewChapterManga = ({navigation, route}: Props) => {
  const {imgContents} = contentChapter;

  const renderItem: ListRenderItem<imgContents> = useCallback(({item}) => {
    return <CacheImage getSize url={item?.img} resizeMode="contain" />;
  }, []);
  return (
    <LayoutMainViewManga>
      <FlatList data={imgContents} renderItem={renderItem} />
    </LayoutMainViewManga>
  );
};

export default ViewChapterManga;
