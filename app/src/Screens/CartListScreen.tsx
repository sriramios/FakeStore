import React, {useEffect, useState} from 'react';
import {
  FlatList,
  FlatListComponent,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CartList from '../Components/CartList';
import {Product} from '../Interfaces/Products';
import {useAppSelector} from '../cartHooks';
import PlaceHolderView from '../Components/PlaceHolder';

const CartListScreen = () => {
  const products = useAppSelector(state => state.cart.map);
  return (
    <SafeAreaView style={styles.container}>
      {products && products.length > 0 ? (
        <FlatList
          data={products}
          keyExtractor={(item: Product) => item.id.toString()}
          renderItem={({item}: {item: Product}) => {
            return <CartList item={item} />;
          }}
        />
      ) : (
        <PlaceHolderView message={'Empty Cart'} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F2F2',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default CartListScreen;
