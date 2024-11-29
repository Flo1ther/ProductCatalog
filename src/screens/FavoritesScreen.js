import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';

export default function FavoritesScreen({ navigation }) {
  const { favorites, removeFromFavorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>У вас немає улюблених товарів.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price} $</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('ProductDetails', { id: item.id })}
            >
              <Text style={styles.buttonText}>Деталі</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => removeFromFavorites(item.id)}
            >
              <Text style={styles.buttonText}>Видалити з улюблених</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fefefe',
  },
  message: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 50,
  },
  card: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: 'green',
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fefcff',
    fontSize: 16,
  },
});
