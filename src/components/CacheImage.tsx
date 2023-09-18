import React, {useCallback, useEffect, useState} from 'react';
import {Image} from 'react-native';
import FastImage, {ResizeMode} from 'react-native-fast-image';
import {heightScreen, widthScreen} from '../themes/theme';
type Props = {
  width?: number | string;
  height?: number;
  url: string;
  resizeMode: ResizeMode;
  borderRadius?: number;
  style?: any;
  getSize?: boolean;
};

const CacheImage = ({
  width,
  height,
  borderRadius = 0,
  url,
  resizeMode,
  style,
  getSize = false,
}: Props) => {
  const [heightImage, setHeightImage] = useState<any>();

  useEffect(() => {
    if (getSize) {
      Image.getSize(url, (width, height) => {
        console.log(width, height, 'asdasd');
        setHeightImage((widthScreen / width) * height);
      });
    }
  }, []);

  const calcSizeForImage = useCallback(() => {
    const result = getSize
      ? {width: widthScreen, height: heightImage}
      : {
          width,
          height,
        };
    // console.log(result, 'check');
    return result;
  }, [heightImage]);

  return (
    <FastImage
      style={[
        calcSizeForImage(),
        {
          borderRadius,
          ...style,
        },
      ]}
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
