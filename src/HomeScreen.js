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
    justifyContent: 'center',
    padding: 24,
  },
  block: {margin: 5},
  image: {width: 100, height: 100, margin: 5},
  description: {width: 100, textAlign: 'center'},
  title: {fontWeight: 'bold'},
});

const HomeScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://api.unsplash.com/photos?per_page=30', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Client-ID t4o7W4kwd5UfBG-Nenycl7sk_uS5G4mVJsQ6_RblbCM',
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
      )}
    </ScrollView>
  );
};

export default HomeScreen;
