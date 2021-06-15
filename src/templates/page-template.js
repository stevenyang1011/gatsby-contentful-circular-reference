
import React from "react"
import { graphql } from 'gatsby'
import RichText from "../components/RichText"

export const query = graphql`
  query($url: String!) {
    page: contentfulPage(url: { eq: $url }) {
        url
        title
        body {
            raw
            references{
                ...RichTextReferencesFragment
            }
        }
    }
  }
`
const PageTemplate = ({ data }) => {
    const { title, body } = data.page
    return (
        <>
            <h1>{title}</h1>
            <RichText data={body} />
        </>
    )
}

export default PageTemplate
