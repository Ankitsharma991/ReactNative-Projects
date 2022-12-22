import React, {useState} from 'react';
import {SafeAreaView, Pressable, View, Button, Text} from 'react-native';
import CardDetails from './Card';

const App2 = () => {
  const [shouldShow, setShouldShow] = useState(true);
  return (
    <SafeAreaView>
      <View>
        {shouldShow ? (
          <CardDetails
            name="Ankit"
            date="days Ago"
            title="Title"
            thread="No thread"
          />
        ) : null}
        <Pressable onPress={() => setShouldShow(!shouldShow)}>
          <Text>See Threads</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App2;
