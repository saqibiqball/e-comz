import { makeStyles } from "@material-ui/core/styles";
import image from "../../assets/Web.jpg";
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
  searchArea:{
    borderRadius: 800,
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
  mainGrid: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 992px)": {
      flexDirection: "column",
    },
  },
  carousel: {
    // zIndex: -1,
    position: "relative",
    "@media (max-width: 992px)": {
      // display: "none",
      minWidth: "430px",
    },
  },
  sidebarHide: {
    "@media (max-width: 992px)": {
      display: "none",
    },
  },
  searchPaper: {
    display: "none",
    padding: "10px",
    "@media (max-width: 992px)": {
      display: "block",
    },
  },
  carouselItems: {
    // height:"100vh",
    width: "100%",
  },
  sectionCards: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "20px",
    "@media (max-width: 992px)": {
      display: "none",
    },
  },
  productItemCarouselTitle: {
    display: "flex",
    justifyContent: "flext-start",
    padding:22,
    
  },
}));
