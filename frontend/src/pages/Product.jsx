import React from "react";
import { useParams } from "react-router-dom";
import ProductHd from "../components/ProductHd";
import all_products from "../assets/all_products";
import ProductDisplay from "../components/ProductDisplay";
import PopularProducts from "../components/PopularProducts";
import ProductDescription from "../components/ProductDescription";

const Product = () => {
  const { id } = useParams();
  console.log("productId: ", id);

  const product = all_products.find((e) => e.id === Number(id));
  if (!product) {
    return <div>Product not found!</div>;
    // or redirect the user to a 404 page
  }

  return (
    <section>
      <div>
        <ProductHd product={product} />
        <ProductDisplay product={product} />
        <ProductDescription />
        <PopularProducts />
      </div>
    </section>
  );
};

export default Product;
