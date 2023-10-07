import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Select,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from 'axios';
import signInImage from "../imagemedico/3568982-ai.svg";
import banner from '../imagemedico/banner_bg.png'
import { useNavigate } from "react-router-dom";
// Extend the Chakra UI theme if needed
const theme = extendTheme({
  colors: {
    teal: {
      200: "#e6f8ed",
      300: "#329963",
    },
    gray: {
      400: "#CBD5E0",
      700: "#2D3748",
    },
  },
});

function SignUp() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = React.useState(new Date());
  const [Email,setEmail]=React.useState('');
  const [Password,setPassword]=React.useState('');
  const [ConfirmPassword,setConfirmPassword]=React.useState('');
  const [Lastname,setLastname]=React.useState('');
  const [Firstname,setFirstname]=React.useState('');
  const [BirthDate,setBirthDate]=React.useState('');
  const [ Sexe,setSexe]=React.useState('');
  
  const [Tel,setTel]=React.useState('');
  // Chakra color mode
  const titleColor = useColorModeValue("#329963", "#e6f8ed");
  const textColor = useColorModeValue("gray.400", "white");
  const [selectedOption, setSelectedOption] = React.useState("");
  const [msg, setMsg] = React.useState("");

  const Signup = (e) => {
    e.preventDefault();
    
    axios.post("http://localhost:8080/api/v1/auth/register", {
      identifiant: Email,
      firstname:Firstname,
      lastname:Lastname,
      password: Password,
      birth_date:startDate,
      gender:selectedOption,
      tel:Tel,
      role:"PATIENT"
    })
    .then((response) => {
      console.log(response.data.body.token);
      localStorage.setItem('jwtToken', response.data.body.token);
      navigate('../home', { replace: true });
     
    }).catch((error) => {
      console.log(error);

    });

  
}
  return (
    <ChakraProvider theme={theme}>
      <Flex position="relative" mb="40px" bgRepeat="no-repeat" bgImage={banner}>
        <Flex
          h={{ sm: "initial", md: "140vh", lg: "140vh" }}
          w="100%"
          maxW="1044px"
          mx="auto"
          justifyContent="space-between"
          mb="30px"
          pt={{ sm: "100px", md: "0px" }}
        >
          <Flex
            alignItems="center"
            justifyContent="start"
            style={{ userSelect: "none" }}
            w={{ base: "100%", md: "50%", lg: "42%" }}
          >
            <Flex
              direction="column"
              w="100%"
              background="transparent"
              p="48px"
              mt={{ md: "150px", lg: "80px" }}
            >
              <Heading color={titleColor} fontSize="32px" mb="10px">
                Welcome to Medico
              </Heading>
              <Text
                mb="36px"
                ms="4px"
                color={textColor}
                fontWeight="bold"
                fontSize="14px"
              >
                Enter your informations to sign up
              </Text>
              <form onSubmit={(e) => {
      e.preventDefault();
      if (Password === ConfirmPassword) {
        Signup(e);
      } else {
        alert("Passwords don't match");
      }
    }}>
              <FormControl>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                 First name
                </FormLabel>
                <Input
                  borderRadius="15px"
                  mb="36px"
                  fontSize="sm"
                  type="text"
                  placeholder="First name"
                  size="lg"
                  onChange={(e)=>setFirstname(e.target.value)}
                />
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                 Last name
                </FormLabel>
                <Input
                  borderRadius="15px"
                  mb="36px"
                  fontSize="sm"
                  type="text"
                  placeholder="Last name"
                  size="lg"
                  onChange={(e)=>setLastname(e.target.value)}
                />
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Email
                </FormLabel>
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="email"
                  placeholder="Your email adress"
                  size="lg"
                  onChange={(e)=>setEmail(e.target.value)}
                />
                 <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Tel
                </FormLabel>
                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your tel"
                  size="lg"
                  onChange={(e)=>setTel(e.target.value)}
                />
                 <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                   Gender
                </FormLabel>
                <Select placeholder='Select gender' value={selectedOption}
                    onChange={e => setSelectedOption(e.target.value)}>
                 <option value='Female'>Female</option>
                 <option value='Male'>Male</option>
 
                </Select>
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Birth date
                </FormLabel>
                <DatePicker selected={startDate}  onChange={(date) => setStartDate(date)} />
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Password
                </FormLabel>
                <Input
                  borderRadius="15px"
                  mb="36px"
                  fontSize="sm"
                  type="password"
                  placeholder="Your password"
                  size="lg"
                  onChange={(e)=>setPassword(e.target.value)}
                />
                      <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Confirm password
                </FormLabel>
                <Input
                  borderRadius="15px"
                  mb="36px"
                  fontSize="sm"
                  type="password"
                  placeholder="Confirm password"
                  size="lg"
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                />
                <a href="/login" style={{color:"#329963"}}>Already registred?</a>
                <Button
                  fontSize="10px"
                  type="submit"
                  bg="#329963"
                  w="100%"
                  h="45"
                  mb="20px"
                  color="white"
                  mt="20px"
                  _hover={{
                    bg: "#065f46",
                  }}
                  _active={{
                    bg: "teal.400",
                  }}
                >
                  SIGN UP
                </Button>
              </FormControl>
        </form>
            </Flex>
          </Flex>
          <Box
         
            display={{ base: "none", md: "block" }}
            overflowX="hidden"
            h="100%"
            w="40vw"
            position="absolute"
            right="0px"
          >
            <Box
              bgImage={signInImage}
              w="100%"
              h="80%"
              bgSize="cover"
              bgPosition="50%"
              marginRight={'50px'}
              position="absolute"
              borderBottomLeftRadius="20px"
            ></Box>
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default SignUp;
