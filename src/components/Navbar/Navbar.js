import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  TextField,
  Typography,
  InputAdornment,
  Button,
  Box,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../../assets/circles.png";
import useStyles from "./styles";
import { styled } from "@material-ui/core/styles";
import InputBase from '@material-ui/core/InputBase';
import SubAppbar from "../subappbar/subappbar";
export const SearchOutlinedIcon = styled(SearchIcon)(({ theme }) => ({
  color: theme.palette.grey[600],
  marginRight: 7,
  marginLeft: 7,
}));


const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(true);
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h5"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Book Store App"
              height="50px"
              className={classes.image}
            />
            {/* <strong color="black">Antoinedesulme</strong> */}
          </Typography>
          <Box position="relative" flex="1" minWidth="50%">
            <TextField
              fullWidth
              // variant="outlined"
              type="text"
              placeholder="Searching for..."
              className={classes.searchArea}
              // onChange={handleSearch}
              InputProps={{
                // hover:"transparent", 
                endAdornment: (
                  <Button
                    color="secondary"
                    disableElevation
                    variant="contained"
                    className={classes.searchb}
                  >
                    Search
                  </Button>
                ),
                startAdornment: <SearchOutlinedIcon fontSize="small" />,
              }}
            />
          </Box>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                // color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
        <SubAppbar />
      </AppBar>
    </div>
  );
};

export default Navbar;
