import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { motion } from "motion/react";

function TabPage() {
  const [value, setValue] = useState(0);

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div className="dark:bg-[blue]" 
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box  sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ width: "100%" }} >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs 
        className="dark:bg-[cyan]"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography variant="body2" gutterBottom>
          This is a test text from the app component
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Stack spacing={8}>
        <Stack sx={{ background: "red", padding: "100px" }}>about</Stack>
      <Stack sx={{ background: "red", padding: "100px" }}>about2</Stack>
      <Stack sx={{ background: "red", padding: "100px" }}>about2</Stack>
      <Stack sx={{ background: "red", padding: "100px" }}>about2</Stack>
      <Stack sx={{ background: "red", padding: "100px" }}>about2</Stack>
      <motion.div
        initial={{ opacity: 0, x: 100, y: 100, rotate: 30 }} // Initial state (hidden)
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }} // Animation when in view
        transition={{ duration: 0.5 }} // Animation duration
        //  viewport={{ amount: 0.3 }} Trigger when 50% of the element is visible
        style={{
          position: "relative",
          backgroundColor: "blue",
          borderRadius: "10px",
          padding: "200px",
          color: "white",
          fontSize: "24px",
        }}
      >
        chiching fak
      </motion.div>
      <Stack sx={{ background: "red", padding: "100px" }}>about2</Stack>
      <Stack sx={{ background: "red", padding: "100px" }}>about2</Stack>
      <Stack sx={{ background: "red", padding: "100px" }}>about2</Stack>
      <Stack sx={{ background: "red", padding: "100px" }}>about2</Stack>
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}

export default TabPage;
