import {
  Container,
  IconButton,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Logo from "../../assets/logo.svg";
import SearchIcon from "../../assets/search-icon";
const Header = () => {
  return (
    <Box py={"25px"}>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack
            width={"612px"}
            gap={"31px"}
            alignItems={"center"}
            direction={"row"}
          >
            <Box>
              <img src={Logo} alt="logo" />
            </Box>
            <Typography
              color="#6e6d7a"
              lineHeight={"143%"}
              fontSize={"14px"}
              fontWeight={500}
            >
              Inspiration
            </Typography>
            <Typography
              color="#6e6d7a"
              lineHeight={"143%"}
              fontSize={"14px"}
              fontWeight={500}
            >
              Find Work
            </Typography>
            <Typography
              color="#6e6d7a"
              lineHeight={"143%"}
              fontSize={"14px"}
              fontWeight={500}
            >
              Learn Design
            </Typography>
            <Typography
              color="#6e6d7a"
              lineHeight={"143%"}
              fontSize={"14px"}
              fontWeight={500}
            >
              Go Pro
            </Typography>
            <Typography
              color="#6e6d7a"
              lineHeight={"143%"}
              fontSize={"14px"}
              fontWeight={500}
            >
              Hire Designers
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <Typography
              fontWeight={400}
              fontSize={"16px"}
              lineHeight={"175%"}
              color={"#6e6d7a"}
            >
              Sign in
            </Typography>
            <Button sx={{ bgcolor: "#ea4c89" }} variant="contained">
              <Typography
                color="#fff"
                lineHeight={"143%"}
                fontSize={"14px"}
                fontWeight={500}
              >
                Sign up
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
