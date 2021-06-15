import React from "react"
import { graphql } from 'gatsby'
import EmbeddedEntry from "./EmbeddedEntry"
import Asset from "./Asset"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"


export const query = graphql`
    fragment RichTextReferencesFragment on ContentfulAssetContentfulGridContentfulTooltipUnion{
        __typename
        ... on ContentfulGrid {
            ...ContentfulGridFragment
        }
        ... on ContentfulTooltip {
            ...ContentfulTooltipFragment
        }
        ... on ContentfulAsset {
            contentful_id
            ...ContentfulAssetFragment
        }
    }
`

const options = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <div>{children}</div>,
        [BLOCKS.EMBEDDED_ASSET]: node => <Asset data={node.data.target} />,
        [BLOCKS.EMBEDDED_ENTRY]: node => <EmbeddedEntry data={node.data.target} />,
        [INLINES.EMBEDDED_ENTRY]: node => <EmbeddedEntry data={node.data.target} />,
    }
}

const richText = ({data}) => {
    return data && renderRichText(data, options)
}

export default richText
