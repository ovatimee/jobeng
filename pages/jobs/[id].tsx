import { HeartIcon, ShareIcon } from "@heroicons/react/24/solid";
import React from "react";
import Layout from "../../components/layout";
import { Minicard } from "../../components/minicard";
import { Overview } from "../../components/overview";



const Product = (props: {}) => {
  return (
    <Layout>
      <div className="job-overview flex flex-grow animate-slide">
        <Minicard />
        {/* mini card  */}
        <Overview />
        {/* overview  */}
      </div>
    </Layout>
  );
};

export default Product;
