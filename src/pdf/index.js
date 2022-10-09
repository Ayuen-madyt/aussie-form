import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import Header from "./common/Header";
import PersonalInfo from "./personal";
import Employment from "./employment/Employment";
import Footer from "./common/Footer";
import Assets from "./assets";
import AssetsContinued from "./assets/AssetsContinued";
import Expenses from "./expenses";
import ExpensesContinued from "./expenses/ExpensesContinued";
import { useSelector } from "react-redux";

// Create styles
const styles = StyleSheet.create({
  page: {
    // backgroundColor: "#d11fb6",
    // color: "white",
  },
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
  viewer: {
    width: "1000px", //the pdf viewer will take up all of the width and height
    height: "1000px",
  },
});

// Create Document Component
function MainDocument() {
  // personal info
  const personal = useSelector((state) => state.personal);
  const broker = useSelector((state) => state.broker);
  const residential = useSelector((state) => state.residential);

  // employement
  const employment = useSelector((state) => state.employment);

  // assets
  const propertiesOwned = useSelector((state) => state.propertiesOwned);
  const savingsAccount = useSelector((state) => state.savingsAccount);
  const vehicles = useSelector((state) => state.motorVehicles);
  const superannuation = useSelector((state) => state.superannuation);
  const householdItems = useSelector((state) => state.items);
  const otherAssets = useSelector((state) => state.otherAssets);
  const liabilities = useSelector((state) => state.liabilities);
  const otherLiabilities = useSelector((state) => state.otherLiabilities);
  const cards = useSelector((state) => state.cards);

  // expenses
  const expensesBasic = useSelector((state) => state.expensesBasic);
  const expensesRecurringFixed = useSelector(
    (state) => state.expensesRecurringFixed
  );
  const commentary = useSelector((state) => state.commentary);

  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <Header />
          <PersonalInfo
            personal={personal}
            broker={broker}
            residentialAddress={residential}
          />
          <Footer fontSize={35} />
        </Page>

        <Page size="A4">
          <Header />
          <Employment data={employment} />
          <Footer fontSize={120} />
        </Page>

        <Page size="A4">
          <Header />
          <Assets
            propertiesOwned={propertiesOwned}
            savingsAccount={savingsAccount}
            vehicles={vehicles}
            superannuation={superannuation}
            householdItems={householdItems}
            liabilities={liabilities}
          />
          <Footer fontSize={40} />
        </Page>

        {/* assets continued */}
        <Page size="A4">
          <Header />
          <AssetsContinued
            otherliabilities={otherLiabilities}
            otherAssets={otherAssets}
            cards={cards}
          />
          <Footer fontSize={210} />
        </Page>

        {/* expense */}
        <Page size="A4">
          <Header />
          <Expenses expensesBasic={expensesBasic} />
          <Footer fontSize={410} />
        </Page>

        {/* expenses continued */}
        <Page size="A4">
          <Header />
          <ExpensesContinued commentary={commentary} expensesFixedRecurring={expensesRecurringFixed} />
          <Footer fontSize={240} />
        </Page>
      </Document>
    </PDFViewer>
  );
}
export default MainDocument;
