import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box
      sx={{
        backgroundImage: "url(../assets/p6.jpg), linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7))",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Box
         display="flex"
         alignItems="center"
         width="100%"
         justifyContent="center"
         backgroundColor={theme.palette.background.alt}
         p="1rem 6%"
         textAlign="center"
      >
        <Box display="flex" alignItems="center" marginRight="1rem">
          <img src="assets/logo.png" alt="Logo" height="40px" />
        </Box>
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Ensagram
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          fontWeight="500"
          variant="h5"
          sx={{
            mb: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Welcome to Ensagram
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;

