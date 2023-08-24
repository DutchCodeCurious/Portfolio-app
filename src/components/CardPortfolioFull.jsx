import { Box, Text, Image } from "@chakra-ui/react";

export const FullPortfolio = ({ itemIndex }) => {
  return (
    <Box p="4" maxW="400px" mx="auto">
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
        <Image
          src={itemIndex.imageUrl}
          alt={itemIndex.title}
          h="300px"
          objectFit="cover"
        />
        <Box p="6">
          <Text fontSize="xl" fontWeight="semibold" mb="2">
            {itemIndex.title}
          </Text>
          <Text fontSize="md" color="gray.600" mb="4">
            {itemIndex.description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
