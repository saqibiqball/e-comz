import React, { Fragment, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import AddIcon from "@material-ui/icons/Add";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RemoveIcon from "@material-ui/icons/Remove";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Box, Button, Chip, IconButton, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { useSnackbar } from "notistack";
import { H3, Span } from "../Typography";
import { useAppContext } from "../../contexts/AppContext";
import LazyImage from "../LazyImage";
import BazaarCard from "../product-cards/BazaarCard";


// import ProductViewDialog from "components/products/ProductViewDialog";

const FlexBox = ({ children, ...props }) => (
  <Box display="flex" {...props}>
    {children}
  </Box>
);

function calculateDiscount(price, discount) {
  const afterDiscount = Number((price - price * (discount / 100)).toFixed(2));
  return afterDiscount;
}
// styled components
const StyledBazaarCard = styled(BazaarCard)({
  height: "100%",
  margin: "auto",
  display: "flex",
  overflow: "hidden",
  borderRadius: "8px",
  position: "relative",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "all 250ms ease-in-out",
  ":hover": {
    "& .hover-box": {
      opacity: 1,
    },
  },
});
const ImageWrapper = styled(Box)(({ theme }) => ({
  textAlign: "center",
  position: "relative",
  display: "block",
}));
const StyledChip =  (Chip)({
  zIndex: 1,
  top: "10px",
  left: "10px",
  paddingLeft: 3,
  paddingRight: 3,
  fontWeight: 600,
  fontSize: "10px",
  position: "absolute",
});
const HoverIconWrapper = styled(Box)({
  zIndex: 2,
  top: "7px",
  opacity: 0,
  right: "15px",
  display: "flex",
  cursor: "pointer",
  position: "absolute",
  flexDirection: "column",
  transition: "all 0.3s ease-in-out",
});
const ContentWrapper = styled(Box)({
  padding: "1rem",
  "& .title, & .categories": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
});

// ========================================================

// ========================================================

const ProductCard1 = ({
  id,
  slug,
  title,
  price,
  imgUrl,
  rating = 5,
  hideRating,
  hoverEffect,
  discount = 5,
  showProductSize,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const { state, dispatch } = useAppContext();
  const [openModal, setOpenModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleIsFavorite = () => setIsFavorite((fav) => !fav);
  const toggleDialog = useCallback(() => setOpenModal((open) => !open), []);
  const cartItem = state.cart.find((item) => item.slug === slug);
  const handleCartAmountChange = (product, type) => () => {
    dispatch({
      type: "CHANGE_CART_AMOUNT",
      payload: product,
    });
    // SHOW ALERT PRODUCT ADDED OR REMOVE
    if (type === "remove") {
      enqueueSnackbar("Remove from Cart", {
        variant: "error",
      });
    } else {
      enqueueSnackbar("Added to Cart", {
        variant: "success",
      });
    }
  };
  return (
    <StyledBazaarCard hoverEffect={hoverEffect}>
      <ImageWrapper>
        {!!discount && (
          <StyledChip color="primary" size="small" label={`${discount}% off`} />
        )}

        <HoverIconWrapper className="hover-box">
          <IconButton onClick={toggleDialog}>
            <RemoveRedEyeIcon color="disabled" fontSize="small" />
          </IconButton>

          <IconButton onClick={toggleIsFavorite}>
            {isFavorite ? (
              <FavoriteIcon color="primary" fontSize="small" />
            ) : (
              <FavoriteBorderIcon fontSize="small" color="disabled" />
            )}
          </IconButton>
        </HoverIconWrapper>

        <Link href={`/product/${slug}`}>
          <a>
            <LazyImage
              src={imgUrl}
              width={0}
              height={0}
              layout="responsive"
              alt={title}
            />
          </a>
        </Link>
      </ImageWrapper>
{/* 
      <ProductViewDialog
        openDialog={openModal}
        handleCloseDialog={toggleDialog}
        product={{
          title,
          price,
          id,
          slug,
          imgGroup: [imgUrl, imgUrl],
        }}
      /> */}

      <ContentWrapper>
        <FlexBox>
          <Box flex="1 1 0" minWidth="0px" mr={1}>
            <Link href={`/product/${slug}`}>
              <a>
                <H3
                  mb={1}
                  title={title}
                  fontSize="14px"
                  fontWeight="600"
                  className="title"
                  color="text.secondary"
                >
                  {title}
                </H3>
              </a>
            </Link>

            {!hideRating && (
              <Typography sx={{fontSize: "1.25rem"}} value={rating || 0} color="warn" readOnly />
            )}

            {showProductSize && (
              <Span color="grey.600" mb={1} display="block">
                {showProductSize}
              </Span>
            )}

            <FlexBox alignItems="center" gap={1} mt={0.5}>
              <Box fontWeight="600" color="primary.main">
                {calculateDiscount(price, discount)}
              </Box>

              {!!discount && (
                <Box color="grey.600" fontWeight="600">
                  <del>${price}</del>
                </Box>
              )}
            </FlexBox>
          </Box>

          <FlexBox
            width="30px"
            alignItems="center"
            className="add-cart"
            flexDirection="column-reverse"
            justifyContent={!!cartItem?.qty ? "space-between" : "flex-start"}
          >
            <Button
              color="primary"
              variant="outlined"
              sx={{
                padding: "3px",
              }}
              onClick={handleCartAmountChange({
                id,
                slug,
                price,
                imgUrl,
                name: title,
                qty: (cartItem?.qty || 0) + 1,
              })}
            >
              <AddIcon fontSize="small" />
            </Button>

            {!!cartItem?.qty && (
              <Fragment>
                <Box color="text.primary" fontWeight="600">
                  {cartItem?.qty}
                </Box>

                <Button
                  color="primary"
                  variant="outlined"
                  sx={{
                    padding: "3px",
                  }}
                  onClick={handleCartAmountChange(
                    {
                      id,
                      slug,
                      price,
                      imgUrl,
                      name: title,
                      qty: (cartItem?.qty || 0) - 1,
                    },
                    "remove"
                  )}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
              </Fragment>
            )}
          </FlexBox>
        </FlexBox>
      </ContentWrapper>
    </StyledBazaarCard>
  );
};
export default ProductCard1;
