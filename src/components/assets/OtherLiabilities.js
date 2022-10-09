import React, { Fragment, useEffect, useState } from "react";
import {
  Text,
  TextInput,
  SimpleGrid,
  createStyles,
  Radio,
  Space,
} from "@mantine/core";
import { otherLiabilitiesAction } from "../../redux/actions/assets/otherLiabilities";
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

export default function OtherLiabilities() {
  const { classes } = useStyles();
  const [otherLiabilityLoanType1, setOtherLiabilityLoanType1] = useState("");
  const [otherLiabilityLoanType2, setOtherLiabilityLoanType2] = useState("");
  const [otherLiabilityLoanType3, setOtherLiabilityLoanType3] = useState("");
  const [otherLiabilityFinancialInstitution1,setOtherLiabilityFinancialInstitution1,] = useState("");
  const [otherLiabilityFinancialInstitution2,setOtherLiabilityFinancialInstitution2,] = useState("");
  const [otherLiabilityFinancialInstitution3,setOtherLiabilityFinancialInstitution3,] = useState("");
  const [otherLiabilityOriginalLoanAmount1,setOtherLiabilityOriginalLoanAmount1] = useState("");
  const [otherLiabilityOriginalLoanAmount2,setOtherLiabilityOriginalLoanAmount2] = useState("");
  const [otherLiabilityOriginalLoanAmount3,setOtherLiabilityOriginalLoanAmount3] = useState("");
  const [otherLiabilitityAmountOwing1, setOtherLiabilitityAmountOwing1] =  useState("");
  const [otherLiabilitityAmountOwing2, setOtherLiabilitityAmountOwing2] =  useState("");
  const [otherLiabilitityAmountOwing3, setOtherLiabilitityAmountOwing3] =  useState("");
  const [otherMinimumMonthlyRepayment1, setOtherMinimumMonthlyRepayment1] = useState("");
  const [otherMinimumMonthlyRepayment2, setOtherMinimumMonthlyRepayment2] = useState("");
  const [otherMinimumMonthlyRepayment3, setOtherMinimumMonthlyRepayment3] = useState("");
  const [otherLiabilityAccountNumber1, setOtherLiabilityAccountNumber1] = useState("");
  const [otherLiabilityAccountNumber2, setOtherLiabilityAccountNumber2] = useState("");
  const [otherLiabilityAccountNumber3, setOtherLiabilityAccountNumber3] = useState("");
  const[otherLiabilityIsLoanBeingPaid1, setOtherLiabilityIsLoanBeingPaid1] = useState("");
  const[otherLiabilityIsLoanBeingPaid2, setOtherLiabilityIsLoanBeingPaid2] = useState("");
  const[otherLiabilityIsLoanBeingPaid3, setOtherLiabilityIsLoanBeingPaid3] = useState("");
  const[how1,setHow1] = useState("");
  const[how2,setHow2] = useState("");
  const[how3,setHow3] = useState("");

  const dispatch = useDispatch();

  const otherLiabilitiesData = {
    otherLiabilityLoanType1,
    otherLiabilityLoanType2,
    otherLiabilityLoanType3,
    otherLiabilityFinancialInstitution1,
    otherLiabilityFinancialInstitution2,
    otherLiabilityFinancialInstitution3,
    otherLiabilityOriginalLoanAmount1,
    otherLiabilityOriginalLoanAmount2,
    otherLiabilityOriginalLoanAmount3,
    otherLiabilitityAmountOwing1,
    otherLiabilitityAmountOwing2,
    otherLiabilitityAmountOwing3,
    otherMinimumMonthlyRepayment1,
    otherMinimumMonthlyRepayment2,
    otherMinimumMonthlyRepayment3,
    otherLiabilityAccountNumber1,
    otherLiabilityAccountNumber2,
    otherLiabilityAccountNumber3,
    otherLiabilityIsLoanBeingPaid1,
    otherLiabilityIsLoanBeingPaid2,
    otherLiabilityIsLoanBeingPaid3,
    how1,
    how2,
    how3
  };

  useEffect(()=>{
    if(how3){
      dispatch(otherLiabilitiesAction(otherLiabilitiesData))
    }
  },[how3])

  return (
    <Fragment>
      {/* other liabilities */}
      <div className="motor-vehicles" style={{ marginTop: "30px" }}>
        <div className={classes.assetsBanner}>
          <SimpleGrid cols={4}>
            <SimpleGrid cols={1}>
              <Text className={classes.title}>Other Liabilities</Text>
            </SimpleGrid>
            <Text className={classes.columnTitle}>Loan 1</Text>
            <Text className={classes.columnTitle}>Loan 2</Text>
            <Text className={classes.columnTitle}>Loan 3</Text>
          </SimpleGrid>
        </div>
        <SimpleGrid cols={4} mt="xl">
          <Text className={classes.text}>
            Loan type{" "}
            <i className={classes.italics}>(Car/Personal/HEGS/Other loans)</i>:
          </Text>
          <TextInput value={otherLiabilityLoanType1} onChange={e=>setOtherLiabilityLoanType1(e.target.value)} type="text" placeholder="loan type" withAsterisk />
          <TextInput value={otherLiabilityLoanType2} onChange={e=>setOtherLiabilityLoanType2(e.target.value)} type="text" placeholder="loan type" withAsterisk />
          <TextInput value={otherLiabilityLoanType3} onChange={e=>setOtherLiabilityLoanType3(e.target.value)} type="text" placeholder="loan type" withAsterisk />
        </SimpleGrid>
        <div>
          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Name of financial institution:</Text>
            <TextInput value={otherLiabilityFinancialInstitution1} onChange={e=>setOtherLiabilityFinancialInstitution1(e.target.value)} type="text" placeholder="institution" withAsterisk />
            <TextInput value={otherLiabilityFinancialInstitution2} onChange={e=>setOtherLiabilityFinancialInstitution2(e.target.value)}  type="text" placeholder="institution" withAsterisk />
            <TextInput value={otherLiabilityFinancialInstitution3} onChange={e=>setOtherLiabilityFinancialInstitution3(e.target.value)}  type="text" placeholder="institution" withAsterisk />
          </SimpleGrid>

          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Original loan amount:</Text>
            <TextInput
              value={otherLiabilityOriginalLoanAmount1}
              onChange={e=>setOtherLiabilityOriginalLoanAmount1(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={otherLiabilityOriginalLoanAmount2}
              onChange={e=>setOtherLiabilityOriginalLoanAmount2(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={otherLiabilityOriginalLoanAmount3}
              onChange={e=>setOtherLiabilityOriginalLoanAmount3(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
          </SimpleGrid>
          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Amount currently owing:</Text>
            <TextInput
              value={otherLiabilitityAmountOwing1}
              onChange={e=>setOtherLiabilitityAmountOwing1(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={otherLiabilitityAmountOwing2}
              onChange={e=>setOtherLiabilitityAmountOwing2(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={otherLiabilitityAmountOwing3}
              onChange={e=>setOtherLiabilitityAmountOwing3(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
          </SimpleGrid>
          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Minimum monthly repayment:</Text>
            <TextInput
              value={otherMinimumMonthlyRepayment1}
              onChange={e=>setOtherMinimumMonthlyRepayment1(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={otherMinimumMonthlyRepayment2}
              onChange={e=>setOtherMinimumMonthlyRepayment2(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={otherMinimumMonthlyRepayment3}
              onChange={e=>setOtherMinimumMonthlyRepayment3(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
          </SimpleGrid>

          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Account number:</Text>
            <TextInput value={otherLiabilityAccountNumber1} onChange={e=>setOtherLiabilityAccountNumber1(e.target.value)} type="text" placeholder="account number" withAsterisk />
            <TextInput value={otherLiabilityAccountNumber2} onChange={e=>setOtherLiabilityAccountNumber2(e.target.value)} type="text" placeholder="account number" withAsterisk />
            <TextInput value={otherLiabilityAccountNumber3} onChange={e=>setOtherLiabilityAccountNumber3(e.target.value)} type="text" placeholder="account number" withAsterisk />
          </SimpleGrid>
        </div>

        <div className="is-being-paid">
          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Is loan being paid:</Text>
            <Radio.Group withAsterisk cols={2} value={otherLiabilityIsLoanBeingPaid1} onChange={setOtherLiabilityIsLoanBeingPaid1}>
              <Radio value="No" label="No" />
              <Radio value="Yes" label="Yes" />
            </Radio.Group>
            <Radio.Group withAsterisk cols={2} value={otherLiabilityIsLoanBeingPaid2} onChange={setOtherLiabilityIsLoanBeingPaid2}>
              <Radio value="No" label="No" />
              <Radio value="Yes" label="Yes" />
            </Radio.Group>
            <Radio.Group withAsterisk cols={2}value={otherLiabilityIsLoanBeingPaid3} onChange={setOtherLiabilityIsLoanBeingPaid3}>
              <Radio value="No" label="No" />
              <Radio value="Yes" label="Yes" />
            </Radio.Group>
          </SimpleGrid>

          <SimpleGrid cols={4} mt="xl">
            <Space></Space>
            <TextInput
              value={how1}
              onChange={e=>setHow1(e.target.value)}
              label="how"
              type="text"
              placeholder="how"
              withAsterisk
            />
            <TextInput
              value={how2}
              onChange={e=>setHow2(e.target.value)}
              label="how"
              type="text"
              placeholder="how"
              withAsterisk
            />
            <TextInput
              value={how3}
              onChange={e=>setHow3(e.target.value)}
              label="how"
              type="text"
              placeholder="how"
              withAsterisk
            />
          </SimpleGrid>
        </div>
      </div>
    </Fragment>
  );
}
