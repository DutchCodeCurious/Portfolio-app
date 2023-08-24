import { useState } from "react";
import { portfolioItems } from "./utils/data";
import { FullPortfolioPage } from "./pages/PortfolioItemPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { Box } from "@chakra-ui/react";

export const App = () => {
  const [selectedItem, setselectedItem] = useState();

  const handleCardClick = (itemIndex) => {
    setselectedItem(itemIndex);
    console.log(selectedItem);
  };

  return (
    <>
      <Box>
        {selectedItem ? (
          <FullPortfolioPage itemIndex={selectedItem} />
        ) : (
          <PortfolioPage
            portfolioItems={portfolioItems}
            onCardClick={handleCardClick}
          />
        )}
      </Box>
    </>
  );
};
//
