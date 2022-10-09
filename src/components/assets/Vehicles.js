import React, { Fragment, useEffect, useState } from "react";
import { Text, TextInput, SimpleGrid, createStyles } from "@mantine/core";
import { motorVehiclesAction } from "../../redux/actions/assets/motorVehicles";
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

export default function Vehicles() {
  const { classes } = useStyles();
  const [makeModel1, setMakeModel1] = useState("");
  const [makeModel2, setMakeModel2] = useState("");
  const [makeModel3, setMakeModel3] = useState("");
  const [yearBuild1, setYearBuild1] = useState("");
  const [yearBuild2, setYearBuild2] = useState("");
  const [yearBuild3, setYearBuild3] = useState("");
  const [vehicleBalance1, setVehicleBalance1] = useState("");
  const [vehicleBalance2, setVehicleBalance2] = useState("");
  const [vehicleBalance3, setVehicleBalance3] = useState("");

  const dispatch = useDispatch();

  const vehicle1 = {
    makeModel1,
    yearBuild1,
    vehicleBalance1,
  };
  const vehicle2 = {
    makeModel2,
    yearBuild2,
    vehicleBalance2,
  };

  const vehicle3 = {
    makeModel3,
    yearBuild3,
    vehicleBalance3,
  };

  const vehicleData = {
    vehicle1,
    vehicle2,
    vehicle3,
  };

  useEffect(() => {
    if (vehicleBalance1 && vehicleBalance2 && vehicleBalance3) {
      dispatch(motorVehiclesAction(vehicleData));
    }
  }, [vehicleBalance1, vehicleBalance2, vehicleBalance3]);

  return (
    <Fragment>
      {/* motor vehicles */}
      <div className="motor-vehicles" style={{ marginTop: "30px" }}>
        <div className={classes.assetsBanner}>
          <SimpleGrid cols={4}>
            <SimpleGrid cols={1}>
              <Text className={classes.title}>Motor vehicles</Text>
            </SimpleGrid>
            <Text className={classes.columnTitle}>Vehicle 1</Text>
            <Text className={classes.columnTitle}>Vehicle 2</Text>
            <Text className={classes.columnTitle}>Vehicle 3</Text>
          </SimpleGrid>
        </div>
        <div>
          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Make and model:</Text>
            <TextInput
              value={makeModel1}
              onChange={(e) => setMakeModel1(e.target.value)}
              type="text"
              placeholder="make and model"
              withAsterisk
            />
            <TextInput
              value={makeModel2}
              onChange={(e) => setMakeModel2(e.target.value)}
              type="text"
              placeholder="make and model"
              withAsterisk
            />
            <TextInput
              value={makeModel3}
              onChange={(e) => setMakeModel3(e.target.value)}
              type="text"
              placeholder="make and model"
              withAsterisk
            />
          </SimpleGrid>

          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Year build:</Text>
            <TextInput
              value={yearBuild1}
              onChange={(e) => setYearBuild1(e.target.value)}
              type="text"
              placeholder="year build"
              withAsterisk
            />
            <TextInput
              value={yearBuild2}
              onChange={(e) => setYearBuild2(e.target.value)}
              type="text"
              placeholder="year build"
              withAsterisk
            />
            <TextInput
              value={yearBuild3}
              onChange={(e) => setYearBuild3(e.target.value)}
              type="text"
              placeholder="year build"
              withAsterisk
            />
          </SimpleGrid>

          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Balance:</Text>
            <TextInput
              value={vehicleBalance1}
              onChange={(e) => setVehicleBalance1(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={vehicleBalance2}
              onChange={(e) => setVehicleBalance2(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={vehicleBalance3}
              onChange={(e) => setVehicleBalance3(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
          </SimpleGrid>
        </div>
      </div>
    </Fragment>
  );
}
