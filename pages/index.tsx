import * as React from "react";
import * as ph from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/just_hacking_site/PlasmicGlobalContextsProvider";

import ScreenVariantProvider from "../components/plasmic/just_hacking_site/PlasmicGlobalVariant__Screen";
import { PlasmicHomepage } from "../components/plasmic/just_hacking_site/PlasmicHomepage";
import { useRouter } from "next/router";

function Homepage() {

  return (
    <GlobalContextsProvider>
      <ph.PageParamsProvider
        route={useRouter()?.pathname}
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <PlasmicHomepage />
      </ph.PageParamsProvider>
      </GlobalContextsProvider>
  );
}

export default Homepage;
