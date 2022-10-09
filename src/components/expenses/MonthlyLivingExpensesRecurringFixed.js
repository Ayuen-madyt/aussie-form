import React, { Fragment, useEffect, useState } from "react";
import {
  Text,
  TextInput,
  SimpleGrid,
  createStyles,
  Divider,
  Space,
} from "@mantine/core";
import { monthlyLivingExpensesRecurringFixedAction } from "../../redux/actions/expenses/monthlyLivingExpensesRecurringFixed";
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

export default function MonthlyLivingExpensesRecurringFixed() {
  const { classes } = useStyles();
  const [fixedPrivateHealthInsurance, setFixedPrivateHealthInsurance] = useState("");
  const [fixedPrivateHealthInsuranceNotes, setFixedPrivateHealthInsuranceNotes] = useState("");
  const [fixedLifeInsurance, setFixedLifeInsurance] = useState("");
  const [fixedLifeInsuranceNotes, setFixedLifeInsuranceNotes] = useState("");
  const [fixedChildCosts, setFixedChildCosts] = useState("");
  const [fixedChildCostsNotes, setFixedChildCostsNotes] = useState("");
  const [comprehensiveLifeInsurance, setComprehensiveLifeInsurance] = useState("");
  const [comprehensiveLifeInsuranceNotes, setComprehensiveLifeInsuranceNotes] = useState("");
  const [fixedOtherInsurance, setFixedOtherInsurance] = useState("");
  const [fixedOtherInsuranceNotes, setFixedOtherInsuranceNotes] = useState("");
  const [schoolTutionFees, setSchoolTuitionFees] = useState("");
  const [schoolTutionFeesNotes, setSchoolTuitionFeesNotes] = useState("");
  const [childMaintenance, setChildMaintenance] = useState("")
  const [childMaintenanceNotes, setChildMaintenanceNotes] = useState("");
  const [fixedOngoingRentalPayment, setFixedOngoingRentalPayment] = useState("");
  const [fixedOngoingRentalPaymentNotes, setFixedOngoingRentalPaymentNotes] = useState("");
  const [fixedOther, setFixedOther] = useState("");
  const [fixedOtherNotes, setFixedOtherNotes] = useState("");
  const [totalFixedOrRecurring, setTotalFixedOrRecurring] = useState("");
  const [totalFixedOrRecurringPlusBasic, setTotalFixedOrRecurringPlusBasic] =  useState("")


  const dispatch = useDispatch();

  const expensesFixedRecurringData = {
    fixedPrivateHealthInsurance,
    fixedPrivateHealthInsuranceNotes,
    fixedLifeInsurance,
    fixedLifeInsuranceNotes,
    fixedChildCosts,
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
    totalFixedOrRecurringPlusBasic
  };


  useEffect(()=>{
    if(totalFixedOrRecurringPlusBasic){
      dispatch(monthlyLivingExpensesRecurringFixedAction(expensesFixedRecurringData))
    }
  },[totalFixedOrRecurringPlusBasic])

  return (
    <Fragment>
      {/* montly living expenses - fixed or recurring */}
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
          <TextInput value={fixedPrivateHealthInsurance} onChange={e=>setFixedPrivateHealthInsurance(e.target.value)} type="number" placeholder="$ 0.00" />
          <TextInput value={fixedPrivateHealthInsuranceNotes} onChange={e=>setFixedPrivateHealthInsuranceNotes(e.target.value)} type="text" placeholder="notes" />
        </SimpleGrid>

        <SimpleGrid cols={3} mt="xl">
          <Text className={classes.text}>Life Insurance :</Text>
          <TextInput value={fixedLifeInsurance} onChange={e=>setFixedLifeInsurance(e.target.value)} type="number" placeholder="$ 0.00" />
          <TextInput value={fixedLifeInsuranceNotes} onChange={e=>setFixedLifeInsuranceNotes(e.target.value)} type="text" placeholder="notes" />
        </SimpleGrid>

        <SimpleGrid cols={3} mt="xl">
          <Text className={classes.text}>Child care costs :</Text>
          <TextInput value={fixedChildCosts} onChange={e=>setFixedChildCosts(e.target.value)} type="number" placeholder="$ 0.00" />
          <TextInput value={fixedChildCostsNotes} onChange={e=>setFixedChildCostsNotes(e.target.value)} type="text" placeholder="notes" />
        </SimpleGrid>

        <SimpleGrid cols={3} mt="xl">
          <Text className={classes.text}>Comprehensive Live Insurance :</Text>
          <TextInput value={comprehensiveLifeInsurance} onChange={e=>setComprehensiveLifeInsurance(e.target.value)} type="number" placeholder="$ 0.00" />
          <TextInput value={comprehensiveLifeInsuranceNotes} onChange={e=>setComprehensiveLifeInsuranceNotes(e.target.value)} type="text" placeholder="notes" />
        </SimpleGrid>

        <SimpleGrid cols={3} mt="xl">
          <Text className={classes.text}>
            Other Insurance{" "}
            <i className={classes.italics}>
              (Income protection, specified items, Landlord)
            </i>
            :
          </Text>
          <TextInput value={fixedOtherInsurance} onChange={e=>setFixedOtherInsurance(e.target.value)} type="number" placeholder="$ 0.00" />
          <TextInput value={fixedOtherInsuranceNotes} onChange={e=>setFixedOtherInsuranceNotes(e.target.value)} type="text" placeholder="notes" />
        </SimpleGrid>

        <SimpleGrid cols={3} mt="xl">
          <Text className={classes.text}>
            Private School Fees, Ongoing Private Tuition etc :
          </Text>
          <TextInput value={schoolTutionFees} onChange={e=>setSchoolTuitionFees(e.target.value)} type="number" placeholder="$ 0.00" />
          <TextInput value={schoolTutionFeesNotes} onChange={e=>setSchoolTuitionFeesNotes(e.target.value)} type="text" placeholder="notes" />
        </SimpleGrid>

        <SimpleGrid cols={3} mt="xl">
          <Text className={classes.text}>
            Court-ordered Child Maintenance :
          </Text>
          <TextInput value={childMaintenance} onChange={e=>setChildMaintenance(e.target.value)} type="number" placeholder="$ 0.00" />
          <TextInput value={childMaintenanceNotes} onChange={e=>setChildMaintenanceNotes(e.target.value)} type="text" placeholder="balance" />
        </SimpleGrid>

        <SimpleGrid cols={3} mt="xl">
          <Text className={classes.text}>Ongoing Rental Payment :</Text>
          <TextInput value={fixedOngoingRentalPayment} onChange={e=>setFixedOngoingRentalPayment(e.target.value)} type="number" placeholder="$ 0.00" />
          <TextInput value={fixedOngoingRentalPaymentNotes} onChange={e=>setFixedOngoingRentalPaymentNotes(e.target.value)} type="text" placeholder="notes" />
        </SimpleGrid>

        <SimpleGrid cols={3} mt="xl">
          <Text className={classes.text}>Other :</Text>
          <TextInput value={fixedOther} onChange={e=>setFixedOther(e.target.value)} type="number" placeholder="$ 0.00" />
          <TextInput value={fixedOtherNotes} onChange={e=>setFixedOtherNotes(e.target.value)} type="text" placeholder="notes" />
        </SimpleGrid>

        <Divider my="sm" />

        <SimpleGrid cols={3} mt="xl">
          <Text className={classes.columnTitle}>
            TOTAL - Fixed or Recurring:
          </Text>
          <TextInput value={totalFixedOrRecurring} onChange={e=>setTotalFixedOrRecurring(e.target.value)} type="number" placeholder="$ 0.00" />
          <Space />
        </SimpleGrid>

        <SimpleGrid cols={3} mt="xl">
          <Text className={classes.columnTitle}>
            TOTAL - BAsic + Fixed Recurring:
          </Text>
          <TextInput value={totalFixedOrRecurringPlusBasic} onChange={e=>setTotalFixedOrRecurringPlusBasic(e.target.value)} type="number" placeholder="$ 0.00" />
          <Space />
        </SimpleGrid>
      </div>
    </Fragment>
  );
}
