import React from 'react';
import {
  Box,
  Text,
  heightScreen,
  useTheme,
  widthScreen,
} from '../../themes/theme';
import {typeHotAndUpdated} from '../../types/data';
import CacheImage from '../../components/CacheImage';
import {TouchableOpacity} from 'react-native';
import {navigate} from '../../navigation/RootNavigation';

type Props = {
  data: typeHotAndUpdated;
  width?: number;
};
const MangaItem = ({data, width = widthScreen / 3.8}: Props) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate('DetailManga', data);
      }}>
      <Box
        width={width}
        minHeight={heightScreen / 5.5}
        m="s"
        borderRadius="s"
        justifyContent="center">
        <CacheImage
          borderRadius={theme.borderRadii.s}
          width={width}
          height={120}
          resizeMode="cover"
          url={data?.imageUrl}
        />
        <Text variant="text" color="text" fontSize={12} mt="s">
          {data?.name}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default MangaItem;
