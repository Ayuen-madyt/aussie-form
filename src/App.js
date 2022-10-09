import "./App.css";
import { useState } from "react";
import { Container } from "@mantine/core";
import { PDFViewer } from "@react-pdf/renderer";
import { HeaderColored } from "./components/Header";
import PersonalInfo from "./components/personalInfo/index";
import Employment from "./components/employment/Employment";
import Assets from "./components/assets";
// import Expenses from "./components/expenses/Expensesa";
import Expenses from "./components/expenses";
import { HeroBanner } from "./components/shared/Hero";
import { Routes, Route, Link } from "react-router-dom";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Container>
      <HeaderColored />
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="employment" element={<Employment />} />
        <Route path="assets" element={<Assets />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="finish" element={<HeroBanner />} />
      </Routes>
      {/* <PDFViewer>
            <Resume />
          </PDFViewer> */}
      <Footer />
    </Container>
  );
}

export default App;
