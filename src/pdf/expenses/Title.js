import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { Space } from "@mantine/core";

// Create styles
const styles = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "row",
    color: "white",
    fontSize: "11px",
    borderBottom: "0.5px solid grey",
  },
  title: {
    backgroundColor: "grey",
    color: "white",
    fontSize: "11px",
    padding: "2px",
    flex: "0.3",
    // width: "100px",
  },
  propTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "5px",
    paddingBottom: "2px",
    marginLeft: "10px",
    color: "#46166a",
    flex: "0.7",
  },
});

export default function Title({ title, prop1, prop2 }) {
  return (
    <View style={styles.section}>
      <View style={styles.title}>
        <Text style={{ fontSize: "11px" }}>{title}</Text>
      </View>
      <View style={styles.propTitle}>
        <Text>{prop1}</Text>
        <Text style={{ marginRight: "6px" }}>{prop2}</Text>
      </View>
    </View>
  );
}
