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
function Vehicles({ data }) {
  const { vehicles } = data;
  const { vehicle1, vehicle2, vehicle3 } = vehicles;

  return (
    <View style={styles.propertiesOwned}>
      <Title
        title="Motor vehicles"
        prop1="Vehicle 1"
        prop2="Vehicle 2"
        prop3="Vehicle 3"
      />
      <View style={styles.inner}>
        {/* address */}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Make and model :
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
              <Text style={styles.answer}>{vehicle1?.makeModel1} </Text>
            </View>
            <View style={{ marginRight: "10px" }}>
              <Text style={styles.answer}>{vehicle2?.makeModel2} </Text>
            </View>
            <View style={{ marginRight: "50px" }}>
              <Text style={styles.answer}>{vehicle3?.makeModel3} </Text>
            </View>
          </View>
        </View>

        {/* year built */}
        <View style={styles.ownerWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Year built :
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
              <Text style={styles.answer}>{vehicle1?.yearBuild1} </Text>
            </View>
            <View style={{ marginRight: "0px" }}>
              <Text style={styles.answer}>{vehicle2?.yearBuild2}</Text>
            </View>
            <View style={{ marginRight: "80px" }}>
              <Text style={styles.answer}>{vehicle3?.yearBuild3}</Text>
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
                {thousandCommaSeparator(vehicle1?.vehicleBalance1)}{" "}
              </Text>
            </View>
            <View style={{ marginRight: "0px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(vehicle2?.vehicleBalance2)}
              </Text>
            </View>
            <View style={{ marginRight: "80px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(vehicle3?.vehicleBalance3)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
export default Vehicles;
