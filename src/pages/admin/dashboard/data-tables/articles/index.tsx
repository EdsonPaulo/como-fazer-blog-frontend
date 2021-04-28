import {
  Button,
  createStandaloneToast,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  TableCaption,
  Tbody,
  Td,
  Textarea,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEdit, FaEye, FaPlus, FaTrash } from "react-icons/fa";

import { deleteArticle, postCreateArticle, putUpdateArticle } from "src/api";
import { useArticlesContext } from "src/contexts/articles";
import { ArticleCategories, Shared } from "src/typescript/enums";
import { IArticle, IArticleWritable } from "src/typescript/interfaces";
import { ArticleFormSchema } from "./article.types";

const ArticlesDataTable: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<IArticle | null>(null);
  const toast = createStandaloneToast();
  const {
    articles,
    getArticles,
    total: totalArticles,
    setArticles,
  } = useArticlesContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IArticleWritable>({
    resolver: yupResolver(ArticleFormSchema),
  });
  const categories = Object.values(ArticleCategories);

  const handleEditArticle = async (article: IArticleWritable) => {
    if (submitting) return;
    setSubmitting(true);
    try {
      await putUpdateArticle({ article });
      onClose();
      getArticles();
    } catch (error) {
      toast({
        title: error?.message,
        status: "error",
        duration: 4000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleCreateArticle = async (article: IArticleWritable) => {
    if (submitting) return;
    setSubmitting(true);
    try {
      await postCreateArticle({ article });
      onClose();
      getArticles();
    } catch (error) {
      toast({
        title: error?.message,
        status: "error",
        duration: 4000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handelDeleteArticle = async (article: IArticle) => {
    if (submitting) return;
    setSubmitting(true);
    let articlesCopy = [...articles];
    setArticles((prev) => prev.filter((item) => item._id !== article._id));
    try {
      await deleteArticle({ _id: article._id });
      onClose();
    } catch (error) {
      toast({
        title: error?.message,
        status: "error",
        duration: 4000,
      });
      setArticles(articlesCopy);
    } finally {
      getArticles();
      setSubmitting(false);
    }
  };

  const onDeleteArticle = (article: IArticle) => {
    handelDeleteArticle(article);
  };
  const onViewArticle = (article: IArticle) => {
    setSelectedArticle(article);
    onOpen();
  };
  const onEditArticle = (article: IArticle) => {
    setSelectedArticle(article);
    onOpen();
  };
  const onCreateArticle = () => {
    setSelectedArticle(null);
    onOpen();
  };

  useEffect(() => {
    getArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderModalForm = () => (
    <Modal
      closeOnOverlayClick={false}
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <form
          onSubmit={handleSubmit((data) =>
            selectedArticle
              ? handleEditArticle(data)
              : handleCreateArticle(data)
          )}
        >
          <ModalHeader>Novo Artigo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired isInvalid={!!errors.title?.message}>
              <FormLabel htmlFor={Shared.Title}>TÍtulo do artigo</FormLabel>
              <Input
                id={Shared.Title}
                {...register("title")}
                placeholder="Título do artigo"
                value={selectedArticle?.title}
              />
              <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
            </FormControl>

            <FormControl id={Shared.Category}>
              <FormLabel htmlFor={Shared.Category}>Categoria</FormLabel>
              <Select
                {...register("category")}
                placeholder="Selecione uma categoria"
                value={selectedArticle?.category}
              >
                {categories.map((category) => (
                  <option value={category}>{category.toUpperCase()}</option>
                ))}
              </Select>
            </FormControl>

            <FormControl isInvalid={!!errors.image?.message}>
              <FormLabel htmlFor={Shared.Image}>URL da imagem</FormLabel>
              <Input
                id={Shared.Title}
                {...register("title")}
                placeholder="https://"
                value={selectedArticle?.image}
              />
              <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={!!errors.body?.message}>
              <FormLabel htmlFor={Shared.Body}>Conteúdo do Artigo</FormLabel>
              <Textarea
                id={Shared.Body}
                {...register("body")}
                placeholder="Esceva todo corpo do artigo..."
              />
              <FormErrorMessage>{errors.body?.message}</FormErrorMessage>
            </FormControl>
          </ModalBody>
          <ModalFooter textAlign="center">
            <Button colorScheme="blackAlpha" mr="3" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" colorScheme="green" isLoading={submitting}>
              Salvar
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );

  return (
    <>
      {renderModalForm()}
      <Flex alignItems="center" justifyContent="space-between">
        <Heading>Lista de Artigos</Heading>
        <Button
          leftIcon={<FaPlus />}
          iconSpacing="2"
          variant="solid"
          colorScheme="green"
          onClick={onCreateArticle}
        >
          Novo Artigo
        </Button>
      </Flex>
      <Divider my="4" />
      <Table
        p="6"
        w="100%"
        variant="striped"
        colorScheme="blackAlpha"
        background="white"
        borderWidth="2px"
        borderColor="gray.300"
        borderRadius="lg"
      >
        <TableCaption>{totalArticles} artigos publicados.</TableCaption>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Categoria</Th>
            <Th>Título</Th>
            <Th>Visualizações</Th>
            <Th>Tags</Th>
            <Th>Data de Postagem</Th>
          </Tr>
        </Thead>
        <Tbody>
          {articles.map((currentArticle, index) => (
            <Tr>
              <Td fontWeight="semibold">{index + 1}</Td>
              <Td textTransform="capitalize">{currentArticle.category}</Td>
              <Td>{currentArticle.title}</Td>
              <Td>{currentArticle.views}</Td>
              <Td>{currentArticle.tags.toString()}</Td>
              <Td>
                {moment(new Date(currentArticle.createdAt)).format(
                  "DD/MMM/YYYY"
                )}
              </Td>
              <Td display="flex" alignItems="center">
                <IconButton
                  color="white"
                  aria-label="ver artigo"
                  background="facebook.500"
                  onClick={() => onViewArticle(currentArticle)}
                  icon={<FaEye />}
                />
                <IconButton
                  mx="2"
                  color="white"
                  aria-label="editar artigo"
                  background="orange.500"
                  onClick={() => onEditArticle(currentArticle)}
                  icon={<FaEdit />}
                />
                <IconButton
                  color="white"
                  aria-label="eliminar artigo"
                  background="red.500"
                  onClick={() => onDeleteArticle(currentArticle)}
                  icon={<FaTrash />}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default ArticlesDataTable;
