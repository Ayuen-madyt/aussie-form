import React, { Fragment, useEffect, useState } from "react";
import { Text, TextInput, SimpleGrid, createStyles } from "@mantine/core";
import { superannuationAction } from "../../redux/actions/assets/superannuation";
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

export default function Superannuation() {
  const { classes } = useStyles();
  const [superannuation, setSuperannuation] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (superannuation) {
      dispatch(superannuationAction(superannuation));
    }
  }, [superannuation]);
  return (
    <Fragment>
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
    </Fragment>
  );
}
