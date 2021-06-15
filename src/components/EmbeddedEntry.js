import React from "react"
import Grid from "./Grid"
import Tooltip from "./Tooltip"

const entryList = {
    ContentfulGrid: Grid,
    ContentfulTooltip: Tooltip,
}

const EmbeddedEntry = ({data}) => {
    if (data?.__typename && entryList[data.__typename]){
        const Component = entryList[data.__typename]
        return <Component data={data} />
    }
    return(
        <pre>
            <code>Embedded Entry data missing</code>
            <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
    )
}

export default EmbeddedEntry