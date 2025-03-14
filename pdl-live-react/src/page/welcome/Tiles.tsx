import { type ReactNode } from "react"
import { Gallery } from "@patternfly/react-core"

import Demos from "./tiles/Demos"
import Upload from "./tiles/Upload"
import MyTraces from "./tiles/MyTraces"

type Props = {
  tiles?: ReactNode | ReactNode[]
}

const minWidths = { default: "300px" }

export default function Tiles(props: Props) {
  return (
    <Gallery hasGutter minWidths={minWidths}>
      {props.tiles ?? (
        <>
          <Upload />
          <MyTraces />
          <Demos />
        </>
      )}
    </Gallery>
  )
}
