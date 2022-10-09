import React, { Fragment, useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import Banner from "../shared/Banner";
import ButtonClick from "../ButtonClick";
import { useNavigate } from "react-router-dom";
import { brokerAction } from "../../redux/actions/personalInfo/broker";
import { personalAction } from "../../redux/actions/personalInfo/personal";
import { residentialAddressAction } from "../../redux/actions/personalInfo/residentialAddress";

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
    textPersonal: {
      color: "grey",
    },
    title: {
      backgroundColor: "grey",
      color: "white",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  };
});

export default function PersonalInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { classes } = useStyles();

  // broker state
  const [dateCompleted, onChange] = useState(new Date());
  const [name, setBrokerName] = useState("");
  const [contact, setContact] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [PurchasePrice, setPurchasePrice] = useState("");

  const brokerData = {
    dateCompleted,
    name,
    contact,
    loanAmount,
    PurchasePrice,
  };

  // personal info state
  const [title, setTitle] = useState("");
  const [firstMiddleName, setFirstMiddleName] = useState("");
  const [surname, setSurname] = useState("");
  const [dateOfBirth, setDateBirth] = useState(new Date());
  const [homeContact, setHomeContact] = useState("");
  const [workContact, setWorkContact] = useState("");
  const [mobileContact, setMobileContact] = useState("");
  const [email, setEmail] = useState("");

  const personalInfoData = {
    title,
    firstMiddleName,
    surname,
    dateOfBirth,
    homeContact,
    workContact,
    mobileContact,
    email,
  };

  // residential state
  const [address, setAddress] = useState("");
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");
  const [dateMovedIn, setDateMovedIn] = useState(new Date());
  const [currentStatus, setCurrentStatus] = useState("");
  const [previousAddress, setPreviousAddress] = useState("");
  const [previousSuburb, setPreviousSuburb] = useState("");
  const [previousState, setPreviousState] = useState("");
  const [previousPostcode, setPreviousPostcode] = useState("");
  const [previousDateMovedIn, setPreviousDateMovedIn] = useState(new Date());
  const [previousDateMovedOut, setPreviousDateMovedOut] = useState(new Date());
  const [residencyStatus, setResidencyStatus] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [mothersName, setMothersName] = useState("");
  const [drivingLicenseOrId, setDrivingLicenseOrId] = useState("");
  const [issuer, setIssuer] = useState("");
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [noOfDependentChildren, setNoOfDependentChildren] = useState("");
  const [dateOfBirthOfDependentChildren, setDateBirthOfDependentChildren] =
    useState(new Date());
  const [relativeName, setRelativeName] = useState("");
  const [relativeRelation, setRelativeRelation] = useState("");
  const [relativeContact, setRelativeContact] = useState("");
  const [relativeAddress, setRelativeAddress] = useState("");
  const [relativeSuburb, setRelativeSuburb] = useState("");
  const [relativeState, setRelativeState] = useState("");
  const [relativePostcode, setRelativePostcode] = useState("");

  const currentAddressData = {
    address,
    suburb,
    state,
    postcode,
  };

  const previousAddressData = {
    previousAddress,
    previousSuburb,
    previousState,
    previousPostcode,
    previousDateMovedIn,
    previousDateMovedOut,
  };
  const licenseData = {
    drivingLicenseOrId,
    issuer,
    expiryDate,
  };
  const relativeInfo = {
    relativeName,
    relativeRelation,
    relativeContact,
    relativeAddress,
    relativeSuburb,
    relativeState,
    relativePostcode,
  };

  const residentialAddressData = {
    currentAddressData,
    dateMovedIn,
    currentStatus,
    previousAddressData,
    residencyStatus,
    maritalStatus,
    mothersName,
    licenseData,
    noOfDependentChildren,
    dateOfBirthOfDependentChildren,
    relativeInfo,
  };

  // onclick function
  const onClickNext = () => {
    dispatch(brokerAction(brokerData));
    dispatch(personalAction(personalInfoData));
    dispatch(residentialAddressAction(residentialAddressData));
    navigate("/employment");
  };

  return (
    <Fragment>
      {/* broker */}
      <Paper radius="lg">
        <div className={classes.wrapper}>
          <Text className={classes.text}>
            To assist your discussions, please complete this form and return it
            to your broker before your appointment. If you are unsure of how to
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

      {/* personal */}
      <Fragment>
        <Banner name="Personal Info" />
        <SimpleGrid sx={{ width: "200px", marginTop: "-10px" }} cols={1}>
          <Text className={classes.title}>Personal</Text>
        </SimpleGrid>
        <Divider my="sm" />
        <SimpleGrid cols={2}>
          <Text className={classes.textPersonal}>
            Title (please select title):
          </Text>
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
      </Fragment>

      {/* residentialAddress */}
      <Paper>
        <SimpleGrid sx={{ width: "fit-content", marginTop: "10px" }} cols={1}>
          <Text className={classes.title}>Current Residential Address</Text>
        </SimpleGrid>

        <Divider my="sm" />

        <SimpleGrid sx={{ marginTop: "15px" }} cols={2}>
          <Text className={classes.textPersonal}>Current Address:</Text>
          <div>
            <TextInput
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              label="Address"
              placeholder="address"
              required
            />
            <SimpleGrid cols={3}>
              <TextInput
                value={suburb}
                onChange={(e) => setSuburb(e.target.value)}
                label="Suburb"
                placeholder="suburb"
                required
              />
              <TextInput
                value={state}
                onChange={(e) => setState(e.target.value)}
                label="State"
                placeholder="state"
                required
              />
              <TextInput
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                label="PostCode"
                placeholder="postcode"
                required
              />
            </SimpleGrid>
          </div>
        </SimpleGrid>
        <SimpleGrid sx={{ marginTop: "15px" }} cols={2}>
          <Text className={classes.textPersonal}>
            How long have you been at this current address:
          </Text>
          <DatePicker
            value={dateMovedIn}
            onChange={setDateMovedIn}
            label="Date moved in"
            placeholder="select a date"
            withAsterisk
          />
        </SimpleGrid>
        <SimpleGrid cols={2}>
          <Text className={classes.textPersonal}>Current status:</Text>
          <Radio.Group
            withAsterisk
            value={currentStatus}
            onChange={setCurrentStatus}
          >
            <Radio value="owner" label="Owner" />
            <Radio value="renting" label="Renting" />
            <Radio value="boarding" label="Boarding" />
            <Radio value="living with parents" label="Living with parents" />
            <Radio value="owner with mortgage" label="Owner with mortgage" />
          </Radio.Group>
        </SimpleGrid>
        <SimpleGrid sx={{ marginTop: "15px" }} cols={2}>
          <Text className={classes.textPersonal}>
            Previous Address (If at current address for less than 3 years):
          </Text>
          <div>
            <TextInput
              value={previousAddress}
              onChange={(e) => setPreviousAddress(e.target.value)}
              label="Address"
              placeholder="address"
              required
            />
            <SimpleGrid cols={3}>
              <TextInput
                value={previousSuburb}
                onChange={(e) => setPreviousSuburb(e.target.value)}
                label="Suburb"
                placeholder="suburb"
                required
              />
              <TextInput
                value={previousState}
                onChange={(e) => setPreviousState(e.target.value)}
                label="State"
                placeholder="state"
                required
              />
              <TextInput
                value={previousPostcode}
                onChange={(e) => setPreviousPostcode(e.target.value)}
                label="PostCode"
                placeholder="postcode"
                required
              />
            </SimpleGrid>
          </div>
        </SimpleGrid>

        <SimpleGrid sx={{ marginTop: "15px" }} cols={2}>
          <Text className={classes.textPersonal}>
            How long were you at this Address:
          </Text>
          <SimpleGrid cols={2}>
            <DatePicker
              value={previousDateMovedIn}
              onChange={setPreviousDateMovedIn}
              label="Date moved in"
              placeholder="select a date"
              withAsterisk
            />
            <DatePicker
              value={previousDateMovedOut}
              onChange={setPreviousDateMovedOut}
              label="Date moved out"
              placeholder="select a date"
              withAsterisk
            />
          </SimpleGrid>
        </SimpleGrid>

        <SimpleGrid sx={{ marginTop: "15px" }} cols={2}>
          <Text className={classes.textPersonal}>Residency Status:</Text>
          <Radio.Group
            withAsterisk
            value={residencyStatus}
            onChange={setResidencyStatus}
          >
            <Radio value="australian citizen" label="Australian citizen" />
            <Radio value="permanent resident" label="Permanent resident" />
            <Radio value="temporary resident" label="Temporary resident" />
            <Radio value="visitor" label="Visitor" />
          </Radio.Group>
        </SimpleGrid>

        <SimpleGrid sx={{ marginTop: "15px" }} cols={2}>
          <Text className={classes.textPersonal}>Marital Status:</Text>
          <Radio.Group
            withAsterisk
            cols={3}
            value={maritalStatus}
            onChange={setMaritalStatus}
          >
            <Radio value="married" label="Married" />
            <Radio value="single" label="Single" />
            <Radio value="divorced" label="Divorced" />
            <Radio value="de facto" label="De Facto" />
            <Radio value="separated" label="Separated" />
            <Radio value="widowed" label="Widowed" />
          </Radio.Group>
        </SimpleGrid>

        <SimpleGrid sx={{ marginTop: "15px" }} cols={2}>
          <Text className={classes.textPersonal}>Mother's maiden name:</Text>
          <TextInput
            value={mothersName}
            onChange={(e) => setMothersName(e.target.value)}
            type="text"
            placeholder="mother's name"
            rightSectionWidth={92}
          />
        </SimpleGrid>

        <SimpleGrid sx={{ marginTop: "15px" }} cols={2}>
          <Text className={classes.textPersonal}>
            Drivers license/State issued ID:
          </Text>
          <div>
            <TextInput
              value={drivingLicenseOrId}
              onChange={(e) => setDrivingLicenseOrId(e.target.value)}
              label="No"
              placeholder="license/ID No."
              required
            />
            <TextInput
              value={issuer}
              onChange={(e) => setIssuer(e.target.value)}
              label="State/Government issuer"
              placeholder="issuer"
              required
            />
            <DatePicker
              allowFreeInput
              value={expiryDate}
              onChange={setExpiryDate}
              label="Expiry date"
              placeholder="select a date"
              withAsterisk
            />
          </div>
        </SimpleGrid>

        <SimpleGrid sx={{ marginTop: "15px" }} cols={2}>
          <Text className={classes.textPersonal}>
            Number of dependent children:
          </Text>
          <TextInput
            value={noOfDependentChildren}
            onChange={(e) => setNoOfDependentChildren(e.target.value)}
            type="number"
            placeholder="number of children"
            rightSectionWidth={92}
          />
        </SimpleGrid>

        <SimpleGrid sx={{ marginTop: "15px" }} cols={2}>
          <Text className={classes.textPersonal}>
            Age/Date of birth of dependent children:
          </Text>
          <DatePicker
            allowFreeInput
            value={dateOfBirthOfDependentChildren}
            onChange={setDateBirthOfDependentChildren}
            placeholder="age/date of birth"
            rightSectionWidth={92}
          />
        </SimpleGrid>

        <SimpleGrid sx={{ marginTop: "15px" }} cols={2}>
          <Text className={classes.textPersonal}>Nearest living relative:</Text>
          <SimpleGrid cols={2}>
            <TextInput
              value={relativeName}
              onChange={(e) => setRelativeName(e.target.value)}
              label="Name"
              placeholder="name"
              required
            />
            <TextInput
              value={relativeRelation}
              onChange={(e) => setRelativeRelation(e.target.value)}
              label="Relationship"
              placeholder="relationship"
              required
            />
            <TextInput
              value={relativeContact}
              onChange={(e) => setRelativeContact(e.target.value)}
              label="Contact number"
              placeholder="contact number"
              required
            />
          </SimpleGrid>
        </SimpleGrid>

        <SimpleGrid sx={{ marginTop: "15px" }} cols={2}>
          <Text className={classes.textPersonal}>Relative Address:</Text>
          <div>
            <TextInput
              value={relativeAddress}
              onChange={(e) => setRelativeAddress(e.target.value)}
              label="Address"
              placeholder="address"
              required
            />
            <SimpleGrid cols={3}>
              <TextInput
                value={relativeSuburb}
                onChange={(e) => setRelativeSuburb(e.target.value)}
                label="Suburb"
                placeholder="suburb"
                required
              />
              <TextInput
                value={relativeState}
                onChange={(e) => setRelativeState(e.target.value)}
                label="State"
                placeholder="state"
                required
              />
              <TextInput
                value={relativePostcode}
                onChange={(e) => setRelativePostcode(e.target.value)}
                label="PostCode"
                placeholder="postcode"
                required
              />
            </SimpleGrid>
          </div>
        </SimpleGrid>
      </Paper>

      {/* button click */}
      <ButtonClick next={onClickNext} />
    </Fragment>
  );
}
