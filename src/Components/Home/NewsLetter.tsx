import { TextField, Typography, Container, Box, Button } from "@mui/material";

const NewsLetter = () => {
  return (
    <>
      <Container sx={{ py: 8 }}>
        <Box
          sx={{
            backgroundColor: "background.paper",
            p: 6,
            borderRadius: 2,
            boxShadow: 1,
            maxWidth: "800px",
            mx: "auto",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Stay Updated
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Sign up for our newsletter to receive weekly updates on special
            offers, new destinations, and safari tips.
          </Typography>
          <Box
            component="form"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <TextField
              variant="outlined"
              placeholder="Your email address"
              sx={{ width: "400px", mr: 2 }}
            />
            <Button variant="contained" color="primary">
              Subscribe
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default NewsLetter;
