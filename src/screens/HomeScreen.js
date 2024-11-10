import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';

 function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        A premium online store for sports enthusiasts
      </Text>
      <Image
        source={{
          uri: 'https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lF5Gn8hEujcOtdsOXxMA7b5AMTsxXVS6iLGImXqx0jqYTUl3RifpEJ1AwcQGANUVu4aC6Eq8SXgPXNiKkErJ9ft6iTqrFLdWEGTtbG38azVAswCRRG7DJLvWIrFaO0A-PCbDsnqM0REdeSaFBsm9dZY1LMTMeuWSD5HJxarXinZ8iya4FAVrjd3QCft2Pd4SMsoesz1B8NnL7LGWP-z4TYJ14-xW7BEYEVpfJmGYJ2auuW7fodRnWGDaM-Ywrrl0lwDUHsJKgTuuteLQljeKew4vrPxn3QcL~J5s5AGypOZPnFjxcefDzz6A0Nb-sIT0V9NUuAizCfCbOJ8Cm4KIag__',
        }}
        style={styles.image}
      />
      <Text style={styles.shopTitle}>POWER BIKE SHOP</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('BikeList')}
        style={styles.button}
      >
      <Text>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 16,
    marginBottom: 20,
  },
  image: {
    width: 210,
    height: 200,
    marginBottom: 20,
  },
  shopTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button:{
    width:'80%',
    height:60,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#E94141',
    borderRadius:30,

  }
});
export default HomeScreen;