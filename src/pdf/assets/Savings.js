import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Title from "../common/Title";
import { thousandCommaSeparator } from "../common/ThousandCommaSeparator";

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
  addressWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  propWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ownerWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "15px",
  },
});

// Create Document Component
function Savings({ data }) {
  const { savingsAccountInfo } = data;
  const { institution1, institution2, institution3 } = savingsAccountInfo;

  return (
    <View style={styles.propertiesOwned}>
      <Title
        title="Savings account"
        prop1="Account 1"
        prop2="Account 2"
        prop3="Account 3"
      />
      <View style={styles.inner}>
        {/* address */}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Financial institution :
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flex: "0.8",
              marginLeft: "8px",
            }}
          >
            <View style={{ marginRight: "5px" }}>
              <Text style={styles.answer}>
                {institution1?.institutionAccount1}{" "}
              </Text>
            </View>
            <View style={{ marginRight: "10px" }}>
              <Text style={styles.answer}>
                {institution2?.institutionAccount2}{" "}
              </Text>
            </View>
            <View style={{ marginRight: "50px" }}>
              <Text style={styles.answer}>
                {institution3?.institutionAccount3}{" "}
              </Text>
            </View>
          </View>
        </View>

        {/* value */}
        <View style={styles.ownerWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Balance $ :
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flex: "0.9",
              marginLeft: "8px",
            }}
          >
            <View style={{ marginLeft: "20px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(institution1?.balanceAccount1)}
              </Text>
            </View>
            <View style={{ marginRight: "0px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(institution2?.balanceAccount2)}{" "}
              </Text>
            </View>
            <View style={{ marginRight: "80px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(institution3?.balanceAccount3)}{" "}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
export default Savings;
