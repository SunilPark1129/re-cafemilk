import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./components/styles/Global";
import "./font.css";
import { defaultValue } from "./components/Theme";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Rewards from "./pages/Rewards/Rewards";
import Footer from "./components/Footer";
import { StyledWrapper } from "./components/styles/Wrapper.styled";

function App() {
  return (
    <ThemeProvider theme={defaultValue}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <StyledWrapper>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/menu" element={<Menu />} />
            <Route exact path="/rewards" element={<Rewards />} />
          </Routes>
        </StyledWrapper>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
