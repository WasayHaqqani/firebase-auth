/* eslint-disable prettier/prettier */
import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';


const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                color="blue"
                size="large"
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    height: '100%',
  },
});

export default LoadingScreen;
