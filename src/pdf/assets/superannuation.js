import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Title from "../common/Title";
import { thousandCommaSeparator } from "../common/ThousandCommaSeparator";

// Create styles
const styles = StyleSheet.create({
  superannuation: {
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
});

// Create Document Component
function Superannuation({ data }) {
  const { superannuation } = data;

  return (
    <View style={styles.superannuation}>
      <Title title="Superannuation" />
      <View style={styles.inner}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Value $ :</Text>
          <Text style={styles.answer}>
            {thousandCommaSeparator(superannuation)}
          </Text>
        </View>
      </View>
    </View>
  );
}
export default Superannuation;
