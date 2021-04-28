import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface PageBeadcumbProps {
  paths: {
    label: string;
    route?: string;
    current?: boolean;
  }[];
}

const PageBreadcumb: FC<PageBeadcumbProps> = ({ paths }) => {
  return (
    <Breadcrumb fontSize="lg" fontWeight="semibold" color="gray.800">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/">
          Início
        </BreadcrumbLink>
      </BreadcrumbItem>
      {paths.map((path) => (
        <BreadcrumbItem isCurrentPage={path.current}>
          <BreadcrumbLink
            textTransform="capitalize"
            as={Link}
            to={path.route || "#"}
          >
            {path.label}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default PageBreadcumb;
