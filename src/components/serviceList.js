// import React from "react";
// import { Box, Grid, styled } from "@mui/material";
// import Truck from "./icons/Truck";
// import Payment from "./icons/Payment";
// import MoneyGuarantee from "./icons/MoneyGurantee";
// import { H4, Span } from "../components/Typography";

// const FlexBox = ({ children, ...props }) => (
//   <Box display="flex" {...props}>
//     {children}
//   </Box>
// );

// // styled component
// const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
//   flexWrap: "wrap",
//   padding: "1.5rem",
//   borderRadius: "8px",
//   border: `1px solid ${theme.palette.grey[400]}`,
//   [theme.breakpoints.between("sm", "md")]: {
//     textAlign: "center",
//     padding: "1rem 0.5rem",
//     flexDirection: "column",
//   },
// }));

// // ==========================================================

// // services
// export const serviceList = [
//   {
//     id: "5777f551-aca2-4b94-8e55-f170fbb52d25",
//     icon: <Truck />,
//     title: "Fast Delivery",
//     description: "Start from $10",
//   },
//   {
//     id: "7ba08a7d-9f00-43be-a632-7d2123f95109",
//     icon: <MoneyGuarantee />,
//     title: "Money Guarantee",
//     description: "7 Days Back",
//   },
//   {
//     id: "f2ad1b40-0aeb-4fb0-af34-1f2b475f89ed",
//     icon: <Payment />,
//     title: "Payment",
//     description: "Secure system",
//   },
// ];

// // ==========================================================

// const Section2 = () => {
//   return (
//     <Box>
//       <Grid container spacing={3}>
//         {serviceList.map((item, ind) => {
//           return (
//             <Grid item lg={4} sm={6} xs={12} key={ind}>
//               <StyledFlexBox gap={2} alignItems="center">
//                 <item.icon
//                   sx={{
//                     fontSize: 50,
//                     color: "grey.600",
//                   }}
//                 />

//                 <Box>
//                   <H4 color="grey.900" fontSize={20} fontWeight={700}>
//                     {item.title}
//                   </H4>
//                   <Span color="grey.600">{item.description}</Span>
//                 </Box>
//               </StyledFlexBox>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </Box>
//   );
// };
// export default Section2;
