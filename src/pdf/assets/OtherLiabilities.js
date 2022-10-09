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
function OtherLiabilities({ data }) {
  const { otherLiabilities } = data;
  const {
    how1,
    how2,
    how3,
    otherLiabilitityAmountOwing1,
    otherLiabilitityAmountOwing2,
    otherLiabilitityAmountOwing3,
    otherLiabilityAccountNumber1,
    otherLiabilityAccountNumber2,
    otherLiabilityAccountNumber3,
    otherLiabilityFinancialInstitution1,
    otherLiabilityFinancialInstitution2,
    otherLiabilityFinancialInstitution3,
    otherLiabilityIsLoanBeingPaid1,
    otherLiabilityIsLoanBeingPaid2,
    otherLiabilityIsLoanBeingPaid3,
    otherLiabilityLoanType1,
    otherLiabilityLoanType2,
    otherLiabilityLoanType3,
    otherLiabilityOriginalLoanAmount1,
    otherLiabilityOriginalLoanAmount2,
    otherLiabilityOriginalLoanAmount3,
    otherMinimumMonthlyRepayment1,
    otherMinimumMonthlyRepayment2,
    otherMinimumMonthlyRepayment3,
  } = otherLiabilities;
  return (
    <View style={styles.propertiesOwned}>
      <Title
        title="Other Liabilities"
        prop1="Loan 1"
        prop2="Loan 2"
        prop3="Loan 3"
      />
      <View style={styles.inner}>
        {/* loan type */}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Loan type :
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
                {thousandCommaSeparator(otherLiabilityLoanType1)}
              </Text>
            </View>
            <View style={{ marginRight: "10px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(otherLiabilityLoanType2)}
              </Text>
            </View>
            <View style={{ marginRight: "50px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(otherLiabilityLoanType3)}
              </Text>
            </View>
          </View>
        </View>
        {/* name institution */}
        <View style={styles.addressWrapper}>
          <Text
            style={{
              flex: "0.2",
              fontSize: "10px",
              color: "grey",
              marginTop: "15px",
            }}
          >
            Name of financial institution :
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flex: "0.8",
              marginLeft: "8px",
              marginTop: "15px",
            }}
          >
            <View style={{ marginRight: "0px" }}>
              <Text style={styles.answer}>
                {otherLiabilityFinancialInstitution1}
              </Text>
            </View>
            <View style={{ marginRight: "10px" }}>
              <Text style={styles.answer}>
                {otherLiabilityFinancialInstitution2}
              </Text>
            </View>
            <View style={{ marginRight: "50px" }}>
              <Text style={styles.answer}>
                {otherLiabilityFinancialInstitution3}
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
                {thousandCommaSeparator(otherLiabilityOriginalLoanAmount1)}
              </Text>
            </View>
            <View style={{ marginRight: "0px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(otherLiabilityOriginalLoanAmount2)}
              </Text>
            </View>
            <View style={{ marginRight: "80px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(otherLiabilityOriginalLoanAmount3)}
              </Text>
            </View>
          </View>
        </View>

        {/* amount currently owing */}
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
                {thousandCommaSeparator(otherLiabilitityAmountOwing1)}
              </Text>
            </View>
            <View style={{ marginRight: "0px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(otherLiabilitityAmountOwing2)}
              </Text>
            </View>
            <View style={{ marginRight: "80px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(otherLiabilitityAmountOwing3)}
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
                {thousandCommaSeparator(otherMinimumMonthlyRepayment1)}
              </Text>
            </View>
            <View style={{ marginRight: "0px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(otherMinimumMonthlyRepayment2)}
              </Text>
            </View>
            <View style={{ marginRight: "80px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(otherMinimumMonthlyRepayment2)}
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
              <Text style={styles.answer}>{otherLiabilityAccountNumber1} </Text>
            </View>
            <View style={{ marginRight: "0px" }}>
              <Text style={styles.answer}>{otherLiabilityAccountNumber2} </Text>
            </View>
            <View style={{ marginRight: "80px" }}>
              <Text style={styles.answer}>{otherLiabilityAccountNumber3} </Text>
            </View>
          </View>
        </View>

        {/* is loan being paid */}
        <View style={styles.ownerWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Is loan being paid :
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
                {otherLiabilityIsLoanBeingPaid1}{" "}
              </Text>
              <View
                style={{
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text style={styles.text}>How : </Text>
                <Text style={styles.answer}>{how1} </Text>
              </View>
            </View>
            <View style={{ marginRight: "0px" }}>
              <Text style={styles.answer}>
                {otherLiabilityIsLoanBeingPaid2}{" "}
              </Text>
              <View
                style={{
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text style={styles.text}>How : </Text>
                <Text style={styles.answer}>{how2} </Text>
              </View>
            </View>
            <View style={{ marginRight: "30px" }}>
              <Text style={styles.answer}>
                {otherLiabilityIsLoanBeingPaid3}{" "}
              </Text>
              <View
                style={{
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text style={styles.text}>How : </Text>
                <Text style={styles.answer}>{how3} </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
export default OtherLiabilities;
