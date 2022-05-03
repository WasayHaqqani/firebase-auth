/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppStack from './AppStack';
import LoginProvider from './utils/LoginProvider';
const App = () => {
  return (
    <View style={styles.container}>
      <LoginProvider>
        <AppStack/>
      </LoginProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
