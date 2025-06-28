import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Footer: React.FC = () => {
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
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Zaph Tours
            </Typography>
            <Typography variant="body2">
              Best Safaris and Adventures in Kenya and beyond. Creating
              unforgettable experiences since 2024.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
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
        <Box sx={{ pt: 4, mt: 4, borderTop: 1, borderColor: "divider" }}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Zaph Tours. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
