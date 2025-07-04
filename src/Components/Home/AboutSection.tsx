import { Box, Container, Typography } from "@mui/material";

const AboutSection = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          About Zaph Tours
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "80rem", mx: "auto" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          nesciunt quibusdam porro iste aliquam dignissimos laborum. Sunt
          pariatur doloribus corrupti cumque dolorum nihil quasi dolores omnis
          enim in commodi vero magni dolore, officia soluta tenetur repellat
          assumenda quos! Odio dolorum nemo ut fugit officia, libero, sapiente
          non incidunt deleniti natus provident laudantium itaque aut dolor
          aliquam temporibus reprehenderit. Nulla aliquam beatae atque incidunt
          velit quibusdam numquam labore. Fuga, cum aliquid.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutSection;
