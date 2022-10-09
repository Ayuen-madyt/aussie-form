import React, { Fragment, useEffect, useState } from "react";
import { Text, TextInput, SimpleGrid, createStyles } from "@mantine/core";
import { householdItemsAction } from "../../redux/actions/assets/householdItems";
import { useDispatch, useSelector } from "react-redux";

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

export default function HouseholdItems() {
  const { classes } = useStyles();
  const [valueItems, setValueItems] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (valueItems) {
      dispatch(householdItemsAction(valueItems));
    }
  }, [valueItems]);

  return (
    <Fragment>
      {/* house hold items */}
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
    </Fragment>
  );
}
