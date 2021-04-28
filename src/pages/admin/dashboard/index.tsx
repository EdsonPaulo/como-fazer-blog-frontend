import { Box } from "@chakra-ui/layout";
import {
  Grid,
  GridItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";

import ComoFazerLogo from "src/assets/svg/como-fazer-logo";
import ArticlesDataTable from "./data-tables/articles";

const Dashboard: React.FC = () => {
  return (
    <Box>
      <Tabs isLazy variant="unstyled" orientation="vertical">
        <Grid minH="100vh" minWidth="100%" templateColumns="repeat(8, 1fr)">
          <GridItem shadow="lg" colSpan={2} bg="facebook.500" color="white">
            <Box mb="12" background="white" p="8">
              <ComoFazerLogo width="100%" />
            </Box>
            <TabList>
              <Tab
                p="3"
                fontSize="2xl"
                fontWeight="bold"
                _selected={{ bg: "white", color: "black" }}
              >
                Artigos
              </Tab>
              <Tab
                p="3"
                fontSize="2xl"
                fontWeight="bold"
                _selected={{ bg: "white", color: "black" }}
              >
                Configurações
              </Tab>
            </TabList>
          </GridItem>
          <GridItem p="14" colSpan={6} bg="gray.200">
            <TabPanels>
              <TabPanel>
                <ArticlesDataTable />
              </TabPanel>
              <TabPanel>
                <p>Configurações!</p>
              </TabPanel>
            </TabPanels>
          </GridItem>
        </Grid>
      </Tabs>
    </Box>
  );
};

export default Dashboard;
