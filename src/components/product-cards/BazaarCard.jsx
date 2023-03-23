import React from "react";
import { styled } from "@material-ui/styles";
import { Card } from "@material-ui/core";

// ===============================================

// ===============================================

const BazaarCard = styled(({ hoverEffect, children, ...rest }) => (
  <Card {...rest}>{children}</Card>
))(({ theme, hoverEffect }) => ({
  overflow: "unset",
  borderRadius: "8px",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    ...(hoverEffect && {
      boxShadow: theme.shadows[3],
    }),
  },
}));
BazaarCard.defaultProps = {
  hoverEffect: false,
};
export default BazaarCard;
