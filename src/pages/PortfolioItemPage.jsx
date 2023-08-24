import { FullPortfolio } from "../components/CardPortfolioFull";
import Layout from "../components/Layout";

export const FullPortfolioPage = ({ itemIndex }) => {
  return (
    <Layout>
      <FullPortfolio itemIndex={itemIndex} />
    </Layout>
  );
};
