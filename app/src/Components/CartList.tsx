import React from 'react';
import {Product} from '../Interfaces/Products';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const {width: screenWidth} = Dimensions.get('window'); // Get screen width dynamically

interface CartListProps {
  item: Product;
}
const CartList: React.FC<CartListProps> = ({item}) => {
  return (
    <TouchableOpacity style={styles.rowContent}>
      <Image source={{uri: item.image}} style={styles.cardImage} />
      <Text style={styles.productName}>{item.title}</Text>
      <Text style={styles.unitTitle}>{item.units}</Text>
    </TouchableOpacity>
  );
};
export default CartList;
const styles = StyleSheet.create({
  rowContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
    width: screenWidth,
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  productName: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'medium',
    textAlign: 'left',
    flexShrink: 1,
  },
  unitTitle: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    flexShrink: 1,
    textAlign: 'right',
  },
});
