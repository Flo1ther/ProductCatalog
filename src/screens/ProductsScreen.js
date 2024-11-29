import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { fetchProductsByCategory } from '../api/fetchAPI';

export default function ProductsScreen({ route, navigation }) {
  const { category } = route.params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchProductsByCategory(category).then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, [category]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loading} />;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Пошук..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredProducts}
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
              <Text style={styles.buttonText}>Переглянути</Text>
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
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '70%',
    marginBottom: 20,
    alignSelf: 'center',
    backgroundColor: '#fefcff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    alignSelf: 'center',
    fontSize: 14,
    color: '#007BFF',
    marginVertical: 5,
  },
  search: {
    backgroundColor: "fefcff",
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#cecece',
  },
  button: {
    alignSelf: 'center',
    width: '17%',
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fefcff',
    textAlign: 'center',
    fontSize: 16,
  },
});
