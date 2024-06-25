import React from "react";
import CardWidget from "../CardWidget/CardWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Heading,
  Button,
} from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { Flex, Spacer } from '@chakra-ui/react'
import './NavBar.css'

const NavBar = () => {
  return (
    <Flex className="navBar" justify={'space-between'} aling={'center'} height={'10vh'} w={'100%'}>
        
      <Heading ml={2}>  
        
        
        Deportem</Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<IoIosArrowDown />}>
          Productos
        </MenuButton>
        <MenuList>
          <MenuItem>Playeras</MenuItem>
          <MenuItem>Pants</MenuItem>
          <MenuItem>Tenis</MenuItem>
        </MenuList>
      </Menu>

      <CardWidget />
    </Flex>
  );
};

export default NavBar;
