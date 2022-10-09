import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Title from "./Title";
import { thousandCommaSeparator } from "../common/ThousandCommaSeparator";

// Create styles
const styles = StyleSheet.create({
  propertiesOwned: {
    marginTop: "0px",
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
    marginTop: "15px",
  },
  propWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

// Create Document Component
function MonthlyLivingExpensesRecurringFixed({ data }) {
  const { expensesRecurringFixed } = data;
  const {
    childMaintenance,
    childMaintenanceNotes,
    comprehensiveLifeInsurance,
    comprehensiveLifeInsuranceNotes,
    fixedLifeInsurance,
    fixedLifeInsuranceNotes,
    fixedOngoingRentalPayment,
    fixedOngoingRentalPaymentNotes,
    fixedOther,
    fixedOtherInsurance,
    fixedOtherInsuranceNotes,
    fixedOtherNotes,
    fixedPrivateHealthInsurance,
    fixedPrivateHealthInsuranceNotes,
    schoolTutionFees,
    schoolTutionFeesNotes,
    totalFixedOrRecurring,
    totalFixedOrRecurringPlusBasic,
  } = expensesRecurringFixed;
  return (
    <View style={styles.propertiesOwned}>
      <Title
        title="Monthly Living Expenses - Fixed or Recurring"
        prop1="$ Per Month"
        prop2="Notes"
      />
      <View style={styles.inner}>
        {/* Private Health Insurance */}
        <View style={styles.propWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Private Health Insurance :
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
                fixedPrivateHealthInsurance
              )}`}</Text>
            </View>
            <View style={{ marginLeft: "10px" }}>
              <Text style={styles.answer}>
                {fixedPrivateHealthInsuranceNotes}
              </Text>
            </View>
          </View>
        </View>

        {/* Life Insurance*/}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Life Insurance:
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
                fixedLifeInsurance
              )}`}</Text>
            </View>
            <View style={{ marginLeft: "10px" }}>
              <Text style={styles.answer}>{fixedLifeInsuranceNotes}</Text>
            </View>
          </View>
        </View>

        {/* Comprehensive Car Insurance */}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Comprehensive Life Insurance :
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
                comprehensiveLifeInsurance
              )}`}</Text>
            </View>
            <View style={{ marginLeft: "10px" }}>
              <Text style={styles.answer}>
                {comprehensiveLifeInsuranceNotes}
              </Text>
            </View>
          </View>
        </View>

        {/* Other Insurance */}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Other Insurance :
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
                fixedOtherInsurance
              )}`}</Text>
            </View>
            <View style={{ marginLeft: "10px" }}>
              <Text style={styles.answer}>{fixedOtherInsuranceNotes}</Text>
            </View>
          </View>
        </View>

        {/* Private School Fees, Ongoing Private Tuition etc */}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Private School Fees, Ongoing Private Tuition etc :
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
                schoolTutionFees
              )}`}</Text>
            </View>
            <View style={{ marginLeft: "10px" }}>
              <Text style={styles.answer}>{schoolTutionFeesNotes}</Text>
            </View>
          </View>
        </View>

        {/* Court-ordered Child Maintenance */}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Court-ordered Child Maintenance :
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
                {`$ ${thousandCommaSeparator(childMaintenance)}`}{" "}
              </Text>
            </View>
            <View style={{ marginLeft: "10px" }}>
              <Text style={styles.answer}>{childMaintenanceNotes}</Text>
            </View>
          </View>
        </View>

        {/* Ongoing Rental Payments */}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Ongoing Rental Payments :
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
                fixedOngoingRentalPayment
              )}`}</Text>
            </View>
            <View style={{ marginLeft: "10px" }}>
              <Text style={styles.answer}>
                {fixedOngoingRentalPaymentNotes}
              </Text>
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
                fixedOther
              )}`}</Text>
            </View>
            <View style={{ marginLeft: "10px" }}>
              <Text style={styles.answer}>{fixedOtherNotes}</Text>
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
            Total - Fixed or Recurring :
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
                {`$ ${thousandCommaSeparator(totalFixedOrRecurring)}`}
              </Text>
            </View>
            <View style={{ marginLeft: "10px" }}>
              <Text style={styles.answer}></Text>
            </View>
          </View>
        </View>

        {/* hr rule */}
        <View
          style={{ borderTop: "0.5px solid grey", marginTop: "10px" }}
        ></View>

        {/* total plus basic */}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "#46166a" }}>
            Total - Basic + Fixed or Recurring :
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
                {`$ ${thousandCommaSeparator(totalFixedOrRecurringPlusBasic)}`}
              </Text>
            </View>
            <View style={{ marginLeft: "10px" }}>
              <Text style={styles.answer}></Text>
            </View>
          </View>
        </View>
        {/* hr rule */}
        <View
          style={{ borderTop: "0.5px solid grey", marginTop: "15px" }}
        ></View>
      </View>
    </View>
  );
}
export default MonthlyLivingExpensesRecurringFixed;
