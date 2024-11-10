// src/screens/ProductDetailScreen.js
import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const DetailScreen = ({ route, navigation }) => {
  const { productId } = route.params;

  const product = useSelector(state =>
    state.bikeStore.bikes.find(bike => bike.id === productId)
  );

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.discount}>15% OFF | ${product.price}</Text>
      <Text style={styles.oldPrice}>${product.oldPrice}</Text>
      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.description}>{product.description}</Text>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.heartButton}>
          <Text style={styles.heartText}>♡</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.addButtonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  discount: {
    color: '#FF5555',
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    fontSize: 16,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  heartButton: {
    padding: 10,
  },
  heartText: {
    fontSize: 24,
    color: '#888',
  },
  addButton: {
    backgroundColor: '#FF5555',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetailScreen;
