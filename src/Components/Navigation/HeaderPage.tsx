import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  Container,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const HeaderPage: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Zaph Tours
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/destinations">
              Destinations
            </Button>
            <Button color="inherit" component={Link} to="/trip-types">
              Trip Types
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
          </Box>

          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: "block", md: "none" }, color: "inherit" }}
          >
            <IoMdMenu />
          </IconButton>

          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <Box
              sx={{
                width: 250,
                display: "flex",
                flexDirection: "column",
                p: 2,
                gap: 1,
              }}
              role="presentation"
              onClick={() => setDrawerOpen(false)}
            >
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/destinations">
                Destinations
              </Button>
              <Button color="inherit" component={Link} to="/trip-types">
                Trip Types
              </Button>
              <Button color="inherit" component={Link} to="/contact">
                Contact
              </Button>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderPage;
