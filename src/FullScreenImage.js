import React from 'react';
import {Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {flex: 1, resizeMode: 'cover'},
});

const FullScreenImage = ({route}) => {
  const {urls} = route.params;

  return (
    <Image
      style={styles.image}
      source={{
        uri: urls.full,
      }}></Image>
  );
};

export default FullScreenImage;
