import React from 'react';
import {View, Image, Dimensions} from 'react-native';
const WIDTH = Dimensions.get('screen').width;
export default function DisplayImage({item}) {
  const styles = {
    imageStyle: {
      width: WIDTH,
      height: 200,
    },
  };
  return (
    <View>
      <Image source={{uri: item.webformatURL}} style={styles.imageStyle} />
    </View>
  );
}
