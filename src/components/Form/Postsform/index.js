import React from "react";

import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../../context/auth-context";

import {
  Button,
  Img,
  Box,
  Textarea,
  Text,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import profile00 from "../../../assets/img/profiledog.jpg";

import "../../../global/global.css";

const schema = yup
  .object({
    text: yup.string().max(140),
  })
  .required();

const Postsform = (props) => {
  const { setPost, setPage, setRefresh } = props;

  const [value, setValue] = React.useState(0);

  const { PostTwits } = useAuth();

  const { register, handleSubmit, resetField } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const newPost = await PostTwits(data);
    resetField("text");
    if (newPost) {
      setPost([]);
      setPage(1);
      setRefresh((refresh) => !refresh);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      borderBottom="15px solid #E7ECF0"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Box display="flex" alignItems="center" paddingTop="30px" w="full">
            <Box display="flex" paddingBottom="45px" paddingLeft="25px">
              <Img src={profile00} />
            </Box>
            <FormLabel htmlFor="text">
              <Textarea
                _hover={{ background: "none" }}
                _active={{ background: "none" }}
                _focus={{ boxShadow: "none" }}
                placeholder="O que está acontecendo?"
                border="none"
                size="lg"
                w="600px"
                {...register("text")}
                type={Date.now()}
                onChange={(e) => setValue(e.target.value.length)}
                isInvalid={value > 140}
              />
            </FormLabel>
          </Box>
          <Box display="flex" alignItems="center" w="full">
            <Box w="full"></Box>
            <Box
              display="flex"
              alignItems="center"
              marginBottom="15px"
              marginRight="40px"
              marginLeft="40px"
            >
              <Text marginRight="10px">{value}:140</Text>
              <Button
                _hover={{ background: "#99DEE6" }}
                _active={{ background: "#99DEE6" }}
                _focus={{ boxShadow: "none" }}
                borderRadius="10"
                w="full"
                bg="#99DEE6"
                color="white"
                type="submit"
                isDisabled={value > 140}
              >
                Petwittar
              </Button>
            </Box>
          </Box>
        </FormControl>
      </form>
    </Box>
  );
};

export default Postsform;
