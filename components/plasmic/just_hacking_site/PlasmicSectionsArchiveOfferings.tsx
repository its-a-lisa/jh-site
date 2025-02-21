// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ka2iZDuLZRczy7yQTcifgT
// Component: ARIBZ01Abab-

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

import ComponentsPathwayOfferingItem from "../../ComponentsPathwayOfferingItem"; // plasmic-import: nQYqBjZb5dcX/component
import BaseComponentsListItem from "../../BaseComponentsListItem"; // plasmic-import: AilJMeiiLU0t/component
import BaseComponentsButton from "../../BaseComponentsButton"; // plasmic-import: RJCN3wmY1s2W/component
import ComponentsTrainingTrainingGrid from "../../ComponentsTrainingTrainingGrid"; // plasmic-import: zSuJsJOabVOR/component

import {
  ThemeValue,
  useTheme
} from "../17_sds_foundation_global/PlasmicGlobalVariant__Theme"; // plasmic-import: yBTVTgAz2Co9/globalVariant
import { useScreenVariants as useScreenVariantssqmLxjkgQr } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: sqmLXJKG--Qr/globalVariant
import { useScreenVariants as useScreenVariantsohEUf6Jd0EV8 } from "../17_sds_foundation_global/PlasmicGlobalVariant__Screen"; // plasmic-import: OhEUf6Jd0eV8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_17_sds_foundation_global_css from "../17_sds_foundation_global/plasmic.module.css"; // plasmic-import: 3BHMWCYAenCmWb8ThbnzeF/projectcss
import plasmic_17_sds_foundation_system_css from "../17_sds_foundation_system/plasmic.module.css"; // plasmic-import: dNqcW7FYVqnkjtbdVGjyS8/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ka2iZDuLZRczy7yQTcifgT/projectcss
import sty from "./PlasmicSectionsArchiveOfferings.module.css"; // plasmic-import: ARIBZ01Abab-/css

import Icon16Icon from "./icons/PlasmicIcon__Icon16"; // plasmic-import: 4afhqqqjv41U/icon
import CircleIcon from "./icons/PlasmicIcon__Circle"; // plasmic-import: _WS5X-3NT1mr/icon
import FaAngleRightSvgIcon from "./icons/PlasmicIcon__FaAngleRightSvg"; // plasmic-import: fI4-p36KLtYb/icon

createPlasmicElementProxy;

export type PlasmicSectionsArchiveOfferings__VariantMembers = {};
export type PlasmicSectionsArchiveOfferings__VariantsArgs = {};
type VariantPropType = keyof PlasmicSectionsArchiveOfferings__VariantsArgs;
export const PlasmicSectionsArchiveOfferings__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSectionsArchiveOfferings__ArgsType = {};
type ArgPropType = keyof PlasmicSectionsArchiveOfferings__ArgsType;
export const PlasmicSectionsArchiveOfferings__ArgProps =
  new Array<ArgPropType>();

export type PlasmicSectionsArchiveOfferings__OverridesType = {
  root?: Flex__<"div">;
  column?: Flex__<"div">;
  h2?: Flex__<"h2">;
  upskillChallenges?: Flex__<typeof ComponentsPathwayOfferingItem>;
  hackALongs?: Flex__<typeof ComponentsPathwayOfferingItem>;
  captureTheFlag?: Flex__<typeof ComponentsPathwayOfferingItem>;
};

export interface DefaultSectionsArchiveOfferingsProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSectionsArchiveOfferings__RenderFunc(props: {
  variants: PlasmicSectionsArchiveOfferings__VariantsArgs;
  args: PlasmicSectionsArchiveOfferings__ArgsType;
  overrides: PlasmicSectionsArchiveOfferings__OverridesType;
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
    screen: useScreenVariantssqmLxjkgQr(),
    screen: useScreenVariantsohEUf6Jd0EV8()
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
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
      <Stack__
        as={"div"}
        data-plasmic-name={"column"}
        data-plasmic-override={overrides.column}
        hasGap={true}
        className={classNames(projectcss.all, sty.column, {
          [sty.columnglobal_theme_dark]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          )
        })}
      >
        <h2
          data-plasmic-name={"h2"}
          data-plasmic-override={overrides.h2}
          className={classNames(
            projectcss.all,
            projectcss.h2,
            projectcss.__wab_text,
            sty.h2,
            {
              [sty.h2global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            }
          )}
        >
          {"Lets Hack some things"}
        </h2>
        <div
          className={classNames(projectcss.all, sty.freeBox__ioEpu, {
            [sty.freeBoxglobal_theme_dark__ioEpUe6UCs]: hasVariant(
              globalVariants,
              "theme",
              "dark"
            )
          })}
        >
          <ComponentsPathwayOfferingItem
            data-plasmic-name={"upskillChallenges"}
            data-plasmic-override={overrides.upskillChallenges}
            actionSlot={
              <BaseComponentsButton
                className={classNames(
                  "__wab_instance",
                  sty.baseComponentsButton__e2VpC
                )}
                color={"secondary"}
                end={
                  <FaAngleRightSvgIcon
                    className={classNames(projectcss.all, sty.svg___2O5H)}
                    role={"img"}
                  />
                }
                iconEnd={true}
                kind={["fill"]}
                label={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sc6DM
                    )}
                  >
                    {"See all UCs"}
                  </div>
                }
                onClick={async event => {
                  const $steps = {};

                  $steps["goToUpskillChallenge"] = true
                    ? (() => {
                        const actionArgs = {};
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
                    $steps["goToUpskillChallenge"] != null &&
                    typeof $steps["goToUpskillChallenge"] === "object" &&
                    typeof $steps["goToUpskillChallenge"].then === "function"
                  ) {
                    $steps["goToUpskillChallenge"] = await $steps[
                      "goToUpskillChallenge"
                    ];
                  }
                }}
              />
            }
            centered={true}
            className={classNames("__wab_instance", sty.upskillChallenges, {
              [sty.upskillChallengesglobal_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            })}
            imageSlot={
              <ComponentsTrainingTrainingGrid
                className={classNames(
                  "__wab_instance",
                  sty.componentsTrainingTrainingGrid__j4XMr
                )}
              />
            }
            offeringListSlot={
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__xQi6A)}
              >
                <BaseComponentsListItem
                  className={classNames(
                    "__wab_instance",
                    sty.baseComponentsListItem__c6SWz
                  )}
                  reverse={true}
                >
                  {"UCs are bite-sized training lessons"}
                </BaseComponentsListItem>
                <BaseComponentsListItem
                  className={classNames(
                    "__wab_instance",
                    sty.baseComponentsListItem__nHd3T
                  )}
                  reverse={true}
                >
                  {"Only 10 - 30 minutes of student time"}
                </BaseComponentsListItem>
                <BaseComponentsListItem
                  className={classNames(
                    "__wab_instance",
                    sty.baseComponentsListItem__jCDnY
                  )}
                  reverse={true}
                >
                  {"Quiz to check understanding"}
                </BaseComponentsListItem>
                <BaseComponentsListItem
                  className={classNames(
                    "__wab_instance",
                    sty.baseComponentsListItem__re7B8,
                    {
                      [sty.baseComponentsListItemglobal_theme_dark__re7B8E6UCs]:
                        hasVariant(globalVariants, "theme", "dark")
                    }
                  )}
                  reverse={true}
                >
                  {"Completely free"}
                </BaseComponentsListItem>
              </Stack__>
            }
            reverse={true}
          />

          <ComponentsPathwayOfferingItem
            data-plasmic-name={"hackALongs"}
            data-plasmic-override={overrides.hackALongs}
            actionSlot={
              <BaseComponentsButton
                className={classNames(
                  "__wab_instance",
                  sty.baseComponentsButton__or5Zu
                )}
                color={"secondary"}
                end={
                  <FaAngleRightSvgIcon
                    className={classNames(projectcss.all, sty.svg__mMo5Z)}
                    role={"img"}
                  />
                }
                iconEnd={true}
                kind={["fill"]}
                label={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cMQa
                    )}
                  >
                    {"See all HACs"}
                  </div>
                }
                onClick={async event => {
                  const $steps = {};

                  $steps["goToHackALongChallenges"] = true
                    ? (() => {
                        const actionArgs = {};
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
                    $steps["goToHackALongChallenges"] != null &&
                    typeof $steps["goToHackALongChallenges"] === "object" &&
                    typeof $steps["goToHackALongChallenges"].then === "function"
                  ) {
                    $steps["goToHackALongChallenges"] = await $steps[
                      "goToHackALongChallenges"
                    ];
                  }
                }}
              />
            }
            centered={true}
            className={classNames("__wab_instance", sty.hackALongs, {
              [sty.hackALongsglobal_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            })}
            headingSlot={"Hack Alongs"}
            imageSlot={
              <ComponentsTrainingTrainingGrid
                className={classNames(
                  "__wab_instance",
                  sty.componentsTrainingTrainingGrid__c2B5K
                )}
                slot1={"data-recovery-basics"}
                slot2={"geoint-challenge-1"}
                slot3={"intro-dynamic-analysis"}
                unnamedGroupOfVariants={"_3"}
              />
            }
            offeringListSlot={
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__h9Uhl, {
                  [sty.freeBoxglobal_theme_dark__h9UhLe6UCs]: hasVariant(
                    globalVariants,
                    "theme",
                    "dark"
                  )
                })}
              >
                <BaseComponentsListItem
                  className={classNames(
                    "__wab_instance",
                    sty.baseComponentsListItem__dwy3S,
                    {
                      [sty.baseComponentsListItemglobal_theme_dark__dwy3Se6UCs]:
                        hasVariant(globalVariants, "theme", "dark")
                    }
                  )}
                >
                  {"HALs accompany free videos"}
                </BaseComponentsListItem>
                <BaseComponentsListItem
                  className={classNames(
                    "__wab_instance",
                    sty.baseComponentsListItem__yuFvX,
                    {
                      [sty.baseComponentsListItemglobal_theme_dark__yuFvXe6UCs]:
                        hasVariant(globalVariants, "theme", "dark")
                    }
                  )}
                >
                  {"About 2 hours of student time"}
                </BaseComponentsListItem>
                <BaseComponentsListItem
                  className={classNames(
                    "__wab_instance",
                    sty.baseComponentsListItem__dXQc6
                  )}
                >
                  {"Full virtual lab environments"}
                </BaseComponentsListItem>
                <BaseComponentsListItem
                  className={classNames(
                    "__wab_instance",
                    sty.baseComponentsListItem__t30L3
                  )}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__rp9Na,
                      {
                        [sty.textglobal_theme_dark__rp9Nae6UCs]: hasVariant(
                          globalVariants,
                          "theme",
                          "dark"
                        )
                      }
                    )}
                  >
                    {"Step-by-step instructions & screenshots"}
                  </div>
                </BaseComponentsListItem>
              </Stack__>
            }
          />

          <ComponentsPathwayOfferingItem
            data-plasmic-name={"captureTheFlag"}
            data-plasmic-override={overrides.captureTheFlag}
            actionSlot={
              <BaseComponentsButton
                className={classNames(
                  "__wab_instance",
                  sty.baseComponentsButton___6OF7F
                )}
                color={"secondary"}
                end={
                  <FaAngleRightSvgIcon
                    className={classNames(projectcss.all, sty.svg___0XeR7)}
                    role={"img"}
                  />
                }
                iconEnd={true}
                kind={["fill"]}
                label={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zbiEi
                    )}
                  >
                    {"See all CTFs"}
                  </div>
                }
                onClick={async event => {
                  const $steps = {};

                  $steps["goToCaptureTheFlag"] = true
                    ? (() => {
                        const actionArgs = {};
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
                    $steps["goToCaptureTheFlag"] != null &&
                    typeof $steps["goToCaptureTheFlag"] === "object" &&
                    typeof $steps["goToCaptureTheFlag"].then === "function"
                  ) {
                    $steps["goToCaptureTheFlag"] = await $steps[
                      "goToCaptureTheFlag"
                    ];
                  }
                }}
              />
            }
            centered={true}
            className={classNames("__wab_instance", sty.captureTheFlag)}
            headingSlot={"Capture the Flags"}
            imageSlot={
              <ComponentsTrainingTrainingGrid
                className={classNames(
                  "__wab_instance",
                  sty.componentsTrainingTrainingGrid__bfup
                )}
                slot1={"nahamcon-2024"}
                slot2={"nahamcon-2024"}
                slot3={"snyk-fetch-the-flag-2023"}
                slot4={"snyk-fetch-the-flag-2023"}
                slot5={"snyk-fetch-the-flag-2023"}
                unnamedGroupOfVariants={"_2"}
              />
            }
            offeringListSlot={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___7IPdg
                )}
              >
                {
                  "Missed an event where the Just Hacking Training Team delivered a killer Capture the Flag competition? Didn't have enough time to just roam or try other approaches?\n\nWorry no more!\n\nContinue playing to your heart's content. Only difference is that there\u2019s no time limits and no scoreboard. Learn with no pressure!"
                }
              </div>
            }
            reverse={true}
          />
        </div>
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "column",
    "h2",
    "upskillChallenges",
    "hackALongs",
    "captureTheFlag"
  ],
  column: ["column", "h2", "upskillChallenges", "hackALongs", "captureTheFlag"],
  h2: ["h2"],
  upskillChallenges: ["upskillChallenges"],
  hackALongs: ["hackALongs"],
  captureTheFlag: ["captureTheFlag"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  column: "div";
  h2: "h2";
  upskillChallenges: typeof ComponentsPathwayOfferingItem;
  hackALongs: typeof ComponentsPathwayOfferingItem;
  captureTheFlag: typeof ComponentsPathwayOfferingItem;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSectionsArchiveOfferings__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSectionsArchiveOfferings__VariantsArgs;
    args?: PlasmicSectionsArchiveOfferings__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSectionsArchiveOfferings__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSectionsArchiveOfferings__ArgsType,
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
          internalArgPropNames: PlasmicSectionsArchiveOfferings__ArgProps,
          internalVariantPropNames:
            PlasmicSectionsArchiveOfferings__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSectionsArchiveOfferings__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionsArchiveOfferings";
  } else {
    func.displayName = `PlasmicSectionsArchiveOfferings.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionsArchiveOfferings = Object.assign(
  // Top-level PlasmicSectionsArchiveOfferings renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    column: makeNodeComponent("column"),
    h2: makeNodeComponent("h2"),
    upskillChallenges: makeNodeComponent("upskillChallenges"),
    hackALongs: makeNodeComponent("hackALongs"),
    captureTheFlag: makeNodeComponent("captureTheFlag"),

    // Metadata about props expected for PlasmicSectionsArchiveOfferings
    internalVariantProps: PlasmicSectionsArchiveOfferings__VariantProps,
    internalArgProps: PlasmicSectionsArchiveOfferings__ArgProps
  }
);

export default PlasmicSectionsArchiveOfferings;
/* prettier-ignore-end */
