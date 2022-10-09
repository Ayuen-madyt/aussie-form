import React, { Fragment, useEffect, useState } from "react";
import { Text, TextInput, SimpleGrid, createStyles } from "@mantine/core";
import { otherAssetsAction } from "../../redux/actions/assets/otherAssets";
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

export default function OtherAssets() {
  const { classes } = useStyles();
  const [assetType1, setAssetType1] = useState("");
  const [assetType2, setAssetType2] = useState("");
  const [assetType3, setAssetType3] = useState("");
  const [valueAssetType1, setValueAssetType1] = useState("");
  const [valueAssetType2, setValueAssetType2] = useState("");
  const [valueAssetType3, setValueAssetType3] = useState("");

  const dispatch = useDispatch();

  const otherAssetsData = {
    assetType1,
    assetType2,
    assetType3,
    valueAssetType1,
    valueAssetType2,
    valueAssetType3,
  };

  useEffect(
    () => {
      if (valueAssetType3 && valueAssetType3) {
        dispatch(otherAssetsAction(otherAssetsData));
      }
    },
    [valueAssetType3],
    valueAssetType3
  );

  return (
    <Fragment>
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
    </Fragment>
  );
}
