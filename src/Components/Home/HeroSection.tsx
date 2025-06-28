import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const HeroSection = styled(Box)(({ theme }) => ({
  height: "80vh",
  backgroundImage: 'url("/safaris.jpg")',
  overflow: "hidden",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
  textAlign: "center",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
}));
const HomeHeroSection = () => {
  return (
    <Box>
      <HeroSection minHeight="100vh">
        <Box sx={{ position: "relative", zIndex: 1, p: 3 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Best Safaris and Adventures
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Explore the world with us
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 3 }}
          >
            Book Your Adventure
          </Button>
        </Box>
      </HeroSection>
    </Box>
  );
};

export default HomeHeroSection;
