import React, { useState } from "react";
import { portfolioItems } from "./utils/data";
import { PortfolioItemPage } from "./pages/PortfolioItemPage";
import { PortfolioPage } from "./pages/PortfolioPage";

export const App = () => {
  const [selectedItem, setselectedItem] = useState(portfolioItems[1]);
  return (
    <div className="App">
      {selectedItem ? (
        <PortfolioItemPage itemIndex={selectedItem} />
      ) : (
        <PortfolioPage />
      )}
    </div>
  );
};
