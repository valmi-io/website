import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        
        <div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section"> 
        <section className="section">

        <h1 className="title">Latest Stories</h1>
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
        </div> 
        </div>
        </section>
        </div>
      </Layout>
    );
  }
}
