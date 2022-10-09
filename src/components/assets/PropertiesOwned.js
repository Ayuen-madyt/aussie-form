import React, { useEffect, useState, Fragment } from "react";

import {
  Text,
  TextInput,
  SimpleGrid,
  createStyles,
  Radio,
} from "@mantine/core";
import { propertiesOwnedAction } from "../../redux/actions/assets/propertiesOwned";
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

export default function PropertiesOwned() {
  const { classes } = useStyles();
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

  const dispatch = useDispatch();

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

  const data = {
    property1,
    property2,
    property3,
  };

  useEffect(() => {
    if (
      propertyOneAddress &&
      propertyTwoAddress &&
      propertyThreeAddress &&
      valuePropertyOne &&
      valuePropertyTwo &&
      valuePropertyThree
    ) {
      dispatch(propertiesOwnedAction(data));
    }
  }, [
    propertyOneAddress,
    propertyTwoAddress,
    propertyThreeAddress,
    valuePropertyOne,
    valuePropertyTwo,
    valuePropertyThree,
  ]);

  return (
    <Fragment>
      {/* properties owned*/}
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
    </Fragment>
  );
}
