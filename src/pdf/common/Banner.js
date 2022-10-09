import { Text, View, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  section: {
    marginTop: "20px",
    padding: 3,
    justifyContent: "space-between",
    backgroundColor: "#46166a",
    color: "white",
  },
});

export default function Banner({ title }) {
  return (
    <View style={styles.section}>
      <Text style={{ fontSize: "11px" }}>{title}</Text>
    </View>
  );
}
