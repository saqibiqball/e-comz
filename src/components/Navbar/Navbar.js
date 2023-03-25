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
  Hidden,
  Grid,
  Popper,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../../assets/circles.png";
import useStyles from "./styles";
import { styled } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SubAppbar from "../subappbar/subappbar";
import { getSearchItem } from "../../store/slices/searchSlice";
import { useSelector, useDispatch } from "react-redux";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import CategoryMenu from "../subappbar/categoriesMenu";
export const SearchOutlinedIcon = styled(SearchIcon)(({ theme }) => ({
  color: theme.palette.grey[600],
  marginRight: 7,
  marginLeft: 7,
}));

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Grid item xs={6}>
            <div className={classes.menuIcon}>
              {" "}
              <PopupState variant="dialog" popupId="demo-popup-popper">
                {(popupState) => (
                  <div>
                    <Button
                      className={classes.catMenubtn}
                      // variant="outlined"
                      startIcon={<MenuIcon />}
                      {...bindToggle(popupState)}
                    />
                    <Popper
                      style={{ zIndex: "3" }}
                      {...bindPopper(popupState)}
                      transition
                    >
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                          <Paper className={classes.papperBg}>
                            <CategoryMenu />
                          </Paper>
                        </Fade>
                      )}
                    </Popper>
                  </div>
                )}
              </PopupState>
            </div>

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
          </Grid>
          <Grid item xs={12}>
            <Box position="relative" flex="1" minWidth="50%" maxWidth="50%">
              <TextField
                fullWidth
                // variant="outlined"
                type="text"
                placeholder="Search..."
                className={classes.searchArea}
                onChange={(e) => dispatch(getSearchItem(e.target.value))}
                InputProps={{
                  // hover:"transparent",
                  disableUnderline: true,
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
              <Typography
                component={Link}
                to="/"
                variant="h5"
                className={classes.middleIcon}
                color="inherit"
              >
                <img
                  src={logo}
                  alt="Book Store App"
                  height="50px"
                  className={classes.imageLogo}
                />
                {/* <strong color="black">Antoinedesulme</strong> */}
              </Typography>
            </Box>
          </Grid>
          <div className={classes.grow} />
          <Grid item xs>
            {location.pathname === "/" && (
              <Box className={classes.button}>
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
              </Box>
            )}
          </Grid>
        </Toolbar>
        <SubAppbar />
      </AppBar>
    </div>
  );
};

export default Navbar;
