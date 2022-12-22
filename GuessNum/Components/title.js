import React from 'react';
import {Text, StyleSheet} from 'react-native';

function Title({children}) {
  return (
  <Text style={styles.title}>{children}</Text>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily:'open-sans-bold',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    // maxWidth:'80%',
    // width:100,
  },
});
