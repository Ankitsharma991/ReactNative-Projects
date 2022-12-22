import React from 'react';
import {StyleSheet, View} from 'react-native';

function Card({children}) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    marginTop: 36,
    backgroundColor: '#27063c',
    elevation: 4,
    shadowColor: 'white',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: {width: 4, height: 4},
    justifyContent: 'center',
    alignItems: 'center',
  },
});
