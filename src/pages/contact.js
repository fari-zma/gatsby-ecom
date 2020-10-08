import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import InfoBlock from "../components/Reusable/InfoBlock"
import DualInfoBlock from "../components/Reusable/DualInfoBlock"
import TeamPhotoSection from "../components/About/TeamPhotoSection"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="About LearnCodeLine"
      subtitle="LearnCodeOnline.in"
      heroclass="about-background"
    />

    <DualInfoBlock
      heading="A message from CEO"
      imgsrc="https://images.pexels.com/photos/4663825/pexels-photo-4663825.jpeg?auto=compress&cs=tinysrgb&dpr=1"
    />
    <InfoBlock heading="About Vision" />
    <TeamPhotoSection />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
