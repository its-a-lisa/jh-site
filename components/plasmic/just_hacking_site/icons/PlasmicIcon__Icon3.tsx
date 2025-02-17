// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 2500 2500"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"var(--token-ilO0Nn-AQ6vr)"} d={"M0 0h2500v2500H0z"}></path>

      <defs>
        <g id={"fMZFxoR0WauIa"} fill={"var(--token-xvmS7UfqD42l)"}>
          <circle r={".5"}></circle>

          <circle cx={"20"} r={"1"}></circle>

          <circle cx={"40"} r={"1.5"}></circle>

          <circle cx={"60"} r={"2"}></circle>

          <circle cx={"80"} r={"2.5"}></circle>

          <circle cx={"100"} r={"3"}></circle>

          <circle cx={"120"} r={"3.5"}></circle>

          <circle cx={"140"} r={"4"}></circle>

          <circle cx={"160"} r={"4.5"}></circle>

          <circle cx={"180"} r={"5"}></circle>

          <circle cx={"200"} r={"5.5"}></circle>

          <circle cx={"220"} r={"6"}></circle>

          <circle cx={"240"} r={"7"}></circle>

          <circle cx={"260"} r={"7.5"}></circle>

          <circle cx={"280"} r={"8"}></circle>

          <circle cx={"300"} r={"8.5"}></circle>

          <circle cx={"320"} r={"9"}></circle>

          <circle cx={"340"} r={"9.5"}></circle>

          <circle cx={"360"} r={"10"}></circle>

          <circle cx={"380"} r={"10.5"}></circle>

          <circle cx={"400"} r={"11"}></circle>

          <circle cx={"420"} r={"11.5"}></circle>

          <circle cx={"440"} r={"12"}></circle>

          <circle cx={"460"} r={"12.5"}></circle>

          <circle cx={"480"} r={"13"}></circle>

          <circle cx={"500"} r={"13.5"}></circle>

          <circle cx={"520"} r={"14"}></circle>

          <circle cx={"540"} r={"14.5"}></circle>

          <circle cx={"560"} r={"15"}></circle>

          <path d={"M560-15h9999v30H560z"}></path>
        </g>

        <g id={"fMZFxoR0WauIb"}>
          <use x={"80"} href={"#fMZFxoR0WauIa"}></use>

          <use x={"60"} y={"20"} href={"#fMZFxoR0WauIa"}></use>

          <use x={"40"} y={"40"} href={"#fMZFxoR0WauIa"}></use>

          <use x={"20"} y={"60"} href={"#fMZFxoR0WauIa"}></use>

          <use y={"80"} href={"#fMZFxoR0WauIa"}></use>
        </g>

        <g id={"fMZFxoR0WauIc"}>
          <use x={"500"} href={"#fMZFxoR0WauIb"}></use>

          <use x={"400"} y={"100"} href={"#fMZFxoR0WauIb"}></use>

          <use x={"300"} y={"200"} href={"#fMZFxoR0WauIb"}></use>

          <use x={"200"} y={"300"} href={"#fMZFxoR0WauIb"}></use>

          <use x={"100"} y={"400"} href={"#fMZFxoR0WauIb"}></use>

          <use y={"500"} href={"#fMZFxoR0WauIb"}></use>
        </g>
      </defs>

      <g transform={"rotate(-23 750 500)"}>
        <use transform={"translate(0 -1160)"} href={"#fMZFxoR0WauIc"}></use>

        <use transform={"scale(1 -1)"} href={"#fMZFxoR0WauIc"}></use>

        <use href={"#fMZFxoR0WauIc"}></use>

        <use
          transform={"matrix(1 0 0 -1 0 1160)"}
          href={"#fMZFxoR0WauIc"}
        ></use>

        <use transform={"translate(0 1160)"} href={"#fMZFxoR0WauIc"}></use>
      </g>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
