import { StyleSheet, Text, View } from "react-native";

function SubTitle({subTitle}) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
