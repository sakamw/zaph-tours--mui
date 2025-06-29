import { Box, Container, Grid, Typography } from "@mui/material";

const FooterPage = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent={"center"}>
          <Grid
            sx={{
              flexBasis: {
                xs: "100%",
                md: "50%",
              },
              maxWidth: {
                xs: "100%",
                md: "50%",
              },
            }}
          >
            <Typography variant="h6" gutterBottom>
              Zaph Tours
            </Typography>
            <Typography variant="body2">
              Best Safaris and Adventures in Kenya and beyond. Creating
              unforgettable experiences since 2024.
            </Typography>
          </Grid>

          <Grid
            sx={{
              flexBasis: {
                xs: "100%",
                md: "50%",
              },
              maxWidth: {
                xs: "100%",
                md: "50%",
              },
            }}
          >
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              Zaph House, Safari Road
              <br />
              Nairobi, Kenya
              <br />
              info@zaphtours.com
              <br />
              +254 712 345 678
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            pt: 4,
            mt: 4,
            borderTop: 1,
            borderColor: "divider",
          }}
        >
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Zaph Tours. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterPage;
