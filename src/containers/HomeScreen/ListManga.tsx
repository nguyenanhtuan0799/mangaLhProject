import React from 'react';
import {Box, widthScreen} from '../../themes/theme';
import {StyleSheet} from 'react-native';
import {dataChunkManga, typeHotAndUpdated} from '../../types/data';
import Swiper from 'react-native-swiper';
import MangaItem from './MangaItem';
import {chunk} from 'lodash';

type Props = {
  data: typeHotAndUpdated[];
};

const ListManga = ({data}: Props) => {
  const dataChunk: dataChunkManga = chunk(data, 6);
  return (
    <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false}>
      {dataChunk?.map((item, index: number) => {
        return (
          <Box key={index} style={styles.slide}>
            {item?.map((manga, index: number) => {
              return (
                <MangaItem
                  key={index}
                  width={widthScreen / 3.65}
                  data={manga}
                />
              );
            })}
          </Box>
        );
      })}
    </Swiper>
  );
};

export default ListManga;
const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
