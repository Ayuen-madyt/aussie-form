import React, { useEffect, useState } from "react";
import {
  Paper,
  Text,
  TextInput,
  SimpleGrid,
  createStyles,
  Divider,
  Radio,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { personalAction } from "../../redux/actions/personalInfo/personal";
import { useDispatch } from "react-redux";

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");
  return {
    title: {
      backgroundColor: "grey",
      color: "white",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    textPersonal: {
      color: "grey",
    },
  };
});

export default function Personal() {
  const { classes } = useStyles();
  const [title, setTitle] = useState("");
  const [firstMiddleName, setFirstMiddleName] = useState("");
  const [surname, setSurname] = useState("");
  const [dateOfBirth, setDateBirth] = useState(new Date());
  const [homeContact, setHomeContact] = useState("");
  const [workContact, setWorkContact] = useState("");
  const [mobileContact, setMobileContact] = useState("");
  const [email, setEmail] = useState("");

  const data = {
    title,
    firstMiddleName,
    surname,
    dateOfBirth,
    homeContact,
    workContact,
    mobileContact,
    email,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      title &&
      firstMiddleName &&
      surname &&
      dateOfBirth &&
      homeContact &&
      workContact &&
      mobileContact &&
      email
    ) {
      dispatch(personalAction(data));
    }
  }, [
    title,
    firstMiddleName,
    surname,
    dateOfBirth,
    homeContact,
    workContact,
    mobileContact,
    email,
  ]);

  return (
    <Paper>
      {/* personal details */}
      <SimpleGrid sx={{ width: "200px", marginTop: "-10px" }} cols={1}>
        <Text className={classes.title}>Personal</Text>
      </SimpleGrid>
      <Divider my="sm" />
      <SimpleGrid cols={2}>
        <Text className={classes.textPersonal}>Title (please select title):</Text>
        <Radio.Group withAsterisk value={title} onChange={setTitle}>
          <Radio value="mr" label="Mr" />
          <Radio value="mrs" label="Mrs" />
          <Radio value="miss" label="Miss" />
          <Radio value="ms" label="Ms" />
          <Radio value="dr" label="Dr" />
          <Radio value="other" label="Other" />
        </Radio.Group>
      </SimpleGrid>
      <SimpleGrid sx={{ marginTop: "15px" }} cols={2}>
        <Text className={classes.textPersonal}>First and Middle Names:</Text>
        <TextInput
          value={firstMiddleName}
          onChange={(e) => setFirstMiddleName(e.target.value)}
          type="text"
          placeholder="your names"
          rightSectionWidth={92}
        />
      </SimpleGrid>
      <SimpleGrid sx={{ marginTop: "15px" }} cols={2}>
        <Text className={classes.textPersonal}>Surname Name:</Text>
        <TextInput
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          type="text"
          placeholder="surname"
          rightSectionWidth={92}
        />
      </SimpleGrid>
      <SimpleGrid sx={{ marginTop: "15px" }} cols={2}>
        <Text className={classes.textPersonal}>Date Of Birth (D.O.B):</Text>
        <DatePicker
          value={dateOfBirth}
          onChange={setDateBirth}
          placeholder="select a date"
        />
      </SimpleGrid>

      <SimpleGrid sx={{ marginTop: "15px" }} cols={2}>
        <Text className={classes.textPersonal}>Contact Phone Numbers:</Text>
        <SimpleGrid cols={3}>
          <TextInput
            value={homeContact}
            onChange={(e) => setHomeContact(e.target.value)}
            type="number"
            label="Home"
            placeholder="home contact"
            required
          />
          <TextInput
            value={workContact}
            onChange={(e) => setWorkContact(e.target.value)}
            type="number"
            label="Work"
            placeholder="work contact"
            required
          />
          <TextInput
            value={mobileContact}
            onChange={(e) => setMobileContact(e.target.value)}
            type="number"
            label="Mobile"
            placeholder="Mobile number"
            required
          />
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid sx={{ marginTop: "15px" }} cols={2}>
        <Text className={classes.textPersonal}>Email Address:</Text>
        <TextInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email"
          rightSectionWidth={92}
        />
      </SimpleGrid>
    </Paper>
  );
}
