import React from 'react';
import { styled } from "@material-ui/styles";
import { bgcolor, compose, spacing, borderRadius } from '@material-ui/system';
const LazyImage = styled(({ borderRadius, ...rest }) => <img {...rest} />)(
  compose(spacing, borderRadius, bgcolor)
);
export default LazyImage;
