import { Box, Text, Image, Flex, Tag, TagLabel } from "@chakra-ui/react";

export const CardPortfolioSmall = ({ itemIndex, onClick }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      maxW="250px"
      mx="auto"
      margin={"5px"}
      paddingBottom={"3px"}
      minH="500px" // Set the desired height for all PortfolioCards
      display="flex"
      flexDirection="column" // Make the card's content stack vertically
      justifyContent="space-between" // Push content to top and bottom
      cursor={"pointer"}
      onClick={() => onClick(itemIndex)}
    >
      <Box>
        <Image
          src={itemIndex.imageUrl}
          alt={itemIndex.title}
          h="200px"
          objectFit="cover"
        />
        <Box p="4">
          <Text fontSize="l" fontWeight="semibold" mb="1">
            {itemIndex.title}
          </Text>
          <Text fontSize="sm" color="gray.600">
            {itemIndex.summary}
          </Text>
        </Box>
      </Box>

      <Flex flexWrap="wrap" p="4" mt="auto" mb="1">
        {itemIndex.skills.map((skill) => (
          <Tag key={skill} mr="2" mb="1">
            <TagLabel>{skill}</TagLabel>
          </Tag>
        ))}
      </Flex>
    </Box>
  );
};
