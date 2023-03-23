import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Modal,
  styled,
  Button,
  debounce,
  Checkbox,
  TextField,
  IconButton,
  FormControlLabel,
  ClickAwayListener,
} from "@material-ui/core";
import { H1, Paragraph, Span } from "./Typography";
import { Clear } from "@material-ui/icons";
import newsletter1bg from "../assets/owlbook.svg";
// import newsletter1bg from "../assets/bg-1.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
const FlexRowCenter = ({ children, ...props }) => (
  <Box display="flex" justifyContent="center" alignItems="center" {...props}>
    {children}
  </Box>
);

// styled components
const Wrapper = styled(Box)(({ theme, img }) => ({
  top: "50%",
  padding: 0,
  left: "50%",
  width: "100%",
  maxWidth: 1020,
  height: "auto",
  borderRadius: 8,
  outline: "none",
  position: "absolute",
  boxShadow: theme.shadows[3],
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.between("sm", "md")]: {
    maxWidth: 620,
    padding: 24,
  },
  [theme.breakpoints.up("md")]: {
    padding: 32,
    height: 550,
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    //   backgroundSize: "contain",
    backgroundPosition: "left",
  },
}));

// ======================================================

// ======================================================

const Newsletter = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    debounce(() => setOpen(true), 2000)();
  }, []);
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          zIndex: 999999999,
        }}
      >
        <Wrapper img={newsletter1bg}>
          <Grid container spacing={2}>
            <Grid
              item
              lg={6}
              md={6}
              display={{
                md: "flex",
                xs: "none",
              }}
            />

            <Grid item lg={6} md={6} xs={12} alignItems="center">
              <IconButton onClick={handleClose}>
                <Clear
                  sx={{
                    color: "grey.900",
                  }}
                />
              </IconButton>
              <Box textAlign="center" p={3}>
                <Paragraph fontSize={22} fontWeight={700}>
                  UP TO <Span color="primary.main">30% OFF</Span>
                </Paragraph>

                <H1 fontSize={36} fontWeight={700} mb={2}>
                  Sign up to <Span color="primary.main">EKANSLAEH</Span>
                </H1>

                <Paragraph color="grey.600" mb={5}>
                  Subscribe to the EKANSLAEH eCommerce newsletter to receive
                  timely updates from your favorite products.
                </Paragraph>

                <TextField
                  fullWidth
                  placeholder="Enter your email address"
                  sx={{
                    mb: 2,
                    color: "secondary",
                    "& input": {
                      padding: 2,
                      textAlign: "center",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "grey.300",
                    },
                  }}
                />

                <Button
                  variant="contained"
                  fullWidth
                  color="secondary"
                  sx={{
                    p: 1.5,
                  }}
                >
                  SUBMIT
                </Button>

                <FlexRowCenter mt={4} mb={2}>
                  <IconButton>
                    <FacebookIcon
                      sx={{
                        fontSize: 20,
                        color: "grey.900",
                      }}
                    />
                  </IconButton>

                  <IconButton>
                    <TwitterIcon
                      sx={{
                        fontSize: 20,
                        color: "grey.900",
                      }}
                    />
                  </IconButton>

                  <IconButton>
                    <InstagramIcon
                      sx={{
                        fontSize: 20,
                        color: "grey.900",
                      }}
                    />
                  </IconButton>
                </FlexRowCenter>

                <FormControlLabel
                  control={<Checkbox color="secondary" defaultChecked />}
                  label="No, Thanks"
                />
              </Box>
            </Grid>
          </Grid>
        </Wrapper>
      </Modal>
    </ClickAwayListener>
  );
};
export default Newsletter;
