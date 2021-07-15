import HomePage from "../components/homepage";
import Meta from "../components/Meta";

export default function Home({ Product }) {
  console.log("Product Data", Product);
  return (
    <>
      <Meta />
      <div className="">
        <HomePage Product={Product} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://apex-leather.herokuapp.com/products`);
  const Product = await res.json();

  return {
    props: { Product },
  };
};
