import { Flex, Button } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";

interface PaginationProps {
  count: number;
  onChange: (value: number) => void;
}

const Pagination: FC<PaginationProps> = ({ count = 1, onChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleOnChange = (selectedPage: number) => setCurrentPage(selectedPage);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const previewPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const values: number[] = [];
  for (let i = 1; i <= count / 3 + (count % 3 === 0 ? 0 : 1); values.push(i++));

  useEffect(() => {
    onChange(currentPage);
  }, [onChange, currentPage]);

  return (
    <Flex alignItems="center">
      <Button
        size="sm"
        disabled={currentPage <= 1}
        onClick={previewPage}
        variant="ghost"
      >
        Anterior
      </Button>
      {values.map((value: number) => (
        <Button
          mx="2"
          key={value}
          colorScheme="facebook"
          onClick={() => handleOnChange(value)}
          variant={currentPage === value ? "solid" : "ghost"}
        >
          {value}
        </Button>
      ))}
      <Button size="sm" onClick={nextPage} variant="ghost">
        Seguinte
      </Button>
    </Flex>
  );
};

export default Pagination;
