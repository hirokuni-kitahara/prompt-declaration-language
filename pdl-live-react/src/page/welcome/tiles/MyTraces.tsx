import { Button } from "@patternfly/react-core"
import { Link, useLocation, useSearchParams } from "react-router"

import Tile from "../Tile"
import { getMyTraces } from "../../MyTraces"

import MyIcon from "@patternfly/react-icons/dist/esm/icons/user-icon"

export default function MyTraces() {
  const { hash } = useLocation()
  const [searchParams] = useSearchParams()
  const s = searchParams.toString()

  const myTraces = getMyTraces()

  return (
    <Tile
      title="My Traces"
      icon={<MyIcon />}
      body="You may view one of your previously uploaded traces."
    >
      {myTraces.map(({ title, filename }) => (
        <Button key={filename} isInline variant="link">
          <Link
            to={"/my/" + encodeURIComponent(title) + (s ? `?${s}` : "") + hash}
          >
            {title}
          </Link>
        </Button>
      ))}
    </Tile>
  )
}
