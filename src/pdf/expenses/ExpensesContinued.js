import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Banner from "../common/Banner";
import MonthlyLivingExpensesRecurringFixed from "./MonthlyLivingExpensesRecurringFixed";
import Commentary from "./Commentary";

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
function ExpensesContinued({ commentary, expensesFixedRecurring }) {
  return (
    <View style={styles.assets}>
      <Banner title="Customer Declared Living Expenses (continued)" />
      <MonthlyLivingExpensesRecurringFixed data={expensesFixedRecurring} />
      <Commentary data={commentary} />
    </View>
  );
}
export default ExpensesContinued;
