import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FavoritesProvider } from './src/context/FavoritesContext';

import HomeScreen from './src/screens/HomeScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Каталог товарів' }} />
          <Stack.Screen name="Categories" component={CategoriesScreen} options={{ title: 'Категорії' }} />
          <Stack.Screen name="Products" component={ProductsScreen} options={{ title: 'Список товарів' }} />
          <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ title: 'Деталі товару' }} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Улюблені' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}
