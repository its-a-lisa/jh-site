import * as React from "react";
import {
  PlasmicLayoutFooter,
  DefaultLayoutFooterProps
} from "./plasmic/just_hacking_site/PlasmicLayoutFooter";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useSelector } from "@plasmicapp/react-web/lib/host";

export interface LayoutFooterProps extends DefaultLayoutFooterProps {}

function LayoutFooter_(props: LayoutFooterProps, ref: HTMLElementRefOf<"div">) {
  const {darkMode, toggleDarkMode } = useSelector ("darkModeData");

  return (
  <PlasmicLayoutFooter 
  footContainer={{ ref }} 
  themeSwitch={{
    onChange: () => {
      toggleDarkMode();
    },
    isChecked: darkMode,
  }}
  />
  );
}

const LayoutFooter = React.forwardRef(LayoutFooter_);
export default LayoutFooter;
