import { Button, Flex, IconButton, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
// import { MdInfo, MdEmail, MdHome, MdSettings } from "react-icons/md";
// import { GrFacebookOption, GrInstagram, GrFacebook } from "react-icons/gr";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { Link as RouterLink, useLocation } from "react-router-dom";

import ComoFazerLogo from "../../assets/svg/como-fazer-logo";
import ROUTES from "../../constants/routes";

const Header: React.FC = () => {
  const { pathname } = useLocation();

  const getColorNavigationStateBased = (route: string) =>
    route === pathname ? "gray.100" : "transparent";

  return (
    <nav>
      <Flex
        px={10}
        py={4}
        bg="white"
        shadow="base"
        alignItems="center"
        justifyContent="space-between"
        color="blackAlpha.900"
      >
        <Link as={RouterLink} to={ROUTES.Home}>
          <ComoFazerLogo width={180} />
        </Link>

        <Flex>
          <Link as={RouterLink} to={ROUTES.Home}>
            <Button
              size="lg"
              variant="ghost"
              letterSpacing="wider"
              //  leftIcon={<MdHome size={22} />}
              background={getColorNavigationStateBased(ROUTES.Home)}
            >
              Início
            </Button>
          </Link>

          <Link mx="4" as={RouterLink} to={ROUTES.Services}>
            <Button
              size="lg"
              variant="ghost"
              letterSpacing="wider"
              //  leftIcon={<MdSettings size={22} />}
              background={getColorNavigationStateBased(ROUTES.Services)}
            >
              Serviços
            </Button>
          </Link>

          <Link as={RouterLink} to={ROUTES.Contact}>
            <Button
              size="lg"
              variant="ghost"
              letterSpacing="wider"
              //  leftIcon={<MdEmail size={22} />}
              background={getColorNavigationStateBased(ROUTES.Contact)}
            >
              Contato
            </Button>
          </Link>

          <Link ml="4" as={RouterLink} to={ROUTES.About}>
            <Button
              size="lg"
              variant="ghost"
              letterSpacing="wider"
              //  leftIcon={<MdInfo size={22} />}
              background={getColorNavigationStateBased(ROUTES.About)}
            >
              Sobre
            </Button>
          </Link>
        </Flex>

        <Flex>
          <Link
            mr="1"
            target="_blank"
            color="facebook.600"
            rel="noopener noreferrer"
            href="https://facebook.com/comofazer2021"
          >
            <Tooltip label="Facebook da Como Fazer">
              <IconButton
                aria-label="Facebook da Como Fazer?"
                icon={<FaFacebookSquare size={30} />}
                variant="ghost"
              />
            </Tooltip>
          </Link>
          <Link
            target="_blank"
            color="red.600"
            rel="noopener noreferrer"
            href="https://instagram.com/como-fazer-2521"
          >
            <Tooltip label="Instagram da Como Fazer">
              <IconButton
                aria-label="Instagram da Como Fazer"
                icon={<FaInstagram size={30} />}
                variant="ghost"
              />
            </Tooltip>
          </Link>
        </Flex>
      </Flex>
    </nav>
  );
};

export default Header;
