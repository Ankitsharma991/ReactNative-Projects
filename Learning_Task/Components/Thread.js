import React from 'react';
import {View, ScrollView} from 'react-native';

// import thread from '../Datas/thread';
const Name = 'Tushar Agarwal';

function ThreadView() {
  return (
    <View>
      <Text>Thread By {Name}</Text>
      <ScrollView>
        <Text>
          undefined|| What after the many implementations? If I keep on
          implementing 5+5=10 in various scenarios, it would lead to various
          other learnings. Now, would that ultimately in some way have any
          effect on the original learning of 5+5=10? Does a concept or an idea
          get developed or evolved as we keep putting those ideas in various
          scenarios using various methods of implementation? (I hope the
          question makes sense, am just thinking out loud.) ||Or does the idea
          always remain the same? Would 5+5 be ALWAYS equal to 10? Who or what
          determines that?{' '}
        </Text>
      </ScrollView>
    </View>
  );
}
export default ThreadView;

const styles = StyleSheet.create({
    
});