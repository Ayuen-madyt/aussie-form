import React from "react";
import { createStyles, Header, Container, Title, Image } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    marginTop: "30px",
    backgroundColor: "#46166a",
    borderBottom: 0,
    paddingLeft: "10px",
  },
  title: {
    color: "white",
    fontSize: "15px",
  },
}));

export default function Banner({ name }) {
  const { classes } = useStyles();
  return (
    <Header height={30} className={classes.header} mb={10}>
      <Title className={classes.title}>{name}</Title>
    </Header>
  );
}
