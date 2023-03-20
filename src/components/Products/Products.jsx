import React, { useState } from "react";
import {
  Grid,
  InputAdornment,
  Input,
  Button,
  Paper,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Product from "./Product/Product.js";
import useStyles from "./styles";
import Carousel from "react-bootstrap/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo1 from "../../assets/2.jpeg";
import logo2 from "../../assets/4.png";
import logo3 from "../../assets/3.png";
import logo4 from "../../assets/5.png";
import Sidebar from "../Sidebar/sidebar";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import { useSelector, useDispatch } from "react-redux";
import Section2 from "../serviceList";
import BestSellersSection from "./bestSellersProduct";
const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  const searchTerm = useSelector((state) => state.searchItemReducer.searchItem);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid className={classes.mainGrid}>
        <Grid className={classes.sidebarHide} item xs={6} sm={6}>
          <Sidebar />
        </Grid>
        <Grid className={classes.carousel} item xs={6} sm={12}>
          <Carousel fade autoPlay>
            <Carousel.Item>
              <img
                height={"10%"}
                className="d-block w-100"
                src={logo4}
                alt=" slide"
              />
              {/* <Carousel.Caption>
                  <Button
                    className={classes.but}
                    size="large"
                    variant="contained"
                    color="default"
                    href="#pro"
                  >
                    Explore
                  </Button>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={logo3} alt="Second slide" />
              {/* <Carousel.Caption>
                  <Button
                    className={classes.but}
                    size="large"
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/cart"
                  >
                    Checkout Cart
                  </Button>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={logo2} alt="Second slide" />
              {/* <Carousel.Caption>
                  <Button
                    className={classes.but}
                    size="large"
                    variant="contained"
                    color="primary"
                    href="#foot"
                  >
                    Other Works
                  </Button>
                </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </Grid>
      </Grid>
      <BestSellersSection
        classes={classes}
        searchTerm={searchTerm}
        products={products}
        onAddToCart={onAddToCart}
      />
    </main>
  );
};

export default Products;
