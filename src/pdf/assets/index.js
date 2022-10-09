import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Banner from "../common/Banner";
import PropertiesOwned from "./PropertiesOwned";
import Savings from "./Savings";
import Vehicles from "./Vehicles";
import Superannuation from "./superannuation";
import HouseholdItems from "./HouseholdItems";
import Liabilities from "./Liabilitieis";

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
function Assets({
  propertiesOwned,
  savingsAccount,
  vehicles,
  superannuation,
  householdItems,
  liabilities,
}) {
  return (
    <View style={styles.assets}>
      <Banner title="Assets" />
      <PropertiesOwned data={propertiesOwned} />
      <Savings data={savingsAccount} />
      <Vehicles data={vehicles} />
      <Superannuation data={superannuation} />
      <HouseholdItems data={householdItems} />
      <Liabilities data={liabilities} />
    </View>
  );
}
export default Assets;
