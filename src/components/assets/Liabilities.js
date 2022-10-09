import React, { Fragment, useEffect, useState } from "react";
import { Text, TextInput, SimpleGrid, createStyles } from "@mantine/core";
import { liabilitiesAction } from "../../redux/actions/assets/liabilities";
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

export default function Liabilities() {
  const { classes } = useStyles();
  const [liabilityFinancialInstitution1, setLiabilityFinancialInstitution1] = useState("");
  const [liabilityFinancialInstitution2, setLiabilityFinancialInstitution2] = useState("");
  const [liabilityFinancialInstitution3, setLiabilityFinancialInstitution3] = useState("");
  const [originalLoanAmount1, setOriginalLoanAmount1] = useState("");
  const [originalLoanAmount2, setOriginalLoanAmount2] = useState("");
  const [originalLoanAmount3, setOriginalLoanAmount3] = useState("");
  const [outstandingAmount1, setOutstandingAmount1] = useState("");
  const [outstandingAmount2, setOutstandingAmount2] = useState("");
  const [outstandingAmount3, setOutstandingAmount3] = useState("");
  const [minimumMonthlyRepayment1, setMinimumMonthlyRepayment1] = useState("");
  const [minimumMonthlyRepayment2, setMinimumMonthlyRepayment2] = useState("");
  const [minimumMonthlyRepayment3, setMinimumMonthlyRepayment3] = useState("");
  const [liabilityAccountNumber1, setLiabilityAccountNumber1] = useState("");
  const [liabilityAccountNumber2, setLiabilityAccountNumber2] = useState("");
  const [liabilityAccountNumber3, setLiabilityAccountNumber3] = useState("");

  const dispatch = useDispatch();

  const liabilitiesData = {
    liabilityFinancialInstitution1,
    liabilityFinancialInstitution2,
    liabilityFinancialInstitution3,
    originalLoanAmount1,
    originalLoanAmount2,
    originalLoanAmount3,
    outstandingAmount1,
    outstandingAmount2,
    outstandingAmount3,
    minimumMonthlyRepayment1,
    minimumMonthlyRepayment2,
    minimumMonthlyRepayment3,
    liabilityAccountNumber1,
    liabilityAccountNumber2,
    liabilityAccountNumber3,
  };

  useEffect(() => {
    if (liabilityAccountNumber3) {
      dispatch(liabilitiesAction(liabilitiesData));
    }
  }, [liabilityAccountNumber3]);

  return (
    <Fragment>
      {/* liabilities */}
      <div className="motor-vehicles" style={{ marginTop: "30px" }}>
        <div className={classes.assetsBanner}>
          <SimpleGrid cols={4}>
            <SimpleGrid cols={1}>
              <Text className={classes.title}>Liabilities</Text>
            </SimpleGrid>
            <Text className={classes.columnTitle}>Mortgage 1</Text>
            <Text className={classes.columnTitle}>Mortgage 2</Text>
            <Text className={classes.columnTitle}>Mortgage 3</Text>
          </SimpleGrid>
        </div>
        <div>
          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Name of financial institution:</Text>
            <TextInput
              value={liabilityFinancialInstitution1}
              onChange={(e) =>
                setLiabilityFinancialInstitution1(e.target.value)
              }
              type="text"
              placeholder="institution"
              withAsterisk
            />
            <TextInput
              value={liabilityFinancialInstitution2}
              onChange={(e) =>
                setLiabilityFinancialInstitution2(e.target.value)
              }
              type="text"
              placeholder="institution"
              withAsterisk
            />
            <TextInput
              value={liabilityFinancialInstitution3}
              onChange={(e) =>
                setLiabilityFinancialInstitution3(e.target.value)
              }
              type="text"
              placeholder="institution"
              withAsterisk
            />
          </SimpleGrid>

          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Original loan amount:</Text>
            <TextInput
              value={originalLoanAmount1}
              onChange={(e) => setOriginalLoanAmount1(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={originalLoanAmount2}
              onChange={(e) => setOriginalLoanAmount2(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={originalLoanAmount3}
              onChange={(e) => setOriginalLoanAmount3(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
          </SimpleGrid>
          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Outstanding balance:</Text>
            <TextInput
              value={outstandingAmount1}
              onChange={(e) => setOutstandingAmount1(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={outstandingAmount2}
              onChange={(e) => setOutstandingAmount2(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={outstandingAmount3}
              onChange={(e) => setOutstandingAmount3(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
          </SimpleGrid>
          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Minimum monthly repayment:</Text>
            <TextInput
              value={minimumMonthlyRepayment1}
              onChange={(e) => setMinimumMonthlyRepayment1(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={minimumMonthlyRepayment2}
              onChange={(e) => setMinimumMonthlyRepayment2(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
            <TextInput
              value={minimumMonthlyRepayment3}
              onChange={(e) => setMinimumMonthlyRepayment3(e.target.value)}
              label="$"
              type="number"
              placeholder="amount"
              withAsterisk
            />
          </SimpleGrid>

          <SimpleGrid cols={4} mt="xl">
            <Text className={classes.text}>Account number:</Text>
            <TextInput
              value={liabilityAccountNumber1}
              onChange={(e) => setLiabilityAccountNumber1(e.target.value)}
              type="text"
              placeholder="account number"
              withAsterisk
            />
            <TextInput
              value={liabilityAccountNumber2}
              onChange={(e) => setLiabilityAccountNumber2(e.target.value)}
              type="text"
              placeholder="account number"
              withAsterisk
            />
            <TextInput
              value={liabilityAccountNumber3}
              onChange={(e) => setLiabilityAccountNumber3(e.target.value)}
              type="text"
              placeholder="account number"
              withAsterisk
            />
          </SimpleGrid>
        </div>
      </div>
    </Fragment>
  );
}
