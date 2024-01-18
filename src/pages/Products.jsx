import { SearchIcon } from "@chakra-ui/icons"
import { Box, Button, IconButton, Input, Select, SimpleGrid, Spinner, Stack } from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import Pagination from "../components/Pagination";

const Products = () => {
    
    const [sortcri, setSortCri] = useState("");
    const [sortOrd, setSortOrd] = useState("");
    const [filter, setFilter] = useState("");
    const [query, setQuery] = useState("");
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [totalData, setTotalData] = useState();
    const [currPage, setCurrPage] = useState(1);
    const limit = 12;

    // API URL for fetching product data based on filters
    let url = new URL("https://lcal-pay.onrender.com/products");

    // Function to fetch product data based on filters
    const fetchTheData = () => {
        setLoading(true);

        // Add query parameter if a search query is provided
        if (query !== "") {
            url.searchParams.append('q', query)
            setCurrPage(1);
        }

        // Add sorting parameters if provided
        if (sortcri !== "" && sortOrd !== "") {
            url.searchParams.append('_sort', sortcri);
            url.searchParams.append('_order', sortOrd);
        }

        // Add brand filter if provided
        if (filter !== "") {
            url.searchParams.append('brand', filter);
        }

        // Add pagination parameters
        url.searchParams.append("_page", currPage);
        url.searchParams.append('_limit', 12);

        // Fetch data using Axios
        axios.get(url)
            .then((res) => {
                setProductData(res.data)
                setLoading(false);
                setErr("");
            })
            .catch((err) => {
                setErr(err)
                setProductData([]);
                setLoading(false);
            })
    }

    // Function to handle page changes
    const handlePageChange = (value) => {
        setCurrPage(value);
    }

    // URL for fetching total data (for pagination)
    let url1 = new URL("https://lcal-pay.onrender.com/products");

    // Function to fetch total data count
    const allthedata = () => {
        axios.get(url1)
            .then((res) => {
                setTotalData(res.data.length);
            })
            .catch((err) => {
                setErr(err)
            })
    }

    // useEffect to fetch initial data and total data count
    useEffect(() => {
        fetchTheData();
        allthedata();
    }, [currPage])

    // Loading spinner if data is still loading
    if (loading) {
        return <Spinner size={"xl"} />
    }

    // Display an error message if there's an error
    if (err) {
        return <ErrorIndicator />
    }

    // Render the product listing page
    return (
        <Box pt={5}>
            {/* Search bar */}
            <Stack direction={"row"} w={"70%"} m={"auto"}>
                <Input placeholder="Search by Product Name" focusBorderColor="#4AAB76" borderColor={"#4AAB76"} backgroundColor={"white"} value={query} onChange={(e) => setQuery(e.target.value)} />
                <IconButton icon={<SearchIcon />} bg="#4AAB76" color={"white"} onClick={fetchTheData} />
            </Stack>

            {/* Filter and sorting options */}
            <Stack direction={["column", "column", "row"]} w={["70%", "70%", "60%"]} m={"auto"} mt={"1"}>
                <Select placeholder="Select Sort Criteria" w={["70%", "70%", "fit-content"]} m={"auto"} focusBorderColor="#4AAB76" borderColor={"#4AAB76"} onChange={(e) => setSortCri(e.target.value)} backgroundColor={"white"} value={sortcri}>
                    <option value={"price"}>Price</option>
                    <option value={"rating"}>Rating</option>
                </Select>
                <Select placeholder="Select Sorting Order" w={["70%", "70%", "fit-content"]} m={"auto"} borderColor={"#4AAB76"} focusBorderColor="#4AAB76" onChange={(e) => setSortOrd(e.target.value)} backgroundColor={"white"} value={sortOrd}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </Select>
                <Select placeholder="Select for Filter by Brand" w={["70%", "70%", "fit-content"]} focusBorderColor="#4AAB76" m={"auto"} borderColor={"#4AAB76"} value={filter} onChange={(e) => setFilter(e.target.value)} backgroundColor={"white"}>
                    <option value="Painting Mantra">Painting Mantra</option>
                    <option value="Pidilite">Pidilite</option>
                    <option value="Pitaara Box">Pitaara Box</option>
                    <option value="Wall Design">Wall Design</option>
                </Select>
                <Button backgroundColor={"#4AAB76"} color={"white"} onClick={fetchTheData}>Apply</Button>
                <Button backgroundColor={"red"} color={"white"} onClick={() => {
                    allthedata();
                    setQuery("");
                    setSortCri("");
                    setSortOrd("");
                    setFilter("");
                }}>Reset</Button>
            </Stack>

            {/* Display products using SimpleGrid */}
            <SimpleGrid columns={["1", "1", "2", "4"]} spacing='20px' w={"100%"} m={"auto"} mt={"5"} gap={"20px"}>
                {productData?.map((item) => {
                    return <Product {...item} key={item.id} />
                })}
            </SimpleGrid>

            {/* Pagination component */}
            <Pagination totalData={totalData} handlePageChange={handlePageChange} page={currPage} limit={limit} />
            {/* Footer component (commented out, since it's not provided) */}
            {/* <Footer /> */}
        </Box>
    )
}

export default Products;
