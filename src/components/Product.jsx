import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link as ReactRouterDom, useNavigate } from "react-router-dom";
import { CART_ADD } from "../redux/actionTypes";

const Product = ({ image, title, price, rating, brand, id }) => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRecent = (id, image, title, price, rating, brand) => {
    let recentData = JSON.parse(localStorage.getItem("recent")) || [];
    const existingProduct = recentData?.find((product) => product.id === id);
    if (!existingProduct) {
      let data = {
        id,
        image,
        title,
        price,
        rating,
        brand,
      };
      const updatedRecent = [data, ...recentData];
      localStorage.setItem("recent", JSON.stringify(updatedRecent));
    }
  };

  const handleCart = () => {
    if (!isAuth) {
      navigate("/login");
    } else {
      let data = {
        id,
        image,
        title,
        price,
        rating,
        brand,
        quantity: 1,
      };
      dispatch({ type: CART_ADD, payload: data });
    }
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box
        onClick={() => handleRecent(id, image, title, price, rating, brand)}
        as={ReactRouterDom}
        to={`/products/${id}`}
        textDecoration="none"
        _hover={{ textDecoration: "none" }}
        cursor="pointer"
      >
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <Box p="6">
          <Text fontSize="xl" fontWeight="semibold" noOfLines={1}>
            {title}
          </Text>
          <Text fontSize="md" fontWeight="normal">
            ₹ {price}
          </Text>
          <Text fontSize="md" fontWeight="normal">
            {rating} ⭐
          </Text>
          <Text fontSize="md" fontWeight="normal">
            {brand}
          </Text>
        </Box>
      </Box>
      <Box p="6">
        <Button
          bg="#4AAB76"
          color="white"
          w="full"
          onClick={() => handleCart(id, image, title, price, rating, brand)}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default Product;
