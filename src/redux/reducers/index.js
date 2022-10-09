import { combineReducers } from "redux";
import employment from "./employment/employment";
import commentaryReducer from "./expenses/commentaryReducer";
import monthlyLivingExpensesBasicReducer from "./expenses/monthlyLivingExpensesBasicReducer";
import monthlyLivingExpensesRecurringFixedReducer from "./expenses/monthlyLivingExpensesRecurringFixedReducer";
import brokerReducer from "./personalInfo/brokerReducer";
import personalReducer from "./personalInfo/personalReducer";
import residentialAddressReducer from "./personalInfo/residentialAddressReducer";
import propertiesOwnedReducer from "./assets/propertiesOwnedReducer";
import savingsAccountReducer from "./assets/savingsAccountReducer";
import motorVehiclesReducer from "./assets/motorVehiclesReducer";
import superannuationReducer from "./assets/superannuationReducer";
import householdItemsReducer from "./assets/householdItemsReducer";
import otherAssetsReducer from "./assets/otherAssetsReducer";
import liabilitiesReducer from "./assets/liabilitiesReducer";
import otherLiabilitiesReducer from "./assets/otherLiabilitiesReducer";
import creditsCardReducer from "./assets/creditsCardReducer";

const rootReducer = combineReducers({
  employment,
  commentary: commentaryReducer,
  expensesBasic: monthlyLivingExpensesBasicReducer,
  expensesRecurringFixed: monthlyLivingExpensesRecurringFixedReducer,
  broker: brokerReducer,
  personal: personalReducer,
  residential: residentialAddressReducer,
  propertiesOwned: propertiesOwnedReducer,
  savingsAccount: savingsAccountReducer,
  motorVehicles: motorVehiclesReducer,
  superannuation: superannuationReducer,
  items: householdItemsReducer,
  otherAssets: otherAssetsReducer,
  liabilities: liabilitiesReducer,
  otherLiabilities: otherLiabilitiesReducer,
  cards:creditsCardReducer
});

export default rootReducer;
