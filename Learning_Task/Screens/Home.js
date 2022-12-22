import React from 'react';
import {ScrollView, View, Text, StyleSheet, Pressable} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import CardDetails from '../Components/Card';
import App2 from '../Components/ShouldShow';
import Details from '../Datas/thread';


const Category = ['category', 'value', 'Emotion', 'Wisdom'];
const Sub_Category = ['Sub-Category'];

let icons = {};

function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <ScrollView>
        <Pressable>
          <Text style={styles.feeds}>Feeds</Text>
        </Pressable>
        <View style={styles.categoryContainer}>
          <View style={{margin: 5}}>
            <SelectDropdown data={Category}/>
          </View>
          <View style={{margin: 5}}>
            <SelectDropdown data={Sub_Category} />
          </View>
        </View>
        <View>
          <CardDetails
            name="Shagun"
            date="26 days Ago"
            title={Details.Shagun.title1}
            thread={Details.Shagun.thread1}
          />
          <CardDetails
            name="Tushar"
            date="27 days Ago"
            title={Details.Tushar.title}
            thread={Details.Tushar.thread}
          />
          <CardDetails
            name="Divyansh"
            date="1 Months Ago"
            title={Details.Divyansh.title}
            thread={Details.Divyansh.thread}
          />
          <CardDetails
            name="Umang Sanjay kumar Gotawala"
            date="1 Months Ago"
            title={Details.Umang.title1}
            thread={Details.Umang.thread1}
          />
          <CardDetails
            name="Umang Sanjay kumar Gotawala"
            date="1 Months Ago"
            title={Details.Umang.title2}
            thread={Details.Umang.thread2}
          />
          <CardDetails
            name="Umang Sanjay kumar Gotawala"
            date="1 Months Ago"
            title={Details.Umang.title3}
            thread={Details.Umang.thread3}
          />
          <CardDetails
            name="Shagun"
            date="19 days Ago"
            title={Details.Shagun.title2}
            thread={Details.Shagun.thread2}
          />
          <CardDetails
            name="Shagun"
            date="19 days Ago"
            title={Details.Shagun.title3}
            thread={Details.Shagun.thread3}
          />
          <App2 />
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  feeds: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});
