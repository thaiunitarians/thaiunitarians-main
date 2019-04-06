import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { withTranslation } from 'react-i18next';

import Base from "../components/base"
import SEO from "../components/seo"

const IndexPage = (props) => {
  const {t, i18n, data} = props;

  const posterNumber = Math.ceil(Math.random()*3);
  let poster;
  switch(posterNumber){
    case 1: poster = (i18n.language=="th")? data.slide1th.childImageSharp.fluid: data.slide1en.childImageSharp.fluid; break;
    case 2: poster = (i18n.language=="th")? data.slide2th.childImageSharp.fluid: data.slide2en.childImageSharp.fluid; break;
    case 3: poster = (i18n.language=="th")? data.slide3th.childImageSharp.fluid: data.slide3en.childImageSharp.fluid; break;
  }

  return (
    <Base>
      <SEO title="Home" keywords={[`thaiunitarians`, `unitarian`, `universalist`]} />
      <Img fluid={poster} />

      <Link to="/page-2/">Go to page 2</Link>
    </Base>
    )
}

export const query = graphql`
  query {
    slide1en: file(relativePath: { eq: "slide1-en.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000){
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide1th: file(relativePath: { eq: "slide1-th.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000){
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide2en: file(relativePath: { eq: "slide2-en.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000){
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide2th: file(relativePath: { eq: "slide2-th.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000){
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide3en: file(relativePath: { eq: "slide3-en.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000){
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide3th: file(relativePath: { eq: "slide3-th.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default withTranslation()(IndexPage);
