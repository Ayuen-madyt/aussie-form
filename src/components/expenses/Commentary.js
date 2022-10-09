import React, { Fragment, useEffect, useState } from "react";
import { Text, SimpleGrid, createStyles, Textarea } from "@mantine/core";
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

export default function Commentary() {
  const { classes } = useStyles();
  const [commentary, setCommentary] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (commentary) {
      dispatch(commentaryAction(commentary));
    }
  }, [commentary]);

  return (
    <Fragment>
      {/* additional commentary */}
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
    </Fragment>
  );
}
