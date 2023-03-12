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
    zIndex: -1,
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
  },
  carousel: {
    zIndex: 1,
    "@media (max-width: 992px)": {
      display: "none",
    },
  },
  sidebarHide: {
    "@media (max-width: 992px)": {
      display: "none",
    },
  },
}));
