import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../../assets/images/aussie-logo.jpeg";

// Create styles
const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    paddingTop: 5,
    borderTop: "0.5px solid gray",
    "@media orientation: landscape": {
      marginTop: 10,
    },
  },
  image: {
    width: "30px",
    height: "30px",
  },
});

export default function Footer({ fontSize }) {
  return (
    <View
      style={{
        marginTop: `${fontSize}px`,
        marginRight: "30px",
        marginLeft: "30px",
      }}
    >
      <View style={styles.footer}>
        <Text style={{ fontSize: "11px" }}></Text>
        <Image style={styles.image} src={logo} />
      </View>
    </View>
  );
}
