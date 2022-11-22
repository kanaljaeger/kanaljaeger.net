import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Layout from "../layout/default"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div style={{
        maxWidth: "var(--layout-width)",
        margin: "0 auto",
        paddingTop: "3em"
      }}>
        <h1 style={headingStyles}>Page not found</h1>
        <p style={paragraphStyles}>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
