// styles.js
import React from 'react';
import { StyleSheet } from 'react-native';

const style = {
  h1: {
    fontSize: 24
  },
  h2: {
    fontSize: 20,
    flex: 1
  },
  h3: {
    fontSize: 16,
    flex: 1
  },
  last: {
    marginBottom: 300,
  },
  half: {
    flex: 1
  }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  h1: {
  	fontSize: 24
  }
});