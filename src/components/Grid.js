import React from "react"
import { graphql } from 'gatsby'
import RichText from "../components/RichText"

export const query = graphql`
  fragment ContentfulGridFragment on ContentfulGrid{
    title
    contentful_id
    columns
    items {
        contentful_id
        content {
            raw
            references{
                ... on ContentfulAsset {
                    ...ContentfulAssetFragment
                }
                # ... on ContentfulGrid {
                #     ...ContentfulGridFragment
                # }
            }
        }
    }
  }
`

const GridItem = ({data}) => (
    data.content && (
        <div>
            <RichText data={data.content} />
        </div>
    )
)

const Grid = ({data}) => {
    const {title, columns, items} = data
    return (
        <div className="grid-container">
            <h3>{title}</h3>
            <div className={`grid grid-cols-${columns}`}>
            {items.map((item, key) => <GridItem key={key} data={item} />)}
            </div>
        </div>
    )
}

export default Grid
