import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        
        <div>
      <section className="section section--gradient">
         
      <div className="container content">
      <div className="columns">
          <div className="column is-10 is-offset-1">
        <h1 className="title">Latest Stories</h1>
            <div className="content">
              <BlogRoll />
            </div>
        </div>
        </div>  
        </div>
        
        </section>
        </div>
      </Layout>
    );
  }
}
