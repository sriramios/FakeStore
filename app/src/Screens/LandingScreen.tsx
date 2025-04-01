import React, {Component, useEffect, useState} from 'react';
import {Product} from '../Interfaces/Products';
import {
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import {get} from '../Network/APIClient';
import ProductCard from '../Components/ProductCard';
import {useNavigation} from '@react-navigation/native';

const LandingScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await get<Product[]>('/products');
        setProducts(result); // Update the state with products
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.center} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item: Product) => item.id.toString()}
        renderItem={({item}: {item: Product}) => {
          return <ProductCard item={item} navigation={navigation} />;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F2F2',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LandingScreen;
