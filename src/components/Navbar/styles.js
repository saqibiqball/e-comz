import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    color: "white",
    boxShadow: "none",
    background: "#FFFFFF",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    // paddingBottom:"2%"
  
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
    color: "grey",
    "&:hover": {
      color: "lightgrey",
      boxShadow: "none",
    },
  },
  cartt: {
    "&:hover": {
      color: "#ffff",
      boxShadow: "none",
    },
  },
  image: {
    marginRight: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  searchs: {
    flexGrow: 1,
    justifyContent: "center",
    display: "flex",
  },
  searchArea:{
    borderRadius: 500,
    color: "grey",
    overflow: "hidden",
    border: "1px solid grey",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "grey",
    },
    "&:after .MuiOutlinedInput-notchedOutline": {
      borderColor: "grey",
    },
  },
  searchb: {
    // px: "3rem",
    height: "60%",
    borderRadius: "0 300px 300px 0",
  },
}));
