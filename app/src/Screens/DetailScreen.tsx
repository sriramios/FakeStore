import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {Product} from '../Interfaces/Products';
import {RootStackParamList} from '../Navigation/types';
import {get} from '../Network/APIClient';
import {useAppDispatch, useAppSelector} from '../cartHooks';
import {addToCart, removeFromCart} from '../Features/Cart/cart-slice';
import {useRoute} from '@react-navigation/native'; // Navigation hook
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const DetailScreen = ({route}: {route: ProductDetailScreenRouteProp}) => {
  const router = useRoute(); // Ensure this is inside a functional component
  const {product} = route.params; // Get the product passed via navigation
  const value = useAppSelector(state => state.cart.map);
  const dispatch = useAppDispatch();
  const isProductInCart = value.find(item => product.id === item.id);
  const insets = useSafeAreaInsets(); // Access safe area insets

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await get<Product>(`/products/${product.id}`);
        console.log('API Response', result);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <SafeAreaView style={[styles.mainContainer, {paddingTop: -insets.top}]}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Image source={{uri: product.image}} style={styles.productImage} />
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
        </View>
      </ScrollView>
      <View style={styles.footerContent}>
        <TouchableOpacity
          style={[styles.buttonStyle, styles.leftButtonStyle]}
          onPress={handleAddToCart}>
          <Text style={styles.buttonTitle}>Add to cart</Text>
        </TouchableOpacity>
        {isProductInCart ? (
          <TouchableOpacity
            style={[styles.buttonStyle, styles.rightButtonStyle]}
            onPress={handleRemoveFromCart}>
            <Text style={styles.buttonTitle}>Remove from cart</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  productImage: {
    width: '100%',
    height: '50%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productDescription: {
    color: '#555',
    marginVertical: 10,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    margin: 20,
  },
  buttonStyle: {
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 5, // Add space between the buttons
  },
  leftButtonStyle: {
    backgroundColor: '#F08080',
  },
  rightButtonStyle: {
    backgroundColor: '#62D1C7',
  },
});

export default DetailScreen;
