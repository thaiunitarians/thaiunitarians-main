import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { withTranslation } from 'react-i18next';

import Base from "../components/base"
import SEO from "../components/seo"
import "../components/style.css"

const LinkBox = (props) =>{
  const {to, img} = props;

  return (
    <div className="linkbox">
      <Link to={to}>{props.img}</Link>
      <div className="linkboxArea">
        {props.children}
      </div>      
    </div>
  );
}

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

      <div className="saparator"/>

      <h1 className="header">{t("index.header")}</h1>

      <p className="subheader">{t("index.subheader")}</p>

      <div className="linkList">
        <LinkBox img={<Img fluid={data.aboutcover.childImageSharp.fluid}/>} to="/about/">
          <h2 className="linkheader">{t("index.about")}</h2>
          <p>{t("index.aboutDescription")}</p>
          <Link to="/about/">{t("index.readmore")}</Link>
        </LinkBox>

        <LinkBox img={<Img fluid={data.historycover.childImageSharp.fluid}/>} to="/history/">
          <h2 className="linkheader">{t("index.history")}</h2>
          <p>{t("index.historyDescription")}</p>
          <Link to="/history/">{t("index.readmore")}</Link>
        </LinkBox>

        <LinkBox img={<Img fluid={data.involvedcover.childImageSharp.fluid}/>} to="/get-involved/">
          <h2 className="linkheader">{t("index.involved")}</h2>
          <p>{t("index.involvedDescription")}</p>
          <Link to="/get-involved/">{t("index.readmore")}</Link>
        </LinkBox>
      </div>
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
    aboutcover: file(relativePath: { eq: "cover1.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600){
          ...GatsbyImageSharpFluid
        }
      }
    }
    historycover: file(relativePath: { eq: "cover2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600){
          ...GatsbyImageSharpFluid
        }
      }
    }
    involvedcover: file(relativePath: { eq: "cover3.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default withTranslation()(IndexPage);
