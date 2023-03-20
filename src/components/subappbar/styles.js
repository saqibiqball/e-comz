import { makeStyles } from "@material-ui/core/styles";
import zIndex from "@material-ui/core/styles/zIndex";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  content: {
    // flexGrow: 1,
    // alignItems: "center",
    display: "flex",
    flexDirection: "row",
    textDecoration: "none",
    justifyContent: "space-between",
    "@media (max-width: 992px)": {
      flexDirection: "column",
    },
    alignItems: "flex-start",
    color: "grey",
    // "&:hover": {
    //   color: "lightgrey",
    //   boxShadow: "none",
    // },
  },
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 0,
    "@media (max-width: 992px)": {
      display: "none",
    },
  },
  listItem: {
    cursor: "pointer",
    "&:hover": {
      color: "red",
    },
   
  },
  listItemText: {
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "bolder",
    // "&:hover": {
    //   color: "red",
    // },
    
  },
  catMenubtn: {
    display: "none",
    "@media (max-width: 992px)": {
      display: "block",
    },
  },
  catBtn: {
    // display: "block",
    "@media (max-width: 992px)": {
      display: "none",
    },
  },
  typography: {
    padding: theme.spacing(2),
  },
  papperBg: {
    // position:"absolute",
    // backgroundColor:"lightgrey",
    zIndex: 1,
    minWidth: "190%",
  },
}));
