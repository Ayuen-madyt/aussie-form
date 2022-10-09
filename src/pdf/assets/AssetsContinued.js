import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Banner from "../common/Banner";
import OtherLiabilities from "./OtherLiabilities";
import CreditCards from "./CreditCards";
import OtherAssets from "./OtherAssets";

// Create styles
const styles = StyleSheet.create({
  assets: {
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
});

// Create Document Component
function AssetsContinued({ otherliabilities, otherAssets, cards }) {
  return (
    <View style={styles.assets}>
      <Banner title="Assets (continued)" />
      <OtherLiabilities data={otherliabilities} />
      <OtherAssets data={otherAssets} />
      <CreditCards data={cards} />
    </View>
  );
}
export default AssetsContinued;
