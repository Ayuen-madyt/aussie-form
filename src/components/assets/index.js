import React, { useEffect, useState, Fragment } from "react";
import Banner from "../shared/Banner";
import {
  Text,
  TextInput,
  SimpleGrid,
  createStyles,
  Radio,
  Space,
} from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import ButtonClick from "../ButtonClick";
import { useNavigate } from "react-router-dom";
import { propertiesOwnedAction } from "../../redux/actions/assets/propertiesOwned";
import { savingsAccountAction } from "../../redux/actions/assets/savingsAccount";
import { motorVehiclesAction } from "../../redux/actions/assets/motorVehicles";
import { superannuationAction } from "../../redux/actions/assets/superannuation";
import { householdItemsAction } from "../../redux/actions/assets/householdItems";
import { otherAssetsAction } from "../../redux/actions/assets/otherAssets";
import { liabilitiesAction } from "../../redux/actions/assets/liabilities";
import { otherLiabilitiesAction } from "../../redux/actions/assets/otherLiabilities";
import { creditCardsAction } from "../../redux/actions/assets/creditCards";

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");
  return {
    assetsBanner: {
      borderBottom: "1px solid #d8d8d8",
    },
    title: {
      backgroundColor: "grey",
      color: "white",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    text: {
      color: "grey",
    },
    columnTitle: {
      color: "#46166a",
    },
    italics: {
      fontSize: "12px",
      color: "grey",
    },
  };
});

export default function Assets() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { classes } = useStyles();

  // properties owned state
  const [propertyOneAddress, setPropertyOneAddress] = useState("");
  const [propertyTwoAddress, setPropertyTwoAddress] = useState("");
  const [propertyThreeAddress, setPropertyThreeAddress] = useState("");
  const [propertyOneSuburb, setPropertyOneSuburb] = useState("");
  const [propertyOneState, setPropertyOneState] = useState("");
  const [propertyOnePostcode, setPropertyOnePostcode] = useState("");
  const [propertyTwoSuburb, setPropertyTwoSuburb] = useState("");
  const [propertyTwoState, setPropertyTwoState] = useState("");
  const [propertyTwoPostcode, setPropertyTwoPostcode] = useState("");
  const [propertyThreeSuburb, setPropertyThreeSuburb] = useState("");
  const [propertyThreeState, setPropertyThreeState] = useState("");
  const [propertyThreePostcode, setPropertyThreePostcode] = useState("");
  const [ownerOccupiedPropertyOne, setOwnerOccupiedPropertyOne] = useState("");
  const [ownerOccupiedPropertyTwo, setOwnerOccupiedPropertyTwo] = useState("");
  const [ownerOccupiedPropertyThree, setOwnerOccupiedPropertyThree] =
    useState("");
  const [valuePropertyOne, setValuePropertyOne] = useState("");
  const [valuePropertyTwo, setValuePropertyTwo] = useState("");
  const [valuePropertyThree, setValuePropertyThree] = useState("");

  const property1 = {
    propertyOneAddress,
    propertyOneSuburb,
    propertyOneState,
    propertyOnePostcode,
    ownerOccupiedPropertyOne,
    valuePropertyOne,
  };

  const property2 = {
    propertyTwoAddress,
    propertyTwoSuburb,
    propertyTwoState,
    propertyTwoPostcode,
    ownerOccupiedPropertyTwo,
    valuePropertyTwo,
  };

  const property3 = {
    propertyThreeAddress,
    propertyThreeSuburb,
    propertyThreeState,
    propertyThreePostcode,
    ownerOccupiedPropertyThree,
    valuePropertyThree,
  };

  const propertiesOwnedData = {
    property1,
    property2,
    property3,
  };

  // savings account state
  const [institutionAccount1, setInstitution1] = useState("");
  const [institutionAccount2, setInstitution2] = useState("");
  const [institutionAccount3, setInstitution3] = useState("");
  const [balanceAccount1, setBalanceAccount1] = useState("");
  const [balanceAccount2, setBalanceAccount2] = useState("");
  const [balanceAccount3, setBalanceAccount3] = useState("");

  const institution1 = {
    institutionAccount1,
    balanceAccount1,
  };

  const institution2 = {
    institutionAccount2,
    balanceAccount2,
  };
  const institution3 = {
    institutionAccount3,
    balanceAccount3,
  };
  const savingsAccountata = {
    institution1,
    institution2,
    institution3,
  };

  // motor vehicles state
  const [makeModel1, setMakeModel1] = useState("");
  const [makeModel2, setMakeModel2] = useState("");
  const [makeModel3, setMakeModel3] = useState("");
  const [yearBuild1, setYearBuild1] = useState("");
  const [yearBuild2, setYearBuild2] = useState("");
  const [yearBuild3, setYearBuild3] = useState("");
  const [vehicleBalance1, setVehicleBalance1] = useState("");
  const [vehicleBalance2, setVehicleBalance2] = useState("");
  const [vehicleBalance3, setVehicleBalance3] = useState("");

  const vehicle1 = {
    makeModel1,
    yearBuild1,
    vehicleBalance1,
  };
  const vehicle2 = {
    makeModel2,
    yearBuild2,
    vehicleBalance2,
  };

  const vehicle3 = {
    makeModel3,
    yearBuild3,
    vehicleBalance3,
  };

  const motorVehiclesData = {
    vehicle1,
    vehicle2,
    vehicle3,
  };

  // superannuation state
  const [superannuation, setSuperannuation] = useState("");

  // household items state
  const [valueItems, setValueItems] = useState("");

  // other assets state
  const [assetType1, setAssetType1] = useState("");
  const [assetType2, setAssetType2] = useState("");
  const [assetType3, setAssetType3] = useState("");
  const [valueAssetType1, setValueAssetType1] = useState("");
  const [valueAssetType2, setValueAssetType2] = useState("");
  const [valueAssetType3, setValueAssetType3] = useState("");

  const otherAssetsData = {
    assetType1,
    assetType2,
    assetType3,
    valueAssetType1,
    valueAssetType2,
    valueAssetType3,
  };

  // liabilities state
  const [liabilityFinancialInstitution1, setLiabilityFinancialInstitution1] =
    useState("");
  const [liabilityFinancialInstitution2, setLiabilityFinancialInstitution2] =
    useState("");
  const [liabilityFinancialInstitution3, setLiabilityFinancialInstitution3] =
    useState("");
  const [originalLoanAmount1, setOriginalLoanAmount1] = useState("");
  const [originalLoanAmount2, setOriginalLoanAmount2] = useState("");
  const [originalLoanAmount3, setOriginalLoanAmount3] = useState("");
  const [outstandingAmount1, setOutstandingAmount1] = useState("");
  const [outstandingAmount2, setOutstandingAmount2] = useState("");
  const [outstandingAmount3, setOutstandingAmount3] = useState("");
  const [minimumMonthlyRepayment1, setMinimumMonthlyRepayment1] = useState("");
  const [minimumMonthlyRepayment2, setMinimumMonthlyRepayment2] = useState("");
  const [minimumMonthlyRepayment3, setMinimumMonthlyRepayment3] = useState("");
  const [liabilityAccountNumber1, setLiabilityAccountNumber1] = useState("");
  const [liabilityAccountNumber2, setLiabilityAccountNumber2] = useState("");
  const [liabilityAccountNumber3, setLiabilityAccountNumber3] = useState("");

  const liabilitiesData = {
    liabilityFinancialInstitution1,
    liabilityFinancialInstitution2,
    liabilityFinancialInstitution3,
    originalLoanAmount1,
    originalLoanAmount2,
    originalLoanAmount3,
    outstandingAmount1,
    outstandingAmount2,
    outstandingAmount3,
    minimumMonthlyRepayment1,
    minimumMonthlyRepayment2,
    minimumMonthlyRepayment3,
    liabilityAccountNumber1,
    liabilityAccountNumber2,
    liabilityAccountNumber3,
  };

  // other liabilities state
  const [otherLiabilityLoanType1, setOtherLiabilityLoanType1] = useState("");
  const [otherLiabilityLoanType2, setOtherLiabilityLoanType2] = useState("");
  const [otherLiabilityLoanType3, setOtherLiabilityLoanType3] = useState("");
  const [
    otherLiabilityFinancialInstitution1,
    setOtherLiabilityFinancialInstitution1,
  ] = useState("");
  const [
    otherLiabilityFinancialInstitution2,
    setOtherLiabilityFinancialInstitution2,
  ] = useState("");
  const [
    otherLiabilityFinancialInstitution3,
    setOtherLiabilityFinancialInstitution3,
  ] = useState("");
  const [
    otherLiabilityOriginalLoanAmount1,
    setOtherLiabilityOriginalLoanAmount1,
  ] = useState("");
  const [
    otherLiabilityOriginalLoanAmount2,
    setOtherLiabilityOriginalLoanAmount2,
  ] = useState("");
  const [
    otherLiabilityOriginalLoanAmount3,
    setOtherLiabilityOriginalLoanAmount3,
  ] = useState("");
  const [otherLiabilitityAmountOwing1, setOtherLiabilitityAmountOwing1] =
    useState("");
  const [otherLiabilitityAmountOwing2, setOtherLiabilitityAmountOwing2] =
    useState("");
  const [otherLiabilitityAmountOwing3, setOtherLiabilitityAmountOwing3] =
    useState("");
  const [otherMinimumMonthlyRepayment1, setOtherMinimumMonthlyRepayment1] =
    useState("");
  const [otherMinimumMonthlyRepayment2, setOtherMinimumMonthlyRepayment2] =
    useState("");
  const [otherMinimumMonthlyRepayment3, setOtherMinimumMonthlyRepayment3] =
    useState("");
  const [otherLiabilityAccountNumber1, setOtherLiabilityAccountNumber1] =
    useState("");
  const [otherLiabilityAccountNumber2, setOtherLiabilityAccountNumber2] =
    useState("");
  const [otherLiabilityAccountNumber3, setOtherLiabilityAccountNumber3] =
    useState("");
  const [otherLiabilityIsLoanBeingPaid1, setOtherLiabilityIsLoanBeingPaid1] =
    useState("");
  const [otherLiabilityIsLoanBeingPaid2, setOtherLiabilityIsLoanBeingPaid2] =
    useState("");
  const [otherLiabilityIsLoanBeingPaid3, setOtherLiabilityIsLoanBeingPaid3] =
    useState("");
  const [how1, setHow1] = useState("");
  const [how2, setHow2] = useState("");
  const [how3, setHow3] = useState("");

  const otherLiabilitiesData = {
    otherLiabilityLoanType1,
    otherLiabilityLoanType2,
    otherLiabilityLoanType3,
    otherLiabilityFinancialInstitution1,
    otherLiabilityFinancialInstitution2,
    otherLiabilityFinancialInstitution3,
    otherLiabilityOriginalLoanAmount1,
    otherLiabilityOriginalLoanAmount2,
    otherLiabilityOriginalLoanAmount3,
    otherLiabilitityAmountOwing1,
    otherLiabilitityAmountOwing2,
    otherLiabilitityAmountOwing3,
    otherMinimumMonthlyRepayment1,
    otherMinimumMonthlyRepayment2,
    otherMinimumMonthlyRepayment3,
    otherLiabilityAccountNumber1,
    otherLiabilityAccountNumber2,
    otherLiabilityAccountNumber3,
    otherLiabilityIsLoanBeingPaid1,
    otherLiabilityIsLoanBeingPaid2,
    otherLiabilityIsLoanBeingPaid3,
    how1,
    how2,
    how3,
  };

  // credit cards state
  const [cardFinancialInstitution1, setCardFinancialInstitution1] =
    useState("");
  const [cardFinancialInstitution2, setCardFinancialInstitution2] =
    useState("");
  const [cardFinancialInstitution3, setCardFinancialInstitution3] =
    useState("");
  const [creditLimit1, setCreditLImit1] = useState("");
  const [creditLimit2, setCreditLImit2] = useState("");
  const [creditLimit3, setCreditLImit3] = useState("");
  const [creditAmountOwing1, setCreditAmountOwing1] = useState("");
  const [creditAmountOwing2, setCreditAmountOwing2] = useState("");
  const [creditAmountOwing3, setCreditAmountOwing3] = useState("");

  const creditCardData = {
    cardFinancialInstitution1,
    cardFinancialInstitution2,
    cardFinancialInstitution3,
    creditLimit1,
    creditLimit2,
    creditLimit3,
    creditAmountOwing1,
    creditAmountOwing2,
    creditAmountOwing3,
  };

  // onclick function
  const onClickNext = () => {
    dispatch(propertiesOwnedAction(propertiesOwnedData));
    dispatch(savingsAccountAction(savingsAccountata));
    dispatch(motorVehiclesAction(motorVehiclesData));
    dispatch(superannuationAction(superannuation));
    dispatch(householdItemsAction(valueItems));
    dispatch(otherAssetsAction(otherAssetsData));
    dispatch(liabilitiesAction(liabilitiesData));
    dispatch(otherLiabilitiesAction(otherLiabilitiesData));
    dispatch(creditCardsAction(creditCardData));
    navigate("/expenses");
  };

  // onclick function
  const onClickBack = () => {
    navigate("/employment");
  };

  return (
    <Fragment>
      <Banner name="Assets" />
      {/* propertiesOwned */}
      <div className="savings">
        <div className={classes.assetsBanner}>
          <SimpleGrid cols={4}>
            <SimpleGrid sx={{ marginTop: "-10px" }} cols={1}>
              <Text className={classes.title}>Properties owned</Text>
            </SimpleGrid>
            <Text className={classes.columnTitle}>Property 1</Text>
            <Text className={classes.columnTitle}>Property 2</Text>
            <Text className={classes.columnTitle}>Property 3</Text>
          </SimpleGrid>
        </div>
        <SimpleGrid cols={4} mt="xl">
          <Text className={classes.text}>Address:</Text>
          <div>
            <TextInput
              value={propertyOneAddress}
              onChange={(e) => setPropertyOneAddress(e.target.value)}
              type="text"
              placeholder="address"
            />
            <SimpleGrid cols={3}>
              <TextInput
                value={propertyOneSuburb}
                onChange={(e) => setPropertyOneSuburb(e.target.value)}
                label="Suburb"
                type="text"
                placeholder="sub"
                withAsterisk
              />
              <TextInput
                value={propertyOneState}
                onChange={(e) => setPropertyOneState(e.target.value)}
                label="State"
                type="text"
                placeholder="state"
                withAsterisk
              />
              <TextInput
                value={propertyOnePostcode}
                onChange={(e) => setPropertyOnePostcode(e.target.value)}
                label="Code"
                type="text"
                placeholder="code"
                withAsterisk
              />
            </SimpleGrid>
          </div>

          <div>
            <TextInput
              value={propertyTwoAddress}
              onChange={(e) => setPropertyTwoAddress(e.target.value)}
              type="text"
              placeholder="address"
            />
            <SimpleGrid cols={3}>
              <TextInput
                value={propertyTwoSuburb}
                onChange={(e) => setPropertyTwoSuburb(e.target.value)}
                label="Suburb"
                type="text"
                placeholder="sub"
                withAsterisk
              />
              <TextInput
                value={propertyTwoState}
                onChange={(e) => setPropertyTwoState(e.target.value)}
                label="State"
                type="text"
                placeholder="state"
                withAsterisk
              />
              <TextInput
                value={propertyTwoPostcode}
                onChange={(e) => setPropertyTwoPostcode(e.target.value)}
                label="Code"
                type="text"
                placeholder="code"
                withAsterisk
              />
            </SimpleGrid>
          </div>

          <div>
            <TextInput
              value={propertyThreeAddress}
              onChange={(e) => setPropertyThreeAddress(e.target.value)}
              type="text"
              placeholder="address"
            />
            <SimpleGrid cols={3}>
              <TextInput
                value={propertyThreeSuburb}
                onChange={(e) => setPropertyThreeSuburb(e.target.value)}
                label="Suburb"
                type="text"
                placeholder="sub"
                withAsterisk
              />
              <TextInput
                value={propertyThreeState}
                onChange={(e) => setPropertyThreeState(e.target.value)}
                label="State"
                type="text"
                placeholder="state"
                withAsterisk
              />
              <TextInput
                value={propertyThreePostcode}
                onChange={(e) => setPropertyThreePostcode(e.target.value)}
                label="Code"
                type="text"
                placeholder="code"
                withAsterisk
              />
            </SimpleGrid>
          </div>
        </SimpleGrid>

        <SimpleGrid cols={4} mt="xl">
          <Text className={classes.text}>Owner occupied:</Text>
          <Radio.Group
            withAsterisk
            cols={2}
            value={ownerOccupiedPropertyOne}
            onChange={setOwnerOccupiedPropertyOne}
          >
            <Radio value="No" label="No" />
            <Radio value="Yes" label="Yes" />
          </Radio.Group>
          <Radio.Group
            withAsterisk
            cols={2}
            value={ownerOccupiedPropertyTwo}
            onChange={setOwnerOccupiedPropertyTwo}
          >
            <Radio value="No" label="No" />
            <Radio value="Yes" label="Yes" />
          </Radio.Group>
          <Radio.Group
            withAsterisk
            cols={2}
            value={ownerOccupiedPropertyThree}
            onChange={setOwnerOccupiedPropertyThree}
          >
            <Radio value="No" label="No" />
            <Radio value="Yes" label="Yes" />
          </Radio.Group>
        </SimpleGrid>

        <SimpleGrid cols={4} mt="xl">
          <Text className={classes.text}>Value:</Text>
          <TextInput
            value={valuePropertyOne}
            onChange={(e) => setValuePropertyOne(e.target.value)}
            label="$"
            type="number"
            placeholder="amount"
            withAsterisk
          />
          <TextInput
            value={valuePropertyTwo}
            onChange={(e) => setValuePropertyTwo(e.target.value)}
            label="$"
            type="number"
            placeholder="amount"
            withAsterisk
          />
          <TextInput
            value={valuePropertyThree}
            onChange={(e) => setValuePropertyThree(e.target.value)}
            label="$"
            type="number"
            placeholder="amount"
            withAsterisk
          />
        </SimpleGrid>
      </div>

      {/* savings account */}
      <div className="properties-owned" style={{ marginTop: "30px" }}>
        <div className={classes.assetsBanner}>
          <SimpleGrid cols={4}>
            <SimpleGrid cols={1}>
              <Text className={classes.title}>Savings account</Text>
            </SimpleGrid>
            <Text className={classes.columnTitle}>Account 1</Text>
            <Text className={classes.columnTitle}>Account 2</Text>
            <Text className={classes.columnTitle}>Account 3</Text>
          </SimpleGrid>
        </div>
        <SimpleGrid cols={4} mt="xl">
          <Text className={classes.text}>Financial institution:</Text>
          <TextInput
            value={institutionAccount1}
            onChange={(e) => setInstitution1(e.target.value)}
            type="text"
            placeholder="institution"
          />
          <TextInput
            value={institutionAccount2}
            onChange={(e) => setInstitution2(e.target.value)}
            type="text"
            placeholder="institution"
          />
          <TextInput
            value={institutionAccount3}
            onChange={(e) => setInstitution3(e.target.value)}
            type="text"
            placeholder="institution"
          />
        </SimpleGrid>

        <SimpleGrid cols={4} mt="xl">
          <Text className={classes.text}>Balance:</Text>
          <TextInput
            value={balanceAccount1}
            onChange={(e) => setBalanceAccount1(e.target.value)}
            label="$"
            type="number"
            placeholder="amount"
            withAsterisk
          />
          <TextInput
            value={balanceAccount2}
            onChange={(e) => setBalanceAccount2(e.target.value)}
            label="$"
            type="number"
            placeholder="amount"
            withAsterisk
          />
          <TextInput
            value={balanceAccount3}
            onChange={(e) => setBalanceAccount3(e.target.value)}
            label="$"
            type="number"
            placeholder="amount"
            withAsterisk
          />
        </SimpleGrid>
      </div>

      {/* motor vehicles */}
      <div className="motor-vehicles" style={{ marginTop: "30px" }}>
        <div className={classes.assetsBanner}>
          <SimpleGrid cols={4}>
            <SimpleGrid cols={1}>
              <Text className={classes.title}>Motor vehicles</Text>
            </SimpleGrid>
            <Text className={classes.columnTitle}>Vehicle 1</Text>
            <Text className={classes.columnTitle}>Vehicle 2</Text>
            <Text className={classes.columnTitle}>Vehicle 3</Text>
          </SimpleGrid>
        </div>
        <div>
          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Make and model:</Text>
            <TextInput
              value={makeModel1}
              onChange={(e) => setMakeModel1(e.target.value)}
              type="text"
              placeholder="make and model"
              withAsterisk
            />
            <TextInput
              value={makeModel2}
              onChange={(e) => setMakeModel2(e.target.value)}
              type="text"
              placeholder="make and model"
              withAsterisk
            />
            <TextInput
              value={makeModel3}
              onChange={(e) => setMakeModel3(e.target.value)}
              type="text"
              placeholder="make and model"
              withAsterisk
            />
          </SimpleGrid>

          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Year build:</Text>
            <TextInput
              value={yearBuild1}
              onChange={(e) => setYearBuild1(e.target.value)}
              type="text"
              placeholder="year build"
              withAsterisk
            />
            <TextInput
              value={yearBuild2}
              onChange={(e) => setYearBuild2(e.target.value)}
              type="text"
              placeholder="year build"
              withAsterisk
            />
            <TextInput
              value={yearBuild3}
              onChange={(e) => setYearBuild3(e.target.value)}
              type="text"
              placeholder="year build"
              withAsterisk
            />
          </SimpleGrid>

          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Balance:</Text>
            <TextInput
              value={vehicleBalance1}
              onChange={(e) => setVehicleBalance1(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={vehicleBalance2}
              onChange={(e) => setVehicleBalance2(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={vehicleBalance3}
              onChange={(e) => setVehicleBalance3(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
          </SimpleGrid>
        </div>
      </div>

      {/* superannuation */}
      <div className="superannuation" style={{ marginTop: "30px" }}>
        <div className={classes.assetsBanner}>
          <SimpleGrid cols={2}>
            <SimpleGrid
              sx={{ width: "fit-content", marginTop: "10px" }}
              cols={1}
            >
              <Text className={classes.title}>Superannuation</Text>
            </SimpleGrid>
          </SimpleGrid>
        </div>
        <SimpleGrid cols={2} mt="xl">
          <Text className={classes.text}>Value:</Text>
          <TextInput
            value={superannuation}
            onChange={(e) => setSuperannuation(e.target.value)}
            label="$"
            type="number"
            placeholder="amount"
            withAsterisk
          />
        </SimpleGrid>
      </div>

      {/* household items */}
      <div className="superannuation" style={{ marginTop: "30px" }}>
        <div className={classes.assetsBanner}>
          <SimpleGrid cols={2}>
            <SimpleGrid
              sx={{ width: "fit-content", marginTop: "10px" }}
              cols={1}
            >
              <Text className={classes.title}>Household items</Text>
            </SimpleGrid>
          </SimpleGrid>
        </div>
        <SimpleGrid cols={2} mt="xl">
          <Text className={classes.text}>
            Value{" "}
            <i className={classes.italics}>
              (Hint: what value is your home and contents insured for?
            </i>
          </Text>
          <TextInput
            value={valueItems}
            onChange={(e) => setValueItems(e.target.value)}
            label="$"
            type="number"
            placeholder="amount"
            withAsterisk
          />
        </SimpleGrid>
      </div>

      {/* other assets */}
      <div className="superannuation" style={{ marginTop: "30px" }}>
        <div className={classes.assetsBanner}>
          <SimpleGrid cols={2}>
            <SimpleGrid sx={{ width: "fit-content" }} cols={1}>
              <Text className={classes.title}>Other assets</Text>
            </SimpleGrid>
          </SimpleGrid>
        </div>
        <SimpleGrid cols={4} mt="xl">
          <Text className={classes.text}>Asset type:</Text>
          <TextInput
            value={assetType1}
            onChange={(e) => setAssetType1(e.target.value)}
            label="Asset 1"
            type="text"
            placeholder="asset"
            withAsterisk
          />
          <TextInput
            value={assetType2}
            onChange={(e) => setAssetType2(e.target.value)}
            label="Asset 2"
            type="text"
            placeholder="asset"
            withAsterisk
          />
          <TextInput
            value={assetType3}
            onChange={(e) => setAssetType3(e.target.value)}
            label="Asset 3"
            type="text"
            placeholder="asset"
            withAsterisk
          />
        </SimpleGrid>

        <SimpleGrid cols={4} mt="xl">
          <Text className={classes.text}>
            Value{" "}
            <i className={classes.italics}>(caravan, boat, shares, etc)</i>:
          </Text>
          <TextInput
            value={valueAssetType1}
            onChange={(e) => setValueAssetType1(e.target.value)}
            label="$"
            type="number"
            placeholder="asset 1 amount"
            withAsterisk
          />
          <TextInput
            value={valueAssetType2}
            onChange={(e) => setValueAssetType2(e.target.value)}
            label="$"
            type="number"
            placeholder="asset 2 amount"
            withAsterisk
          />
          <TextInput
            value={valueAssetType3}
            onChange={(e) => setValueAssetType3(e.target.value)}
            label="$"
            type="number"
            placeholder="asset 3 amount"
            withAsterisk
          />
        </SimpleGrid>
      </div>

      {/* liabilities */}
      <div className="motor-vehicles" style={{ marginTop: "30px" }}>
        <div className={classes.assetsBanner}>
          <SimpleGrid cols={4}>
            <SimpleGrid cols={1}>
              <Text className={classes.title}>Liabilities</Text>
            </SimpleGrid>
            <Text className={classes.columnTitle}>Mortgage 1</Text>
            <Text className={classes.columnTitle}>Mortgage 2</Text>
            <Text className={classes.columnTitle}>Mortgage 3</Text>
          </SimpleGrid>
        </div>
        <div>
          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Name of financial institution:</Text>
            <TextInput
              value={liabilityFinancialInstitution1}
              onChange={(e) =>
                setLiabilityFinancialInstitution1(e.target.value)
              }
              type="text"
              placeholder="institution"
              withAsterisk
            />
            <TextInput
              value={liabilityFinancialInstitution2}
              onChange={(e) =>
                setLiabilityFinancialInstitution2(e.target.value)
              }
              type="text"
              placeholder="institution"
              withAsterisk
            />
            <TextInput
              value={liabilityFinancialInstitution3}
              onChange={(e) =>
                setLiabilityFinancialInstitution3(e.target.value)
              }
              type="text"
              placeholder="institution"
              withAsterisk
            />
          </SimpleGrid>

          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Original loan amount:</Text>
            <TextInput
              value={originalLoanAmount1}
              onChange={(e) => setOriginalLoanAmount1(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={originalLoanAmount2}
              onChange={(e) => setOriginalLoanAmount2(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={originalLoanAmount3}
              onChange={(e) => setOriginalLoanAmount3(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
          </SimpleGrid>
          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Outstanding balance:</Text>
            <TextInput
              value={outstandingAmount1}
              onChange={(e) => setOutstandingAmount1(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={outstandingAmount2}
              onChange={(e) => setOutstandingAmount2(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={outstandingAmount3}
              onChange={(e) => setOutstandingAmount3(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
          </SimpleGrid>
          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Minimum monthly repayment:</Text>
            <TextInput
              value={minimumMonthlyRepayment1}
              onChange={(e) => setMinimumMonthlyRepayment1(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={minimumMonthlyRepayment2}
              onChange={(e) => setMinimumMonthlyRepayment2(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={minimumMonthlyRepayment3}
              onChange={(e) => setMinimumMonthlyRepayment3(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
          </SimpleGrid>

          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Account number:</Text>
            <TextInput
              value={liabilityAccountNumber1}
              onChange={(e) => setLiabilityAccountNumber1(e.target.value)}
              type="text"
              placeholder="account number"
              withAsterisk
            />
            <TextInput
              value={liabilityAccountNumber2}
              onChange={(e) => setLiabilityAccountNumber2(e.target.value)}
              type="text"
              placeholder="account number"
              withAsterisk
            />
            <TextInput
              value={liabilityAccountNumber3}
              onChange={(e) => setLiabilityAccountNumber3(e.target.value)}
              type="text"
              placeholder="account number"
              withAsterisk
            />
          </SimpleGrid>
        </div>
      </div>

      {/* other liabilities */}
      <div className="motor-vehicles" style={{ marginTop: "30px" }}>
        <div className={classes.assetsBanner}>
          <SimpleGrid cols={4}>
            <SimpleGrid cols={1}>
              <Text className={classes.title}>Other Liabilities</Text>
            </SimpleGrid>
            <Text className={classes.columnTitle}>Loan 1</Text>
            <Text className={classes.columnTitle}>Loan 2</Text>
            <Text className={classes.columnTitle}>Loan 3</Text>
          </SimpleGrid>
        </div>
        <SimpleGrid cols={4} mt="xl">
          <Text className={classes.text}>
            Loan type{" "}
            <i className={classes.italics}>(Car/Personal/HEGS/Other loans)</i>:
          </Text>
          <TextInput
            value={otherLiabilityLoanType1}
            onChange={(e) => setOtherLiabilityLoanType1(e.target.value)}
            type="text"
            placeholder="loan type"
            withAsterisk
          />
          <TextInput
            value={otherLiabilityLoanType2}
            onChange={(e) => setOtherLiabilityLoanType2(e.target.value)}
            type="text"
            placeholder="loan type"
            withAsterisk
          />
          <TextInput
            value={otherLiabilityLoanType3}
            onChange={(e) => setOtherLiabilityLoanType3(e.target.value)}
            type="text"
            placeholder="loan type"
            withAsterisk
          />
        </SimpleGrid>
        <div>
          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Name of financial institution:</Text>
            <TextInput
              value={otherLiabilityFinancialInstitution1}
              onChange={(e) =>
                setOtherLiabilityFinancialInstitution1(e.target.value)
              }
              type="text"
              placeholder="institution"
              withAsterisk
            />
            <TextInput
              value={otherLiabilityFinancialInstitution2}
              onChange={(e) =>
                setOtherLiabilityFinancialInstitution2(e.target.value)
              }
              type="text"
              placeholder="institution"
              withAsterisk
            />
            <TextInput
              value={otherLiabilityFinancialInstitution3}
              onChange={(e) =>
                setOtherLiabilityFinancialInstitution3(e.target.value)
              }
              type="text"
              placeholder="institution"
              withAsterisk
            />
          </SimpleGrid>

          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Original loan amount:</Text>
            <TextInput
              value={otherLiabilityOriginalLoanAmount1}
              onChange={(e) =>
                setOtherLiabilityOriginalLoanAmount1(e.target.value)
              }
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={otherLiabilityOriginalLoanAmount2}
              onChange={(e) =>
                setOtherLiabilityOriginalLoanAmount2(e.target.value)
              }
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={otherLiabilityOriginalLoanAmount3}
              onChange={(e) =>
                setOtherLiabilityOriginalLoanAmount3(e.target.value)
              }
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
          </SimpleGrid>
          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Amount currently owing:</Text>
            <TextInput
              value={otherLiabilitityAmountOwing1}
              onChange={(e) => setOtherLiabilitityAmountOwing1(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={otherLiabilitityAmountOwing2}
              onChange={(e) => setOtherLiabilitityAmountOwing2(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={otherLiabilitityAmountOwing3}
              onChange={(e) => setOtherLiabilitityAmountOwing3(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
          </SimpleGrid>
          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Minimum monthly repayment:</Text>
            <TextInput
              value={otherMinimumMonthlyRepayment1}
              onChange={(e) => setOtherMinimumMonthlyRepayment1(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={otherMinimumMonthlyRepayment2}
              onChange={(e) => setOtherMinimumMonthlyRepayment2(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={otherMinimumMonthlyRepayment3}
              onChange={(e) => setOtherMinimumMonthlyRepayment3(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
          </SimpleGrid>

          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Account number:</Text>
            <TextInput
              value={otherLiabilityAccountNumber1}
              onChange={(e) => setOtherLiabilityAccountNumber1(e.target.value)}
              type="text"
              placeholder="account number"
              withAsterisk
            />
            <TextInput
              value={otherLiabilityAccountNumber2}
              onChange={(e) => setOtherLiabilityAccountNumber2(e.target.value)}
              type="text"
              placeholder="account number"
              withAsterisk
            />
            <TextInput
              value={otherLiabilityAccountNumber3}
              onChange={(e) => setOtherLiabilityAccountNumber3(e.target.value)}
              type="text"
              placeholder="account number"
              withAsterisk
            />
          </SimpleGrid>
        </div>

        <div className="is-being-paid">
          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Is loan being paid:</Text>
            <Radio.Group
              withAsterisk
              cols={2}
              value={otherLiabilityIsLoanBeingPaid1}
              onChange={setOtherLiabilityIsLoanBeingPaid1}
            >
              <Radio value="No" label="No" />
              <Radio value="Yes" label="Yes" />
            </Radio.Group>
            <Radio.Group
              withAsterisk
              cols={2}
              value={otherLiabilityIsLoanBeingPaid2}
              onChange={setOtherLiabilityIsLoanBeingPaid2}
            >
              <Radio value="No" label="No" />
              <Radio value="Yes" label="Yes" />
            </Radio.Group>
            <Radio.Group
              withAsterisk
              cols={2}
              value={otherLiabilityIsLoanBeingPaid3}
              onChange={setOtherLiabilityIsLoanBeingPaid3}
            >
              <Radio value="No" label="No" />
              <Radio value="Yes" label="Yes" />
            </Radio.Group>
          </SimpleGrid>

          <SimpleGrid cols={4} mt="xl">
            <Space></Space>
            <TextInput
              value={how1}
              onChange={(e) => setHow1(e.target.value)}
              label="how"
              type="text"
              placeholder="how"
              withAsterisk
            />
            <TextInput
              value={how2}
              onChange={(e) => setHow2(e.target.value)}
              label="how"
              type="text"
              placeholder="how"
              withAsterisk
            />
            <TextInput
              value={how3}
              onChange={(e) => setHow3(e.target.value)}
              label="how"
              type="text"
              placeholder="how"
              withAsterisk
            />
          </SimpleGrid>
        </div>
      </div>

      {/* credit cards */}
      <div className="credit-cards" style={{ marginTop: "30px" }}>
        <div className={classes.assetsBanner}>
          <SimpleGrid cols={4}>
            <SimpleGrid cols={1}>
              <Text className={classes.title}>Credit Cards/Store Cards</Text>
            </SimpleGrid>
            <Text className={classes.columnTitle}>Card 1</Text>
            <Text className={classes.columnTitle}>Card 2</Text>
            <Text className={classes.columnTitle}>Card 3</Text>
          </SimpleGrid>
        </div>
        <div>
          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Name of financial institution:</Text>
            <TextInput
              value={cardFinancialInstitution1}
              onChange={(e) => setCardFinancialInstitution1(e.target.value)}
              type="text"
              placeholder="institution"
              withAsterisk
            />
            <TextInput
              value={cardFinancialInstitution2}
              onChange={(e) => setCardFinancialInstitution2(e.target.value)}
              type="text"
              placeholder="institution"
              withAsterisk
            />
            <TextInput
              value={cardFinancialInstitution3}
              onChange={(e) => setCardFinancialInstitution3(e.target.value)}
              type="text"
              placeholder="institution"
              withAsterisk
            />
          </SimpleGrid>

          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Credit limit:</Text>
            <TextInput
              value={creditLimit1}
              onChange={(e) => setCreditLImit1(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={creditLimit2}
              onChange={(e) => setCreditLImit2(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={creditLimit3}
              onChange={(e) => setCreditLImit3(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
          </SimpleGrid>
          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Amount currently owing:</Text>
            <TextInput
              value={creditAmountOwing1}
              onChange={(e) => setCreditAmountOwing1(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={creditAmountOwing2}
              onChange={(e) => setCreditAmountOwing2(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={creditAmountOwing3}
              onChange={(e) => setCreditAmountOwing3(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
          </SimpleGrid>
        </div>
      </div>

      {/* button click */}
      <ButtonClick next={onClickNext} back={onClickBack} />
    </Fragment>
  );
}
