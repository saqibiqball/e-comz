import React from "react";
import { Grid, CircularProgress, Typography } from "@material-ui/core";
import Product from "./Product/Product.js";
import CarouselProduct from "./carsoulProduct";
import Carousel from "react-multi-carousel";
import { responsive, productData } from "./carouselData";
import "./productStyle.css";
function BestSellersSection({ classes, searchTerm, products, onAddToCart }) {
  const productItem = productData.map((item) => (
    <CarouselProduct
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));
  return (
    <>
    
      <div className="mainCardStyles">
        <Grid xs={12} className={classes.productItemCarouselTitle}>
          <Typography variant="h6">Paper Books</Typography>
        </Grid>
        <Carousel containerClass="carousel-container" showDots={true} responsive={responsive}>
          {productItem}
        </Carousel>
      </div>
      <div className="mainCardStyles">
        <Grid xs={12} className={classes.productItemCarouselTitle}>
          <Typography variant="h6">E - Books</Typography>
        </Grid>
        <Carousel containerClass="carousel-container" showDots={true} responsive={responsive}>
          {productItem}
        </Carousel>
      </div>
      <div className="mainCardStyles">
        <Grid xs={12} className={classes.productItemCarouselTitle}>
          <Typography variant="h6">Audio Books</Typography>
        </Grid>
        <Carousel containerClass="carousel-container" showDots={true} responsive={responsive}>
          {productItem}
        </Carousel>
      </div>
      <Grid container spacing={3} style={{marginTop:"5px"}}>
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
      </Grid>
    </>
  );
}

export default BestSellersSection;
