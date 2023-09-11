import React from 'react';
import FastImage, {ResizeMode} from 'react-native-fast-image';
type Props = {
  width: number | string;
  height: number;
  url: string;
  resizeMode: ResizeMode;
  borderRadius?: number;
  style?: any;
};

const CacheImage = ({
  width,
  height,
  borderRadius = 0,
  url,
  resizeMode,
  style,
}: Props) => {
  return (
    <FastImage
      style={{width, height, borderRadius, ...style}}
      source={{
        uri: url,
        // headers: {Authorization: 'someAuthToken'},
        priority: FastImage.priority.normal,
      }}
      resizeMode={resizeMode}
    />
  );
};

export default CacheImage;
