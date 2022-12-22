import React from "react";
import { Stack, Box, Typography, Button, Paper } from "@mui/material";

const TopBar = () => {
  return (
    <Box bgcolor={"primary.darker"}>
      <Stack justifyContent="space-between" direction="row" px={2}>
        <Box>
          <Typography variant="h4" color={"white"}>
            Logo
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" color={"white"} p={1}>
            Patient number
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default TopBar;
