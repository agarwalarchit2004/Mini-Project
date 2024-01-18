import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, HStack, Heading, IconButton, Image, SimpleGrid, Spacer, Stack, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { CART_ADD } from "../redux/actionTypes";

const star1 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/800px-Five-pointed_star.svg.png";
const star2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-V2iaGwhth_mrQa1bMrHcMMhgLpFIFMkYWg_KaC2sIAIwPhVbWfXMRQiFh9Esuno_So&usqp=CAU";

const SingleProduct = () => {
  const { id } = useParams();
  const datas = useSelector((store) => store.productReducer.cart);
  console.log(datas);
  const dispatch = useDispatch();
  const [singleData, setSingleData] = useState({});
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = startIndex + 1;
    setStartIndex(Math.min(nextIndex, recentData.length - 1));
  };

  const handlePrev = () => {
    const prevIndex = startIndex - 1;
    setStartIndex(Math.max(prevIndex, 0));
  };
  const products = useSelector((store) => store.productReducer.products);
  const recentData = JSON.parse(localStorage.getItem("recent"));
  const handleCart = () => {
    let data = {
      id: singleData.id,
      image: singleData.image,
      title: singleData.title,
      price: singleData.price,
      rating: singleData.rating,
      brand: singleData.brand,
      quantity: 1,
    };
    dispatch({ type: CART_ADD, payload: data });
  };

  useEffect(() => {
    const data = products.filter((item) => item.id == id);
    setSingleData(data[0]);
  }, []);

  return (
    <div>
      <div className="lg:flex lg:items-center lg:justify-between w-full mx-auto p-4 md:p-8">
        <div className="lg:w-1/2 lg:mr-4 mb-8 lg:mb-0">
          <img src={singleData.image} alt={singleData.title} className="w-full h-auto" />
          <div className="flex justify-between mt-4">
            <button
              className="w-1/2 bg-orange-500 text-white font-bold h-12 rounded-md hover:bg-blue-500"
              onClick={handleCart}
            >
              ADD TO CART
            </button>
            <button className="w-1/2 bg-red-500 text-white font-bold h-12 rounded-md hover:bg-blue-500">
              BUY NOW
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 text-left p-4 md:p-8">
          <p className="text-3xl font-bold mb-4 lg:mb-6">{singleData.title}</p>
          <p className="text-xl mb-2">Brand: {singleData.brand}</p>
          <p className="text-lg text-pink-500 mb-4">Special Price</p>
          <p className="text-4xl font-semibold">₹ {singleData.price}.00</p>
          <div className="flex justify-between items-center mt-4">
            <p className={`text-${singleData.rating >= 4 ? "green" : "red"}`}>Rating: </p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={i + 1 <= singleData.rating ? star2 : star1}
                  alt={`Star ${i + 1}`}
                  className="w-5 h-5"
                />
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold">Available offers</p>
            <p>🏷️ Bank Offer 5% off on Axis Bank Credit Card, up to ₹625, on orders of ₹5,000 and above</p>
            <p>
              🏷️ Special Price Get extra 12% off (price inclusive of cashback/coupon)
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto mt-10">
        {recentData.length === 0 ? (
          "There is No Visited Products"
        ) : (
          <Box w="full" m="auto" mt={10}>
            <Stack direction="row">
              <Heading textAlign="left" color="#4AAB76">
                Recent Visited Products
              </Heading>
              <Spacer />
              <HStack>
                <IconButton
                  icon={<ChevronLeftIcon />}
                  backgroundColor="#4AAB76"
                  color="white"
                  onClick={handlePrev}
                  isDisabled={startIndex === 0}
                />
                <IconButton
                  icon={<ChevronRightIcon />}
                  backgroundColor="#4AAB76"
                  color="white"
                  onClick={handleNext}
                  isDisabled={startIndex + 4 >= recentData.length}
                />
              </HStack>
            </Stack>
            <Box overflowX="hidden" overflowY="auto" mt={5}>
              <SimpleGrid
                columns={["1", "2", "4", "4"]}
                gap={0.5}
                justifyContent="center"
                w="full"
                mt={5}
              >
                {recentData?.length > 0 &&
                  recentData.slice(startIndex, startIndex + 4).map((item) => (
                    <Box
                      key={item.id}
                      w="90%"
                      m="auto"
                      border="1px"
                      borderRadius="15px"
                      borderColor="#4AAB76"
                    >
                      <Image
                        src={item.image}
                        w="full"
                        h={300}
                        borderRadius="15px 15px 0px 0px"
                        alt={item.title}
                      />
                      <Text fontSize="xl" noOfLines={1}>
                        {item.title}
                      </Text>
                      <Text fontSize="md">₹{item.price}</Text>
                      <Text>{item.rating}⭐</Text>
                    </Box>
                  ))}
              </SimpleGrid>
            </Box>
          </Box>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
