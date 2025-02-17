// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ka2iZDuLZRczy7yQTcifgT
// Component: sJw_aO84mi_F

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
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms";
import { CmsRowImage } from "@plasmicpkgs/plasmic-cms";
import { CmsRowField } from "@plasmicpkgs/plasmic-cms";

import {
  ThemeValue,
  useTheme
} from "../17_sds_foundation_global/PlasmicGlobalVariant__Theme"; // plasmic-import: yBTVTgAz2Co9/globalVariant
import { useScreenVariants as useScreenVariantsohEUf6Jd0EV8 } from "../17_sds_foundation_global/PlasmicGlobalVariant__Screen"; // plasmic-import: OhEUf6Jd0eV8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_17_sds_foundation_global_css from "../17_sds_foundation_global/plasmic.module.css"; // plasmic-import: 3BHMWCYAenCmWb8ThbnzeF/projectcss
import plasmic_17_sds_foundation_system_css from "../17_sds_foundation_system/plasmic.module.css"; // plasmic-import: dNqcW7FYVqnkjtbdVGjyS8/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ka2iZDuLZRczy7yQTcifgT/projectcss
import sty from "./PlasmicCatalogTrainings.module.css"; // plasmic-import: sJw_aO84mi_F/css

createPlasmicElementProxy;

export type PlasmicCatalogTrainings__VariantMembers = {};
export type PlasmicCatalogTrainings__VariantsArgs = {};
type VariantPropType = keyof PlasmicCatalogTrainings__VariantsArgs;
export const PlasmicCatalogTrainings__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCatalogTrainings__ArgsType = {
  authorName?: string;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicCatalogTrainings__ArgsType;
export const PlasmicCatalogTrainings__ArgProps = new Array<ArgPropType>(
  "authorName",
  "slot"
);

export type PlasmicCatalogTrainings__OverridesType = {
  root?: Flex__<"div">;
  layoutPageLayout?: Flex__<typeof LayoutPageLayout>;
  h1?: Flex__<"h1">;
  cmsDataFetcher?: Flex__<typeof CmsQueryRepeater>;
  cmsEntryImage?: Flex__<typeof CmsRowImage>;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultCatalogTrainingsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCatalogTrainings__RenderFunc(props: {
  variants: PlasmicCatalogTrainings__VariantsArgs;
  args: PlasmicCatalogTrainings__ArgsType;
  overrides: PlasmicCatalogTrainings__OverridesType;
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
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
              [plasmic_17_sds_foundation_global_css.global_theme_dark]:
                hasVariant(globalVariants, "theme", "dark"),
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
          <LayoutPageLayout
            data-plasmic-name={"layoutPageLayout"}
            data-plasmic-override={overrides.layoutPageLayout}
            className={classNames("__wab_instance", sty.layoutPageLayout)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__fEbD)}
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
                {"Super Stars"}
              </h1>
              <CmsQueryRepeater
                data-plasmic-name={"cmsDataFetcher"}
                data-plasmic-override={overrides.cmsDataFetcher}
                className={classNames("__wab_instance", sty.cmsDataFetcher)}
                desc={false}
                emptyMessage={
                  <DataCtxReader__>
                    {$ctx => (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__wnbal
                        )}
                      >
                        {"No matching published entries found."}
                      </div>
                    )}
                  </DataCtxReader__>
                }
                filterField={"title"}
                forceEmptyState={false}
                forceLoadingState={false}
                limit={0}
                loadingMessage={
                  <DataCtxReader__>
                    {$ctx => (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__dHbzz
                        )}
                      >
                        {"Loading..."}
                      </div>
                    )}
                  </DataCtxReader__>
                }
                noAutoRepeat={false}
                noLayout={false}
                table={"learning"}
                useDraft={false}
              >
                <DataCtxReader__>
                  {$ctx => (
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__x6Wf2)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__jLjbD
                        )}
                      >
                        <CmsRowImage
                          data-plasmic-name={"cmsEntryImage"}
                          data-plasmic-override={overrides.cmsEntryImage}
                          className={classNames(
                            "__wab_instance",
                            sty.cmsEntryImage
                          )}
                          srcProp={"src"}
                        >
                          <PlasmicImg__
                            data-plasmic-name={"img"}
                            data-plasmic-override={overrides.img}
                            alt={""}
                            className={classNames(sty.img)}
                            displayHeight={"115px"}
                            displayMaxHeight={"none"}
                            displayMaxWidth={"100%"}
                            displayMinHeight={"0"}
                            displayMinWidth={"0"}
                            displayWidth={"200px"}
                            loading={"lazy"}
                            src={(() => {
                              try {
                                return $ctx.plasmicCmsLearningItem.data
                                  .thumbnail;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return undefined;
                                }
                                throw e;
                              }
                            })()}
                          />
                        </CmsRowImage>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__yoQgo,
                          {
                            [sty.freeBoxglobal_theme_dark__yoQgoe6UCs]:
                              hasVariant(globalVariants, "theme", "dark")
                          }
                        )}
                        onClick={async event => {
                          const $steps = {};

                          $steps["goToPage"] = true
                            ? (() => {
                                const actionArgs = {
                                  destination: (() => {
                                    try {
                                      return `/learning/${$ctx.plasmicCmsLearningItem.data.slug}`;
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })()
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
                            $steps["goToPage"] != null &&
                            typeof $steps["goToPage"] === "object" &&
                            typeof $steps["goToPage"].then === "function"
                          ) {
                            $steps["goToPage"] = await $steps["goToPage"];
                          }
                        }}
                      >
                        {renderPlasmicSlot({
                          defaultContents: (
                            <CmsRowField
                              className={classNames(
                                "__wab_instance",
                                sty.cmsEntryField__oiWzk
                              )}
                              field={"title"}
                              themeResetClassName={classNames(
                                projectcss.root_reset,
                                projectcss.root_reset_tags,
                                projectcss.plasmic_default_styles,
                                projectcss.plasmic_mixins,
                                projectcss.plasmic_tokens,
                                plasmic_17_sds_foundation_global_css.plasmic_tokens,
                                plasmic_17_sds_foundation_system_css.plasmic_tokens,
                                {
                                  [plasmic_17_sds_foundation_global_css.global_theme_darkGrayscale]:
                                    hasVariant(
                                      globalVariants,
                                      "theme",
                                      "darkGrayscale"
                                    ),
                                  [plasmic_17_sds_foundation_global_css.global_theme_dark]:
                                    hasVariant(globalVariants, "theme", "dark"),
                                  [plasmic_17_sds_foundation_global_css.global_theme_grayscale]:
                                    hasVariant(
                                      globalVariants,
                                      "theme",
                                      "grayscale"
                                    )
                                }
                              )}
                            />
                          ),

                          value: args.slot
                        })}
                      </div>
                    </Stack__>
                  )}
                </DataCtxReader__>
              </CmsQueryRepeater>
            </Stack__>
          </LayoutPageLayout>
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "layoutPageLayout",
    "h1",
    "cmsDataFetcher",
    "cmsEntryImage",
    "img"
  ],
  layoutPageLayout: [
    "layoutPageLayout",
    "h1",
    "cmsDataFetcher",
    "cmsEntryImage",
    "img"
  ],
  h1: ["h1"],
  cmsDataFetcher: ["cmsDataFetcher", "cmsEntryImage", "img"],
  cmsEntryImage: ["cmsEntryImage", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  layoutPageLayout: typeof LayoutPageLayout;
  h1: "h1";
  cmsDataFetcher: typeof CmsQueryRepeater;
  cmsEntryImage: typeof CmsRowImage;
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCatalogTrainings__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCatalogTrainings__VariantsArgs;
    args?: PlasmicCatalogTrainings__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCatalogTrainings__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCatalogTrainings__ArgsType,
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
          internalArgPropNames: PlasmicCatalogTrainings__ArgProps,
          internalVariantPropNames: PlasmicCatalogTrainings__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCatalogTrainings__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCatalogTrainings";
  } else {
    func.displayName = `PlasmicCatalogTrainings.${nodeName}`;
  }
  return func;
}

export const PlasmicCatalogTrainings = Object.assign(
  // Top-level PlasmicCatalogTrainings renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    layoutPageLayout: makeNodeComponent("layoutPageLayout"),
    h1: makeNodeComponent("h1"),
    cmsDataFetcher: makeNodeComponent("cmsDataFetcher"),
    cmsEntryImage: makeNodeComponent("cmsEntryImage"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicCatalogTrainings
    internalVariantProps: PlasmicCatalogTrainings__VariantProps,
    internalArgProps: PlasmicCatalogTrainings__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCatalogTrainings;
/* prettier-ignore-end */
