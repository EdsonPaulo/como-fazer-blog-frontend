import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Textarea,
  Flex,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { CommentFormProps, CommentSchema } from "../article.types";
import { IComment } from "../../../typescript/interfaces";
import { Shared } from "src/typescript/enums";

const CommentForm: FC<CommentFormProps> = ({
  onSubmitComment,
  isSubmitting,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IComment>({
    resolver: yupResolver(CommentSchema),
  });

  return (
    <Box
      p="6"
      background="white"
      borderRadius="lg"
      borderWidth="1px"
      borderColor="gray.300"
    >
      <form onSubmit={handleSubmit(onSubmitComment)}>
        <FormControl isRequired isInvalid={!!errors.name?.message}>
          <FormLabel htmlFor={Shared.Name}>Seu Nome</FormLabel>
          <Input
            id={Shared.Name}
            {...register("name")}
            placeholder="ex: Edson Gregório"
          />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.email?.message}>
          <FormLabel htmlFor={Shared.Email}>Seu Email</FormLabel>
          <Input
            id={Shared.Email}
            {...register("email")}
            placeholder="seunome@exemplo.com"
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.body?.message}>
          <FormLabel htmlFor={Shared.Body}>Seu comentário</FormLabel>
          <Textarea
            id={Shared.Body}
            {...register("body")}
            placeholder="Deixe aqui o seu comentário..."
          />
          <FormErrorMessage>{errors.body?.message}</FormErrorMessage>
        </FormControl>

        <Flex justifyContent="center">
          <Button
            mt={4}
            type="submit"
            colorScheme="facebook"
            alignSelf="flex-end"
            isLoading={isSubmitting}
          >
            Comentar
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default CommentForm;
