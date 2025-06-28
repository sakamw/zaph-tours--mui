import React from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Link,
  Divider,
  Paper,
} from "@mui/material";

const ContactPage: React.FC = () => {
  return (
    <Container sx={{ py: 8, minHeight: "100vh" }}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        sx={{ mb: 6 }}
      >
        Contact Us
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Send Us a Message
            </Typography>
            <Box component="form" sx={{ mt: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    type="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Subject"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Message"
                    multiline
                    rows={6}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Box>
          <Typography variant="h5" gutterBottom>
            Find Us On Social Media
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              href="#"
              target="_blank"
            >
              Facebook
            </Button>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              href="#"
              target="_blank"
            >
              Instagram
            </Button>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              href="#"
              target="_blank"
            >
              Twitter
            </Button>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              href="#"
              target="_blank"
            >
              YouTube
            </Button>
          </Box>
        </Box>
        <Divider sx={{ my: 4 }} />
        <Box>
          <Typography variant="h5" gutterBottom>
            Our Location
          </Typography>
          <Box
            sx={{
              width: 350,
              height: 430,
              mx: "auto",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.656919248802!2d36.86101999999998!3d-1.3824922999999905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0fbbde36bc45%3A0x6f9671d1966870ec!2sNairobi%20National%20Park!5e0!3m2!1sen!2ske!4v1717868483447!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{
                border: 0,
              }}
              allowFullScreen
              loading="lazy"
              title="Zaph Tours Location"
            ></iframe>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default ContactPage;
