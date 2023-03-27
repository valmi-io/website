import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage"; 
import GitHubButton from "react-github-btn";
// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  console.log("mainpitch.image: ", mainpitch.image);
  const imageStyle = { borderRadius: "5px" };

  const { alt = "", childImageSharp, my_image } = mainpitch.image;
  
  return (
    <div>
      <section className="section section--gradient">
        <div  style= {{ marginLeft: `8rem`,marginRight: `8rem` }} className="container">
          <div className="content">
            <div className="tile">
              <h1 className="title">{mainpitch.title}</h1>
            </div>
            <div className="tile">
              <p>{mainpitch.description_1}<a href="https://github.com/valmi-io/valmi-activation">(Github)</a>. {mainpitch.description_2}</p>
            </div>
            </div>
              <div className="column is-12 has-text-centered">
                
              <Link className="button is-link" to={mainpitch.demo}>
                Try it now!
              </Link>
            </div>
            <div className="image" style={{
              display: 'flex',
              justifyContent: 'center',
            }}>
              
            <GatsbyImage
              image={mainpitch.image.childImageSharp.gatsbyImageData}
              style={imageStyle}
              alt={alt}
            />
            
            
          </div> 
                   
          <div className="is-12">
            <h3 className="has-text-weight-semibold is-size-3">
              Latest stories
            </h3>
            <div> &nbsp;</div>
            <BlogRoll />
            <div className="column is-12 has-text-centered">
              <Link className="button is-link" to="/blog">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/*
  return (
    <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};*/

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  console.log(frontmatter);
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description_1
          description_2
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, width:500, layout:CONSTRAINED)
            }
          }
          demo
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
