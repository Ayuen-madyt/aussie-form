import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { thousandCommaSeparator } from "../common/ThousandCommaSeparator";

// Create styles
const styles = StyleSheet.create({
  broker: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    display: "flex",
    flexDirection: "row",
    fontSize: "10px",
    border: "0.5px solid grey",
    padding: "5px",
  },
  brokerLeft: {
    fontSize: "10px",
    flex: 0.8,
    color: "grey",
    lineHeight: "1.5px",
  },
  text: {
    fontSize: "10px",
    color: "grey",
  },
  answer: {
    fontSize: "11px",
    marginLeft: "5px",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: "20px",
    padding: "5px",
    borderTop: "0.5px solid grey",
    borderBottom: "0.5px solid grey",
  },
});

// Create Document Component
function Broker({ data }) {
  const { brokerInfo } = data;
  const { PurchasePrice, contact, dateCompleted, loanAmount, name } =
    brokerInfo;

  return (
    <View>
      <View style={styles.broker}>
        <View style={styles.brokerLeft}>
          <Text>
            To assist your discussions, please complete this form and return it
            to your broker before your appointment. If you are unsure of how to
            complete any section in this editable document your broker will be
            able to help you
          </Text>
        </View>
        <View style={styles.date}>
          <Text>Date completed :</Text>
          <Text style={{ color: "grey", marginLeft: "5px" }}>
            {new Date(dateCompleted).toLocaleDateString()}
          </Text>
        </View>
      </View>
      <View style={styles.details}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Broker Name :</Text>
          <Text style={styles.answer}>{name}</Text>
        </View>

        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Broker Contact Number :</Text>
          <Text style={styles.answer}>{contact}</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottom: "0.5px solid grey",
          padding: "5px",
        }}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Loan Amount $ :</Text>
          <Text style={styles.answer}>
            {thousandCommaSeparator(loanAmount)}
          </Text>
        </View>

        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Purchase Price or Property Value $ :</Text>
          <Text style={styles.answer}>
            {PurchasePrice ? thousandCommaSeparator(PurchasePrice) : "null"}
          </Text>
        </View>
      </View>
    </View>
  );
}
export default Broker;
