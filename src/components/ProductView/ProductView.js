import React from "react";
import {
  Container,
  Grid,
  Button,
  Typography,
  CircularProgress,
  Box
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import { useState, useEffect } from "react";
import "./style.css";
import useStyles from "./style";
const createMarkup = (text) => {
  return { __html: text };
};

const ProductView = () => {
  const [product, setProduct] = useState({});
  const classes = useStyles();
  const fetchProduct = async (id) => {
    const response = await commerce.products.retrieve(id);
    console.log(response);
    const { name, price, media, quantity, description } = response;
    setProduct({
      name,
      quantity,
      description,
      src: media.source,
      price: price.formatted_with_symbol,
    });
  };

  useEffect(() => {
    const id = window.location.pathname.split("/");
    fetchProduct(id[2]);
  }, []);
  console.log(product.name);
  return (
    <>
      {product.name === undefined ? (
        <Container className="product-view">
          <Grid container>
            <Box className={classes.spinner}>
              <CircularProgress color="secondary" />
            </Box>
          </Grid>
        </Container>
      ) : (
        <Container className="product-view">
          <Grid container>
            <Grid item xs={12} md={6} className="image-wrapper">
              <img src={product.src} alt={product.name} />
            </Grid>
            <Grid item xs={12} md={5} className="text">
              <Typography variant="h2">
                <b>{product.name}</b>
              </Typography>
              <hr />
              <Typography
                variant="caption"
                dangerouslySetInnerHTML={createMarkup(product.description)}
              />
              <Typography variant="h3" color="secondary">
                Price: <b> {product.price} </b>{" "}
              </Typography>
              <br />
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Button
                    size="large"
                    className="custom-button"
                    component={Link}
                    to="/"
                  >
                    Continue Shopping
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default ProductView;
