// screens/BikeListScreen.js
import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBikes } from '../actions/bikeActions';

function BikeListScreen() {
  const dispatch = useDispatch();
  const { bikes, loading, error } = useSelector((state) => state.bikeStore);

  useEffect(() => {
    dispatch(fetchBikes());
  }, [dispatch]);

  const renderBike = ({ item, navigation }) => (
    <TouchableOpacity
      style={styles.bikeCard}
      >
      <Image source={{ uri: item.image }} style={styles.bikeImage} />
      <Text style={styles.bikeName}>{item.name}</Text>
      <Text style={styles.bikePrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>The World's Best Bikes</Text>
        {loading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <Text>Error: {error.message}</Text>
        ) : (
          <FlatList
            data={bikes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderBike}
            numColumns={2}
            columnWrapperStyle={styles.row}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  //  scrollContainer: {
  //   alignItems: 'center',
  // },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5A5F',
    marginBottom: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  bikeCard: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F7BA8326',
    margin: 5,
    borderRadius: 8,
  },
  bikeImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  bikeName: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  bikePrice: {
    fontSize: 14,
    color: '#FF5A5F',
    alignSelf: 'center',
  },
});
export default BikeListScreen;
