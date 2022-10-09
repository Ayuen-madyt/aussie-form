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
function Liabilities({ data }) {
  const { liabilities } = data;
  const {
    liabilityAccountNumber1,
    liabilityAccountNumber2,
    liabilityAccountNumber3,
    liabilityFinancialInstitution1,
    liabilityFinancialInstitution2,
    liabilityFinancialInstitution3,
    minimumMonthlyRepayment1,
    minimumMonthlyRepayment2,
    minimumMonthlyRepayment3,
    originalLoanAmount1,
    originalLoanAmount2,
    originalLoanAmount3,
    outstandingAmount1,
    outstandingAmount2,
    outstandingAmount3,
  } = liabilities;

  return (
    <View style={styles.propertiesOwned}>
      <Title
        title="Liabilities"
        prop1="Mortgage 1"
        prop2="Mortgage 2"
        prop3="Mortgage 3"
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
              <Text style={styles.answer}>
                {liabilityFinancialInstitution1}{" "}
              </Text>
            </View>
            <View style={{ marginRight: "10px" }}>
              <Text style={styles.answer}>
                {liabilityFinancialInstitution2}{" "}
              </Text>
            </View>
            <View style={{ marginRight: "50px" }}>
              <Text style={styles.answer}>
                {liabilityFinancialInstitution3}{" "}
              </Text>
            </View>
          </View>
        </View>

        {/* original loan amount */}
        <View style={styles.ownerWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Original loan amount $ :
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
                {thousandCommaSeparator(originalLoanAmount1)}{" "}
              </Text>
            </View>
            <View style={{ marginRight: "0px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(originalLoanAmount2)}{" "}
              </Text>
            </View>
            <View style={{ marginRight: "80px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(originalLoanAmount3)}{" "}
              </Text>
            </View>
          </View>
        </View>

        {/* outstanding balance */}
        <View style={styles.ownerWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Outstanding balance $ :
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
                {thousandCommaSeparator(outstandingAmount1)}{" "}
              </Text>
            </View>
            <View style={{ marginRight: "0px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(outstandingAmount2)}{" "}
              </Text>
            </View>
            <View style={{ marginRight: "80px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(outstandingAmount3)}{" "}
              </Text>
            </View>
          </View>
        </View>

        {/* minimum monthly repayment */}
        <View style={styles.ownerWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Minimum monthly repayment $ :
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
                {thousandCommaSeparator(minimumMonthlyRepayment1)}
              </Text>
            </View>
            <View style={{ marginRight: "0px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(minimumMonthlyRepayment2)}
              </Text>
            </View>
            <View style={{ marginRight: "80px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(minimumMonthlyRepayment3)}{" "}
              </Text>
            </View>
          </View>
        </View>

        {/* account number */}
        <View style={styles.ownerWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Account number :
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
              <Text style={styles.answer}>{liabilityAccountNumber1} </Text>
            </View>
            <View style={{ marginRight: "0px" }}>
              <Text style={styles.answer}>{liabilityAccountNumber2} </Text>
            </View>
            <View style={{ marginRight: "80px" }}>
              <Text style={styles.answer}>{liabilityAccountNumber3} </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
export default Liabilities;
