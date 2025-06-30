import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

const TripPage = () => {
  const trips = [
    {
      id: 1,
      title: "Honeymoon",
      img: "/honey-moon.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis exercitationem doloremque voluptas assumenda necessitatibus aspernatur.",
      pricing: "From $1800 per couple",
    },
    {
      id: 2,
      title: "Family",
      img: "/family.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis exercitationem doloremque voluptas assumenda necessitatibus aspernatur.",
      pricing: "From $1200 per family",
    },
    {
      id: 3,
      title: "Adventure",
      img: "/adventure.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis exercitationem doloremque voluptas assumenda necessitatibus aspernatur.",
      pricing: "From $1200 per person",
    },
    {
      id: 4,
      title: "Cultural Tours",
      img: "/cultural-tours.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis exercitationem doloremque voluptas assumenda necessitatibus aspernatur.",
      pricing: "From $1200 per person",
    },
    {
      id: 5,
      title: "Wildlife Safaris",
      img: "/safaris.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis exercitationem doloremque voluptas assumenda necessitatibus aspernatur.",
      pricing: "From $1100 per person",
    },
    {
      id: 6,
      title: "Eco-Tours",
      img: "/eco-tourism.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis exercitationem doloremque voluptas assumenda necessitatibus aspernatur.",
      pricing: "From $800 per person",
    },
    {
      id: 7,
      title: "Luxury Vacations",
      img: "/luxury-vacations.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis exercitationem doloremque voluptas assumenda necessitatibus aspernatur.",
      pricing: "From $2900 per person",
    },
    {
      id: 8,
      title: "Beach Holidays",
      img: "/beach-holidays.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis exercitationem doloremque voluptas assumenda necessitatibus aspernatur.",
      pricing: "From $1200 per person",
    },
    {
      id: 9,
      title: "Wellness Retreats",
      img: "/wellness.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis exercitationem doloremque voluptas assumenda necessitatibus aspernatur.",
      pricing: "From $1400 per person",
    },
    {
      id: 10,
      title: "Culinary Tours",
      img: "/culinary-tours.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis exercitationem doloremque voluptas assumenda necessitatibus aspernatur.",
      pricing: "From $900 per person",
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
        Trip Types
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {trips.map((Trips) => (
          <Grid
            key={Trips.id}
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
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: 3,
                },
              }}
            >
              <CardMedia
                component="img"
                image={Trips.img}
                alt={Trips.title}
                height="200"
                sx={{
                  objectFit: "cover",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h3">
                  {Trips.title}
                </Typography>
                <Typography>{Trips.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ ml: "auto" }}
                >
                  {Trips.pricing}
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TripPage;
