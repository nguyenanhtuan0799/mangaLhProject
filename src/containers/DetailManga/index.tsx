/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import theme, {Box, Text, heightScreen, widthScreen} from '../../themes/theme';
import {NavigationType} from '../../types/navigation';
import HeaderGoBack from '../../components/HeaderGoBack';
import CacheImage from '../../components/CacheImage';
import commonStyles from '../../common/styles';
import {SegmentControl} from 'react-navtive-segment-control';
import PagerView from 'react-native-pager-view';
import InformationManga from './InformationManga';
import ChapterManga from './ChapterManga';
import {detailManga} from '../../mockData/mockData';
import Feather from 'react-native-vector-icons/Feather';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  navigation: NavigationType;
  route: any;
};

const DetailManga = ({navigation, route}: Props) => {
  const {chapter, id, imageUrl, name, slug, time} = route?.params;
  const segments = [{label: 'Thông Tin Truyện'}, {label: 'Danh Sách Chapter'}];
  const {listChapter, ...rest} = detailManga;

  // const pageViews = [
  //   {
  //     id: 0,
  //     component: <InformationManga data={rest} listChapter={listChapter} />,
  //   },
  //   {
  //     id: 1,
  //     component: <ChapterManga data={listChapter} />,
  //   },
  // ];

  const [activeTab, setActiveTab] = useState(0);
  const refPage = useRef<any>();
  const refSegment = useRef<any>();
  const insets = useSafeAreaInsets();

  const renderButtonRead = () => {
    return (
      <Box
        backgroundColor="mainBackground"
        borderTopColor="borderGray"
        borderTopWidth={0.5}
        style={[
          commonStyles.shadowIOS,
          {paddingBottom: insets.bottom || theme.spacing.s},
        ]}
        paddingHorizontal="l"
        flexDirection="row"
        paddingVertical="s"
        justifyContent="space-between"
        alignItems="center">
        <Box flexDirection="row" alignItems="center">
          <Feather name="eye" size={18} color={theme.colors.text} />
          <Text variant="textBold" fontSize={16} ml="s">
            {rest?.infoStatic?.view}
          </Text>
        </Box>
        <TouchableOpacity>
          <Box
            backgroundColor="mainButton"
            borderRadius="m"
            style={commonStyles.shadow}
            borderColor="borderGray"
            borderWidth={0.5}
            paddingHorizontal="m"
            paddingVertical="s">
            <Text variant="textBold" color="textWhite">
              Đọc {listChapter.length >= 1 && listChapter[0]?.name}
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    );
  };

  return (
    <Box backgroundColor="mainBackground" flex={1}>
      <HeaderGoBack text={'Chi Tiết Truyện'} />
      <Box width={'100%'} alignItems="center" paddingVertical="m">
        <CacheImage
          borderRadius={theme.borderRadii.m}
          width={widthScreen * 0.86}
          height={heightScreen * 0.24}
          url={imageUrl}
          resizeMode="cover"
        />
      </Box>
      <Box
        flex={1}
        borderLeftWidth={1}
        borderTopWidth={1}
        borderRightWidth={1}
        borderColor="borderGray"
        style={[
          commonStyles.shadowIOS,
          {borderTopLeftRadius: 36, borderTopRightRadius: 36},
        ]}
        backgroundColor="mainBackground"
        pb="s">
        <Box flex={1} marginTop="l" marginHorizontal="m" alignItems="center">
          <SegmentControl
            ref={refSegment}
            labelField="label"
            style={{
              width: widthScreen - theme.spacing.l,
              borderRadius: 20,
              height: 44,
              backgroundColor: theme.colors.borderGray,
              marginBottom: theme.spacing.m,
            }}
            activeStyle={{
              borderRadius: 20,
            }}
            textActiveStyle={{
              color: theme.colors.text,
            }}
            textStyle={{
              color: theme.colors.textDisable,
            }}
            segments={segments}
            activeTab={activeTab}
            onPress={(value, i) => {
              // value is object active in data
              setActiveTab(i);
              refPage.current.setPage(i);
            }}
          />
          {/* {pageViews?.map(page => {
            return (
              page?.id === activeTab && (
                <Box mt="s" flex={1}>
                  {page?.component}
                </Box>
              )
            );
          })} */}

          <PagerView
            ref={refPage}
            initialPage={activeTab}
            style={{flex: 1, width: '100%'}}
            onPageSelected={e => {
              refSegment?.current?.updateActive(e.nativeEvent.position);
            }}>
            <Box key={1} flex={1}>
              <InformationManga data={rest} listChapter={listChapter} />
            </Box>
            <Box key={2} flex={1}>
              <ChapterManga data={listChapter} />
            </Box>
          </PagerView>
        </Box>
      </Box>
      {renderButtonRead()}
    </Box>
  );
};

export default DetailManga;
