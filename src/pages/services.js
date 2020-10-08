import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HeroSection from "../components/Reusable/HeroSection"
import SEO from "../components/seo"

const ServicesPage = ({ data }) => (
  <Layout>
    <SEO title="Services" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Services"
      subtitle="We are not providing any services yet."
      heroclass="hero-background"
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "services.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ServicesPage
