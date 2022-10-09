import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Broker from "./Broker";
import Banner from "../common/Banner";
import Personal from "./Personal";
import ResidentialAddress from "./ResidentialAddress";

// Create styles
const styles = StyleSheet.create({
  personal: {
    margin: 30,
  },
});

// Create Document Component
function PersonalInfo({ personal, broker, residentialAddress }) {
  return (
    <View style={styles.personal}>
      <Broker data={broker} />
      <Banner title="Customer Info" />
      <Personal data={personal} />
      <ResidentialAddress data={residentialAddress} />
    </View>
  );
}
export default PersonalInfo;
