import {
  Box,
  createStandaloneToast,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React, { FC, useCallback, useEffect, useState } from "react";
import { commentArticle } from "src/api";
import Pagination from "src/components/pagination";

import { IComment } from "../../../typescript/interfaces";
import { CommentsProps } from "../article.types";

import CommentCard from "./comment-card";
import CommentForm from "./comment-form";

const Comments: FC<CommentsProps> = ({ comments = [], slug }) => {
  const toast = createStandaloneToast();
  const [commentList, setCommentList] = useState<IComment[]>(comments);
  const [commentsToDisplay, setCommentsToDisplay] = useState<IComment[]>([]);
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const [commentsPage, setCommentsPage] = useState(1);

  const handleCommentSubmit = async (data: IComment) => {
    if (isSubmittingComment) return;
    const prevCommentList = [...commentList];
    setCommentList((prevState) => [...prevState, data]);
    try {
      setIsSubmittingComment(true);
      await commentArticle({ slug, comment: data });
    } catch (error) {
      setCommentList([...prevCommentList]);
      toast({
        title: "Ocorreu um erro ao comentar neste artigo!",
        status: "error",
        duration: 5000,
      });
    } finally {
      setIsSubmittingComment(false);
    }
  };

  const paginate = useCallback(() => {
    if (commentList.length > 0) {
      setCommentsToDisplay(
        commentList.slice((commentsPage - 1) * 3, 3 * commentsPage)
      );
    }
  }, [commentList, commentsPage]);

  useEffect(() => {
    paginate();
  }, [paginate, commentsPage, commentList]);

  return (
    <Box>
      <Heading
        mb="6"
        as="h4"
        size="md"
      >{`Comentários (${commentList.length})`}</Heading>

      {commentList.length === 0 && (
        <Text ml="4" mt="6" as="span" color="gray.500">
          Sê o primeiro a comentar!
        </Text>
      )}

      {commentsToDisplay.map((comment: IComment, index: number) => (
        <CommentCard key={index} comment={comment} />
      ))}

      {commentList.length > 3 && (
        <Flex mt="6" justifyContent="center">
          <Pagination
            count={commentList.length}
            onChange={(value) => setCommentsPage(value)}
          />
        </Flex>
      )}

      <Box mt="6">
        <CommentForm
          isSubmitting={isSubmittingComment}
          onSubmitComment={handleCommentSubmit}
        />
      </Box>
    </Box>
  );
};

export default Comments;
