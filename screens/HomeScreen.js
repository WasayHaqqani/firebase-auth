/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import FirebaseUtil from '../utils/FirebaseUtil';

const HomeScreen = () => {
  const signOut = () => {
    FirebaseUtil.signOut().catch((e)=>{
      console.log(e);
      // eslint-disable-next-line no-alert
      alert('Something Went Wrong!');
    });
  };
  return (
    <View style={styles.container}>
      <Text> Home </Text>
      <Button title="Logout" onPress={() => signOut()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    padding: 20,
  },
});

export default HomeScreen;
