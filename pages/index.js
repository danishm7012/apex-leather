import HomePage from "../components/homepage";
import Meta from "../components/Meta";

export default function Home({ Product, womenFashion }) {
  console.log("women fashion", womenFashion);
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
  const res1 = await fetch(`https://apex-leather.herokuapp.com/products`);
  const Product = await res1.json();
  const res2 = await fetch(
    `https://apex-leather.herokuapp.com/categories/women-fashion`
  );
  const womenFashion = await res2.json();
  console.log(womenFashion);

  return {
    props: { Product, womenFashion },
  };
};
