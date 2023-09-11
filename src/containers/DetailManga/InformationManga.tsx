import React from 'react';
import {Box, Text, useTheme} from '../../themes/theme';
import {chapter, informationManga} from '../../types/data';
import Feather from 'react-native-vector-icons/Feather';
import {ScrollView, TouchableOpacity} from 'react-native';

type Props = {
  data: informationManga;
  listChapter: chapter[];
};

const InformationManga = ({data, listChapter}: Props) => {
  const theme = useTheme();

  const renderBoxInfo = (label: string, value: any) => {
    return (
      <Box
        paddingVertical="s"
        paddingHorizontal="l"
        justifyContent="center"
        alignItems="center"
        borderWidth={0.5}
        borderColor="border"
        borderRadius="m">
        <Text variant="textBold">{label}</Text>
        <Text mt="s" variant="text">
          {value}
        </Text>
      </Box>
    );
  };
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Text variant="textBold">{data?.name}</Text>
        <Feather
          style={{marginRight: theme.spacing.m}}
          name="heart"
          size={20}
          color={theme.colors.text}
        />
      </Box>
      <Text variant="text">Trạng thái: {data?.infoDetail?.status}</Text>
      <Box mt="m" flexDirection="row" flexWrap="wrap">
        {data?.infoDetail?.category?.map((cate, i) => {
          return (
            <TouchableOpacity key={i}>
              <Box
                alignItems="center"
                justifyContent="center"
                maxWidth={80}
                borderWidth={0.5}
                borderColor="border"
                backgroundColor="borderGray"
                borderRadius="s"
                style={{paddingVertical: 6, paddingHorizontal: 6, margin: 2}}>
                <Text variant="text">{cate?.name}</Text>
              </Box>
            </TouchableOpacity>
          );
        })}
      </Box>
      <Box flexDirection="row" justifyContent="space-between" mt="s">
        {renderBoxInfo('Lần cuối', data?.infoStatic?.time)}
        {renderBoxInfo('Đánh giá', data?.infoStatic?.review)}
        {renderBoxInfo('Chapter', listChapter?.length)}
      </Box>
      <Text variant="text" mt="s" fontSize={15}>
        {data?.summary}
      </Text>
    </ScrollView>
  );
};

export default InformationManga;
