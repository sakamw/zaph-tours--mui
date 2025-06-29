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
      name: "Mt. Kenya",
      image: "/mt-kenya.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus eaque possimus quasi nemo dolore accusantium facilis architecto. Autem, sapiente.",
      price: "$1000",
    },
    {
      name: "Mt. Ruwenzori",
      image: "/mt-rwenzori.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus eaque possimus quasi nemo dolore accusantium facilis architecto. Autem, sapiente.",
      price: "$1200",
    },
    {
      name: "Lake Nakuru",
      image: "/lake-nakuru.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus eaque possimus quasi nemo dolore accusantium facilis architecto. Autem, sapiente.",
      price: "$800",
    },
    {
      name: "Tsavo National Park",
      image: "/tsavo.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus eaque possimus quasi nemo dolore accusantium facilis architecto. Autem, sapiente.",
      price: "$1000",
    },
    {
      name: "Nairobi national park",
      image: "/nairobi-park.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus eaque possimus quasi nemo dolore accusantium facilis architecto. Autem, sapiente.",
      price: "$600",
    },
    {
      name: "Coastal Kenya",
      image: "/coastal-kenya.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus eaque possimus quasi nemo dolore accusantium facilis architecto. Autem, sapiente.",
      price: "$1300",
    },
  ];

  return (
    <>
      <Container>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Featured Destinations
        </Typography>
        <Grid container spacing={4}>
          {featuredDestinations.map((destination, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  image={destination.image}
                  alt={destination.name}
                  height="200"
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
    </>
  );
};

export default FeaturedDestinations;
