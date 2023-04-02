import * as React from 'react';
import { graphql } from 'gatsby';

// components
import Layout from '../../components/Layout/Layout';
import Seo from '../../components/Seo/Seo';

const BlogPost = ({ data, children }) => {

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost;