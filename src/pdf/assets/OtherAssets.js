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
function OtherAssets({ data }) {
  const { otherAssets } = data;
  const {
    assetType1,
    assetType2,
    assetType3,
    valueAssetType1,
    valueAssetType2,
    valueAssetType3,
  } = otherAssets;

  return (
    <View style={styles.propertiesOwned}>
      <Title
        title="Other Assets"
        prop1="Asset 1"
        prop2="Asset 2"
        prop3="Asset 3"
      />
      <View style={styles.inner}>
        {/* asset type */}
        <View style={styles.addressWrapper}>
          <Text style={{ flex: "0.2", fontSize: "10px", color: "grey" }}>
            Asset Type :
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
              <Text style={styles.answer}>{assetType1} </Text>
            </View>
            <View style={{ marginRight: "10px" }}>
              <Text style={styles.answer}>{assetType2} </Text>
            </View>
            <View style={{ marginRight: "50px" }}>
              <Text style={styles.answer}>{assetType3} </Text>
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
                {thousandCommaSeparator(valueAssetType1)}{" "}
              </Text>
            </View>
            <View style={{ marginRight: "0px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(valueAssetType2)}
              </Text>
            </View>
            <View style={{ marginRight: "80px" }}>
              <Text style={styles.answer}>
                {thousandCommaSeparator(valueAssetType3)}{" "}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
export default OtherAssets;
