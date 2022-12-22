import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


let up = require('../assets/up.png');
let down = require('../assets/down.png');

function CardDetails(props) {
  const [shouldShow, setShouldShow] = useState(true);
  return (
    <View style={styles.rootContainer}>
      {/* 1 */}
      <View style={styles.headRow}>
        <View style={styles.creatorContainer}>
          <View>
            <Image
              source={require('../assets/avatar2.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.createdDate}>
            <Text style={styles.nameDate}>{props.name}</Text>
            <Text style={styles.nameDate}>{props.date}</Text>
          </View>
        </View>
        <View>
          <Pressable onPress={() => setShouldShow(!shouldShow)}>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>
              <Image source={up} style={{height: 10, width: 10}} /> See Thread{' '}
            </Text>
          </Pressable>
        </View>
      </View>
      {/* 2 */}
      <View>
        <View>
          {shouldShow ? (
            <View>
              <Text>This is Thread by {props.name}</Text>
              <Text>{props.ThreadDetails}</Text>
            </View>
          ) : null}
        </View>
        <Text style={styles.text}>{props.title}</Text>
      </View>
      {/* 3 */}
      <View style={styles.lastRow}>
        <Text style={styles.prp}>Purpose</Text>
        <Image source={require('../assets/smile.png')} style={styles.icons} />
      </View>
    </View>
  );
}

export default CardDetails;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#F0EFEF',
    borderRadius: 15,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  creatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  createdDate: {
    marginLeft: 5,
  },
  nameDate: {
    fontWeight: 'bold',
    fontSize: 10,
    color: 'black',
  },
  icons: {
    height: 15,
    width: 15,
  },
  lastRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    padding: 5,
    marginTop: 10,
    color: 'black',
  },
  prp: {
    marginRight: 10,
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
});
