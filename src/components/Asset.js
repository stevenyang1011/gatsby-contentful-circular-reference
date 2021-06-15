import { graphql } from 'gatsby'
import React from "react"

export const query = graphql`
  fragment ContentfulAssetFragment on ContentfulAsset{
    contentful_id
    file {
        details {
          image {
            height
            width
          }
        }
        url
        fileName
      }
      description
  }
`

const Asset = ({data}) => {
    if (data?.file?.url){
        return (<img src={data.file.url} alt={data.file.description} />)
    }
    return null
}
export default Asset