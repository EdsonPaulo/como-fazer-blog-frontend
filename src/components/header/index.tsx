import {
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
  Heading,
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
import { useArticlesContext } from "src/contexts/articles";

const NavigationBar: FC<NavigationBarProps> = ({ navigationDirection }) => {
  const { pathname } = useLocation();
  const { selectedCategory, setSelectedCategory } = useArticlesContext();

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
        <Heading
          fontSize="2xl"
          letterSpacing="wider"
          _hover={{ color: "brand.accent" }}
          color={getColorNavigationStateBased(ROUTES.Home)}
        >
          Início
        </Heading>
      </Link>

      <Menu>
        <MenuButton
          as={Heading}
          ml="6"
          fontSize="2xl"
          letterSpacing="wider"
          _hover={{ color: "brand.accent", cursor: "pointer" }}
          rightIcon={<IoChevronDown size={20} color="#121212" />}
        >
          Categorias
        </MenuButton>
        <MenuList zIndex={99999}>
          {Object.values(ArticleCategories).map((category, index) => (
            <MenuItem
              key={index}
              background={
                selectedCategory === category ? "gray.300" : "transparent"
              }
              textTransform="capitalize"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      <Link mx="8" as={RouterLink} to={ROUTES.Services}>
        <Heading
          fontSize="2xl"
          letterSpacing="wider"
          _hover={{ color: "brand.accent" }}
          color={getColorNavigationStateBased(ROUTES.Services)}
        >
          Serviços
        </Heading>
      </Link>

      <Link as={RouterLink} to={ROUTES.Contact}>
        <Heading
          fontSize="2xl"
          letterSpacing="wider"
          _hover={{ color: "brand.accent" }}
          color={getColorNavigationStateBased(ROUTES.Contact)}
        >
          Contato
        </Heading>
      </Link>

      <Link ml="8" as={RouterLink} to={ROUTES.About}>
        <Heading
          fontSize="2xl"
          letterSpacing="wider"
          _hover={{ color: "brand.accent" }}
          color={getColorNavigationStateBased(ROUTES.About)}
        >
          Sobre Nós
        </Heading>
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
        px={{ base: "6", md: "12", lg: "24" }}
        py="6"
        bg="white"
        shadow="sm"
        position="sticky"
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
