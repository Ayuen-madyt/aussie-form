import React, { Fragment, useState } from "react";
import {
  Text,
  Textarea,
  TextInput,
  SimpleGrid,
  createStyles,
  Divider,
  Space,
} from "@mantine/core";
import Banner from "../shared/Banner";
import { useNavigate } from "react-router-dom";
import ButtonClick from "../ButtonClick";
import { monthlyLivingExpensesBAsicAction } from "../../redux/actions/expenses/monthlyLivingExpensesBasic";
import { monthlyLivingExpensesRecurringFixedAction } from "../../redux/actions/expenses/monthlyLivingExpensesRecurringFixed";
import { commentaryAction } from "../../redux/actions/expenses/commentary";
import { useDispatch } from "react-redux";

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

export default function Expenses() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { classes } = useStyles();

  // monthly living expenses basic state
  const [utilities, setUtilities] = useState("");
  const [utilityNotes, setUtilityNotes] = useState("");
  const [education, setEducation] = useState("");
  const [educationNotes, setEducationNotes] = useState("");
  const [childCosts, setChildCosts] = useState("");
  const [childCostsNotes, setChildCostsNotes] = useState("");
  const [groceries, setGroceries] = useState("");
  const [groceriesNotes, setGroceriesNotes] = useState("");
  const [healthcare, setHealthcare] = useState("");
  const [healthcareNotes, setHealthcareNotes] = useState("");
  const [transport, setTransport] = useState("");
  const [transportNotes, setTransportNotes] = useState("");
  const [insurance, setInsurance] = useState("");
  const [insuranceNotes, setInsuranceNotes] = useState("");
  const [entertainment, setEntertainment] = useState("");
  const [entertainmentNotes, setEntertainmentNotes] = useState("");
  const [other, setOther] = useState("");
  const [otherNotes, setOtherNotes] = useState("");
  const [totalBasic, setTotalBasic] = useState("");

  const expensesBasicData = {
    utilities,
    utilityNotes,
    education,
    educationNotes,
    childCosts,
    childCostsNotes,
    groceries,
    groceriesNotes,
    healthcare,
    healthcareNotes,
    transport,
    transportNotes,
    insurance,
    insuranceNotes,
    entertainment,
    entertainmentNotes,
    other,
    otherNotes,
    totalBasic,
  };

  // monthly living recurring or fixed
  const [fixedPrivateHealthInsurance, setFixedPrivateHealthInsurance] =
    useState("");
  const [
    fixedPrivateHealthInsuranceNotes,
    setFixedPrivateHealthInsuranceNotes,
  ] = useState("");
  const [fixedLifeInsurance, setFixedLifeInsurance] = useState("");
  const [fixedLifeInsuranceNotes, setFixedLifeInsuranceNotes] = useState("");
  const [fixedChildCostsNotes, setFixedChildCostsNotes] = useState("");
  const [comprehensiveLifeInsurance, setComprehensiveLifeInsurance] =
    useState("");
  const [comprehensiveLifeInsuranceNotes, setComprehensiveLifeInsuranceNotes] =
    useState("");
  const [fixedOtherInsurance, setFixedOtherInsurance] = useState("");
  const [fixedOtherInsuranceNotes, setFixedOtherInsuranceNotes] = useState("");
  const [schoolTutionFees, setSchoolTuitionFees] = useState("");
  const [schoolTutionFeesNotes, setSchoolTuitionFeesNotes] = useState("");
  const [childMaintenance, setChildMaintenance] = useState("");
  const [childMaintenanceNotes, setChildMaintenanceNotes] = useState("");
  const [fixedOngoingRentalPayment, setFixedOngoingRentalPayment] =
    useState("");
  const [fixedOngoingRentalPaymentNotes, setFixedOngoingRentalPaymentNotes] =
    useState("");
  const [fixedOther, setFixedOther] = useState("");
  const [fixedOtherNotes, setFixedOtherNotes] = useState("");
  const [totalFixedOrRecurring, setTotalFixedOrRecurring] = useState("");
  const [totalFixedOrRecurringPlusBasic, setTotalFixedOrRecurringPlusBasic] =
    useState("");

  const expensesFixedRecurringData = {
    fixedPrivateHealthInsurance,
    fixedPrivateHealthInsuranceNotes,
    fixedLifeInsurance,
    fixedLifeInsuranceNotes,
    fixedChildCostsNotes,
    comprehensiveLifeInsurance,
    comprehensiveLifeInsuranceNotes,
    fixedOtherInsurance,
    fixedOtherInsuranceNotes,
    schoolTutionFees,
    schoolTutionFeesNotes,
    childMaintenance,
    childMaintenanceNotes,
    fixedOngoingRentalPayment,
    fixedOngoingRentalPaymentNotes,
    fixedOther,
    fixedOtherNotes,
    totalFixedOrRecurring,
    totalFixedOrRecurringPlusBasic,
  };

  // commentary state
  const [commentary, setCommentary] = useState("");

  // onclick function
  const onClickNext = () => {
    dispatch(monthlyLivingExpensesBAsicAction(expensesBasicData));
    dispatch(
      monthlyLivingExpensesRecurringFixedAction(expensesFixedRecurringData)
    );
    dispatch(commentaryAction(commentary));
    navigate("/finish");
  };

  // onclick function
  const onClickBack = () => {
    navigate("/assets");
  };

  return (
    <Fragment>
      {/* banner */}
      <Text style={{ display: "flex", color: "grey", marginTop: "20px" }}>
        <Text style={{ color: "red" }}>*</Text>
        The following table is designed to assist in determining your average
        monthly living expenses, and it is important to complete it accurately.
      </Text>
      <Banner name="Expenses" />
      {/* monthly living expenses basic */}
      <div>
        <div className="montly-expenses">
          <div className={classes.assetsBanner}>
            <SimpleGrid cols={3}>
              <SimpleGrid sx={{ marginTop: "-10px" }} cols={1}>
                <Text className={classes.title}>
                  Monthly living expenses - basic
                </Text>
              </SimpleGrid>
              <Text className={classes.columnTitle}>$ Per month</Text>
              <Text className={classes.columnTitle}>Notes</Text>
            </SimpleGrid>
          </div>
          <SimpleGrid cols={3} mt="xl">
            <Text className={classes.text}>
              Utilities{" "}
              <i className={classes.italics}>
                (Electricity, Car, Gas, Rates, Phone, Internet, etc)
              </i>
              :
            </Text>
            <TextInput
              value={utilities}
              onChange={(e) => setUtilities(e.target.value)}
              type="number"
              placeholder="$ 0.00"
            />
            <TextInput
              value={utilityNotes}
              onChange={(e) => setUtilityNotes(e.target.value)}
              type="text"
              placeholder="notes"
            />
          </SimpleGrid>

          <SimpleGrid cols={3} mt="xl">
            <Text className={classes.text}>
              Eduction{" "}
              <i className={classes.italics}>
                (Public school fees, Uniforms,Textbooks, etc)
              </i>
              :
            </Text>
            <TextInput
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              type="number"
              placeholder="$ 0.00"
            />
            <TextInput
              value={educationNotes}
              onChange={(e) => setEducationNotes(e.target.value)}
              type="text"
              placeholder="notes"
            />
          </SimpleGrid>

          <SimpleGrid cols={3} mt="xl">
            <Text className={classes.text}>Child care costs :</Text>
            <TextInput
              value={childCosts}
              onChange={(e) => setChildCosts(e.target.value)}
              type="number"
              placeholder="$ 0.00"
            />
            <TextInput
              value={childCostsNotes}
              onChange={(e) => setChildCostsNotes(e.target.value)}
              type="text"
              placeholder="notes"
            />
          </SimpleGrid>

          <SimpleGrid cols={3} mt="xl">
            <Text className={classes.text}>
              Groceries{" "}
              <i className={classes.italics}>
                (Food, Household supplies/Consumables, Cosmetic,etc)
              </i>
              :
            </Text>
            <TextInput
              value={groceries}
              onChange={(e) => setGroceries(e.target.value)}
              type="number"
              placeholder="$ 0.00"
            />
            <TextInput
              value={groceriesNotes}
              onChange={(e) => setGroceriesNotes(e.target.value)}
              type="text"
              placeholder="notes"
            />
          </SimpleGrid>

          <SimpleGrid cols={3} mt="xl">
            <Text className={classes.text}>
              Healthcare{" "}
              <i className={classes.italics}>(Chemists and medical expenses)</i>
              :
            </Text>
            <TextInput
              value={healthcare}
              onChange={(e) => setHealthcare(e.target.value)}
              type="number"
              placeholder="$ 0.00"
            />
            <TextInput
              value={healthcareNotes}
              onChange={(e) => setHealthcareNotes(e.target.value)}
              type="text"
              placeholder="notes"
            />
          </SimpleGrid>

          <SimpleGrid cols={3} mt="xl">
            <Text className={classes.text}>
              Transport{" "}
              <i className={classes.italics}>
                (Car Rego, Fuel,Regular public transport costs)
              </i>
              :
            </Text>
            <TextInput
              value={transport}
              onChange={(e) => setTransport(e.target.value)}
              type="number"
              placeholder="$ 0.00"
            />
            <TextInput
              value={transportNotes}
              onChange={(e) => setTransportNotes(e.target.value)}
              type="text"
              placeholder="notes"
            />
          </SimpleGrid>

          <SimpleGrid cols={3} mt="xl">
            <Text className={classes.text}>
              Insurance{" "}
              <i className={classes.italics}>
                (Building and contents insurance)
              </i>
              :
            </Text>
            <TextInput
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
              type="number"
              placeholder="$ 0.00"
            />
            <TextInput
              value={insuranceNotes}
              onChange={(e) => setInsuranceNotes(e.target.value)}
              type="text"
              placeholder="notes"
            />
          </SimpleGrid>

          <SimpleGrid cols={3} mt="xl">
            <Text className={classes.text}>
              Entertainment{" "}
              <i className={classes.italics}>
                (Pay Tv, eating out, cinema, etc)
              </i>
              :
            </Text>
            <TextInput
              value={entertainment}
              onChange={(e) => setEntertainment(e.target.value)}
              type="number"
              placeholder="$ 0.00"
            />
            <TextInput
              value={entertainmentNotes}
              onChange={(e) => setEntertainmentNotes(e.target.value)}
              type="text"
              placeholder="notes"
            />
          </SimpleGrid>

          <SimpleGrid cols={3} mt="xl">
            <Text className={classes.text}>
              Other{" "}
              <i className={classes.italics}>
                (House maintainence, board & lodging)
              </i>
              :
            </Text>
            <TextInput
              value={other}
              onChange={(e) => setOther(e.target.value)}
              type="number"
              placeholder="$ 0.00"
            />
            <TextInput
              value={otherNotes}
              onChange={(e) => setOtherNotes(e.target.value)}
              type="text"
              placeholder="notes"
            />
          </SimpleGrid>

          <Divider my="sm" />
          <SimpleGrid cols={3} mt="xl">
            <Text className={classes.columnTitle}>Total - basic:</Text>
            <TextInput
              value={totalBasic}
              onChange={(e) => setTotalBasic(e.target.value)}
              type="number"
              placeholder="0.00"
            />
            <Space />
          </SimpleGrid>
        </div>
        <Divider my="sm" />
      </div>

      {/* monthly living expenses recurring or fixed */}
      <div className="montly-expenses" style={{ marginTop: "30px" }}>
        <div className={classes.assetsBanner}>
          <SimpleGrid cols={3}>
            <SimpleGrid sx={{ marginTop: "-10px" }} cols={1}>
              <Text className={classes.title}>
                Monthly living expenses - Fixed or Recurring
              </Text>
            </SimpleGrid>
            <Text className={classes.columnTitle}>$ Per month</Text>
            <Text className={classes.columnTitle}>Notes</Text>
          </SimpleGrid>
        </div>
        <SimpleGrid cols={3} mt="xl">
          <Text className={classes.text}>Private Health Insurance :</Text>
          <TextInput
            value={fixedPrivateHealthInsurance}
            onChange={(e) => setFixedPrivateHealthInsurance(e.target.value)}
            type="number"
            placeholder="$ 0.00"
          />
          <TextInput
            value={fixedPrivateHealthInsuranceNotes}
            onChange={(e) =>
              setFixedPrivateHealthInsuranceNotes(e.target.value)
            }
            type="text"
            placeholder="notes"
          />
        </SimpleGrid>

        <SimpleGrid cols={3} mt="xl">
          <Text className={classes.text}>Life Insurance :</Text>
          <TextInput
            value={fixedLifeInsurance}
            onChange={(e) => setFixedLifeInsurance(e.target.value)}
            type="number"
            placeholder="$ 0.00"
          />
          <TextInput
            value={fixedLifeInsuranceNotes}
            onChange={(e) => setFixedLifeInsuranceNotes(e.target.value)}
            type="text"
            placeholder="notes"
          />
        </SimpleGrid>

        <SimpleGrid cols={3} mt="xl">
          <Text className={classes.text}>Comprehensive Live Insurance :</Text>
          <TextInput
            value={comprehensiveLifeInsurance}
            onChange={(e) => setComprehensiveLifeInsurance(e.target.value)}
            type="number"
            placeholder="$ 0.00"
          />
          <TextInput
            value={comprehensiveLifeInsuranceNotes}
            onChange={(e) => setComprehensiveLifeInsuranceNotes(e.target.value)}
            type="text"
            placeholder="notes"
          />
        </SimpleGrid>

        <SimpleGrid cols={3} mt="xl">
          <Text className={classes.text}>
            Other Insurance{" "}
            <i className={classes.italics}>
              (Income protection, specified items, Landlord)
            </i>
            :
          </Text>
          <TextInput
            value={fixedOtherInsurance}
            onChange={(e) => setFixedOtherInsurance(e.target.value)}
            type="number"
            placeholder="$ 0.00"
          />
          <TextInput
            value={fixedOtherInsuranceNotes}
            onChange={(e) => setFixedOtherInsuranceNotes(e.target.value)}
            type="text"
            placeholder="notes"
          />
        </SimpleGrid>

        <SimpleGrid cols={3} mt="xl">
          <Text className={classes.text}>
            Private School Fees, Ongoing Private Tuition etc :
          </Text>
          <TextInput
            value={schoolTutionFees}
            onChange={(e) => setSchoolTuitionFees(e.target.value)}
            type="number"
            placeholder="$ 0.00"
          />
          <TextInput
            value={schoolTutionFeesNotes}
            onChange={(e) => setSchoolTuitionFeesNotes(e.target.value)}
            type="text"
            placeholder="notes"
          />
        </SimpleGrid>

        <SimpleGrid cols={3} mt="xl">
          <Text className={classes.text}>
            Court-ordered Child Maintenance :
          </Text>
          <TextInput
            value={childMaintenance}
            onChange={(e) => setChildMaintenance(e.target.value)}
            type="number"
            placeholder="$ 0.00"
          />
          <TextInput
            value={childMaintenanceNotes}
            onChange={(e) => setChildMaintenanceNotes(e.target.value)}
            type="text"
            placeholder="balance"
          />
        </SimpleGrid>

        <SimpleGrid cols={3} mt="xl">
          <Text className={classes.text}>Ongoing Rental Payment :</Text>
          <TextInput
            value={fixedOngoingRentalPayment}
            onChange={(e) => setFixedOngoingRentalPayment(e.target.value)}
            type="number"
            placeholder="$ 0.00"
          />
          <TextInput
            value={fixedOngoingRentalPaymentNotes}
            onChange={(e) => setFixedOngoingRentalPaymentNotes(e.target.value)}
            type="text"
            placeholder="notes"
          />
        </SimpleGrid>

        <SimpleGrid cols={3} mt="xl">
          <Text className={classes.text}>Other :</Text>
          <TextInput
            value={fixedOther}
            onChange={(e) => setFixedOther(e.target.value)}
            type="number"
            placeholder="$ 0.00"
          />
          <TextInput
            value={fixedOtherNotes}
            onChange={(e) => setFixedOtherNotes(e.target.value)}
            type="text"
            placeholder="notes"
          />
        </SimpleGrid>

        <Divider my="sm" />

        <SimpleGrid cols={3} mt="xl">
          <Text className={classes.columnTitle}>
            TOTAL - Fixed or Recurring:
          </Text>
          <TextInput
            value={totalFixedOrRecurring}
            onChange={(e) => setTotalFixedOrRecurring(e.target.value)}
            type="number"
            placeholder="$ 0.00"
          />
          <Space />
        </SimpleGrid>

        <SimpleGrid cols={3} mt="xl">
          <Text className={classes.columnTitle}>
            TOTAL - BAsic + Fixed Recurring:
          </Text>
          <TextInput
            value={totalFixedOrRecurringPlusBasic}
            onChange={(e) => setTotalFixedOrRecurringPlusBasic(e.target.value)}
            type="number"
            placeholder="$ 0.00"
          />
          <Space />
        </SimpleGrid>
      </div>

      {/* commentary */}
      <div className="additional-commentary" style={{ marginTop: "30px" }}>
        <div className={classes.assetsBanner}>
          <SimpleGrid cols={1}>
            <SimpleGrid sx={{ marginTop: "-10px" }} cols={1}>
              <Text className={classes.title}>Additional Commentary</Text>
            </SimpleGrid>
          </SimpleGrid>
          <Textarea
            value={commentary}
            onChange={(e) => setCommentary(e.target.value)}
            mt="lg"
            placeholder="write something..."
            label="Comment"
            autosize
            minRows={5}
          />
        </div>
      </div>

      {/* click button */}
      <ButtonClick next={onClickNext} back={onClickBack} />
    </Fragment>
  );
}
