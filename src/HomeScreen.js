import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    paddingVertical: 20,
    flexWrap: 'wrap',
    padding: 24,
  },
  image: {width: 100, height: 100, margin: 5},
  description: {width: 100, textAlign: 'center'},
  title: {fontWeight: 'bold'},
});

const HomeScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://api.unsplash.com/photos?per_page=12', {
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Client-ID 896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043',
      },
    })
      .then((response) => response.json())
      .then((images) => {
        setImages(images);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        images.map(({id, urls, user, alt_description}) => (
          <View key={id}>
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
      )}
    </ScrollView>
  );
};

export default HomeScreen;
