import React from "react";
import { Stack, Box, Typography, Button, Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
const NavBar = () => {
  const [openVisor, setOpenVisor] = React.useState(false);
  return (
    <Box
      sx={{
        padding: 1,
        backgroundColor: "primary.lighter",
      }}
    >
      <Stack
        justifyContent="space-between"
        flexDirection="row-reverse"
        direction="row"
        px={2}
      >
        <Box>
          <Button
            onClick={() => setOpenVisor((p) => !p)}
            size="small"
            variant="contained"
            sx={{
              fontWeight: "bold",
              opacity: "1",
              fontSize: ".7rem",
              backdropFilter: "blur( 4px )",
              borderRadius: "1rem",
              marginRight: ".6rem",
            }}
          >
            Filter
          </Button>
          <Button
            onClick={() => setOpenVisor((p) => !p)}
            size="small"
            variant="contained"
            endIcon={openVisor ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            sx={{
              fontWeight: "bold",
              opacity: "1",
              fontSize: ".7rem",
              backdropFilter: "blur( 4px )",
              borderRadius: "1rem",
            }}
          >
            Select doctor
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default NavBar;
