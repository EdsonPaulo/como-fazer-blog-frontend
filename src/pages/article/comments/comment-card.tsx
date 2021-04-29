import { Box, Flex, Avatar, Text } from "@chakra-ui/react";
import moment from "moment";
import { FC } from "react";

import { CommentProps } from "../article.types";

const CommentCard: FC<CommentProps> = ({ comment }) => (
  <Box
    p="3"
    px="6"
    my="3"
    borderRadius="lg"
    borderWidth="1px"
    borderColor="gray.300"
    background="white"
  >
    <Flex alignItems="center">
      <Avatar size="sm" name={comment.name} />
      <Flex ml="3" alignItems="center">
        <Text fontWeight="semibold">{comment.name}</Text>
        <Box w="2px" h="20px" mx="2" background="gray.400" />
        <Text color="gray.500">{comment.email}</Text>
      </Flex>
    </Flex>
    <Text fontSize="lg" as="p" my="2">
      {comment.body}
    </Text>
    <Text color="gray.500" fontSize="xs" textAlign="right">
      {moment(new Date(comment.createdAt), true).format(
        "DD [de] MMMM [de] YYYY"
      )}
    </Text>
  </Box>
);

export default CommentCard;
