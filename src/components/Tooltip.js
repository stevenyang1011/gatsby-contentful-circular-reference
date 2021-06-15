import React from "react"
import { graphql } from 'gatsby'
import ReactTooltip from 'react-tooltip';
import RichText from "../components/RichText"

export const query = graphql`
  fragment ContentfulTooltipFragment on ContentfulTooltip{
    title
    contentful_id
    body{
        raw
        # references{
        #     ... on ContentfulTooltip {
        #         ...ContentfulTooltipFragment
        #     }
        # }
    }
  }
`
const Tooltip = ({data}) => {
    const {contentful_id, title, body} = data
    return (
        <>
            <p data-tip data-for={contentful_id}>{title}</p>
            <ReactTooltip id={contentful_id}><RichText data={body} /></ReactTooltip>
        </>
    )
}

export default Tooltip
