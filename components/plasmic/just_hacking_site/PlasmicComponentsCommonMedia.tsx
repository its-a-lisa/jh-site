// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ka2iZDuLZRczy7yQTcifgT
// Component: FYZC3ChtrcAT

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

import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms";
import { CmsRowImage } from "@plasmicpkgs/plasmic-cms";

import {
  ThemeValue,
  useTheme
} from "../17_sds_foundation_global/PlasmicGlobalVariant__Theme"; // plasmic-import: yBTVTgAz2Co9/globalVariant
import { useScreenVariants as useScreenVariantsohEUf6Jd0EV8 } from "../17_sds_foundation_global/PlasmicGlobalVariant__Screen"; // plasmic-import: OhEUf6Jd0eV8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_17_sds_foundation_global_css from "../17_sds_foundation_global/plasmic.module.css"; // plasmic-import: 3BHMWCYAenCmWb8ThbnzeF/projectcss
import plasmic_17_sds_foundation_system_css from "../17_sds_foundation_system/plasmic.module.css"; // plasmic-import: dNqcW7FYVqnkjtbdVGjyS8/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ka2iZDuLZRczy7yQTcifgT/projectcss
import sty from "./PlasmicComponentsCommonMedia.module.css"; // plasmic-import: FYZC3ChtrcAT/css

createPlasmicElementProxy;

export type PlasmicComponentsCommonMedia__VariantMembers = {
  usage: "header" | "card" | "feature" | "person";
};
export type PlasmicComponentsCommonMedia__VariantsArgs = {
  usage?: SingleChoiceArg<"header" | "card" | "feature" | "person">;
};
type VariantPropType = keyof PlasmicComponentsCommonMedia__VariantsArgs;
export const PlasmicComponentsCommonMedia__VariantProps =
  new Array<VariantPropType>("usage");

export type PlasmicComponentsCommonMedia__ArgsType = {
  mediaId?: string;
};
type ArgPropType = keyof PlasmicComponentsCommonMedia__ArgsType;
export const PlasmicComponentsCommonMedia__ArgProps = new Array<ArgPropType>(
  "mediaId"
);

export type PlasmicComponentsCommonMedia__OverridesType = {
  root?: Flex__<"div">;
  cmsDataFetcher?: Flex__<typeof CmsQueryRepeater>;
  freeBox?: Flex__<"div">;
  cmsEntryImage?: Flex__<typeof CmsRowImage>;
};

export interface DefaultComponentsCommonMediaProps {
  mediaId?: string;
  usage?: SingleChoiceArg<"header" | "card" | "feature" | "person">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicComponentsCommonMedia__RenderFunc(props: {
  variants: PlasmicComponentsCommonMedia__VariantsArgs;
  args: PlasmicComponentsCommonMedia__ArgsType;
  overrides: PlasmicComponentsCommonMedia__OverridesType;
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
        path: "usage",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.usage
      },
      {
        path: "variable",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $props.image.src;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()
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
          [sty.rootusage_card]: hasVariant($state, "usage", "card"),
          [sty.rootusage_header]: hasVariant($state, "usage", "header"),
          [sty.rootusage_person]: hasVariant($state, "usage", "person")
        }
      )}
    >
      <PlasmicImg__
        alt={""}
        className={classNames(sty.img___5HkPz, {
          [sty.imgusage_card___5HkPz4ZTnE]: hasVariant($state, "usage", "card"),
          [sty.imgusage_header___5HkPzsGmh4]: hasVariant(
            $state,
            "usage",
            "header"
          )
        })}
        displayHeight={hasVariant($state, "usage", "card") ? "150px" : "100%"}
        displayMaxHeight={"none"}
        displayMaxWidth={"none"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={hasVariant($state, "usage", "card") ? "200px" : "100%"}
        src={(() => {
          try {
            return $state.variable;
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

      <CmsQueryRepeater
        data-plasmic-name={"cmsDataFetcher"}
        data-plasmic-override={overrides.cmsDataFetcher}
        className={classNames("__wab_instance", sty.cmsDataFetcher, {
          [sty.cmsDataFetcherusage_card]: hasVariant($state, "usage", "card"),
          [sty.cmsDataFetcherusage_header]: hasVariant(
            $state,
            "usage",
            "header"
          ),
          [sty.cmsDataFetcherusage_person]: hasVariant(
            $state,
            "usage",
            "person"
          )
        })}
        desc={false}
        emptyMessage={
          <DataCtxReader__>
            {$ctx => (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rMMpP
                )}
              >
                {"No matching published entries found."}
              </div>
            )}
          </DataCtxReader__>
        }
        filterField={"_id"}
        filterValue={args.mediaId}
        forceEmptyState={false}
        forceLoadingState={false}
        limit={1}
        loadingMessage={
          <DataCtxReader__>
            {$ctx => (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mIOcE
                )}
              >
                {"Loading..."}
              </div>
            )}
          </DataCtxReader__>
        }
        noAutoRepeat={false}
        noLayout={false}
        table={"media"}
        useDraft={false}
      >
        <DataCtxReader__>
          {$ctx => (
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox, {
                [sty.freeBoxusage_card]: hasVariant($state, "usage", "card"),
                [sty.freeBoxusage_header]: hasVariant(
                  $state,
                  "usage",
                  "header"
                ),
                [sty.freeBoxusage_person]: hasVariant($state, "usage", "person")
              })}
            >
              <CmsRowImage
                data-plasmic-name={"cmsEntryImage"}
                data-plasmic-override={overrides.cmsEntryImage}
                className={classNames("__wab_instance", sty.cmsEntryImage, {
                  [sty.cmsEntryImageusage_header]: hasVariant(
                    $state,
                    "usage",
                    "header"
                  )
                })}
                srcProp={"src"}
                table={"media"}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__wk5JU, {
                    [sty.imgusage_card__wk5JU4ZTnE]: hasVariant(
                      $state,
                      "usage",
                      "card"
                    ),
                    [sty.imgusage_header__wk5JUsGmh4]: hasVariant(
                      $state,
                      "usage",
                      "header"
                    )
                  })}
                  displayHeight={
                    hasVariant($state, "usage", "card") ? "150px" : "100%"
                  }
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={
                    hasVariant($state, "usage", "card") ? "200px" : "100%"
                  }
                  src={
                    "https://studio.plasmic.app/static/img/placeholder-full.png"
                  }
                />
              </CmsRowImage>
            </div>
          )}
        </DataCtxReader__>
      </CmsQueryRepeater>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "cmsDataFetcher", "freeBox", "cmsEntryImage"],
  cmsDataFetcher: ["cmsDataFetcher", "freeBox", "cmsEntryImage"],
  freeBox: ["freeBox", "cmsEntryImage"],
  cmsEntryImage: ["cmsEntryImage"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  cmsDataFetcher: typeof CmsQueryRepeater;
  freeBox: "div";
  cmsEntryImage: typeof CmsRowImage;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicComponentsCommonMedia__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicComponentsCommonMedia__VariantsArgs;
    args?: PlasmicComponentsCommonMedia__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicComponentsCommonMedia__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicComponentsCommonMedia__ArgsType,
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
          internalArgPropNames: PlasmicComponentsCommonMedia__ArgProps,
          internalVariantPropNames: PlasmicComponentsCommonMedia__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicComponentsCommonMedia__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicComponentsCommonMedia";
  } else {
    func.displayName = `PlasmicComponentsCommonMedia.${nodeName}`;
  }
  return func;
}

export const PlasmicComponentsCommonMedia = Object.assign(
  // Top-level PlasmicComponentsCommonMedia renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    cmsDataFetcher: makeNodeComponent("cmsDataFetcher"),
    freeBox: makeNodeComponent("freeBox"),
    cmsEntryImage: makeNodeComponent("cmsEntryImage"),

    // Metadata about props expected for PlasmicComponentsCommonMedia
    internalVariantProps: PlasmicComponentsCommonMedia__VariantProps,
    internalArgProps: PlasmicComponentsCommonMedia__ArgProps
  }
);

export default PlasmicComponentsCommonMedia;
/* prettier-ignore-end */
