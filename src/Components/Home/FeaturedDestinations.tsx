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

const FeaturedDestinations = () => {
  const featuredDestinations = [
    {
      id: 1,
      name: "Mt. Kenya",
      image: "/mt-kenya.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus eaque possimus quasi nemo dolore accusantium facilis architecto. Autem, sapiente.",
      price: "$1000",
    },
    {
      id: 2,
      name: "Mt. Ruwenzori",
      image: "/mt-rwenzori.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus eaque possimus quasi nemo dolore accusantium facilis architecto. Autem, sapiente.",
      price: "$1200",
    },
    {
      id: 3,
      name: "Lake Nakuru",
      image: "/lake-nakuru.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus eaque possimus quasi nemo dolore accusantium facilis architecto. Autem, sapiente.",
      price: "$800",
    },
    {
      id: 4,
      name: "Tsavo National Park",
      image: "/tsavo.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus eaque possimus quasi nemo dolore accusantium facilis architecto. Autem, sapiente.",
      price: "$1000",
    },
    {
      id: 5,
      name: "Nairobi National Park",
      image: "/nairobi-park.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus eaque possimus quasi nemo dolore accusantium facilis architecto. Autem, sapiente.",
      price: "$600",
    },
    {
      id: 6,
      name: "Coastal Kenya",
      image: "/coastal-kenya.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus eaque possimus quasi nemo dolore accusantium facilis architecto. Autem, sapiente.",
      price: "$1300",
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
        Featured Destinations
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {featuredDestinations.map((destination) => (
          <Grid
            key={destination.id}
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
                image={destination.image}
                alt={destination.name}
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
                  {destination.name}
                </Typography>
                <Typography>{destination.description}</Typography>
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
                  From {destination.price}
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedDestinations;
