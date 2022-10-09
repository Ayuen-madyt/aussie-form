import { Fragment, useState } from "react";
import ReactPDF from "@react-pdf/renderer";
import {
  createStyles,
  Text,
  Title,
  TextInput,
  Button,
  Image,
  Modal,
} from "@mantine/core";
import image from "../../assets/images/image.svg";
import MainDocument from "../../pdf";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing.xl * 2,
    marginTop: "60px",
    marginBottom: "60px",
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: "40%",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  body: {
    paddingRight: theme.spacing.xl * 4,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: "#46166a",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "#46166a",
    "&:hover": {
      backgroundColor: "#46166a",
    },
  },
}));

export function HeroBanner() {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <Fragment>
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>
            Thank you for taking the time to fill the form !
          </Title>
          <Text weight={500} size="lg" mb={5}>
            You can view the pdf format here!
          </Text>
          <Text size="sm" color="dimmed">
            You will never miss important product updates, latest news and
            community QA sessions. Our newsletter is once a week, every Sunday.
          </Text>

          <div className={classes.controls}>
            <Button
              onClick={() => setOpened(!opened)}
              className={classes.control}
            >
              View PDF
            </Button>
          </div>
        </div>
        <Image src={image} className={classes.image} />
      </div>

      {/* modal */}
      <Modal
        withCloseButton={false}
        opened={opened}
        onClose={() => setOpened(false)}
        styles={{
          modal: {
            width: "80%",
          },
        }}
      >
        <MainDocument />
      </Modal>
    </Fragment>
  );
}
