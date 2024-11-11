import React from "react";
import LikeIcon from "../assets/like-icon";
import { IconButton, Stack, Typography } from "@mui/material";
import { useProducts } from "../service/useProduct";

export const Card = (props) => {
  const { addProduct } = useProducts();
  const handleLike = () => {
    addProduct(props);
  };

  return (
    <div>
      <Stack>
        <img style={{ width: "100%" }} src={props.img} alt="img" />
        <Stack
          direction={"row"}
          mt={"8px"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack direction={"row"} gap={"8px"}>
            <img
              style={{ width: "24px", height: "24px" }}
              src={props.logo}
              alt="logo"
            />
            <Typography>{props.name}</Typography>
          </Stack>
          <IconButton onClick={handleLike}>
            <LikeIcon />
          </IconButton>
        </Stack>
      </Stack>
    </div>
  );
};
