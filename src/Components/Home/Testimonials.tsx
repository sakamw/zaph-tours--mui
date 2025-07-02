import { Box, Container, Grid, Typography, Avatar } from "@mui/material";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Francis Kimani",
      comment:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, tempore?",
      avatar: "/kim.jpg",
    },
    {
      name: "Teddy Ann",
      comment:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, tempore?",
      avatar: "/ted.jpg",
    },
    {
      name: "Dennis Otwoma",
      comment:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, tempore?",
      avatar: "/dennis.jpg",
    },
    {
      name: "Isaac Mwangi",
      comment:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, tempore?",
      avatar: "/trav.jpeg",
    },
    {
      name: "Jensen Ross Ackles",
      comment:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, tempore?",
      avatar: "/dean.jpg",
    },
    {
      name: "Jared Tristan Padalecki",
      comment:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, tempore?",
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
