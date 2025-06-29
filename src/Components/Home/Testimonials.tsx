import { Box, Container, Grid, Typography, Avatar } from "@mui/material";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Francis Kimani",
      comment:
        "The best safari experience of my life! Zaph Tours made it possible.",
      avatar: "/kim.jpg",
    },
    {
      name: "Teddy Ann",
      comment:
        "We haven't felt so much Alive in a long time but Zaph Tours is just something else.",
      avatar: "/ted.jpg",
    },
    {
      name: "Dennis Otwoma",
      comment:
        "Had a great time with my significant other thanks to Zaph Tours.",
      avatar: "/dennis.jpg",
    },
    {
      name: "Travis Scott",
      comment: "Felt like being in Utopia! Highly recommend Zaph Tours.",
      avatar: "/trav.jpeg",
    },
    {
      name: "Dean Winchester",
      comment:
        "Loved every minute and moment of the safari. Can't think of any touring agency apart from Zaph Tours.",
      avatar: "/dean.jpg",
    },
    {
      name: "Sam Winchester",
      comment:
        "It's been a minute since I can remember such a great experience all thanks to Zaph Tours.",
      avatar: "/sam.jpg",
    },
  ];

  return (
    <Container sx={{ py: 6 }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ mb: 6 }}
      >
        Testimonials
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid
            key={index}
            sx={{
              flexBasis: {
                xs: "100%",
                sm: "calc(33.333% - 32px)",
              },
              maxWidth: {
                xs: "100%",
                sm: "calc(33.333% - 32px)",
              },
            }}
          >
            <Box
              sx={{
                p: 3,
                textAlign: "center",
                bgcolor: "background.paper",
                borderRadius: 2,
                boxShadow: 1,
              }}
            >
              <Avatar
                alt={testimonial.name}
                src={testimonial.avatar}
                sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
              />
              <Typography variant="body1" sx={{ fontStyle: "italic", mb: 2 }}>
                "{testimonial.comment}"
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {testimonial.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
