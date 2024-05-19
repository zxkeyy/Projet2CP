
import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Input,
    Button,
    Link,
    IconButton,
    Image,
    useColorModeValue,
    Icon,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { FaXTwitter, FaWhatsapp} from 'react-icons/fa6';
  import {FaFacebook, FaInstagram} from "react-icons/fa";
  import { RxCaretRight } from "react-icons/rx";
  import logo from '../assets/LogoWhite.png';
  import bgImg from '../assets/Footer.png'; //Footer background Img

  import { Link as RouterLink } from 'react-router-dom';
  
  const Footer = () => {
    const [input, setInput] = useState<string>('');

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
    return (
      <Box
        bgImg={bgImg}
        bgColor="#070E20"
        color={useColorModeValue('gray.100', 'gray.200')}
        px={{ base: 4, md: 10 }} // Responsive padding
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify={{ base: 'center', md: 'space-between' }}         
        pb={10} // Footer padding
          wrap="wrap"
          align={{ base:"none",md:"center"}}
        >
        
  
          {/* Logo and Social Media Links */}
          <Stack direction="column" spacing={4} my={4} align={{ base: 'center', md: 'flex-start' }}>
            <Image src={logo} alt="Company Logo" h="100px"/>
            <Text fontSize="sm">We are the leading Security service<br/>
            provider in town. Take your business<br/>
            to new heights with the help of Our<br/>
            CCTV & Security.</Text>
            <Text fontSize="sm">Follow us on social media.</Text>
            <Flex 
                direction="row" 
                gap={2}>
              <IconButton
                as={Link}
                href="https://X.com/"
                aria-label="X"
                icon={<FaXTwitter />}
                 _hover={{ bg: 'gray.700',color:'gray.100' }}
                fontSize="3xl"
                size="md"
              />
              <IconButton
                as={Link}
                href="https://Whatsapp.com/"
                aria-label="Whatsapp"
                icon={<FaWhatsapp />}
                 _hover={{ bg: 'gray.700',color:'gray.100' }}
                fontSize="3xl"
                size="md"
              />
              <IconButton
                as={Link}
                href="https://Facebook.com/"
                aria-label="Facebook"
                icon={<FaFacebook />}
                 _hover={{ bg: 'gray.700',color:'gray.100' }}
                fontSize="3xl"
                size="md"
              />
              <IconButton
                as={Link}
                href="https://www.Instagram.com/"
                aria-label="Instagram"
                icon={<FaInstagram />}
                 _hover={{ bg: 'gray.700',color:'gray.100' }}
                fontSize="3xl"
                size="md"/>
            </Flex>
          </Stack>
          {/* Our Services */}
          <Stack direction="column" spacing={4} my={4}>
            <Heading as="h3" size="sm" textTransform="uppercase">
              Our Services
            </Heading>
            <Link href="/service1" _hover={{ textDecoration: 'underline' }}>
                <Icon as={RxCaretRight}></Icon>
                Finger Print Access
            </Link>
            <Link href="/service2" _hover={{ textDecoration: 'underline' }}>
                <Icon as={RxCaretRight}></Icon>
                Closed Circuit Cameras
            </Link>
            <Link href="/service3" _hover={{ textDecoration: 'underline' }}>
                <Icon as={RxCaretRight}></Icon>
                CCTV Installation
            </Link>
          </Stack>
  
          {/* Useful Links */}
          <Stack direction="column" spacing={4} my={4}>
            <Heading as="h3" size="sm" textTransform="uppercase">
              Useful Links
            </Heading>
            <Link href="/about" _hover={{ textDecoration: 'underline' }}>
                <Icon as={RxCaretRight}></Icon>
                Support
            </Link>
            <Link href="/contact" _hover={{ textDecoration: 'underline' }}>
                <Icon as={RxCaretRight}></Icon>
                Privacy Policy
            </Link>
            <Link href="/privacy" _hover={{ textDecoration: 'underline' }}>
                <Icon as={RxCaretRight}></Icon>
                Terms Of Use
            </Link>
          </Stack>
  
          {/* Subscribe to Us */}
          <Stack direction="column" spacing={4} mt={{base: "10px", md:"80px"}}>
            <Heading as="h3" size="sm" textTransform="uppercase" textAlign={{base:"center", md:"justify"}}>
              Subscribe to Us
            </Heading>
            <Text textAlign={{base:"center", lg:"justify"}}>Do you want to get the information<br/>
            about our Latest News & Updates<br/>
            without delay? Subscribe to our<br/>
            Newsletter and touch with us.</Text>
            <Input
              placeholder="Enter your email"
              bg={useColorModeValue('white', 'gray.700')}
              border={0}
              type='email'
              _focus={{ outline: 'none' }}
              onChange={handleInputChange}
              value={input}
              color="black"
            />
            <Link as={RouterLink} to="/Sign-up">
              <Button colorScheme="teal">Sign Up</Button>
            </Link>
          </Stack>
        </Flex>
  
        {/* Copyright */}
        <Flex justify="center" mt={{base:6, lg:0}}>
          <Text fontSize="sm">
            © {new Date().getFullYear()} My Company. All rights reserved.
          </Text>
        </Flex>
      </Box>
    );
  };
  
  export default Footer;
  