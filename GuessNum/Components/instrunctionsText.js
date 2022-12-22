import React from 'react';
import {StyleSheet, Text} from 'react-native';

function InstrunctionsText({children, style}) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstrunctionsText;

const styles = StyleSheet.create({
  instructionText: {
    color: '#ddb52f',
    fontSize: 24,
  },
});
