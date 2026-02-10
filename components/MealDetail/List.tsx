import { StyleSheet, Text, View } from "react-native";

interface ListProps {
  items: string[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return items.map((item, index) => (
    <View key={index} style={styles.listItem}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
  },
});
