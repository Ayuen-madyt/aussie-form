import React, { Fragment, useEffect, useState } from "react";
import { Text, TextInput, SimpleGrid, createStyles } from "@mantine/core";

import { savingsAccountAction } from "../../redux/actions/assets/savingsAccount";
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

export default function Savings() {
  const { classes } = useStyles();
  const [institutionAccount1, setInstitution1] = useState("");
  const [institutionAccount2, setInstitution2] = useState("");
  const [institutionAccount3, setInstitution3] = useState("");
  const [balanceAccount1, setBalanceAccount1] = useState("");
  const [balanceAccount2, setBalanceAccount2] = useState("");
  const [balanceAccount3, setBalanceAccount3] = useState("");

  const dispatch = useDispatch();

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
  const data = {
    institution1,
    institution2,
    institution3,
  };

  useEffect(() => {
    if (institutionAccount1 && balanceAccount1) {
      dispatch(savingsAccountAction(data));
    }
  }, [institutionAccount1, balanceAccount1]);

  return (
    <Fragment>
      {/* savings account and term deposits*/}
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
    </Fragment>
  );
}
