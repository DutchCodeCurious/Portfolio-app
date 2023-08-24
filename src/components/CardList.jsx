import { Box, Flex } from "@chakra-ui/react";
import { CardPortfolioSmall } from "./CardPortfolioSmall";

export const CardList = ({ portfolioItems, onCardClick }) => {
  const listStyle = {
    spacing: "4",
    align: "center",
    justify: "center",
    display: "flex",
    flexWrap: "wrap",
  };
  return (
    <Flex {...listStyle}>
      {portfolioItems.map((item) => (
        <Box key={item.id}>
          <CardPortfolioSmall
            key={item.id}
            itemIndex={item}
            onClick={onCardClick}
          />
        </Box>
      ))}
    </Flex>
  );
};
