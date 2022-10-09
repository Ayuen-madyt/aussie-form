import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Title from "./Title";

// Create styles
const styles = StyleSheet.create({
  propertiesOwned: {
    marginTop: "15px",
  },
  inner: {
    marginTop: "5px",
    padding: "5px",
  },
  text: {
    fontSize: "10px",
    color: "grey",
  },
  answer: {
    fontSize: "10px",
    marginLeft: "5px",
  },
  timeWithCurrent: {
    display: "flex",
    flexDirection: "row",
    marginTop: "15px",
  },
});

// Create Document Component
function Commentary({ data }) {
  console.log("comments: ", data);
  const { commentary } = data;
  return (
    <View style={styles.propertiesOwned}>
      <Title title="Additional commentary" />
      <View style={styles.inner}>
        <Text style={styles.text}>{commentary}</Text>
      </View>
    </View>
  );
}
export default Commentary;
