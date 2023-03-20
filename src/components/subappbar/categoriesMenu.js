import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import { List, Popper } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import HeadsetIcon from "@material-ui/icons/Headset";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import BusinessIcon from "@material-ui/icons/Business";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import PopupState, {
  bindToggle,
  bindPopper,
  bindHover,
} from "material-ui-popup-state";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    // maxWidth: 360,
    // zIndex:"3",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
function CategoryMenu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      //   subheader={
      //     <ListSubheader component="div" id="nested-list-subheader">
      //       Nested List Items
      //     </ListSubheader>
      //   }
      className={classes.root}
    >
      <PopupState
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        variant="dialog"
        popupId="demo-popup-popper"
      >
        {(popupState) => (
          <>
            <ListItem {...bindToggle(popupState)} button>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary="Paper books" />
              <ListItemIcon>
                <ChevronRightIcon />
              </ListItemIcon>
            </ListItem>
            <Popper
              style={{ zIndex: "3", minWidth:"1080px", marginLeft:"30%" }}
              {...bindPopper(popupState)}
              transition
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper className={classes.papperBg}>
                    {/* <CategoryMenu /> */}
                  </Paper>
                </Fade>
              )}
            </Popper>
          </>
        )}
      </PopupState>

      <Divider />
      <ListItem button>
        <ListItemIcon>
          <PhoneAndroidIcon />
        </ListItemIcon>
        <ListItemText primary="E-books" />
        <ListItemIcon>
          <ChevronRightIcon />
        </ListItemIcon>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <HeadsetIcon />
        </ListItemIcon>
        <ListItemText primary="Audio books" />
        <ListItemIcon>
          <ChevronRightIcon />
        </ListItemIcon>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Authors" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <LocalOfferIcon />
        </ListItemIcon>
        <ListItemText primary="Promotions" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <ListItemText primary="Publisher company" />
      </ListItem>

      {/* <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Audio books" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse> */}
    </List>
  );
}

export default CategoryMenu;
