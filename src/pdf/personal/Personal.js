import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Title from "../common/Title";

// Create styles
const styles = StyleSheet.create({
  personal: {
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
  inner: {
    marginTop: "5px",
    padding: "5px",
  },
  contacts: {
    display: "flex",
    flexDirection: "row",
    padding: "5px",
  },
  contactDetails: {
    display: "flex",
    flex: 1,
    marginLeft: "10px",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

// Create Document Component
function Personal({ data }) {
  const { personalInfo } = data;
  const {
    title,
    firstMiddleName,
    surname,
    email,
    homeContact,
    mobileContact,
    workContact,
    dateOfBirth,
  } = personalInfo;

  return (
    <View style={styles.personal}>
      <Title title="Personal" />
      <View style={styles.inner}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>First and Middle Names :</Text>
          <Text style={styles.answer}>{firstMiddleName}</Text>
        </View>
        <View
          style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}
        >
          <Text style={styles.text}>Title :</Text>
          <Text style={styles.answer}>{title}</Text>
        </View>
        <View
          style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}
        >
          <Text style={styles.text}>Surname :</Text>
          <Text style={styles.answer}>{surname}</Text>
        </View>
        <View
          style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}
        >
          <Text style={styles.text}>Date of Birth :</Text>
          <Text style={styles.answer}>
            {new Date(dateOfBirth).toLocaleDateString()}
          </Text>
        </View>
      </View>

      {/* contacts */}
      <View>
        <View style={styles.contacts}>
          <Text style={styles.text}>Contact Phone Numbers : </Text>
          <View style={styles.contactDetails}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={styles.text}>Home :</Text>
              <Text style={styles.answer}>{homeContact}</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={styles.text}>Work :</Text>
              <Text style={styles.answer}>{workContact}</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={styles.text}>Mobile :</Text>
              <Text style={styles.answer}>{mobileContact}</Text>
            </View>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", padding: "5px" }}>
          <Text style={styles.text}>Email :</Text>
          <Text style={styles.answer}>{email}</Text>
        </View>
      </View>
    </View>
  );
}
export default Personal;
