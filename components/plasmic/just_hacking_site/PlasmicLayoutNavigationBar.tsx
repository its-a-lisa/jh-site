// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ka2iZDuLZRczy7yQTcifgT
// Component: 6sAd8E-7nmfs

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

import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import BaseComponentsPopover from "../../BaseComponentsPopover"; // plasmic-import: qSiuR1YUrvrO/component
import BaseComponentsSocialIcons from "../../BaseComponentsSocialIcons"; // plasmic-import: YjFssikwogCu/component
import BaseComponentsButton from "../../BaseComponentsButton"; // plasmic-import: RJCN3wmY1s2W/component

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
import sty from "./PlasmicLayoutNavigationBar.module.css"; // plasmic-import: 6sAd8E-7nmfs/css

import FaBarsSvgIcon from "./icons/PlasmicIcon__FaBarsSvg"; // plasmic-import: x_-_3cev3Vv3/icon
import CircleIcon from "./icons/PlasmicIcon__Circle"; // plasmic-import: _WS5X-3NT1mr/icon
import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: 32aCNZ5iI3FE/icon

createPlasmicElementProxy;

export type PlasmicLayoutNavigationBar__VariantMembers = {};
export type PlasmicLayoutNavigationBar__VariantsArgs = {};
type VariantPropType = keyof PlasmicLayoutNavigationBar__VariantsArgs;
export const PlasmicLayoutNavigationBar__VariantProps =
  new Array<VariantPropType>();

export type PlasmicLayoutNavigationBar__ArgsType = {};
type ArgPropType = keyof PlasmicLayoutNavigationBar__ArgsType;
export const PlasmicLayoutNavigationBar__ArgProps = new Array<ArgPropType>();

export type PlasmicLayoutNavigationBar__OverridesType = {
  root?: Flex__<typeof NavigationBar>;
  svg?: Flex__<"svg">;
  pathwaysNavItem?: Flex__<typeof BaseComponentsPopover>;
  pathwayStack?: Flex__<"div">;
  hal?: Flex__<"a"> & Partial<LinkProps>;
  ctf?: Flex__<"a"> & Partial<LinkProps>;
  uc?: Flex__<"a"> & Partial<LinkProps>;
  courses?: Flex__<"a"> & Partial<LinkProps>;
  resourcesNavItem?: Flex__<typeof BaseComponentsPopover>;
  resourceStack?: Flex__<"div">;
  faq?: Flex__<"a"> & Partial<LinkProps>;
  blog?: Flex__<"a"> & Partial<LinkProps>;
  events?: Flex__<"a"> & Partial<LinkProps>;
  aboutUsNavItem?: Flex__<typeof BaseComponentsPopover>;
  aboutUsStack?: Flex__<"div">;
  leadership?: Flex__<"a"> & Partial<LinkProps>;
  authors?: Flex__<"a"> & Partial<LinkProps>;
  baseComponentsSocialIcons?: Flex__<typeof BaseComponentsSocialIcons>;
};

export interface DefaultLayoutNavigationBarProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLayoutNavigationBar__RenderFunc(props: {
  variants: PlasmicLayoutNavigationBar__VariantsArgs;
  args: PlasmicLayoutNavigationBar__ArgsType;
  overrides: PlasmicLayoutNavigationBar__OverridesType;
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
    <NavigationBar
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      brand={
        <PlasmicLink__
          className={classNames(projectcss.all, projectcss.a, sty.link__trewQ)}
          component={Link}
          href={`/`}
          platform={"nextjs"}
        >
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__nUey0)}
            displayHeight={"64px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            src={{
              src: "/plasmic/just_hacking_site/images/jhtLogoPng.png",
              fullWidth: 300,
              fullHeight: 300,
              aspectRatio: undefined
            }}
          />
        </PlasmicLink__>
      }
      className={classNames(
        "__wab_instance",
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
      closeButton={
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__ngeCp)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={"https://static1.plasmic.app/close.svg"}
        />
      }
      itemsGap={8}
      menuItems={
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__vagbI)}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__d4UzX)}
          >
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__nnZa1
              )}
              component={Link}
              href={"/"}
              platform={"nextjs"}
            >
              {"Home"}
            </PlasmicLink__>
            <BaseComponentsPopover
              data-plasmic-name={"pathwaysNavItem"}
              data-plasmic-override={overrides.pathwaysNavItem}
              className={classNames("__wab_instance", sty.pathwaysNavItem)}
              contentSlot={
                <Stack__
                  as={"div"}
                  data-plasmic-name={"pathwayStack"}
                  data-plasmic-override={overrides.pathwayStack}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.pathwayStack, {
                    [sty.pathwayStackglobal_theme_dark]: hasVariant(
                      globalVariants,
                      "theme",
                      "dark"
                    )
                  })}
                >
                  <PlasmicLink__
                    data-plasmic-name={"hal"}
                    data-plasmic-override={overrides.hal}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.hal
                    )}
                    component={Link}
                    href={`/pathway/${"hack-along"}`}
                    platform={"nextjs"}
                  >
                    {"Hack Alongs"}
                  </PlasmicLink__>
                  <PlasmicLink__
                    data-plasmic-name={"ctf"}
                    data-plasmic-override={overrides.ctf}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.ctf
                    )}
                    component={Link}
                    href={`/pathway/${"capture-the-flag"}`}
                    platform={"nextjs"}
                  >
                    {"Capture the Flags"}
                  </PlasmicLink__>
                  <PlasmicLink__
                    data-plasmic-name={"uc"}
                    data-plasmic-override={overrides.uc}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.uc
                    )}
                    component={Link}
                    href={`/pathway/${"upskill-challenge"}`}
                    platform={"nextjs"}
                  >
                    {"Upskill Challenges"}
                  </PlasmicLink__>
                  <PlasmicLink__
                    data-plasmic-name={"courses"}
                    data-plasmic-override={overrides.courses}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.courses
                    )}
                    component={Link}
                    href={`/pathway/${"course"}`}
                    platform={"nextjs"}
                  >
                    {"Courses"}
                  </PlasmicLink__>
                </Stack__>
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__aRxhz
                )}
              >
                {"Pathways"}
              </div>
            </BaseComponentsPopover>
            <BaseComponentsPopover
              data-plasmic-name={"resourcesNavItem"}
              data-plasmic-override={overrides.resourcesNavItem}
              className={classNames("__wab_instance", sty.resourcesNavItem)}
              contentSlot={
                <Stack__
                  as={"div"}
                  data-plasmic-name={"resourceStack"}
                  data-plasmic-override={overrides.resourceStack}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.resourceStack)}
                >
                  <PlasmicLink__
                    data-plasmic-name={"faq"}
                    data-plasmic-override={overrides.faq}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.faq
                    )}
                    component={Link}
                    href={`/faq`}
                    platform={"nextjs"}
                  >
                    {"FAQ"}
                  </PlasmicLink__>
                  <PlasmicLink__
                    data-plasmic-name={"blog"}
                    data-plasmic-override={overrides.blog}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.blog
                    )}
                    component={Link}
                    href={`/blog`}
                    platform={"nextjs"}
                  >
                    {"Blog"}
                  </PlasmicLink__>
                  <PlasmicLink__
                    data-plasmic-name={"events"}
                    data-plasmic-override={overrides.events}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.events
                    )}
                    component={Link}
                    href={`/events`}
                    platform={"nextjs"}
                  >
                    {"Events"}
                  </PlasmicLink__>
                </Stack__>
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__iv8Wz
                )}
              >
                {"Resources"}
              </div>
            </BaseComponentsPopover>
            <BaseComponentsPopover
              data-plasmic-name={"aboutUsNavItem"}
              data-plasmic-override={overrides.aboutUsNavItem}
              className={classNames("__wab_instance", sty.aboutUsNavItem)}
              contentSlot={
                <Stack__
                  as={"div"}
                  data-plasmic-name={"aboutUsStack"}
                  data-plasmic-override={overrides.aboutUsStack}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.aboutUsStack)}
                >
                  <PlasmicLink__
                    data-plasmic-name={"leadership"}
                    data-plasmic-override={overrides.leadership}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.leadership
                    )}
                    component={Link}
                    href={`/about-us`}
                    platform={"nextjs"}
                  >
                    {"About Us"}
                  </PlasmicLink__>
                  <PlasmicLink__
                    data-plasmic-name={"authors"}
                    data-plasmic-override={overrides.authors}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.authors
                    )}
                    component={Link}
                    href={`/instructors`}
                    platform={"nextjs"}
                  >
                    {"Authors"}
                  </PlasmicLink__>
                </Stack__>
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__a4Ks
                )}
              >
                {"About Us"}
              </div>
            </BaseComponentsPopover>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__qpBr8)}
          >
            <BaseComponentsSocialIcons
              data-plasmic-name={"baseComponentsSocialIcons"}
              data-plasmic-override={overrides.baseComponentsSocialIcons}
              className={classNames(
                "__wab_instance",
                sty.baseComponentsSocialIcons
              )}
              discordServer={"mQQ5NsTbfF"}
              linkedinProfile={"justhacking"}
              socialItem={["discord", "linkedin", "x", "youtube", "twitch"]}
              twitchServer={"johnhammond010"}
              xtwitterId={"justhackinghq"}
              youtubeProfile={"justhackingtraining"}
            />

            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__lPoJx)}
            >
              <BaseComponentsButton
                className={classNames(
                  "__wab_instance",
                  sty.baseComponentsButton__tOv98,
                  {
                    [sty.baseComponentsButtonglobal_theme_dark__tOv98E6UCs]:
                      hasVariant(globalVariants, "theme", "dark")
                  }
                )}
                color={"neutral"}
                label={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ugucf,
                      {
                        [sty.textglobal_theme_dark__ugucFe6UCs]: hasVariant(
                          globalVariants,
                          "theme",
                          "dark"
                        )
                      }
                    )}
                  >
                    {hasVariant(globalVariants, "theme", "dark")
                      ? "See Catalog"
                      : "See Full Catalog"}
                  </div>
                }
                onClick={async event => {
                  const $steps = {};

                  $steps["goToHttpsLearnJusthackingComCatalog"] = true
                    ? (() => {
                        const actionArgs = {
                          destination: "https://learn.justhacking.com/catalog"
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
                    $steps["goToHttpsLearnJusthackingComCatalog"] != null &&
                    typeof $steps["goToHttpsLearnJusthackingComCatalog"] ===
                      "object" &&
                    typeof $steps["goToHttpsLearnJusthackingComCatalog"]
                      .then === "function"
                  ) {
                    $steps["goToHttpsLearnJusthackingComCatalog"] =
                      await $steps["goToHttpsLearnJusthackingComCatalog"];
                  }
                }}
                size={
                  hasVariant(globalVariants, "theme", "dark")
                    ? "small"
                    : undefined
                }
              />

              <BaseComponentsButton
                className={classNames(
                  "__wab_instance",
                  sty.baseComponentsButton__xfdC,
                  {
                    [sty.baseComponentsButtonglobal_theme_dark__xfdCE6UCs]:
                      hasVariant(globalVariants, "theme", "dark")
                  }
                )}
                color={"primary"}
                kind={["fill"]}
                label={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___3OZ2,
                      {
                        [sty.textglobal_theme_dark___3OZ2E6UCs]: hasVariant(
                          globalVariants,
                          "theme",
                          "dark"
                        )
                      }
                    )}
                  >
                    {"Login"}
                  </div>
                }
                onClick={async event => {
                  const $steps = {};

                  $steps[
                    "goToHttpsAppCoursestackComAuthRHttps3A2F2FlearnJusthackingCom2Fcatalog"
                  ] = true
                    ? (() => {
                        const actionArgs = {
                          destination:
                            "https://app.coursestack.com/auth?r=https%3A%2F%2Flearn.justhacking.com%2Fcatalog"
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
                    $steps[
                      "goToHttpsAppCoursestackComAuthRHttps3A2F2FlearnJusthackingCom2Fcatalog"
                    ] != null &&
                    typeof $steps[
                      "goToHttpsAppCoursestackComAuthRHttps3A2F2FlearnJusthackingCom2Fcatalog"
                    ] === "object" &&
                    typeof $steps[
                      "goToHttpsAppCoursestackComAuthRHttps3A2F2FlearnJusthackingCom2Fcatalog"
                    ].then === "function"
                  ) {
                    $steps[
                      "goToHttpsAppCoursestackComAuthRHttps3A2F2FlearnJusthackingCom2Fcatalog"
                    ] = await $steps[
                      "goToHttpsAppCoursestackComAuthRHttps3A2F2FlearnJusthackingCom2Fcatalog"
                    ];
                  }
                }}
                size={
                  hasVariant(globalVariants, "theme", "dark")
                    ? "small"
                    : undefined
                }
              />
            </Stack__>
          </Stack__>
        </Stack__>
      }
      openButton={
        <FaBarsSvgIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />
      }
      responsiveBreakpoint={768}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "svg",
    "pathwaysNavItem",
    "pathwayStack",
    "hal",
    "ctf",
    "uc",
    "courses",
    "resourcesNavItem",
    "resourceStack",
    "faq",
    "blog",
    "events",
    "aboutUsNavItem",
    "aboutUsStack",
    "leadership",
    "authors",
    "baseComponentsSocialIcons"
  ],
  svg: ["svg"],
  pathwaysNavItem: [
    "pathwaysNavItem",
    "pathwayStack",
    "hal",
    "ctf",
    "uc",
    "courses"
  ],
  pathwayStack: ["pathwayStack", "hal", "ctf", "uc", "courses"],
  hal: ["hal"],
  ctf: ["ctf"],
  uc: ["uc"],
  courses: ["courses"],
  resourcesNavItem: [
    "resourcesNavItem",
    "resourceStack",
    "faq",
    "blog",
    "events"
  ],
  resourceStack: ["resourceStack", "faq", "blog", "events"],
  faq: ["faq"],
  blog: ["blog"],
  events: ["events"],
  aboutUsNavItem: ["aboutUsNavItem", "aboutUsStack", "leadership", "authors"],
  aboutUsStack: ["aboutUsStack", "leadership", "authors"],
  leadership: ["leadership"],
  authors: ["authors"],
  baseComponentsSocialIcons: ["baseComponentsSocialIcons"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof NavigationBar;
  svg: "svg";
  pathwaysNavItem: typeof BaseComponentsPopover;
  pathwayStack: "div";
  hal: "a";
  ctf: "a";
  uc: "a";
  courses: "a";
  resourcesNavItem: typeof BaseComponentsPopover;
  resourceStack: "div";
  faq: "a";
  blog: "a";
  events: "a";
  aboutUsNavItem: typeof BaseComponentsPopover;
  aboutUsStack: "div";
  leadership: "a";
  authors: "a";
  baseComponentsSocialIcons: typeof BaseComponentsSocialIcons;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLayoutNavigationBar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLayoutNavigationBar__VariantsArgs;
    args?: PlasmicLayoutNavigationBar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLayoutNavigationBar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLayoutNavigationBar__ArgsType,
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
          internalArgPropNames: PlasmicLayoutNavigationBar__ArgProps,
          internalVariantPropNames: PlasmicLayoutNavigationBar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLayoutNavigationBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLayoutNavigationBar";
  } else {
    func.displayName = `PlasmicLayoutNavigationBar.${nodeName}`;
  }
  return func;
}

export const PlasmicLayoutNavigationBar = Object.assign(
  // Top-level PlasmicLayoutNavigationBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    pathwaysNavItem: makeNodeComponent("pathwaysNavItem"),
    pathwayStack: makeNodeComponent("pathwayStack"),
    hal: makeNodeComponent("hal"),
    ctf: makeNodeComponent("ctf"),
    uc: makeNodeComponent("uc"),
    courses: makeNodeComponent("courses"),
    resourcesNavItem: makeNodeComponent("resourcesNavItem"),
    resourceStack: makeNodeComponent("resourceStack"),
    faq: makeNodeComponent("faq"),
    blog: makeNodeComponent("blog"),
    events: makeNodeComponent("events"),
    aboutUsNavItem: makeNodeComponent("aboutUsNavItem"),
    aboutUsStack: makeNodeComponent("aboutUsStack"),
    leadership: makeNodeComponent("leadership"),
    authors: makeNodeComponent("authors"),
    baseComponentsSocialIcons: makeNodeComponent("baseComponentsSocialIcons"),

    // Metadata about props expected for PlasmicLayoutNavigationBar
    internalVariantProps: PlasmicLayoutNavigationBar__VariantProps,
    internalArgProps: PlasmicLayoutNavigationBar__ArgProps
  }
);

export default PlasmicLayoutNavigationBar;
/* prettier-ignore-end */
