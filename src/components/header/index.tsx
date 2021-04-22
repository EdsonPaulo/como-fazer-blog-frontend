import {
  Button,
  Box,
  Flex,
  IconButton,
  Link,
  useDisclosure,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FC } from "react";
import {
  IoChevronDown,
  IoLogoFacebook,
  IoLogoInstagram,
  IoMenuSharp,
  IoSearch,
  IoLogoTwitter,
  IoClose,
} from "react-icons/io5";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import ComoFazerLogo from "../../assets/svg/como-fazer-logo";
import ROUTES from "../../constants/routes";
import { ArticleCategories } from "../../typescript/enums";

import { NavigationBarProps, TDrawerPlacementMode } from "./header.types";

const NavigationBar: FC<NavigationBarProps> = ({ navigationDirection }) => {
  const { pathname } = useLocation();

  const getColorNavigationStateBased = (route: string) =>
    route === pathname ? "brand.accent" : "blackAlpha.700";

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      color="blackAlpha.700"
      flexDirection={navigationDirection || { base: "column", md: "row" }}
    >
      <Link as={RouterLink} to={ROUTES.Home}>
        <Button
          size="md"
          variant="ghost"
          fontSize="larger"
          letterSpacing="wider"
          color={getColorNavigationStateBased(ROUTES.Home)}
        >
          Início
        </Button>
      </Link>

      <Menu>
        <MenuButton
          as={Button}
          ml="4"
          size="md"
          variant="ghost"
          fontSize="larger"
          letterSpacing="wider"
          rightIcon={<IoChevronDown size={20} />}
        >
          Categorias
        </MenuButton>
        <MenuList>
          {Object.values(ArticleCategories).map((category) => (
            <MenuItem textTransform="capitalize">{category}</MenuItem>
          ))}
        </MenuList>
      </Menu>

      <Link mx="4" as={RouterLink} to={ROUTES.Services}>
        <Button
          size="md"
          variant="ghost"
          fontSize="larger"
          letterSpacing="wider"
          color={getColorNavigationStateBased(ROUTES.Services)}
        >
          Serviços
        </Button>
      </Link>

      <Link as={RouterLink} to={ROUTES.Contact}>
        <Button
          size="md"
          variant="ghost"
          fontSize="larger"
          letterSpacing="wider"
          color={getColorNavigationStateBased(ROUTES.Contact)}
        >
          Contato
        </Button>
      </Link>

      <Link ml="4" as={RouterLink} to={ROUTES.About}>
        <Button
          size="md"
          variant="ghost"
          fontSize="larger"
          letterSpacing="wider"
          color={getColorNavigationStateBased(ROUTES.About)}
        >
          Sobre
        </Button>
      </Link>
    </Flex>
  );
};

const SocialButtons: FC = () => (
  <Flex alignItems="center">
    <Link
      target="_blank"
      color="blackAlpha.800"
      rel="noopener noreferrer"
      href="https://facebook.com/comofazer2021"
    >
      <IconButton
        aria-label="Facebook da Como Fazer?"
        icon={<IoLogoFacebook size={20} />}
        variant="ghost"
      />
    </Link>
    <Link
      target="_blank"
      color="blackAlpha.800"
      rel="noopener noreferrer"
      href="https://instagram.com/como-fazer-2521"
    >
      <IconButton
        aria-label="Instagram da Como Fazer"
        icon={<IoLogoTwitter size={20} />}
        variant="ghost"
      />
    </Link>
    <Link
      target="_blank"
      color="blackAlpha.800"
      rel="noopener noreferrer"
      href="https://twitter.com/como-fazer-2521"
    >
      <IconButton
        aria-label="twitter da Como Fazer"
        icon={<IoLogoInstagram size={20} />}
        variant="ghost"
      />
    </Link>
  </Flex>
);

const DrawerMenu: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const placement = useBreakpointValue<TDrawerPlacementMode>({
    base: "top",
    md: "left",
  });
  return (
    <Flex>
      <IconButton
        onClick={onOpen}
        aria-label="abrir menu"
        icon={<IoMenuSharp size={25} />}
        variant="ghost"
      />
      <IconButton
        onClick={onOpen}
        aria-label="abrir menu"
        icon={<IoSearch size={25} />}
        variant="ghost"
      />
      <Drawer size="md" placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader
              display="flex"
              flexDirection="row"
              alignItems="center"
              borderBottomWidth="1px"
              justifyContent="space-between"
            >
              <Link
                mr={10}
                as={RouterLink}
                to={ROUTES.Home}
                width={{ base: "100%", md: "60%", xl: "50%" }}
              >
                <ComoFazerLogo width="100%" />
              </Link>

              <IconButton
                variant="ghost"
                onClick={onClose}
                alignSelf="flex-end"
                aria-label="fechar menu"
                icon={<IoClose size={30} />}
              />
            </DrawerHeader>
            <DrawerBody>
              <NavigationBar navigationDirection="column" />
            </DrawerBody>
            <DrawerFooter alignItems="center" borderTopWidth="1px">
              <SocialButtons />
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
};

const Header: FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <nav>
      <Flex
        px={{ base: "6", md: "12" }}
        py="6"
        bg="white"
        shadow="lg"
        flexDirection="column"
        color="blackAlpha.900"
      >
        <Flex mb={[0, 6]} alignItems="center" justifyContent="space-between">
          <DrawerMenu />

          <Link as={RouterLink} to={ROUTES.Home}>
            {!isMobile && <ComoFazerLogo width={250} />}
          </Link>

          <Flex display={{ base: "none", md: "block" }}>
            <SocialButtons />
          </Flex>
        </Flex>

        <Box alignSelf="center" display={{ base: "none", md: "block" }}>
          <NavigationBar />
        </Box>
      </Flex>
    </nav>
  );
};

export default Header;
