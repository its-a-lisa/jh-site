// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ka2iZDuLZRczy7yQTcifgT
// Component: Z10WnXYACit0

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import LayoutPageLayout from "../../LayoutPageLayout"; // plasmic-import: yF50B3DN7y3u/component
import { Embed } from "@plasmicpkgs/plasmic-basic-components";

import {
  ThemeValue,
  useTheme
} from "../17_sds_foundation_global/PlasmicGlobalVariant__Theme"; // plasmic-import: yBTVTgAz2Co9/globalVariant
import { useScreenVariants as useScreenVariantsohEUf6Jd0EV8 } from "../17_sds_foundation_global/PlasmicGlobalVariant__Screen"; // plasmic-import: OhEUf6Jd0eV8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_17_sds_foundation_global_css from "../17_sds_foundation_global/plasmic.module.css"; // plasmic-import: 3BHMWCYAenCmWb8ThbnzeF/projectcss
import plasmic_17_sds_foundation_system_css from "../17_sds_foundation_system/plasmic.module.css"; // plasmic-import: dNqcW7FYVqnkjtbdVGjyS8/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ka2iZDuLZRczy7yQTcifgT/projectcss
import sty from "./PlasmicResourceEvents.module.css"; // plasmic-import: Z10WnXYACit0/css

createPlasmicElementProxy;

export type PlasmicResourceEvents__VariantMembers = {};
export type PlasmicResourceEvents__VariantsArgs = {};
type VariantPropType = keyof PlasmicResourceEvents__VariantsArgs;
export const PlasmicResourceEvents__VariantProps = new Array<VariantPropType>();

export type PlasmicResourceEvents__ArgsType = {};
type ArgPropType = keyof PlasmicResourceEvents__ArgsType;
export const PlasmicResourceEvents__ArgProps = new Array<ArgPropType>();

export type PlasmicResourceEvents__OverridesType = {
  root?: Flex__<typeof LayoutPageLayout>;
  h1?: Flex__<"h1">;
  h3?: Flex__<"h3">;
};

export interface DefaultResourceEventsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicResourceEvents__RenderFunc(props: {
  variants: PlasmicResourceEvents__VariantsArgs;
  args: PlasmicResourceEvents__ArgsType;
  overrides: PlasmicResourceEvents__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    theme: useTheme(),
    screen: useScreenVariantsohEUf6Jd0EV8()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicResourceEvents.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicResourceEvents.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicResourceEvents.pageMetadata.title}
        />

        <meta
          key="og:image"
          property="og:image"
          content={PlasmicResourceEvents.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicResourceEvents.pageMetadata.ogImageSrc}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <LayoutPageLayout
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__sqS2)}
          >
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"Events"}
            </h1>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___79Ff1)}
            >
              <h3
                data-plasmic-name={"h3"}
                data-plasmic-override={overrides.h3}
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3
                )}
              >
                {"JHT Livestreams & RELEASES"}
              </h3>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__niMzh)}
              >
                <h5
                  className={classNames(
                    projectcss.all,
                    projectcss.h5,
                    projectcss.__wab_text,
                    sty.h5__fW1
                  )}
                >
                  {"JHT Livestreams & RELEASES"}
                </h5>
                <Embed
                  className={classNames("__wab_instance", sty.embedHtml__ogHcy)}
                  code={
                    '  <div class="section">\n    <p>\n      John Hammond hosts JHT 2 livestreams each month with our All-Star contributors to match our release schedule. Each will start with an intro and JHT updates by John, followed by an AMA on the given topic for about 20 minutes. The rest of the time will feature some live demos!\n    </p>\n  </div>'
                  }
                />
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__sbgL8)}
              >
                <h5
                  className={classNames(
                    projectcss.all,
                    projectcss.h5,
                    projectcss.__wab_text,
                    sty.h5__st63E
                  )}
                >
                  {"Monthly Course Releases & Livestreams"}
                </h5>
                <Embed
                  className={classNames("__wab_instance", sty.embedHtml__khFc6)}
                  code={
                    '  <div class="section">\n    <p>\n      The first week of every month, we release a new course, and we\u2019ll also do a livestream with one of our course authors.\n    </p>\n    <ul>\n      <li>November 2024 \u2013 OSINT with Mishaal Khan</li>\n      <li>December 2024 \u2013 Cryptography with Ellie Daw</li>\n      <li>January 2025 \u2013 Active Directory Hacking with Slavi Parpulev</li>\n      <li>February 7, 2025 \u2013 Blue Team Arts with Anton Ovrutsky</li>\n    </ul>\n  </div>'
                  }
                />
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___9LmvY)}
              >
                <h5
                  className={classNames(
                    projectcss.all,
                    projectcss.h5,
                    projectcss.__wab_text,
                    sty.h5__si2JQ
                  )}
                >
                  {"Weekly UC, HAL, and CTF Releases"}
                </h5>
                <Embed
                  className={classNames("__wab_instance", sty.embedHtml__czTB)}
                  code={
                    '  <div class="section">\n    <p>\n      During the 3rd week of each month, we release new UCs, HALs and CTFs. John will then interview an author of those alternative types of training.\n    </p>\n    <ul>\n      <li>January 24, 2025 \u2013 Pentesting Methodology by Phillip Wylie, CTF demo with John</li>\n      <li>February 21, 2025 \u2013 Forensics and live demo with Ali Hadi</li>\n    </ul>\n  </div>'
                  }
                />
              </Stack__>
            </Stack__>
          </Stack__>
        </LayoutPageLayout>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1", "h3"],
  h1: ["h1"],
  h3: ["h3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof LayoutPageLayout;
  h1: "h1";
  h3: "h3";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicResourceEvents__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicResourceEvents__VariantsArgs;
    args?: PlasmicResourceEvents__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicResourceEvents__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicResourceEvents__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicResourceEvents__ArgProps,
          internalVariantPropNames: PlasmicResourceEvents__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicResourceEvents__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicResourceEvents";
  } else {
    func.displayName = `PlasmicResourceEvents.${nodeName}`;
  }
  return func;
}

export const PlasmicResourceEvents = Object.assign(
  // Top-level PlasmicResourceEvents renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    h3: makeNodeComponent("h3"),

    // Metadata about props expected for PlasmicResourceEvents
    internalVariantProps: PlasmicResourceEvents__VariantProps,
    internalArgProps: PlasmicResourceEvents__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Just Hacking Events",
      description: "",
      ogImageSrc:
        "https://site-assets.plasmic.app/ad7d781926a78eb9fbef8818120ae8ff.png",
      canonical: ""
    }
  }
);

export default PlasmicResourceEvents;
/* prettier-ignore-end */
