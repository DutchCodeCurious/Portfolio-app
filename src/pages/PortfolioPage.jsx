import { CardList } from "../components/CardList";
import Layout from "../components/Layout";

export const PortfolioPage = ({ portfolioItems, onCardClick }) => {
  return (
    <Layout>
      <CardList portfolioItems={portfolioItems} onCardClick={onCardClick} />
    </Layout>
  );
};
