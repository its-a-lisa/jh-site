// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ka2iZDuLZRczy7yQTcifgT
// Component: 1Ps2rlLTVA5d

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

import ComponentsPathwayExploreItem from "../../ComponentsPathwayExploreItem"; // plasmic-import: V1qlIvo8-nfi/component
import BaseComponentsButton from "../../BaseComponentsButton"; // plasmic-import: RJCN3wmY1s2W/component

import {
  ThemeValue,
  useTheme
} from "../17_sds_foundation_global/PlasmicGlobalVariant__Theme"; // plasmic-import: yBTVTgAz2Co9/globalVariant
import { useScreenVariants as useScreenVariantsohEUf6Jd0EV8 } from "../17_sds_foundation_global/PlasmicGlobalVariant__Screen"; // plasmic-import: OhEUf6Jd0eV8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_17_sds_foundation_global_css from "../17_sds_foundation_global/plasmic.module.css"; // plasmic-import: 3BHMWCYAenCmWb8ThbnzeF/projectcss
import plasmic_17_sds_foundation_system_css from "../17_sds_foundation_system/plasmic.module.css"; // plasmic-import: dNqcW7FYVqnkjtbdVGjyS8/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ka2iZDuLZRczy7yQTcifgT/projectcss
import sty from "./PlasmicSectionsArchiveExplorationsContainer.module.css"; // plasmic-import: 1Ps2rlLTVA5d/css

import CircleIcon from "./icons/PlasmicIcon__Circle"; // plasmic-import: _WS5X-3NT1mr/icon
import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: 32aCNZ5iI3FE/icon
import CourseIcon from "./icons/PlasmicIcon__Course"; // plasmic-import: 1EE12dXUAqej/icon
import UpskillchallengeIcon from "./icons/PlasmicIcon__Upskillchallenge"; // plasmic-import: YZq8zkH6L26i/icon
import HackalongIcon from "./icons/PlasmicIcon__Hackalong"; // plasmic-import: nGItqZvcwXxE/icon
import CtfIcon from "./icons/PlasmicIcon__Ctf"; // plasmic-import: _gVbNTQuEpnD/icon

createPlasmicElementProxy;

export type PlasmicSectionsArchiveExplorationsContainer__VariantMembers = {};
export type PlasmicSectionsArchiveExplorationsContainer__VariantsArgs = {};
type VariantPropType =
  keyof PlasmicSectionsArchiveExplorationsContainer__VariantsArgs;
export const PlasmicSectionsArchiveExplorationsContainer__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSectionsArchiveExplorationsContainer__ArgsType = {};
type ArgPropType = keyof PlasmicSectionsArchiveExplorationsContainer__ArgsType;
export const PlasmicSectionsArchiveExplorationsContainer__ArgProps =
  new Array<ArgPropType>();

export type PlasmicSectionsArchiveExplorationsContainer__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultSectionsArchiveExplorationsContainerProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSectionsArchiveExplorationsContainer__RenderFunc(props: {
  variants: PlasmicSectionsArchiveExplorationsContainer__VariantsArgs;
  args: PlasmicSectionsArchiveExplorationsContainer__ArgsType;
  overrides: PlasmicSectionsArchiveExplorationsContainer__OverridesType;
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
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_17_sds_foundation_global_css.plasmic_tokens,
        plasmic_17_sds_foundation_system_css.plasmic_tokens,
        sty.root,
        {
          [plasmic_17_sds_foundation_global_css.global_theme_darkGrayscale]:
            hasVariant(globalVariants, "theme", "darkGrayscale"),
          [plasmic_17_sds_foundation_global_css.global_theme_dark]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          ),
          [plasmic_17_sds_foundation_global_css.global_theme_grayscale]:
            hasVariant(globalVariants, "theme", "grayscale"),
          [sty.rootglobal_theme_dark]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          )
        }
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox___5Hu0L)}>
        <ComponentsPathwayExploreItem
          actionSlot={
            <BaseComponentsButton
              className={classNames(
                "__wab_instance",
                sty.baseComponentsButton__dThut,
                {
                  [sty.baseComponentsButtonglobal_theme_dark__dThute6UCs]:
                    hasVariant(globalVariants, "theme", "dark")
                }
              )}
              label={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__wqF9B,
                    {
                      [sty.textglobal_theme_dark__wqF9Be6UCs]: hasVariant(
                        globalVariants,
                        "theme",
                        "dark"
                      )
                    }
                  )}
                >
                  {"Explore Courses"}
                </div>
              }
              onClick={async event => {
                const $steps = {};

                $steps["goToAboutPathwayPathway"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: `/pathway/${"course"}`
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToAboutPathwayPathway"] != null &&
                  typeof $steps["goToAboutPathwayPathway"] === "object" &&
                  typeof $steps["goToAboutPathwayPathway"].then === "function"
                ) {
                  $steps["goToAboutPathwayPathway"] = await $steps[
                    "goToAboutPathwayPathway"
                  ];
                }
              }}
              size={
                hasVariant(globalVariants, "theme", "dark")
                  ? "small"
                  : undefined
              }
            />
          }
          className={classNames(
            "__wab_instance",
            sty.componentsPathwayExploreItem__mmpZl,
            {
              [sty.componentsPathwayExploreItemglobal_theme_dark__mmpZle6UCs]:
                hasVariant(globalVariants, "theme", "dark")
            }
          )}
          descriptionSlot={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ie3Fe
              )}
            >
              {"In-depth cybersecurity courses for skill development."}
            </div>
          }
          headlineSlot={
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__fpjk4,
                {
                  [sty.h4global_theme_dark__fpjk4E6UCs]: hasVariant(
                    globalVariants,
                    "theme",
                    "dark"
                  )
                }
              )}
            >
              {"Course"}
            </h4>
          }
          iconSlot={
            <CourseIcon
              className={classNames(projectcss.all, sty.svg__hpImh)}
              role={"img"}
            />
          }
        />
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__jM48V)}>
        <ComponentsPathwayExploreItem
          actionSlot={
            <BaseComponentsButton
              className={classNames(
                "__wab_instance",
                sty.baseComponentsButton__zSio2,
                {
                  [sty.baseComponentsButtonglobal_theme_dark__zSio2E6UCs]:
                    hasVariant(globalVariants, "theme", "dark")
                }
              )}
              label={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__mqVct
                  )}
                >
                  {"Explore UCs"}
                </div>
              }
              onClick={async event => {
                const $steps = {};

                $steps["goToAboutPathwayPathway"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: `/pathway/${"upskill-challenge"}`
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToAboutPathwayPathway"] != null &&
                  typeof $steps["goToAboutPathwayPathway"] === "object" &&
                  typeof $steps["goToAboutPathwayPathway"].then === "function"
                ) {
                  $steps["goToAboutPathwayPathway"] = await $steps[
                    "goToAboutPathwayPathway"
                  ];
                }
              }}
              size={
                hasVariant(globalVariants, "theme", "dark")
                  ? "small"
                  : undefined
              }
            />
          }
          className={classNames(
            "__wab_instance",
            sty.componentsPathwayExploreItem__kWaje,
            {
              [sty.componentsPathwayExploreItemglobal_theme_dark__kWajEe6UCs]:
                hasVariant(globalVariants, "theme", "dark")
            }
          )}
          descriptionSlot={
            "Quick challenges to boost specific cybersecurity skills."
          }
          headlineSlot={
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__fb8Qj
              )}
            >
              {"Upskill Challenge"}
            </h4>
          }
          iconSlot={
            <UpskillchallengeIcon
              className={classNames(projectcss.all, sty.svg___6303L)}
              role={"img"}
            />
          }
          pathwaySlug={"upskill-challenge"}
        />
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__exbOb)}>
        <ComponentsPathwayExploreItem
          actionSlot={
            <BaseComponentsButton
              className={classNames(
                "__wab_instance",
                sty.baseComponentsButton___05VlH,
                {
                  [sty.baseComponentsButtonglobal_theme_dark___05VlHe6UCs]:
                    hasVariant(globalVariants, "theme", "dark")
                }
              )}
              label={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__nUpQg
                  )}
                >
                  {"Explore HALs"}
                </div>
              }
              onClick={async event => {
                const $steps = {};

                $steps["goToAboutPathwayPathway"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: `/pathway/${"hack-along"}`
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToAboutPathwayPathway"] != null &&
                  typeof $steps["goToAboutPathwayPathway"] === "object" &&
                  typeof $steps["goToAboutPathwayPathway"].then === "function"
                ) {
                  $steps["goToAboutPathwayPathway"] = await $steps[
                    "goToAboutPathwayPathway"
                  ];
                }
              }}
              size={
                hasVariant(globalVariants, "theme", "dark")
                  ? "small"
                  : undefined
              }
            />
          }
          className={classNames(
            "__wab_instance",
            sty.componentsPathwayExploreItem__b62Nd
          )}
          descriptionSlot={
            "Hands-on sessions with guided cybersecurity tutorials."
          }
          headlineSlot={
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__pWrul
              )}
            >
              {"Hack-Along"}
            </h4>
          }
          iconSlot={
            <HackalongIcon
              className={classNames(projectcss.all, sty.svg__drIe)}
              role={"img"}
            />
          }
          pathwaySlug={"hack-along"}
        />
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__ahTp)}>
        <ComponentsPathwayExploreItem
          actionSlot={
            <BaseComponentsButton
              className={classNames(
                "__wab_instance",
                sty.baseComponentsButton__hDoRr,
                {
                  [sty.baseComponentsButtonglobal_theme_dark__hDoRre6UCs]:
                    hasVariant(globalVariants, "theme", "dark")
                }
              )}
              label={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dW5U8
                  )}
                >
                  {"Explore CTFs"}
                </div>
              }
              onClick={async event => {
                const $steps = {};

                $steps["goToAboutPathwayPathway"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: `/pathway/${"capture-the-flag"}`
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToAboutPathwayPathway"] != null &&
                  typeof $steps["goToAboutPathwayPathway"] === "object" &&
                  typeof $steps["goToAboutPathwayPathway"].then === "function"
                ) {
                  $steps["goToAboutPathwayPathway"] = await $steps[
                    "goToAboutPathwayPathway"
                  ];
                }
              }}
              size={
                hasVariant(globalVariants, "theme", "dark")
                  ? "small"
                  : undefined
              }
            />
          }
          className={classNames(
            "__wab_instance",
            sty.componentsPathwayExploreItem__hC8Dp,
            {
              [sty.componentsPathwayExploreItemglobal_theme_dark__hC8DPe6UCs]:
                hasVariant(globalVariants, "theme", "dark")
            }
          )}
          descriptionSlot={
            "Cybersecurity challenges to test your problem-solving."
          }
          headlineSlot={
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__ftQtg
              )}
            >
              {"Capture the Flag"}
            </h4>
          }
          pathwaySlug={"capture-the-flag"}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSectionsArchiveExplorationsContainer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSectionsArchiveExplorationsContainer__VariantsArgs;
    args?: PlasmicSectionsArchiveExplorationsContainer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    PlasmicSectionsArchiveExplorationsContainer__VariantsArgs,
    ReservedPropsType
  > &
    /* Specify args directly as props*/ Omit<
      PlasmicSectionsArchiveExplorationsContainer__ArgsType,
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
          internalArgPropNames:
            PlasmicSectionsArchiveExplorationsContainer__ArgProps,
          internalVariantPropNames:
            PlasmicSectionsArchiveExplorationsContainer__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSectionsArchiveExplorationsContainer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionsArchiveExplorationsContainer";
  } else {
    func.displayName = `PlasmicSectionsArchiveExplorationsContainer.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionsArchiveExplorationsContainer = Object.assign(
  // Top-level PlasmicSectionsArchiveExplorationsContainer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSectionsArchiveExplorationsContainer
    internalVariantProps:
      PlasmicSectionsArchiveExplorationsContainer__VariantProps,
    internalArgProps: PlasmicSectionsArchiveExplorationsContainer__ArgProps
  }
);

export default PlasmicSectionsArchiveExplorationsContainer;
/* prettier-ignore-end */
