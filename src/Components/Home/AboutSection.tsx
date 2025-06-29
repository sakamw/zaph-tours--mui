import { Box, Container, Typography } from "@mui/material";

const AboutSection = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          About Zaph Tours
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "80rem", mx: "auto" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, mollitia
          modi fugiat ad explicabo incidunt dolor sapiente pariatur doloribus
          repudiandae architecto reprehenderit, deleniti temporibus consequatur
          porro! Maxime nulla illum provident sint laboriosam repudiandae quia
          aut, eos numquam ipsum odit soluta impedit ipsam in cum pariatur
          dolorem debitis adipisci placeat deleniti!
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutSection;
