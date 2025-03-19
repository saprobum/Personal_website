import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import "./App.css";
import TabPage from "./TabPage";
import About from "./About";
import { Stack } from "@mui/material";

function App() {
  return (
    <Router>
      <Stack spacing={2} direction="row" sx={{ padding: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </Stack>

      <Routes>
        <Route path="/" element={<TabPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
