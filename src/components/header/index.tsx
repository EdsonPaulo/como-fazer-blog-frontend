import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiHome,
  FiSettings,
  FiPhone,
  FiAlertCircle,
} from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";

import ComoFazerLogo from "../../assets/svg/como-fazer-logo";

const Header: React.FC = () => {
  return (
    <nav>
      <Flex
        px={6}
        py={4}
        bg="white"
        shadow="base"
        alignItems="center"
        justifyContent="space-between"
        color="blackAlpha.800"
      >
        <Box>
          <ComoFazerLogo width={200} />
        </Box>

        <Flex>
          <Link
            to="/"
            d="flex"
            as={RouterLink}
            alignItems="center"
            className="nav-item"
          >
            <FiHome size={18} />
            <Text ml="1" fontSize="xl">
              Início
            </Text>
          </Link>

          <Link
            mx="6"
            d="flex"
            as={RouterLink}
            to="/about"
            alignItems="center"
            className="nav-item mx-6"
          >
            <FiSettings size={18} />
            <Text ml="1" fontSize="xl">
              Serviços
            </Text>
          </Link>

          <Link
            d="flex"
            as={RouterLink}
            alignItems="center"
            to="/blog/hello-world"
            className="nav-item"
          >
            <FiPhone size={18} />
            <Text ml="1" fontSize="xl">
              Contato
            </Text>
          </Link>

          <Link
            ml="6"
            d="flex"
            as={RouterLink}
            alignItems="center"
            to="/blog/hello-world"
          >
            <FiAlertCircle size={18} />
            <Text ml="1" fontSize="xl">
              Sobre
            </Text>
          </Link>
        </Flex>

        <Flex>
          <Link
            mr="4"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 nav-item"
            href="https://facebook.com/comofazer2021"
          >
            <FiFacebook size={20} />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item"
            href="https://instagram.com/como-fazer-2021"
          >
            <FiInstagram size={20} />
          </Link>
        </Flex>
      </Flex>
    </nav>
  );
};

export default Header;
