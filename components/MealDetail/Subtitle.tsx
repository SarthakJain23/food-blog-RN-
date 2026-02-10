import { StyleSheet, Text, View } from "react-native";

interface SubtitleProps {
  text: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{text}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#e2b497",
    textAlign: "center",
  },
});
