import { Box, Text, Image } from "@chakra-ui/react";

export const PortfolioItemPage = ({ itemIndex }) => {
  return (
    <Box>
      <Text>{itemIndex.title}</Text>
      <Text>{itemIndex.description}</Text>
      <Image
        src={itemIndex.imageUrl}
        style={{ object: "contain", with: "50wh", height: "50vh" }}
      />
    </Box>
  );
};
