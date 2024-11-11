import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import { Form } from "../../components/form";
import { Card } from "../../components/card";
import useGetProduct from "./service/query/useGetProduct";
import hero_bg from "../../assets/heroBg.png";
const Home = () => {
  const { data, isLoading } = useGetProduct();
  console.log(data);

  return (
    <div>
      <section>
        <Box
          bgcolor={"#000"}
          sx={{ backgroundImage: `url(${hero_bg})`, backgroundSize: "cover" }}
        >
          <Container maxWidth={"xl"} sx={{ pt: "50px", pb: "80px" }}>
            <Stack>
              <Typography
                mx={"auto"}
                maxWidth={"411px"}
                fontWeight={700}
                color="#fff"
                fontSize={"32px"}
                lineHeight={"125%"}
                textAlign={"center"}
                variant="h2"
              >
                Explore the world’s leading design portfolios
              </Typography>
              <Typography
                mt={"16px"}
                mx={"auto"}
                maxWidth={"614px"}
                fontWeight={400}
                fontSize={"16px"}
                lineHeight={"175%"}
                textAlign={"center"}
                color="#fff"
              >
                Millions of designers and agencies around the world showcase
                their portfolio work on Dribbble - the home to the world’s best
                design and creative professionals.
              </Typography>
              <Form />
            </Stack>
          </Container>
        </Box>
      </section>
      <section style={{ paddingTop: "104px", paddingBottom: "40px" }}>
        <Box>
          <Container maxWidth="xs">
            <Grid2 container spacing={"36px"}>
              {isLoading
                ? "loading"
                : data?.map((item) => (
                    <Grid2 size={3} key={item.id}>
                      <Card key={item.id} {...item} />
                    </Grid2>
                  ))}
            </Grid2>
          </Container>
        </Box>
      </section>
    </div>
  );
};

export default Home;
