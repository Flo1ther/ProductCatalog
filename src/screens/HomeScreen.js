import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Вітаємо у каталозі товарів!</Text>
      
      {/* Замінили стандартну кнопку на TouchableOpacity для кращої стилізації */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Categories')}
      >
        <Text style={styles.buttonText}>Переглянути категорії</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Favorites')}
      >
        <Text style={styles.buttonText}>Улюблені</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#fefefe',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#262732',
    textAlign: 'center',
  },
  button: {
    width: 250,
    marginVertical: 10,
    padding: 12,
    borderRadius: 5,
    backgroundColor: '#007BFF',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fefcff',
    fontSize: 18,
    textAlign: 'center',
  },
});
