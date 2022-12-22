import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: '#ddb52f',
    padding: deviceWidth < 450 ? 12 : 24,
    borderRadius: 8,
    margin: deviceWidth < 450 ? 12 : 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: '#ddb52f',
    fontSize: 36,
    fontWeight: 'bold',
  },
});
