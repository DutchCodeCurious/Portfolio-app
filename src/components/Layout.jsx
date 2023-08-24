import { Box, Flex } from "@chakra-ui/react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <Box flex="1" flexDirection="column">
      <Header />
      <Flex>
        <Sidebar />
        <Box p={8} flex={"1"}>
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default Layout;
