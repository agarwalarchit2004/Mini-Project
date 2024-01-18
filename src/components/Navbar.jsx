import React from 'react';
import logo from"../assets/logo.jpg";
import { Link } from 'react-router-dom';
import {
    Box,
    Image,
    Flex,
    Spacer,
    chakra,
    VStack,
    Button,
    HStack,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    background,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';


const NoDecorationLink = chakra(Link, {
    baseStyle: {
        textDecoration: 'none',
        _hover: {
            textDecoration: 'none',
        },
    },
});

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const isAuth = useSelector((store) => store.authReducer.isAuth);
    console.log(isAuth);
    const userName = useSelector(store => store.authReducer.user.name)
    return (
        <chakra.header marginBottom={"50px"} width={"100%"} >
            <Box className="text-black py-4 px-8 bg-pink-100"  >
                <Flex alignItems="center" >
                    <NoDecorationLink href="#" >
                        <Flex gap="20px" alignItems="ceter">
                            <chakra.h1 className="text-pink-500 text-3xl font-bold" >
                                
                                Pehchan
                            
                            </chakra.h1>
                            <img src={logo} className="w-10 h-15"/>
                        </Flex>
                    </NoDecorationLink>
                    <Spacer />
                    <HStack spacing={10} fontSize="xl" display={{ base: 'none', md: 'flex' }}>
                        <Link to="/" className="hover:text-pink-500 font-bold" >
                            Home
                        </Link>
                        <Link to="/"  className="hover:text-pink-500 font-bold">
                            Explore exhibition
                        </Link>
                        <Link to="/products"   className="hover:text-pink-500 font-bold">
                            Purchase
                        </Link>
                        <Link to="/"  className="hover:text-pink-500 font-bold">
                            Interact
                        </Link>
                        <Link to="/cart"  className="hover:text-pink-500 font-bold">
                            Cart
                        </Link>
                        {!isAuth ? <Link to="/login"> <Button>Login</Button></Link> : <Link to="/profile"><Button>{userName}</Button></Link>}
                    </HStack>
                    <IconButton
                        display={{ base: 'inline-flex', md: 'none' }}
                        ref={btnRef}
                        aria-label="Open menu"
                        icon={<HamburgerIcon />}
                        color="white"
                        className="bg-pink-200"
                        onClick={onOpen}
                        variant="ghost"
                    />
                </Flex>
            </Box>

            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <VStack direction="column" spacing={4}>
                            <Link to="/" onClick={onClose}>
                                Home
                            </Link>
                            <Link to="/" onClick={onClose}>
                               Explore Exhibition
                            </Link>
                            <Link to="/products" onClick={onClose}>
                               Purchase
                            </Link>
                            <Link to="/" onClick={onClose}>
                               Interact
                            </Link>
                            
                            <Link to="/cart" onClick={onClose}>
                                Cart
                            </Link>
                            {!isAuth ? <Link to="/login"> <Button>Login</Button></Link> : <Link to="/profile"><Button>{userName}</Button></Link>}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </chakra.header>
    );
};

export default Navbar;