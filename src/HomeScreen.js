import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import fetchImages from './redux/operations';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    paddingVertical: 20,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  block: {margin: 5},
  image: {width: 100, height: 100, margin: 5},
  description: {width: 100, textAlign: 'center'},
  title: {fontWeight: 'bold'},
});

const HomeScreen = ({navigation, onFetchImages, images}) => {
  useEffect(() => {
    onFetchImages();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {images.length > 0
        ? images.map(({id, urls, user, alt_description}) => (
            <View key={id} style={styles.block}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('FullScreenImage', {
                    urls: urls,
                  });
                }}>
                <Image
                  style={styles.image}
                  source={{
                    uri: urls.small,
                  }}></Image>
              </TouchableOpacity>

              <Text style={[styles.description, styles.title]}>
                {alt_description}
              </Text>
              <Text style={styles.description}>{user.name}</Text>
            </View>
          ))
        : null}
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    images: state.images,
  };
};

const mapDispatchToProps = {
  onFetchImages: fetchImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
