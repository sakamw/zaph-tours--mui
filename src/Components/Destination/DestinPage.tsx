import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

const destinations = [
  {
    name: "Mt. Kenya",
    image: "/mt-kenya.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, error in voluptates voluptas molestiae, sed magnam, corporis expedita quod odit quia facere quis aperiam! Impedit, vitae recusandae. Fugiat dolorum voluptatum inventore aperiam unde aliquid rerum?",
    groupPrice: "$1600",
    individualPrice: "$1000",
    link: "https://en.wikipedia.org/wiki/Mount_Kenya",
  },
  {
    name: "Mt. Ruwenzori",
    image: "/mt-rwenzori.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, error in voluptates voluptas molestiae, sed magnam, corporis expedita quod odit quia facere quis aperiam! Impedit, vitae recusandae. Fugiat dolorum voluptatum inventore aperiam unde aliquid rerum?",
    groupPrice: "$2000",
    individualPrice: "$1200",
    link: "https://en.wikipedia.org/wiki/Rwenzori_Mountains",
  },
  {
    name: "Lake Nakuru",
    image: "/lake-nakuru.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, error in voluptates voluptas molestiae, sed magnam, corporis expedita quod odit quia facere quis aperiam! Impedit, vitae recusandae. Fugiat dolorum voluptatum inventore aperiam unde aliquid rerum?",
    groupPrice: "$1200",
    individualPrice: "$800",
    link: "https://www.kws.go.ke/lake-nakuru-national-park",
  },
  {
    name: "Tsavo National Park",
    image: "/tsavo.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, error in voluptates voluptas molestiae, sed magnam, corporis expedita quod odit quia facere quis aperiam! Impedit, vitae recusandae. Fugiat dolorum voluptatum inventore aperiam unde aliquid rerum?",
    groupPrice: "$1600",
    individualPrice: "$1000",
    link: "https://www.tsavopark.com/",
  },
  {
    name: "Nairobi national park",
    image: "/nairobi-park.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, error in voluptates voluptas molestiae, sed magnam, corporis expedita quod odit quia facere quis aperiam! Impedit, vitae recusandae. Fugiat dolorum voluptatum inventore aperiam unde aliquid rerum?",
    groupPrice: "$1100",
    individualPrice: "$600",
    link: "https://www.nairobinationalparkkenya.com/",
  },
  {
    name: "Coastal Kenya",
    image: "/coastal-kenya.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, error in voluptates voluptas molestiae, sed magnam, corporis expedita quod odit quia facere quis aperiam! Impedit, vitae recusandae. Fugiat dolorum voluptatum inventore aperiam unde aliquid rerum?",
    groupPrice: "$1600",
    individualPrice: "$1300",
    link: "https://en.wikipedia.org/wiki/Coast_Province",
  },
];

const DestinPage = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        sx={{ mb: 6 }}
      >
        Our Destinations
      </Typography>
      <Grid container spacing={4}>
        {destinations.map((destination, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                image={destination.image}
                alt={destination.name}
                height="200"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {destination.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {destination.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Group Price: {destination.groupPrice}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Individual Price: {destination.individualPrice}
                  </Typography>
                </Box>
                <Button
                  component={Link}
                  to={destination.link}
                  target="_blank"
                  size="small"
                  color="primary"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DestinPage;
