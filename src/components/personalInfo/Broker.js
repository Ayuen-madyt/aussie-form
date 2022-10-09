import React, { useEffect, useState } from "react";
import {
  Paper,
  Text,
  TextInput,
  SimpleGrid,
  createStyles,
  Divider,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import {brokerAction} from "../../redux/actions/personalInfo/broker";
import { useDispatch } from "react-redux";

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    wrapper: {
      display: "flex",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    form: {
      boxSizing: "border-box",
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: theme.spacing.xl * 2,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },
    text: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "60%",
    },
  };
});

export default function Broker() {
  const { classes } = useStyles();

  const [dateCompleted, onChange] = useState(new Date());
  const [name, setBrokerName] = useState("");
  const [contact, setContact] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [PurchasePrice, setPurchasePrice] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      name,
      contact,
      loanAmount,
      PurchasePrice,
      dateCompleted,
    };
    if (dateCompleted && name && contact && loanAmount && PurchasePrice) {
      dispatch(brokerAction(data));
    }
  }, [dateCompleted, name, contact, loanAmount, PurchasePrice]);

  return (
    <Paper radius="lg">
      <div className={classes.wrapper}>
        <Text className={classes.text}>
          To assist your discussions, please complete this form and return it to
          your broker before your appointment. If you are unsure of how to
          complete any section in this editable document your broker will be
          able to help you.
        </Text>
        <div
          className={classes.form}
          onSubmit={(event) => event.preventDefault()}
        >
          <DatePicker
            value={dateCompleted}
            onChange={onChange}
            placeholder="Pick date"
            label="Date Completed"
            withAsterisk
          />
        </div>
      </div>
      <Divider my="sm" />
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <TextInput
          value={name}
          onChange={(event) => setBrokerName(event.currentTarget.value)}
          label="Broker Name"
          placeholder="Broker Name"
          required
        />
        <TextInput
          value={contact}
          onChange={(event) => setContact(event.currentTarget.value)}
          label="Broker Contact Number"
          placeholder="contact"
          type="number"
          required
        />
      </SimpleGrid>

      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <TextInput
          value={loanAmount}
          onChange={(event) => setLoanAmount(event.currentTarget.value)}
          mt="md"
          label="Loan Amount Sought $"
          placeholder="amount"
          type="number"
          required
        />
        <TextInput
          value={PurchasePrice}
          onChange={(event) => setPurchasePrice(event.currentTarget.value)}
          mt="md"
          label="Purchase Price or Property Value"
          placeholder="price"
          type="number"
          required
        />
      </SimpleGrid>
      <Divider my="sm" />
    </Paper>
  );
}
