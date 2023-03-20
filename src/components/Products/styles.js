import { makeStyles } from "@material-ui/core/styles";
import image from "../../assets/Web.jpg"
export default makeStyles((theme) => ({
  toolbar: {
    padding: "3%",
    "@media (max-width: 992px)": {
      padding: "10%",
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(5),
    // position: 'relative',
    // zIndex: -1,
    // backgroundImage: image
  },
  root: {
    flexGrow: 1,
  },
  searchs: {
    justifyContent: "center",
    display: "flex",
    marginTop: "40px",
  },
  searchb: {
    marginBottom: "10px",
    height: "50%",
    width: "100%",
    paddingLeft: "10px",
  },
  mainGrid: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 992px)": {
      flexDirection: "column",
    },
  },
  carousel: {
    // zIndex: -1,
    position: 'relative',
    "@media (max-width: 992px)": {
      // display: "none",
      minWidth:"430px"
    },
  },
  sidebarHide: {
    "@media (max-width: 992px)": {
      display: "none",
    },
  },
}));
