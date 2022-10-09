import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Title from "./Title";
import { thousandCommaSeparator } from "../common/ThousandCommaSeparator";

// Create styles
const styles = StyleSheet.create({
  propertiesOwned: {},
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
    marginTop: "15px",
  },
  propWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

// Create Document Component
function MonthlyLivingExpensesBasic({ data }) {
  const { expensesBasic } = data;
  const {
    childCosts,
    childCostsNotes,
    education,
    educationNotes,
    entertainment,
    entertainmentNotes,
    groceries,
    groceriesNotes,
    healthcare,
    healthcareNotes,
    insurance,
    insuranceNotes,
    other,
    otherNotes,
    totalBasic,
    transport,
    transportNotes,
    utilities,
    utilityNotes,
  } = expensesBasic;

  return (
    <View style={styles.propertiesOwned}>
      <Title
        title="Monthly Living Expenses - Basic"
        prop1="$ Per Month"
        prop2="Notes"
      />
      <View style={styles.inner}>
        {/* utilities */}
        <View style={styles.propWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Utilities :
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
            <View style={{ marginLeft: "50px" }}>
              <Text style={styles.answer}>{`$ ${thousandCommaSeparator(
                utilities
              )}`}</Text>
            </View>
            <View style={{ marginLeft: "10px" }}>
              <Text style={styles.answer}>{utilityNotes}</Text>
            </View>
          </View>
        </View>

        {/* education */}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Education :
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
            <View style={{ marginLeft: "50px" }}>
              <Text style={styles.answer}>
                {" "}
                {`$ ${thousandCommaSeparator(education)}`}
              </Text>
            </View>
            <View style={{ marginLeft: "10px" }}>
              <Text style={styles.answer}>{educationNotes}</Text>
            </View>
          </View>
        </View>

        {/* child care costs */}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Child Care Costs :
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
            <View style={{ marginLeft: "50px" }}>
              <Text style={styles.answer}>{`$ ${thousandCommaSeparator(
                childCosts
              )}`}</Text>
            </View>
            <View style={{ marginLeft: "10px" }}>
              <Text style={styles.answer}>{childCostsNotes}</Text>
            </View>
          </View>
        </View>

        {/* groceries */}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Groceries :
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
            <View style={{ marginLeft: "50px" }}>
              <Text style={styles.answer}>{`$ ${thousandCommaSeparator(
                groceries
              )}`}</Text>
            </View>
            <View style={{ marginLeft: "10px" }}>
              <Text style={styles.answer}>{groceriesNotes}</Text>
            </View>
          </View>
        </View>

        {/* health care */}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Health Care :
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
            <View style={{ marginLeft: "50px" }}>
              <Text style={styles.answer}>{`$ ${thousandCommaSeparator(
                healthcare
              )}`}</Text>
            </View>
            <View style={{ marginLeft: "10px" }}>
              <Text style={styles.answer}>{healthcareNotes}</Text>
            </View>
          </View>
        </View>

        {/* transport */}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            transport :
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
            <View style={{ marginLeft: "50px" }}>
              <Text style={styles.answer}>{`$ ${thousandCommaSeparator(
                transport
              )}`}</Text>
            </View>
            <View style={{ marginLeft: "10px" }}>
              <Text style={styles.answer}>{transportNotes}</Text>
            </View>
          </View>
        </View>

        {/* insurance */}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Insurance :
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
            <View style={{ marginLeft: "50px" }}>
              <Text style={styles.answer}>{`$ ${thousandCommaSeparator(
                insurance
              )}`}</Text>
            </View>
            <View style={{ marginLeft: "10px" }}>
              <Text style={styles.answer}>{insuranceNotes}</Text>
            </View>
          </View>
        </View>

        {/* entertainment */}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Entertainment :
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
            <View style={{ marginLeft: "50px" }}>
              <Text style={styles.answer}>
                {`$ ${thousandCommaSeparator(entertainment)}`}{" "}
              </Text>
            </View>
            <View style={{ marginLeft: "10px" }}>
              <Text style={styles.answer}>{entertainmentNotes}</Text>
            </View>
          </View>
        </View>

        {/* other */}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Other :
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
            <View style={{ marginLeft: "50px" }}>
              <Text style={styles.answer}>{`$ ${thousandCommaSeparator(
                other
              )}`}</Text>
            </View>
            <View style={{ marginLeft: "10px" }}>
              <Text style={styles.answer}>{otherNotes}</Text>
            </View>
          </View>
        </View>

        {/* hr rule */}
        <View
          style={{ borderTop: "0.5px solid grey", marginTop: "20px" }}
        ></View>

        {/* total */}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "#46166a" }}>
            Total - Basic :
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
            <View style={{ marginLeft: "50px" }}>
              <Text style={{ color: "#46166a", fontSize: "12px" }}>
                {`$ ${thousandCommaSeparator(totalBasic)}`}
              </Text>
            </View>
            <View style={{ marginLeft: "10px" }}>
              <Text style={styles.answer}></Text>
            </View>
          </View>
        </View>
        {/* hr rule */}
        <View
          style={{ borderTop: "0.5px solid grey", marginTop: "20px" }}
        ></View>
      </View>
    </View>
  );
}
export default MonthlyLivingExpensesBasic;
