import React from 'react';
import {Box, Text} from '../../themes/theme';
import {NavigationType} from '../../types/navigation';

type Props = {
  navigation: NavigationType;
  route: any;
};

const ViewChapterManga = ({navigation, route}: Props) => {
  console.log(route);
  return (
    <Box>
      <Text>ViewChapterManga</Text>
    </Box>
  );
};

export default ViewChapterManga;
