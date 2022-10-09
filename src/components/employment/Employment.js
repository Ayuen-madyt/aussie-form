import React, { useState } from "react";
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
import Banner from "../shared/Banner";
import { employmentAction } from "../../redux/actions/employment/employment";
import { useDispatch, useSelector } from "react-redux";
import ButtonClick from "../ButtonClick";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");
  return {
    title: {
      backgroundColor: "grey",
      color: "white",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    text: {
      color: "grey",
    },
    italics: {
      fontSize: "12px",
      color: "grey",
    },
  };
});

export default function Employment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { classes } = useStyles();

  const [employmentType, setEmploymentType] = useState("");
  const [employersName, setEmployersName] = useState("");
  const [employerContactName, setEmployerContactName] = useState("");
  const [employerContact, setEmployerContact] = useState("");
  const [address, setAddress] = useState("");
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");
  const [currentOccupation, setCurrentOccupation] = useState("");
  const [timeWithCurrentEmployer, setTimeWithCurrentEmployer] = useState(
    new Date()
  );
  const [salary, setSalary] = useState("");
  const [grossAnnualOvertime, setGrossAnnualOvertime] = useState("");
  const [otherAnnualIncome, setOtherAnnualIncome] = useState("");
  const [grossWeeklyRentalIncome, setGrossWeeklyRentalIncome] = useState("");
  const [previousEmployerName, setPreviousEmployerName] = useState("");
  const [previousStartDate, setPreviousStartDate] = useState(new Date());
  const [previousEndDate, setPreviousEndDate] = useState(new Date());
  const [previousEmployerPhoneNumber, setPreviousEmployerPhoneNumber] =
    useState("");
  const [previousEmploymentType, setPreviousEmploymentType] = useState("");
  const [previousOccupation, setPreviousOccupation] = useState("");
  const [ABN, setABN] = useState("");
  const [directorOfCompany, setDirectorOfCompany] = useState("");
  const [companyTrustName, setCompanyTrustName] = useState("");
  const [directorsName, setDirectorsName] = useState("");
  const [tradingAddress, setTradingAddress] = useState("");
  const [tradingSuburb, setTradingSuburb] = useState("");
  const [tradingState, setTradingState] = useState("");
  const [tradingPostcode, setTradingPostcode] = useState("");
  const [numberOfYearsRegistered, setNumberOfYearsRegistered] = useState("");
  const [ACN, setACN] = useState("");

  const currentEmployerData = {
    address,
    suburb,
    state,
    postcode,
  };
  const companyDetails = {
    companyTrustName,
    directorsName,
    tradingAddress,
    tradingSuburb,
    tradingState,
    tradingPostcode,
  };

  const data = {
    employmentType,
    employersName,
    employerContactName,
    employerContact,
    currentEmployerData,
    currentOccupation,
    timeWithCurrentEmployer,
    salary,
    grossAnnualOvertime,
    otherAnnualIncome,
    grossWeeklyRentalIncome,
    previousEmployerName,
    previousStartDate,
    previousEndDate,
    previousEmployerPhoneNumber,
    previousEmploymentType,
    previousOccupation,
    ABN,
    directorOfCompany,
    companyDetails,
    numberOfYearsRegistered,
    ACN,
  };

  // onclick function
  const onClickNext = () => {
    dispatch(employmentAction(data));
    navigate("/assets");
  };

  // onclick function
  const onClickBack = () => {
    navigate("/");
  };

  return (
    <Paper>
      <Banner name="Employment" />
      <SimpleGrid sx={{ marginTop: "15px" }} cols={2}>
        <Text className={classes.text}>Current employment type:</Text>
        <Radio.Group
          withAsterisk
          cols={3}
          value={employmentType}
          onChange={setEmploymentType}
          required
        >
          <Radio value="full-time" label="Full-time" />
          <Radio value="contract" label="Contract" />
          <Radio value="casual" label="Casual" />
          <Radio value="permanent part-time" label="Permanent part-time" />
          <Radio value="self-Employed" label="Self-Employed" />
        </Radio.Group>
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl">
        <Text className={classes.text}>Current employers name:</Text>
        <TextInput
          value={employersName}
          onChange={(e) => setEmployersName(e.target.value)}
          type="text"
          placeholder="employer's name"
          required
        />
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl">
        <div>
          <Text className={classes.text}>Contacts details:</Text>
          <Text className={classes.italics}>
            <i>(fEmployer details - for verifying employment)</i>
          </Text>
        </div>
        <div>
          <TextInput
            value={employerContactName}
            onChange={(e) => setEmployerContactName(e.target.value)}
            label="Name"
            type="text"
            placeholder="name"
            withAsterisk
            required
          />
          <TextInput
            value={employerContact}
            onChange={(e) => setEmployerContact(e.target.value)}
            label="Phone number"
            type="text"
            placeholder="number"
            withAsterisk
            required
          />
        </div>
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl">
        <Text className={classes.text}>Current employer address:</Text>
        <div>
          <TextInput
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="address"
            required
          />
          <SimpleGrid cols={3}>
            <TextInput
              value={suburb}
              onChange={(e) => setSuburb(e.target.value)}
              label="Suburb"
              type="text"
              placeholder="number"
              withAsterisk
              required
            />
            <TextInput
              value={state}
              onChange={(e) => setState(e.target.value)}
              label="State"
              type="text"
              placeholder="state"
              withAsterisk
              required
            />
            <TextInput
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              label="PostCode"
              type="text"
              placeholder="post code"
              withAsterisk
              required
            />
          </SimpleGrid>
        </div>
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl">
        <Text className={classes.text}>Current occupation/Job title:</Text>
        <TextInput
          value={currentOccupation}
          onChange={(e) => setCurrentOccupation(e.target.value)}
          type="text"
          placeholder="occupation"
          required
        />
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl">
        <Text className={classes.text}>Time with current employer:</Text>
        <DatePicker
          value={timeWithCurrentEmployer}
          onChange={setTimeWithCurrentEmployer}
          label="Start date"
          placeholder="select a date"
          withAsterisk
          required
        />
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl">
        <div>
          <Text className={classes.text}>Income-gross annual salary:</Text>
          <Text className={classes.italics}>
            <i>(before tax)</i>
          </Text>
        </div>
        <TextInput
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          label="$"
          type="number"
          placeholder="amount"
          withAsterisk
          required
        />
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl">
        <div>
          <Text className={classes.text}>Gross annual overtime/Penalties:</Text>
          <Text className={classes.italics}>
            <i>(before tax)</i>
          </Text>
        </div>
        <TextInput
          value={grossAnnualOvertime}
          onChange={(e) => setGrossAnnualOvertime(e.target.value)}
          label="$"
          type="number"
          placeholder="amount"
          withAsterisk
          required
        />
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl">
        <div>
          <Text className={classes.text}>
            Other annual income-pensions, FTB:
          </Text>
          <Text className={classes.italics}>
            <i>(P.A before tax)</i>
          </Text>
        </div>
        <TextInput
          value={otherAnnualIncome}
          onChange={(e) => setOtherAnnualIncome(e.target.value)}
          label="$"
          type="number"
          placeholder="amount"
          withAsterisk
          required
        />
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl">
        <div>
          <Text className={classes.text}>
            Income-gross weekly rental income:
          </Text>
          <Text className={classes.italics}>
            <i>(before tax)</i>
          </Text>
        </div>
        <TextInput
          value={grossWeeklyRentalIncome}
          onChange={(e) => setGrossWeeklyRentalIncome(e.target.value)}
          label="$"
          type="number"
          placeholder="amount"
          withAsterisk
          required
        />
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl">
        <div>
          <Text className={classes.text}>Previous employer's full name:</Text>
          <Text className={classes.italics}>
            <i>(if current employment is less than 3 years)</i>
          </Text>
        </div>
        <TextInput
          value={previousEmployerName}
          onChange={(e) => setPreviousEmployerName(e.target.value)}
          type="text"
          placeholder="full name"
          withAsterisk
          required
        />
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl">
        <Text className={classes.text}>Time with Previous employer:</Text>
        <SimpleGrid cols={2}>
          <DatePicker
            value={previousStartDate}
            onChange={setPreviousStartDate}
            label="Start date"
            placeholder="select a date"
            withAsterisk
            required
          />
          <DatePicker
            value={previousEndDate}
            onChange={setPreviousEndDate}
            label="End date"
            placeholder="select a date"
            withAsterisk
            required
          />
        </SimpleGrid>
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl">
        <Text className={classes.text}>Previous employers phone number:</Text>
        <TextInput
          value={previousEmployerPhoneNumber}
          onChange={(e) => setPreviousEmployerPhoneNumber(e.target.value)}
          type="number"
          placeholder="phone number"
          required
        />
      </SimpleGrid>

      <SimpleGrid sx={{ marginTop: "15px" }} cols={2}>
        <Text className={classes.text}>Previous employment type:</Text>
        <Radio.Group
          withAsterisk
          cols={3}
          value={previousEmploymentType}
          onChange={setPreviousEmploymentType}
          required
        >
          <Radio value="full-time" label="Full-time" />
          <Radio value="contract" label="Contract" />
          <Radio value="casual" label="Casual" />
          <Radio value="permanent part-time" label="Permanent part-time" />
          <Radio value="self-Employed" label="Self-Employed" />
        </Radio.Group>
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl">
        <Text className={classes.text}>Previous occupation/Job title:</Text>
        <TextInput
          value={previousOccupation}
          onChange={(e) => setPreviousOccupation(e.target.value)}
          type="text"
          placeholder="occupation"
          required
        />
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl">
        <Text className={classes.text}>
          ABN <i className={classes.italics}>(if self employed)</i>:
        </Text>
        <TextInput
          value={ABN}
          onChange={(e) => setABN(e.target.value)}
          type="text"
          placeholder="type of self employment"
          required
        />
      </SimpleGrid>

      <SimpleGrid sx={{ marginTop: "15px" }} cols={2}>
        <Text className={classes.text}>Director of a company:</Text>
        <Radio.Group
          withAsterisk
          cols={3}
          value={directorOfCompany}
          onChange={setDirectorOfCompany}
          required
        >
          <Radio value="no" label="No" />
          <Text sx={{ display: "flex" }}>
            <Radio value="yes" label="Yes" sx={{ marginRight: "5px" }} />
            <i className={classes.italics}>(if yes the below section)</i>
          </Text>

          <div>
            <Divider my="sm" />
            <SimpleGrid cols={2} mt="xl">
              <Text sx={{ fontSize: "13px" }}>Company trust Name:</Text>
              <TextInput
                value={companyTrustName}
                onChange={(e) => setCompanyTrustName(e.target.value)}
                type="text"
                placeholder="company trust name"
                required
              />
            </SimpleGrid>
            <SimpleGrid cols={2} mt="xl">
              <Text sx={{ fontSize: "13px" }}>Director(s) name:</Text>
              <TextInput
                value={directorsName}
                onChange={(e) => setDirectorsName(e.target.value)}
                type="text"
                placeholder="director's name"
                required
              />
            </SimpleGrid>
            <SimpleGrid cols={2} mt="xl">
              <Text sx={{ fontSize: "13px" }}>Trading address:</Text>
              <div>
                <TextInput
                  value={tradingAddress}
                  onChange={(e) => setTradingAddress(e.target.value)}
                  type="text"
                  placeholder="address"
                  required
                />
                <SimpleGrid cols={2}>
                  <TextInput
                    value={tradingSuburb}
                    onChange={(e) => setTradingSuburb(e.target.value)}
                    label="Suburb"
                    type="text"
                    placeholder="number"
                    withAsterisk
                    required
                  />
                  <TextInput
                    value={tradingState}
                    onChange={(e) => setTradingState(e.target.value)}
                    label="State"
                    type="text"
                    placeholder="state"
                    withAsterisk
                    required
                  />
                </SimpleGrid>
                <TextInput
                  value={tradingPostcode}
                  onChange={(e) => setTradingPostcode(e.target.value)}
                  label="PostCode"
                  type="text"
                  placeholder="post code"
                  withAsterisk
                  required
                />
              </div>
            </SimpleGrid>
          </div>
        </Radio.Group>
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl">
        <Text className={classes.text}>Number of years registered:</Text>
        <TextInput
          value={numberOfYearsRegistered}
          onChange={(e) => setNumberOfYearsRegistered(e.target.value)}
          type="number"
          placeholder="number of years"
          required
        />
      </SimpleGrid>
      <SimpleGrid cols={2} mt="xl">
        <Text className={classes.text}>ACN:</Text>
        <TextInput
          value={ACN}
          onChange={(e) => setACN(e.target.value)}
          type="text"
          placeholder="ACN"
          required
        />
      </SimpleGrid>

      {/* click button */}
      <ButtonClick next={onClickNext} back={onClickBack} />
    </Paper>
  );
}
