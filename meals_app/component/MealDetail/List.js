import { StyleSheet, Text, View } from "react-native";

function List({ data }) {
  return data.ingredients.map((dataPoint, index) => (
    <View style={styles.listItem}>
      <Text key={index} style={styles.itemText}>
        {dataPoint}
      </Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginVertical: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
