import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
    "Dispatch Assist is a choice for owner-operators and trucking companies looking to enhance their operations! With a dedicated team of dispatchers and logistics specialists, we are focused to keep drivers on the road while maximizing profit margins. We are committed to studying market trends and booking top-paying loads to stay competitive. Plus, our emphasis on excellent communication ensures that clients receive the quality care that they deserve."
   
    },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
  "Dispatch Assist is a choice for owner-operators and trucking companies looking to enhance their operations! With a dedicated team of dispatchers and logistics specialists, we are focused to keep drivers on the road while maximizing profit margins. We are committed to studying market trends and booking top-paying loads to stay competitive. Plus, our emphasis on excellent communication ensures that clients receive the quality care that they deserve."
    
    },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
     "Dispatch Assist is a choice for owner-operators and trucking companies looking to enhance their operations! With a dedicated team of dispatchers and logistics specialists, we are focused to keep drivers on the road while maximizing profit margins. We are committed to studying market trends and booking top-paying loads to stay competitive. Plus, our emphasis on excellent communication ensures that clients receive the quality care that they deserve."
   
    },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
    "Dispatch Assist is a choice for owner-operators and trucking companies looking to enhance their operations! With a dedicated team of dispatchers and logistics specialists, we are focused to keep drivers on the road while maximizing profit margins. We are committed to studying market trends and booking top-paying loads to stay competitive. Plus, our emphasis on excellent communication ensures that clients receive the quality care that they deserve."
   
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
    "Dispatch Assist is a choice for owner-operators and trucking companies looking to enhance their operations! With a dedicated team of dispatchers and logistics specialists, we are focused to keep drivers on the road while maximizing profit margins. We are committed to studying market trends and booking top-paying loads to stay competitive. Plus, our emphasis on excellent communication ensures that clients receive the quality care that they deserve."
   
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/img"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)


export const Head = () => <Seo title="Home" />

export default IndexPage
