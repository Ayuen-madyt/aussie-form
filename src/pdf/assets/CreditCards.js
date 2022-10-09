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
function CreditCards({ data }) {
  const { creditCards } = data;
  const {
    cardFinancialInstitution1,
    cardFinancialInstitution2,
    cardFinancialInstitution3,
    creditAmountOwing1,
    creditAmountOwing2,
    creditAmountOwing3,
    creditLimit1,
    creditLimit2,
    creditLimit3,
  } = creditCards;

  return (
    <View style={styles.propertiesOwned}>
      <Title
        title="Credit Cards/Store Cards"
        prop1="Card 1"
        prop2="Card 2"
        prop3="Card 3"
      />
      <View style={styles.inner}>
        {/* asset type */}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Name of financial institution :
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
            <View style={{ marginRight: "0px" }}>
              <Text style={styles.answer}>{cardFinancialInstitution1} </Text>
            </View>
            <View style={{ marginRight: "10px" }}>
              <Text style={styles.answer}>{cardFinancialInstitution2} </Text>
            </View>
            <View style={{ marginRight: "50px" }}>
              <Text style={styles.answer}>{cardFinancialInstitution3} </Text>
            </View>
          </View>
        </View>

        {/* credit limit */}
        <View style={styles.ownerWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Credit limit $ :
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
                {thousandCommaSeparator(creditLimit1)}{" "}
              </Text>
            </View>
            <View style={{ marginRight: "0px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(creditLimit2)}{" "}
              </Text>
            </View>
            <View style={{ marginRight: "80px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(creditLimit3)}
              </Text>
            </View>
          </View>
        </View>

        {/* amount currently owwing */}
        <View style={styles.ownerWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Amount currently owing $ :
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
                {thousandCommaSeparator(creditAmountOwing1)}{" "}
              </Text>
            </View>
            <View style={{ marginRight: "0px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(creditAmountOwing2)}
              </Text>
            </View>
            <View style={{ marginRight: "80px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(creditAmountOwing3)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
export default CreditCards;
