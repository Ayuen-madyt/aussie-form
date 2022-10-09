import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Banner from "../common/Banner";
import Title from "../common/Title";
import { thousandCommaSeparator } from "../common/ThousandCommaSeparator";

// Create styles
const styles = StyleSheet.create({
  employment: {
    marginLeft: "30px",
    marginRight: "30px",
  },
  inner: {
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
  contactDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "15px",
  },
  howLong: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "15px",
  },
  timeWithCurrent: {
    display: "flex",
    flexDirection: "row",
    marginTop: "15px",
  },
});

// Create Document Component
function Employment({ data }) {
  const { employmentInfo } = data;

  const {
    ABN,
    ACN,
    companyDetails,
    currentEmployerData,
    currentOccupation,
    directorOfCompany,
    employerContact,
    employerContactName,
    employersName,
    employmentType,
    grossAnnualOvertime,
    grossWeeklyRentalIncome,
    numberOfYearsRegistered,
    otherAnnualIncome,
    previousEmployerName,
    previousEmployerPhoneNumber,
    previousEmploymentType,
    previousEndDate,
    previousOccupation,
    previousStartDate,
    salary,
    timeWithCurrentEmployer,
  } = employmentInfo;

  return (
    <View style={styles.employment}>
      <Banner title="Employment" />

      <View style={styles.inner}>
        {/* current employment */}
        <View
          style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}
        >
          <Text style={styles.text}>Current employment type :</Text>
          <Text style={styles.answer}>{employmentType}</Text>
        </View>

        {/* current employers name */}
        <View
          style={{ display: "flex", flexDirection: "row", marginTop: "15px" }}
        >
          <Text style={styles.text}>Current employer's name :</Text>
          <Text style={styles.answer}>{employersName}</Text>
        </View>

        {/* contact details */}
        <View style={styles.contactDetails}>
          <Text style={styles.text}>Employer's contact details :</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.text}>Name :</Text>
            <Text style={styles.answer}>{employerContactName}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.text}>Phone number :</Text>
            <Text style={styles.answer}>{employerContact}</Text>
          </View>
        </View>

        {/* employer's address */}
        <View style={styles.howLong}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.text}>Current employer Address :</Text>
            <Text style={styles.answer}>{currentEmployerData?.address}</Text>
          </View>

          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.text}>Suburb :</Text>
            <Text style={styles.answer}>{currentEmployerData?.suburb}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.text}>State :</Text>
            <Text style={styles.answer}>{currentEmployerData?.state}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.text}>Postcode :</Text>
            <Text style={styles.answer}>{currentEmployerData?.postcode}</Text>
          </View>
        </View>

        {/* occupation */}
        <View
          style={{ display: "flex", flexDirection: "row", marginTop: "15px" }}
        >
          <Text style={styles.text}>Current occupation/Job title :</Text>
          <Text style={styles.answer}>{currentOccupation}</Text>
        </View>

        {/* time with current employer */}
        <View style={styles.timeWithCurrent}>
          <Text style={styles.text}>
            Time with current employer (start date) :
          </Text>
          <View style={{ marginLeft: "5px" }}>
            <Text style={styles.answer}>
              {new Date(timeWithCurrentEmployer).toLocaleDateString()}
            </Text>
          </View>
        </View>

        {/* income gross annual salary */}
        <View
          style={{ display: "flex", flexDirection: "row", marginTop: "15px" }}
        >
          <Text style={styles.text}>Gross-income annual salary $ :</Text>
          <Text style={styles.answer}>{thousandCommaSeparator(salary)}</Text>
        </View>

        {/* gross annual overtime */}
        <View
          style={{ display: "flex", flexDirection: "row", marginTop: "15px" }}
        >
          <Text style={styles.text}>Gross annual overtime/penalties $ :</Text>
          <Text style={styles.answer}>
            {thousandCommaSeparator(grossAnnualOvertime)}
          </Text>
        </View>

        {/* other annual income */}
        <View
          style={{ display: "flex", flexDirection: "row", marginTop: "15px" }}
        >
          <Text style={styles.text}>
            Other annual income - pensions, FTB $ :
          </Text>
          <Text style={styles.answer}>
            {thousandCommaSeparator(otherAnnualIncome)}
          </Text>
        </View>

        {/* income gross weekly */}
        <View
          style={{ display: "flex", flexDirection: "row", marginTop: "15px" }}
        >
          <Text style={styles.text}>Income-gross weekly rental-income $ :</Text>
          <Text style={styles.answer}>
            {thousandCommaSeparator(grossWeeklyRentalIncome)}
          </Text>
        </View>

        {/* previous employer full name */}
        <View
          style={{ display: "flex", flexDirection: "row", marginTop: "15px" }}
        >
          <Text style={styles.text}>Previous employer's full name :</Text>
          <Text style={styles.answer}>{previousEmployerName}</Text>
        </View>

        {/* time with previous employer */}
        <View style={styles.contactDetails}>
          <Text style={styles.text}>Time with previous employer :</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.text}>Start date :</Text>
            <Text style={styles.answer}>
              {new Date(previousStartDate).toLocaleDateString()}
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.text}>End date :</Text>
            <Text style={styles.answer}>
              {new Date(previousEndDate).toLocaleDateString()}
            </Text>
          </View>
        </View>

        {/* previous employer phone number */}
        <View
          style={{ display: "flex", flexDirection: "row", marginTop: "15px" }}
        >
          <Text style={styles.text}>Previous employer's phone number :</Text>
          <Text style={styles.answer}>{previousEmployerPhoneNumber}</Text>
        </View>

        {/* previous employment type */}
        <View
          style={{ display: "flex", flexDirection: "row", marginTop: "15px" }}
        >
          <Text style={styles.text}>Previous employment type :</Text>
          <Text style={styles.answer}>{previousEmploymentType}</Text>
        </View>

        {/* previous job title */}
        <View
          style={{ display: "flex", flexDirection: "row", marginTop: "15px" }}
        >
          <Text style={styles.text}>Previous occupation/Job title :</Text>
          <Text style={styles.answer}>{previousOccupation}</Text>
        </View>

        {/* ABN */}
        <View
          style={{ display: "flex", flexDirection: "row", marginTop: "15px" }}
        >
          <Text style={styles.text}>ABN :</Text>
          <Text style={styles.answer}>{ABN}</Text>
        </View>
        {/* ACN */}
        <View
          style={{ display: "flex", flexDirection: "row", marginTop: "15px" }}
        >
          <Text style={styles.text}>ACN :</Text>
          <Text style={styles.answer}>{ACN}</Text>
        </View>

        {/* director of a company */}
        <View
          style={{ display: "flex", flexDirection: "row", marginTop: "15px" }}
        >
          <Text style={styles.text}>Director of a company :</Text>
          <Text style={styles.answer}>{directorOfCompany}</Text>
        </View>

        {/* if director */}
        <View style={{ marginTop: "15px" }}>
          <Title title="Company/Trust" />
          <View
            style={{ display: "flex", flexDirection: "row", marginTop: "15px" }}
          >
            <Text style={styles.text}>Company/Trust name :</Text>
            <Text style={styles.answer}>
              {directorOfCompany?.toLowerCase() == "yes"
                ? companyDetails.companyTrustName
                : "N/A"}
            </Text>
          </View>
          <View
            style={{ display: "flex", flexDirection: "row", marginTop: "15px" }}
          >
            <Text style={styles.text}>Director's name :</Text>
            <Text style={styles.answer}>
              {directorOfCompany?.toLowerCase() == "yes"
                ? companyDetails.directorsName
                : "N/A"}
            </Text>
          </View>
          {/* trading address */}
          <View style={styles.howLong}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={styles.text}>Trading Address :</Text>
              <Text style={styles.answer}>
                {directorOfCompany?.toLowerCase() == "yes"
                  ? companyDetails.tradingAddress
                  : "N/A"}
              </Text>
            </View>

            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={styles.text}>Suburb :</Text>
              <Text style={styles.answer}>
                {directorOfCompany?.toLowerCase() == "yes"
                  ? companyDetails.tradingSuburb
                  : "N/A"}
              </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={styles.text}>State :</Text>
              <Text style={styles.answer}>
                {directorOfCompany?.toLowerCase() == "yes"
                  ? companyDetails.tradingState
                  : "N/A"}
              </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={styles.text}>Postcode :</Text>
              <Text style={styles.answer}>
                {directorOfCompany?.toLowerCase() == "yes"
                  ? companyDetails.tradingPostcode
                  : "N/A"}
              </Text>
            </View>
          </View>
          {/* no of years registered */}
          <View
            style={{ display: "flex", flexDirection: "row", marginTop: "15px" }}
          >
            <Text style={styles.text}>Number of years registered :</Text>
            <Text style={styles.answer}>{numberOfYearsRegistered}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
export default Employment;
