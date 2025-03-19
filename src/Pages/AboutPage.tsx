import { Stack } from "@mui/material";
import { motion } from "motion/react";

const About = () => {
  return (
    <Stack spacing={8} sx={{ padding: "20px" }}>
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
      <Stack sx={{ background: "red", padding: "400px" }}>about2</Stack>
      <Stack sx={{ background: "red", padding: "400px" }}>about2</Stack>
    </Stack>
  );
};

export default About;
