// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ka2iZDuLZRczy7yQTcifgT
// Component: jMf3rhHQ85nD

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

import BaseComponentsSocialIcons from "../../BaseComponentsSocialIcons"; // plasmic-import: YjFssikwogCu/component
import BaseComponentsSwitch from "../../BaseComponentsSwitch"; // plasmic-import: lQe7fu5mku07/component

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
import sty from "./PlasmicLayoutFooter.module.css"; // plasmic-import: jMf3rhHQ85nD/css

createPlasmicElementProxy;

export type PlasmicLayoutFooter__VariantMembers = {};
export type PlasmicLayoutFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicLayoutFooter__VariantsArgs;
export const PlasmicLayoutFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicLayoutFooter__ArgsType = {};
type ArgPropType = keyof PlasmicLayoutFooter__ArgsType;
export const PlasmicLayoutFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicLayoutFooter__OverridesType = {
  footContainer?: Flex__<"div">;
  columns?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  text?: Flex__<"div">;
  themeSwitch?: Flex__<typeof BaseComponentsSwitch>;
  hal?: Flex__<"a"> & Partial<LinkProps>;
  ctf?: Flex__<"a"> & Partial<LinkProps>;
  uc?: Flex__<"a"> & Partial<LinkProps>;
  courses?: Flex__<"a"> & Partial<LinkProps>;
  blog?: Flex__<"a"> & Partial<LinkProps>;
  faq?: Flex__<"a"> & Partial<LinkProps>;
  leadership?: Flex__<"a"> & Partial<LinkProps>;
  authors?: Flex__<"a"> & Partial<LinkProps>;
};

export interface DefaultLayoutFooterProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLayoutFooter__RenderFunc(props: {
  variants: PlasmicLayoutFooter__VariantsArgs;
  args: PlasmicLayoutFooter__ArgsType;
  overrides: PlasmicLayoutFooter__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "themeSwitch.isSelected",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    theme: useTheme(),
    screen: useScreenVariantssqmLxjkgQr(),
    screen: useScreenVariantsohEUf6Jd0EV8()
  });

  return (
    <div
      data-plasmic-name={"footContainer"}
      data-plasmic-override={overrides.footContainer}
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
        sty.footContainer,
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
          [sty.footContainerglobal_theme_dark]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          )
        }
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        hasGap={true}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div className={classNames(projectcss.all, sty.column__fo7Bt)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__awRzJ, {
              [sty.freeBoxglobal_theme_dark__awRzJe6UCs]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            })}
          >
            <PlasmicImg__
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img, {
                [sty.imgglobal_theme_dark]: hasVariant(
                  globalVariants,
                  "theme",
                  "dark"
                )
              })}
              displayHeight={
                hasVariant(globalVariants, "theme", "dark") ? "120px" : "3.5rem"
              }
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={
                hasVariant(globalVariants, "theme", "dark") ? "120px" : "3.5rem"
              }
              src={{
                src: "/plasmic/just_hacking_site/images/jhtLogoPng.png",
                fullWidth: 300,
                fullHeight: 300,
                aspectRatio: undefined
              }}
            />

            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__zvUiO)}
            >
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text,
                  {
                    [sty.textglobal_theme_dark]: hasVariant(
                      globalVariants,
                      "theme",
                      "dark"
                    )
                  }
                )}
              >
                {"Connect with us"}
              </div>
              <BaseComponentsSocialIcons
                className={classNames(
                  "__wab_instance",
                  sty.baseComponentsSocialIcons__wvfbq
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
                className={classNames(projectcss.all, sty.freeBox__p8R5X, {
                  [sty.freeBoxglobal_theme_dark__p8R5Xe6UCs]: hasVariant(
                    globalVariants,
                    "theme",
                    "dark"
                  )
                })}
              >
                <BaseComponentsSocialIcons
                  className={classNames(
                    "__wab_instance",
                    sty.baseComponentsSocialIcons__ozyfG,
                    {
                      [sty.baseComponentsSocialIconsglobal_theme_dark__ozyfGe6UCs]:
                        hasVariant(globalVariants, "theme", "dark")
                    }
                  )}
                />
              </Stack__>
            </Stack__>
            <BaseComponentsSwitch
              data-plasmic-name={"themeSwitch"}
              data-plasmic-override={overrides.themeSwitch}
              className={classNames("__wab_instance", sty.themeSwitch)}
              isSelected={generateStateValueProp($state, [
                "themeSwitch",
                "isSelected"
              ])}
              label={"Theme"}
              onChange={async (...eventArgs: any) => {
                generateStateOnChangeProp($state, [
                  "themeSwitch",
                  "isSelected"
                ]).apply(null, eventArgs);

                if (
                  eventArgs.length > 1 &&
                  eventArgs[1] &&
                  eventArgs[1]._plasmic_state_init_
                ) {
                  return;
                }
              }}
            />
          </Stack__>
        </div>
        <div className={classNames(projectcss.all, sty.column___1Hwaz)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__yqtTq)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__m52Sb, {
                [sty.freeBoxglobal_theme_dark__m52Sbe6UCs]: hasVariant(
                  globalVariants,
                  "theme",
                  "dark"
                )
              })}
            >
              <h6
                className={classNames(
                  projectcss.all,
                  projectcss.h6,
                  projectcss.__wab_text,
                  sty.h6__mtqEq
                )}
              >
                {"Paths"}
              </h6>
              <PlasmicLink__
                data-plasmic-name={"hal"}
                data-plasmic-override={overrides.hal}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.hal,
                  {
                    [sty.halglobal_theme_dark]: hasVariant(
                      globalVariants,
                      "theme",
                      "dark"
                    )
                  }
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
                  sty.ctf,
                  {
                    [sty.ctfglobal_theme_dark]: hasVariant(
                      globalVariants,
                      "theme",
                      "dark"
                    )
                  }
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
                  sty.uc,
                  {
                    [sty.ucglobal_theme_dark]: hasVariant(
                      globalVariants,
                      "theme",
                      "dark"
                    )
                  }
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
                  sty.courses,
                  {
                    [sty.coursesglobal_theme_dark]: hasVariant(
                      globalVariants,
                      "theme",
                      "dark"
                    )
                  }
                )}
                component={Link}
                href={`/pathway/${"course"}`}
                platform={"nextjs"}
              >
                {"Courses"}
              </PlasmicLink__>
            </Stack__>
          </Stack__>
        </div>
        <div className={classNames(projectcss.all, sty.column__bkka3)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___33HmU)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___6HLf3)}
            >
              <h6
                className={classNames(
                  projectcss.all,
                  projectcss.h6,
                  projectcss.__wab_text,
                  sty.h6__oMVN
                )}
              >
                {"resources"}
              </h6>
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
            </Stack__>
          </Stack__>
        </div>
        <div className={classNames(projectcss.all, sty.column__yoIdh)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__cdp8)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__mDxZk)}
            >
              <h6
                className={classNames(
                  projectcss.all,
                  projectcss.h6,
                  projectcss.__wab_text,
                  sty.h6__mZlRi
                )}
              >
                {"about"}
              </h6>
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
                {"Leadership"}
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
          </Stack__>
        </div>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  footContainer: [
    "footContainer",
    "columns",
    "img",
    "text",
    "themeSwitch",
    "hal",
    "ctf",
    "uc",
    "courses",
    "blog",
    "faq",
    "leadership",
    "authors"
  ],
  columns: [
    "columns",
    "img",
    "text",
    "themeSwitch",
    "hal",
    "ctf",
    "uc",
    "courses",
    "blog",
    "faq",
    "leadership",
    "authors"
  ],
  img: ["img"],
  text: ["text"],
  themeSwitch: ["themeSwitch"],
  hal: ["hal"],
  ctf: ["ctf"],
  uc: ["uc"],
  courses: ["courses"],
  blog: ["blog"],
  faq: ["faq"],
  leadership: ["leadership"],
  authors: ["authors"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  footContainer: "div";
  columns: "div";
  img: typeof PlasmicImg__;
  text: "div";
  themeSwitch: typeof BaseComponentsSwitch;
  hal: "a";
  ctf: "a";
  uc: "a";
  courses: "a";
  blog: "a";
  faq: "a";
  leadership: "a";
  authors: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLayoutFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLayoutFooter__VariantsArgs;
    args?: PlasmicLayoutFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLayoutFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLayoutFooter__ArgsType,
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
          internalArgPropNames: PlasmicLayoutFooter__ArgProps,
          internalVariantPropNames: PlasmicLayoutFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLayoutFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "footContainer") {
    func.displayName = "PlasmicLayoutFooter";
  } else {
    func.displayName = `PlasmicLayoutFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicLayoutFooter = Object.assign(
  // Top-level PlasmicLayoutFooter renders the root element
  makeNodeComponent("footContainer"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),
    text: makeNodeComponent("text"),
    themeSwitch: makeNodeComponent("themeSwitch"),
    hal: makeNodeComponent("hal"),
    ctf: makeNodeComponent("ctf"),
    uc: makeNodeComponent("uc"),
    courses: makeNodeComponent("courses"),
    blog: makeNodeComponent("blog"),
    faq: makeNodeComponent("faq"),
    leadership: makeNodeComponent("leadership"),
    authors: makeNodeComponent("authors"),

    // Metadata about props expected for PlasmicLayoutFooter
    internalVariantProps: PlasmicLayoutFooter__VariantProps,
    internalArgProps: PlasmicLayoutFooter__ArgProps
  }
);

export default PlasmicLayoutFooter;
/* prettier-ignore-end */
