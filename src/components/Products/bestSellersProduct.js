import React from "react";
import { Grid, CircularProgress, Typography } from "@material-ui/core";
import Product from "./Product/Product.js";
import ProductCarousel from "../carousels/ProductCarousel";
import { products as productitems } from "../../mockdata";

const freaturedItemArray = productitems.filter(
  (productitem) => productitem.for.type === "featured-items"
);
function BestSellersSection({ classes, searchTerm, products, onAddToCart }) {
  return (
    <>
      <Grid iten xs={6} sm={12}>
        <Typography variant="h3">Best Sellers</Typography>
      </Grid>
      <Grid className={classes.content} container justify="center" spacing={5}>
        {products.length === 0 ? (
          <CircularProgress color="secondary" />
        ) : (
          products
            .filter((product) => {
              if (searchTerm === "") {
                return product;
              } else if (
                product.name
                  .toLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return product;
              }
            })
            .map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} id="pro">
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))
        )}
        <ProductCarousel title="Featured Items" products={freaturedItemArray} />
      </Grid>
    </>
  );
}

export default BestSellersSection;
