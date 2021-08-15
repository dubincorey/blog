import * as React from "react";
import Layout from "../components/layout";
import { disclaimer } from "./layout.module.css";

const IndexPage = () => {
  return (
    <Layout pageTitle="CDFI">
      <p>
        I'm going to share my experiences and understanding of personal finance
        and other interesting things to me!
      </p>
      <h5 id={disclaimer}>
        These are only my opinions. Everyone should practice their due diligence
        when making a financial decision. Many financial decisions involve risk,
        and people who practice those decisions should be aware of the risks
        involved.
      </h5>
    </Layout>
  );
};

export default IndexPage;
