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
  List,
  ListItem,
  ListItemText,
  Popper,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";
import { styled } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import { Grid } from "semantic-ui-react";
import CategoryIcon from "@material-ui/icons/Category";
import { makeStyles } from "@material-ui/core/styles";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import CategoryMenu from "./categoriesMenu";
export const SearchOutlinedIcon = styled(SearchIcon)(({ theme }) => ({
  color: theme.palette.grey[600],
  marginRight: 7,
  marginLeft: 7,
}));
// console.log(window.innerWidth, window.innerHeight);
const SubAppbar = () => {
  const classes = useStyles();
  
  return (
    <Grid className={classes.content} container>
      <Grid item xs={6}>
        <PopupState variant="dialog" popupId="demo-popup-popper">
          {(popupState) => (
            <div>
              <Button
                className={classes.catMenubtn}
                // variant="outlined"
                startIcon={<MenuIcon />}
                {...bindToggle(popupState)}
              />
              <Button
                className={classes.catBtn}
                variant="outlined"
                startIcon={<CategoryIcon />}
                {...bindToggle(popupState)}
                style={{ whiteSpace: "nowrap", textTransform: "capitalize" }}
              >
                {" "}
                All Category
              </Button>
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
      </Grid>
      <Grid item xs={6}>
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <ListItemText
              style={{ whiteSpace: "nowrap" }}
              className={classes.listItemText}
            >
              Home page
            </ListItemText>
          </ListItem>
          {/* <ListDivider /> */}
          <ListItem className={classes.listItem}>
            <ListItemText
              style={{ whiteSpace: "nowrap" }}
              className={classes.listItemText}
            >
              Book listing
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default SubAppbar;
