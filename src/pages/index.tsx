import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Pokedex from "../components/pokedex/pokedex";

const IndexPage = () => (
  <Layout>
    <Pokedex/>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
