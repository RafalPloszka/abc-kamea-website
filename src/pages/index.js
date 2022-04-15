import * as React from "react"
import Contact from "../components/contact/Contact"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Title from '../components/Title'
import Stamps from '../components/stamps/Stamps'
import Engraver from '../components/engraver/Engraver'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Title />
    <Stamps />
    <Engraver />
    <Contact />
  </Layout>
)

export default IndexPage
