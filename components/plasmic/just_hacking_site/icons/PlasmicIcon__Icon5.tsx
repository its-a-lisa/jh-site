// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 800 800"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"var(--token-D2PR-XOVFCk-)"} d={"M0 0h800v1000H0z"}></path>

      <g
        fill={"none"}
        stroke={"var(--token-Bsyo6EdJfSUu)"}
        strokeWidth={"30"}
        strokeLinecap={"round"}
        strokeOpacity={"1"}
      >
        <path
          d={
            "M639 727l-49 49m-4-59l302-302 93 97-702 703-159-159 487-487m328-75L776 653m-351-29l63-64"
          }
        ></path>

        <path
          d={
            "M745 685l-547 547-222-222 250-251m157-93l10-11m23-86l22-22M194 664l43-42"
          }
        ></path>

        <path
          d={
            "M374 547L35 886l159 159 424-423m63 63l-10 11m53-180l-75 74M334 776l167-165m55 135l-330 331 127 127 699-699-96-95-243 243m-455 74l127-127m286-95l-32 32"
          }
        ></path>

        <path d={"M162 696L-24 883l95 95 282-282"}></path>
      </g>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
