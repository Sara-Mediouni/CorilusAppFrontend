// chakra imports
import { Avatar, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { AiFillClockCircle} from "react-icons/ai";
import PropTypes from "prop-types";
import React from "react";
import {BsPersonSquare} from 'react-icons/bs'

export function ItemContent(props) {
  const navbarIcon = useColorModeValue("gray.500", "gray.200");
  const notificationColor = useColorModeValue("000", "white");
  const spacing = " ";
  return (
    <>
      <BsPersonSquare size="50px" color="#8d99ae"/>
     
      <Flex flexDirection="column" style={{marginLeft:"30px"}}>
        <Text fontSize="14px" mb="5px" >
          <Text fontWeight="bold" fontSize="14px" style={{color:"000"}} as="span">
            {props.boldInfo}
            {spacing}
          </Text>
          {props.info}
        </Text>
        <Flex alignItems="center">
          <AiFillClockCircle  w="13px" h="13px" me="3px" color="#8d99ae" />
          <Text fontSize="xs" lineHeight="100%" color={navbarIcon}>
            {props.time}
          </Text>
       
        </Flex>   
      </Flex>
    </>
  );
}
