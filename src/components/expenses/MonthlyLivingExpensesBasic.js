import React, { Fragment, useEffect, useState } from "react";
import {
  Text,
  TextInput,
  SimpleGrid,
  createStyles,
  Divider,
  Space,
} from "@mantine/core";
import { monthlyLivingExpensesBAsicAction } from "../../redux/actions/expenses/monthlyLivingExpensesBasic";
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

export default function MonthlyLivingExpensesBasic() {
  const { classes } = useStyles();
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

  const dispatch = useDispatch();

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

  useEffect(() => {
    if (totalBasic) {
      dispatch(monthlyLivingExpensesBAsicAction(expensesBasicData));
    }
  }, [totalBasic]);

  return (
    <Fragment>
      {/* monthly living expenses basic*/}
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
            <i className={classes.italics}>(Chemists and medical expenses)</i>:
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
            <i className={classes.italics}>(Building and contents insurance)</i>
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
            <i className={classes.italics}>(Pay Tv, eating out, cinema, etc)</i>
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
    </Fragment>
  );
}
