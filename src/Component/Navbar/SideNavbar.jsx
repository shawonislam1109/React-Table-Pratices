import { Alert, Box, Button, Stack, Typography } from "@mui/material";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import { Link } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyOffIcon from "@mui/icons-material/KeyOff";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styled from "@emotion/styled";

const BtnStyle = styled("Button")(() => ({
  border: "none",
  fontWeight: "bold",
  width: "100%",
  justifyContent: "flex-start",
  paddingLeft: "10px",
}));

const SideNavbar = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        overflowY: "scroll",
        overflowX: "hidden",
        mb: "13px",
      }}
    >
      {/* Sidebar top3 */}
      <Box
        mt={3}
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box>
          <Box display="flex" justifyContent={"center"} alignItems={"center"}>
            <img
              src="https://crumble.honeyside.it/static/media/honeyside-logo.541af29591f68acf94c4.png"
              alt="logo"
              width={30}
              height={30}
            />
          </Box>
          <Typography textAlign={"center"} variant="body1" fontWeight={700}>
            Admin User
          </Typography>
          <Typography textAlign={"center"} variant="body2">
            Last Login : 10/10/2023 12:42
          </Typography>
        </Box>
      </Box>
      <hr style={{ marginTop: "1rem", color: "GrayText" }} />

      {/* navMenu in sidebar section */}
      <Stack mt={2} mx={3} spacing={3}>
        {/* Dashboard Link */}
        <Box>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "lighter",
              //   width: "100%",
            }}
          >
            <Button
              fontWeight={700}
              sx={{
                border: "none",
                fontWeight: "bold",
                width: "100%",
                justifyContent: "flex-start",
                paddingLeft: "10px",
              }}
              startIcon={<SignalCellularAltIcon />}
            >
              Dashboard
            </Button>
          </Link>
        </Box>
        {/* value link */}
        <Box>
          <Link
            to="/value"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "lighter",
            }}
          >
            <Button
              sx={{ border: "none", fontWeight: "bold" }}
              startIcon={<SignalCellularAltIcon />}
            >
              Value
            </Button>
          </Link>
        </Box>
        {/* user LInk */}
        <Box>
          <Link
            to="/user"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "lighter",
            }}
          >
            <Button
              sx={{ border: "none", fontWeight: "bold" }}
              startIcon={<PeopleIcon />}
            >
              User
            </Button>
          </Link>
        </Box>

        {/* Account LInk */}
        <Box>
          <Link
            to="/account"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <Button
              sx={{ border: "none", fontWeight: "bold" }}
              startIcon={<PersonOutlineOutlinedIcon />}
            >
              Account
            </Button>
          </Link>
        </Box>
        {/* Api Docs  Link */}
        <Box>
          <Link
            to="/apiDocs"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "lighter",
            }}
          >
            <Button
              sx={{ border: "none", fontWeight: "bold" }}
              startIcon={
                ((<KeyboardArrowLeftIcon />), (<KeyboardArrowRightIcon />))
              }
            >
              api docs
            </Button>
          </Link>
        </Box>

        {/* api key button */}
        <Box>
          <Link
            to="/apiKey"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "lighter",
            }}
          >
            <Button
              sx={{ border: "none", fontWeight: "bold" }}
              startIcon={<KeyOffIcon />}
            >
              api keys
            </Button>
          </Link>
        </Box>

        {/* card section */}

        <Box p={2} bgcolor="#F4F6F8">
          <Typography textAlign="center" variant="h6" fontWeight="bold">
            Like what you see
          </Typography>
          <Typography textAlign="center" variant="body2">
            Crumble is available for <br /> sale on CodeCanyon, full <br />{" "}
            source code included.
          </Typography>
          <Box mt={3} display="flex" justifyContent="center">
            <Button variant="contained">Purchase</Button>
          </Box>
        </Box>

        {/* simple toast */}

        <Alert variant="standard" severity="success">
          v2.0.1 (16)
        </Alert>
      </Stack>
    </Box>
  );
};

export default SideNavbar;
