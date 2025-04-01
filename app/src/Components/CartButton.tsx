import React, {useEffect} from 'react';
import {useAppSelector} from '../cartHooks';
import {cartCount} from '../Features/Cart/cart-slice';
import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
interface CartButtonProps {
  navigation: any;
}
export const CartButton: React.FC<CartButtonProps> = ({navigation}) => {
  const getCartCount = useAppSelector(cartCount);
  const handleClick = () => {
    navigation.navigate('Cart');
  };
  return (
    <View style={{position: 'relative'}}>
      <Button
        onPress={handleClick}
        title={`Cart ${getCartCount > 0 ? `(${getCartCount})` : ''}`}
      />
    </View>
  );
};
