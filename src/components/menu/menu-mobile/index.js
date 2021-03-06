import { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../../context/auth-context";

import profile00 from "../../../assets/img/profiledog.jpg";

import icon02 from "../../../assets/svg/icon02.svg";
import icon03 from "../../../assets/svg/icon03.svg";
import icon07 from "../../../assets/svg/icon07.svg";
import icon10 from "../../../assets/svg/icon10.svg";
import house from "../../../assets/svg/house.svg";
import user from "../../../assets/svg/user.svg";
import iconexit from "../../../assets/svg/iconexit.svg";

import "../../../global/global.css";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Img,
  Link,
  Box,
  HStack,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

const Menumobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showModal, setShowModal] = useState(false);

  const { pathname } = useLocation();

  let auth = useAuth();
  let navigate = useNavigate();

  const handleClose = () => {
    onClose();
    setShowModal(true);
  };
  return (
    <>
      <div className="feed-mobile">
        <Box display="flex" alignItems="center" boxShadow="0px 0px 1px grey">
          <HStack spacing="50">
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button
                _hover={{ background: "none" }}
                _active={{ background: "none" }}
                _focus={{ boxShadow: "none" }}
                colorScheme="teal"
                background="none"
                color="#00acc1"
                size="lg"
                onClick={onOpen}
              >
                <HamburgerIcon bgSize="lg" />
              </Button>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-around"
            >
              <HStack spacing="2">
                <Img src={icon02} w="30px" />
                <Img src={icon03} w="80px" />
              </HStack>
            </Box>
          </HStack>
          <Drawer isOpen={isOpen} placement="left" size="xs" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent maxW="258px">
              <DrawerHeader
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Img src={profile00} />
              </DrawerHeader>

              <DrawerBody
                display="flex"
                alignItems="flex-start"
                flexDirection="column"
                textAlign="center"
                size="xs"
                padding="0"
              >
                <Link
                  _focus={pathname === "/Home" ? "#E6F7F9" : "none"}
                  _active={{ borderLeft: "5px solid #00ACC1" }}
                  _hover={{ textStyle: "none" }}
                  display="flex"
                  marginTop="16px"
                  paddingTop="10px"
                  paddingBottom="10px"
                  fontWeight="700"
                  fontSize="16px"
                  lineHeight="24px"
                  paddingLeft={pathname.includes("Profile") ? "60px" : "65px"}
                  w="full"
                  href="/Home"
                  color={pathname.includes("Profile") ? " #424242" : "#00ACC1"}
                  borderLeft={
                    pathname.includes("/Home") ? "5px solid #00ACC1" : "none"
                  }
                  bg={pathname.includes("/Home") ? "#E6F7F9" : "none"}
                >
                  <Img
                    src={pathname.includes("Profile") ? house : icon07}
                    marginRight="5px"
                  />{" "}
                  Home
                </Link>
                <Link
                  _focus={{ background: "#E6F7F9" }}
                  _active={{ borderLeft: "5px solid #00ACC1" }}
                  _hover={{ textStyle: "none" }}
                  display="flex"
                  paddingTop="10px"
                  paddingBottom="10px"
                  fontWeight="700"
                  fontSize="16px"
                  lineHeight="24px"
                  paddingLeft={pathname.includes("Profile") ? "55px" : "70px"}
                  w="full"
                  href="/Profile"
                  color={pathname.includes("Profile") ? "#00ACC1" : "#424242"}
                  borderLeft={
                    pathname.includes("Profile") ? "5px solid #00ACC1" : "none"
                  }
                  bg={pathname.includes("Profile") ? "#E6F7F9" : "none"}
                >
                  <Img
                    src={pathname.includes("Profile") ? user : icon10}
                    marginRight="5px"
                  />{" "}
                  Meu perfil
                </Link>
                <Box display="flex" justifyContent="flex-start">
                  <Button
                    _hover={{ background: "none" }}
                    _active={{ background: "none" }}
                    _focus={{ boxShadow: "none" }}
                    focusBorderColor="#00acc1"
                    display="flex"
                    marginTop="15px"
                    paddingLeft={pathname === "/Profile" ? "60px" : "70px"}
                    bg="transparent"
                    onClick={handleClose}
                  >
                    <Img src={iconexit} w="30px" marginRight="5px" /> Sair
                  </Button>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
        <Box>
          <Modal
            display="flex"
            alignItems="center"
            size="xs"
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
                display="flex"
                marginLeft="5px"
                textAlign="star"
                fontFamily="Open Sans"
                fontWeight="600"
                fontSize="24px"
                lineHeight="40px"
                color="#616161"
              >
                Sair desta conta?
              </ModalHeader>
              <ModalBody
                display="flex"
                marginLeft="5px"
                fontFamily="Open Sans"
                fontWeight="400"
                fontSize="16px"
                lineHeight="24px"
                color="#616161"
                textAlign="start"
              >
                Deseja realmente sair desta conta?
              </ModalBody>
              <ModalFooter
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                w="full"
              >
                <Button
                  _hover={{ background: "none" }}
                  _active={{ background: "none" }}
                  _focus={{ borderColor: "none" }}
                  border="1px solid #00acc1"
                  padding="10px"
                  w="146px"
                  marginLeft="5px"
                  marginRight="5px"
                  bg="transparent"
                  color="#00acc1"
                  onClick={() => {
                    auth.signout(() => navigate("/"));
                  }}
                >
                  Sair
                </Button>
                <Button
                  _hover={{ background: "#00acc1" }}
                  _active={{ background: "#00acc1" }}
                  _focus={{ border: "#00acc1" }}
                  focusBorderColor="#00acc1"
                  backgroundColor="#00acc1"
                  padding="10px"
                  w="146px"
                  marginLeft="5px"
                  marginRight="5px"
                  bg="transparent"
                  color="white"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </div>
    </>
  );
};

export default Menumobile;
