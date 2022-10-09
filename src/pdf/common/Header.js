import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import logo from "../../assets/images/logo.jpg";

// Create styles
const styles = StyleSheet.create({
  section: {
    margin: 0,
    padding: 5,
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#46166a",
  },

  image: {
    width: "70px",
    height: "20px",
  },
});

export default function Header() {
  return (
    <View style={styles.section}>
      <Image style={styles.image} src={logo} />
      <Text style={{ fontSize: "15px" }}>Customer Information Form</Text>
    </View>
  );
}
