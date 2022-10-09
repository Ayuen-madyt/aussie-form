import { createStyles, Header, Container, Title, Image } from "@mantine/core";
import logo from "../assets/images/logo.jpg";

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: "#46166a",
    borderBottom: 0,
  },

  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: "18px",
  },
}));

export function Footer() {
  const { classes } = useStyles();
  return (
    <Header height={56} className={classes.header} mb={10}>
      <Container>
        <div className={classes.inner}>
          <Image width={180} height={50} fit="contain" src={logo} />
          <Title className={classes.title}>
            <i>We'll serve you</i>
          </Title>
        </div>
      </Container>
    </Header>
  );
}
