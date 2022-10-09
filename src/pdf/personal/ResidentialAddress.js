import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Title from "../common/Title";

// Create styles
const styles = StyleSheet.create({
  address: {
    marginTop: "5px",
    padding: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    //borderBottom: "0.5px solid grey",
  },
  text: {
    fontSize: "10px",
    color: "grey",
  },
  answer: {
    fontSize: "10px",
    marginLeft: "5px",
  },
  howLong: {
    padding: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5px",
  },
});

// Create Document Component
function ResidentialAddress({ data }) {
  const { residentialAddress } = data;

  const {
    currentAddressData,
    currentStatus,
    dateMovedIn,
    dateOfBirthOfDependentChildren,
    licenseData,
    maritalStatus,
    mothersName,
    noOfDependentChildren,
    previousAddressData,
    relativeInfo,
    residencyStatus,
  } = residentialAddress;
  return (
    <View style={{ marginTop: "20px" }}>
      <Title title="Residential Address" />
      <View style={styles.address}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Current Address :</Text>
          <Text style={styles.answer}>{currentAddressData?.address}</Text>
        </View>

        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Suburb :</Text>
          <Text style={styles.answer}>{currentAddressData?.suburb}</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>State :</Text>
          <Text style={styles.answer}>{currentAddressData?.state}</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Postcode :</Text>
          <Text style={styles.answer}>{currentAddressData?.postcode}</Text>
        </View>
      </View>

      {/* how long in current address */}
      <View style={styles.howLong}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>
            How long have you been in this current address :
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Date moved in :</Text>
          <Text style={styles.answer}>
            {new Date(dateMovedIn).toLocaleDateString()}
          </Text>
        </View>
      </View>

      {/* current status */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "5px",
          padding: "5px",
        }}
      >
        <Text style={styles.text}>Current Status :</Text>
        <Text style={styles.answer}>{currentStatus}</Text>
      </View>

      {/* previous address */}
      <View style={styles.address}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Previous Address :</Text>
          <Text style={styles.answer}>
            {previousAddressData?.previousAddress}
          </Text>
        </View>

        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Suburb :</Text>
          <Text style={styles.answer}>
            {previousAddressData?.previousSuburb}
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>State :</Text>
          <Text style={styles.answer}>
            {previousAddressData?.previousState}
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Postcode :</Text>
          <Text style={styles.answer}>
            {previousAddressData?.previousPostcode}
          </Text>
        </View>
      </View>

      {/* how long at previous address */}
      <View style={styles.howLong}>
        <Text style={styles.text}>How long were you at this address :</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Date moved in :</Text>
          <Text style={styles.answer}>
            {new Date(
              previousAddressData?.previousDateMovedIn
            ).toLocaleDateString()}
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Date moved out :</Text>
          <Text style={styles.answer}>
            {new Date(
              previousAddressData?.previousDateMovedOut
            ).toLocaleDateString()}
          </Text>
        </View>
      </View>

      {/* residency status */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "5px",
          padding: "5px",
        }}
      >
        <Text style={styles.text}>Residency status :</Text>
        <Text style={styles.answer}>{residencyStatus}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "5px",
          padding: "5px",
        }}
      >
        <Text style={styles.text}>Marital status :</Text>
        <Text style={styles.answer}>{maritalStatus}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "5px",
          padding: "5px",
        }}
      >
        <Text style={styles.text}>Mother's maiden name :</Text>
        <Text style={styles.answer}>{mothersName}</Text>
      </View>

      {/* drivers license */}
      <View style={styles.howLong}>
        <Text style={styles.text}>License/ID :</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>DL/ID :</Text>
          <Text style={styles.answer}>{licenseData?.drivingLicenseOrId}</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Issuer :</Text>
          <Text style={styles.answer}>{licenseData?.issuer}</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Expiry Date :</Text>
          <Text style={styles.answer}>
            {new Date(licenseData?.expiryDate).toLocaleDateString()}
          </Text>
        </View>
      </View>

      {/* no of children */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "5px",
          padding: "5px",
        }}
      >
        <Text style={styles.text}>No of dependent children :</Text>
        <Text style={styles.answer}>{noOfDependentChildren}</Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "5px",
          padding: "5px",
        }}
      >
        <Text style={styles.text}>Age/D.O.B of dependent children :</Text>
        <Text style={styles.answer}>
          {new Date(dateOfBirthOfDependentChildren).toLocaleDateString()}
        </Text>
      </View>

      {/* nearest living relative */}
      <View style={styles.howLong}>
        <Text style={styles.text}>Nearest living relative :</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Name :</Text>
          <Text style={styles.answer}>{relativeInfo?.relativeName}</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Relationship :</Text>
          <Text style={styles.answer}>{relativeInfo?.relativeRelation}</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Contact number :</Text>
          <Text style={styles.answer}>{relativeInfo?.relativeContact}</Text>
        </View>
      </View>

      {/* relative address */}
      <View style={styles.howLong}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Relative Address :</Text>
          <Text style={styles.answer}>{relativeInfo?.relativeAddress}</Text>
        </View>

        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Suburb :</Text>
          <Text style={styles.answer}>{relativeInfo?.relativeSuburb}</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>State :</Text>
          <Text style={styles.answer}>{relativeInfo?.relativeState}</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Postcode :</Text>
          <Text style={styles.answer}>{relativeInfo?.relativePostcode}</Text>
        </View>
      </View>
    </View>
  );
}
export default ResidentialAddress;
