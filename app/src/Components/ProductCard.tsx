import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Product} from '../Interfaces/Products';

interface ProductCardProps {
  item: Product;
  navigation: any; // Accessing the navigation prop
}

const ProductCard: React.FC<ProductCardProps> = ({item, navigation}) => {
  const [selectedItem, setSelectedItem] = useState<Product | null>(null);

  // Function to handle row selection (didSelectRowAtIndex equivalent)
  const handleSelectItem = (item: Product) => {
    setSelectedItem(item);
    navigation.navigate('Detail', {product: item});
  };

  return (
    <TouchableOpacity
      onPress={() => handleSelectItem(item)}
      style={styles.cardContainer}>
      {/* Product Image */}
      <Image source={{uri: item.image}} style={styles.cardImage} />

      {/* Product Content */}
      <View style={styles.cardContent}>
        <Text style={styles.productName}>{item.title}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <View style={styles.subContent}>
          <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
          {item.units > 0 && (
            <Text style={styles.productPrice}>${item.units}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: 'gray',
    shadowOpacity: 0.1,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 5,
    elevation: 5, // Android shadow
    margin: 10,
    overflow: 'hidden', // Ensures the content stays within the rounded edges
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  cardContent: {
    padding: 10,
  },
  subContent: {
    padding: 10,
    alignContent: 'space-around',
    flexDirection: 'row',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  productPrice: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
