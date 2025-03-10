import { Button, Panel, PanelMain } from "@patternfly/react-core"
import { Link, useLocation, useSearchParams } from "react-router"

import Tile from "./welcome/Tile"
import Result from "../view/Result"
import Welcome from "./welcome/Welcome"

import demos from "../demos/demos"

import { hasResult } from "../helpers"

import DemoIcon from "@patternfly/react-icons/dist/esm/icons/sun-icon"

function DemoTiles() {
  const { hash } = useLocation()
  const [searchParams] = useSearchParams()
  const s = searchParams.toString()

  return demos.map((demo) => {
    // TODO useMemo()
    const data = JSON.parse(demo.trace)
    return (
      <Tile
        key={demo.name}
        title={demo.name}
        icon={<DemoIcon />}
        body={
          hasResult(data) ? (
            <Panel isScrollable>
              <PanelMain maxHeight="200px">
                <Result result={data.result} />
              </PanelMain>
            </Panel>
          ) : (
            <></>
          )
        }
      >
        <Button isInline variant="link">
          <Link
            to={
              "/demos/" +
              encodeURIComponent(demo.name) +
              (s ? `?${s}` : "") +
              hash
            }
          >
            Show this Demo
          </Link>
        </Button>
      </Tile>
    )
  })
}

export default function Demos() {
  return (
    <Welcome
      breadcrumb1="Demos"
      intro="Here are some built-in PDL demos"
      tiles={<DemoTiles />}
    />
  )
}
