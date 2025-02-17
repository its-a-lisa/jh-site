// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ka2iZDuLZRczy7yQTcifgT
// Component: RPiuKtGOqoBK

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

import { BaseLabel } from "@plasmicpkgs/react-aria/skinny/registerLabel";

import {
  ThemeValue,
  useTheme
} from "../17_sds_foundation_global/PlasmicGlobalVariant__Theme"; // plasmic-import: yBTVTgAz2Co9/globalVariant
import { useScreenVariants as useScreenVariantsohEUf6Jd0EV8 } from "../17_sds_foundation_global/PlasmicGlobalVariant__Screen"; // plasmic-import: OhEUf6Jd0eV8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_17_sds_foundation_global_css from "../17_sds_foundation_global/plasmic.module.css"; // plasmic-import: 3BHMWCYAenCmWb8ThbnzeF/projectcss
import plasmic_17_sds_foundation_system_css from "../17_sds_foundation_system/plasmic.module.css"; // plasmic-import: dNqcW7FYVqnkjtbdVGjyS8/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ka2iZDuLZRczy7yQTcifgT/projectcss
import sty from "./PlasmicBaseComponentsLabel.module.css"; // plasmic-import: RPiuKtGOqoBK/css

createPlasmicElementProxy;

export type PlasmicBaseComponentsLabel__VariantMembers = {
  size: "sm" | "lg";
  requirementIndicator: "optional" | "required";
};
export type PlasmicBaseComponentsLabel__VariantsArgs = {
  size?: SingleChoiceArg<"sm" | "lg">;
  requirementIndicator?: SingleChoiceArg<"optional" | "required">;
};
type VariantPropType = keyof PlasmicBaseComponentsLabel__VariantsArgs;
export const PlasmicBaseComponentsLabel__VariantProps =
  new Array<VariantPropType>("size", "requirementIndicator");

export type PlasmicBaseComponentsLabel__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicBaseComponentsLabel__ArgsType;
export const PlasmicBaseComponentsLabel__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicBaseComponentsLabel__OverridesType = {
  root?: Flex__<typeof BaseLabel>;
  freeBox?: Flex__<"div">;
  text?: Flex__<"div">;
};

export interface DefaultBaseComponentsLabelProps {
  children?: React.ReactNode;
  size?: SingleChoiceArg<"sm" | "lg">;
  requirementIndicator?: SingleChoiceArg<"optional" | "required">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBaseComponentsLabel__RenderFunc(props: {
  variants: PlasmicBaseComponentsLabel__VariantsArgs;
  args: PlasmicBaseComponentsLabel__ArgsType;
  overrides: PlasmicBaseComponentsLabel__OverridesType;
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
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size
      },
      {
        path: "requirementIndicator",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.requirementIndicator
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
    <BaseLabel
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
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
          [sty.rootrequirementIndicator_optional]: hasVariant(
            $state,
            "requirementIndicator",
            "optional"
          ),
          [sty.rootrequirementIndicator_required]: hasVariant(
            $state,
            "requirementIndicator",
            "required"
          ),
          [sty.rootsize_lg]: hasVariant($state, "size", "lg"),
          [sty.rootsize_sm]: hasVariant($state, "size", "sm")
        }
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxrequirementIndicator_optional]: hasVariant(
            $state,
            "requirementIndicator",
            "optional"
          ),
          [sty.freeBoxrequirementIndicator_required]: hasVariant(
            $state,
            "requirementIndicator",
            "required"
          ),
          [sty.freeBoxsize_lg]: hasVariant($state, "size", "lg"),
          [sty.freeBoxsize_sm]: hasVariant($state, "size", "sm")
        })}
      >
        {renderPlasmicSlot({
          defaultContents: "Label",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrenrequirementIndicator_optional]: hasVariant(
              $state,
              "requirementIndicator",
              "optional"
            ),
            [sty.slotTargetChildrenrequirementIndicator_required]: hasVariant(
              $state,
              "requirementIndicator",
              "required"
            ),
            [sty.slotTargetChildrensize_lg]: hasVariant($state, "size", "lg"),
            [sty.slotTargetChildrensize_sm]: hasVariant($state, "size", "sm")
          })
        })}
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text,
            {
              [sty.textrequirementIndicator_optional]: hasVariant(
                $state,
                "requirementIndicator",
                "optional"
              ),
              [sty.textrequirementIndicator_required]: hasVariant(
                $state,
                "requirementIndicator",
                "required"
              )
            }
          )}
        >
          {hasVariant($state, "requirementIndicator", "required")
            ? "*"
            : "(optional)"}
        </div>
      </Stack__>
    </BaseLabel>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "text"],
  freeBox: ["freeBox", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof BaseLabel;
  freeBox: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBaseComponentsLabel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBaseComponentsLabel__VariantsArgs;
    args?: PlasmicBaseComponentsLabel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBaseComponentsLabel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBaseComponentsLabel__ArgsType,
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
          internalArgPropNames: PlasmicBaseComponentsLabel__ArgProps,
          internalVariantPropNames: PlasmicBaseComponentsLabel__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBaseComponentsLabel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBaseComponentsLabel";
  } else {
    func.displayName = `PlasmicBaseComponentsLabel.${nodeName}`;
  }
  return func;
}

export const PlasmicBaseComponentsLabel = Object.assign(
  // Top-level PlasmicBaseComponentsLabel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicBaseComponentsLabel
    internalVariantProps: PlasmicBaseComponentsLabel__VariantProps,
    internalArgProps: PlasmicBaseComponentsLabel__ArgProps
  }
);

export default PlasmicBaseComponentsLabel;
/* prettier-ignore-end */
