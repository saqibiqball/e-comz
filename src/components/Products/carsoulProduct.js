import React from "react";
import "./productStyle.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { AddShoppingCart } from "@material-ui/icons";
const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    marginBottom: "19px",
  },
});
export default function CarouselProduct(props) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image={props.url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            endIcon={<AddShoppingCart />}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
