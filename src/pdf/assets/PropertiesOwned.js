import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Title from "../common/Title";
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
  prop1: {},
  prop2: {},
  prop3: {},
});

// Create Document Component
function PropertiesOwned({ data }) {
  const { propertiesOwned } = data;
  const { property1, property2, property3 } = propertiesOwned;

  return (
    <View style={styles.propertiesOwned}>
      <Title
        title="Properies owned"
        prop1="Property 1"
        prop2="Property 2"
        prop3="Property 3"
      />
      <View style={styles.inner}>
        {/* address */}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Address :
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
            <View style={styles.prop1}>
              <Text style={styles.text}>{property1?.propertyOneAddress} </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <Text style={styles.text}>Suburb :</Text>
                <Text style={styles.answer}>
                  {property1?.propertyOneSuburb}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <Text style={styles.text}>State :</Text>
                <Text style={styles.answer}>{property1?.propertyOneState}</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <Text style={styles.text}>Code :</Text>
                <Text style={styles.answer}>
                  {property1?.propertyOnePostcode}
                </Text>
              </View>
            </View>
            <View style={styles.prop2}>
              <Text style={styles.text}>{property2?.propertyTwoAddress} </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <Text style={styles.text}>Suburb :</Text>
                <Text style={styles.answer}>
                  {property2?.propertyTwoSuburb}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <Text style={styles.text}>State :</Text>
                <Text style={styles.answer}>{property2?.propertyTwoState}</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <Text style={styles.text}>Code :</Text>
                <Text style={styles.answer}>
                  {property2?.propertyTwoPostcode}
                </Text>
              </View>
            </View>
            <View style={styles.prop3}>
              <Text style={styles.text}>{property3?.propertyThreeAddress}</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <Text style={styles.text}>Suburb :</Text>
                <Text style={styles.answer}>
                  {property3?.propertyThreeSuburb}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <Text style={styles.text}>State :</Text>
                <Text style={styles.answer}>
                  {property3?.propertyThreeState}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <Text style={styles.text}>Code :</Text>
                <Text style={styles.answer}>
                  {property3?.propertyThreePostcode}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* owner occupied */}
        <View style={styles.ownerWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Owner occupied :
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
                {property1?.ownerOccupiedPropertyOne}{" "}
              </Text>
            </View>
            <View style={{ marginRight: "0px" }}>
              <Text style={styles.answer}>
                {property2?.ownerOccupiedPropertyTwo}{" "}
              </Text>
            </View>
            <View style={{ marginRight: "80px" }}>
              <Text style={styles.answer}>
                {property3?.ownerOccupiedPropertyThree}{" "}
              </Text>
            </View>
          </View>
        </View>

        {/* value */}
        <View style={styles.ownerWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Value $ :
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
                {thousandCommaSeparator(property1?.valuePropertyOne)}{" "}
              </Text>
            </View>
            <View style={{ marginRight: "0px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(property2?.valuePropertyTwo)}{" "}
              </Text>
            </View>
            <View style={{ marginRight: "80px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(property3?.valuePropertyThree)}{" "}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
export default PropertiesOwned;
