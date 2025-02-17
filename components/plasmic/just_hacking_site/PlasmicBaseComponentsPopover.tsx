// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ka2iZDuLZRczy7yQTcifgT
// Component: qSiuR1YUrvrO

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

import { BaseDialogTrigger } from "@plasmicpkgs/react-aria/skinny/registerDialogTrigger";
import BaseComponentsPopoverButton from "../../BaseComponentsPopoverButton"; // plasmic-import: LtbI2WZ6Twjk/component
import { BasePopover } from "@plasmicpkgs/react-aria/skinny/registerPopover";
import BaseComponentsOverlayArrow from "../../BaseComponentsOverlayArrow"; // plasmic-import: vduhqYdng0kQ/component

import {
  ThemeValue,
  useTheme
} from "../17_sds_foundation_global/PlasmicGlobalVariant__Theme"; // plasmic-import: yBTVTgAz2Co9/globalVariant
import { useScreenVariants as useScreenVariantsohEUf6Jd0EV8 } from "../17_sds_foundation_global/PlasmicGlobalVariant__Screen"; // plasmic-import: OhEUf6Jd0eV8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_17_sds_foundation_global_css from "../17_sds_foundation_global/plasmic.module.css"; // plasmic-import: 3BHMWCYAenCmWb8ThbnzeF/projectcss
import plasmic_17_sds_foundation_system_css from "../17_sds_foundation_system/plasmic.module.css"; // plasmic-import: dNqcW7FYVqnkjtbdVGjyS8/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ka2iZDuLZRczy7yQTcifgT/projectcss
import sty from "./PlasmicBaseComponentsPopover.module.css"; // plasmic-import: qSiuR1YUrvrO/css

import CircleIcon from "./icons/PlasmicIcon__Circle"; // plasmic-import: _WS5X-3NT1mr/icon
import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: 32aCNZ5iI3FE/icon

createPlasmicElementProxy;

export type PlasmicBaseComponentsPopover__VariantMembers = {};
export type PlasmicBaseComponentsPopover__VariantsArgs = {};
type VariantPropType = keyof PlasmicBaseComponentsPopover__VariantsArgs;
export const PlasmicBaseComponentsPopover__VariantProps =
  new Array<VariantPropType>();

export type PlasmicBaseComponentsPopover__ArgsType = {
  children?: React.ReactNode;
  contentSlot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicBaseComponentsPopover__ArgsType;
export const PlasmicBaseComponentsPopover__ArgProps = new Array<ArgPropType>(
  "children",
  "contentSlot"
);

export type PlasmicBaseComponentsPopover__OverridesType = {
  ariaDialogTrigger?: Flex__<typeof BaseDialogTrigger>;
  baseComponentsPopoverButton?: Flex__<typeof BaseComponentsPopoverButton>;
  ariaPopover?: Flex__<typeof BasePopover>;
  baseComponentsOverlayArrow?: Flex__<typeof BaseComponentsOverlayArrow>;
};

export interface DefaultBaseComponentsPopoverProps {
  children?: React.ReactNode;
  contentSlot?: React.ReactNode;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBaseComponentsPopover__RenderFunc(props: {
  variants: PlasmicBaseComponentsPopover__VariantsArgs;
  args: PlasmicBaseComponentsPopover__ArgsType;
  overrides: PlasmicBaseComponentsPopover__OverridesType;
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
        path: "ariaDialogTrigger.isOpen",
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
    screen: useScreenVariantsohEUf6Jd0EV8()
  });

  return (
    <BaseDialogTrigger
      data-plasmic-name={"ariaDialogTrigger"}
      data-plasmic-override={overrides.ariaDialogTrigger}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      dialog={
        <BasePopover
          data-plasmic-name={"ariaPopover"}
          data-plasmic-override={overrides.ariaPopover}
          className={classNames("__wab_instance", sty.ariaPopover)}
          matchTriggerWidth={true}
          offset={0}
          resetClassName={classNames(
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_17_sds_foundation_global_css.plasmic_tokens,
            plasmic_17_sds_foundation_system_css.plasmic_tokens,
            {
              [plasmic_17_sds_foundation_global_css.global_theme_darkGrayscale]:
                hasVariant(globalVariants, "theme", "darkGrayscale"),
              [plasmic_17_sds_foundation_global_css.global_theme_dark]:
                hasVariant(globalVariants, "theme", "dark"),
              [plasmic_17_sds_foundation_global_css.global_theme_grayscale]:
                hasVariant(globalVariants, "theme", "grayscale")
            }
          )}
        >
          <BaseComponentsOverlayArrow
            data-plasmic-name={"baseComponentsOverlayArrow"}
            data-plasmic-override={overrides.baseComponentsOverlayArrow}
            className={classNames(
              "__wab_instance",
              sty.baseComponentsOverlayArrow
            )}
            type={"clear"}
          />

          {renderPlasmicSlot({
            defaultContents: (
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__wg0Kg)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dEvHn
                  )}
                >
                  {"This is a Popover!"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__nybTk
                  )}
                >
                  {"You can put everything you want here!"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__iItmV
                  )}
                >
                  {
                    "Use it in a `Aria Dialog Trigger` component to trigger it on a button click."
                  }
                </div>
              </Stack__>
            ),
            value: args.contentSlot
          })}
        </BasePopover>
      }
      isOpen={generateStateValueProp($state, ["ariaDialogTrigger", "isOpen"])}
      onOpenChange={async (...eventArgs: any) => {
        generateStateOnChangeProp($state, [
          "ariaDialogTrigger",
          "isOpen"
        ]).apply(null, eventArgs);
      }}
      trigger={
        <BaseComponentsPopoverButton
          data-plasmic-name={"baseComponentsPopoverButton"}
          data-plasmic-override={overrides.baseComponentsPopoverButton}
          className={classNames(
            "__wab_instance",
            sty.baseComponentsPopoverButton
          )}
          label={renderPlasmicSlot({
            defaultContents: "Open Popover",
            value: args.children
          })}
        />
      }
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  ariaDialogTrigger: [
    "ariaDialogTrigger",
    "baseComponentsPopoverButton",
    "ariaPopover",
    "baseComponentsOverlayArrow"
  ],
  baseComponentsPopoverButton: ["baseComponentsPopoverButton"],
  ariaPopover: ["ariaPopover", "baseComponentsOverlayArrow"],
  baseComponentsOverlayArrow: ["baseComponentsOverlayArrow"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  ariaDialogTrigger: typeof BaseDialogTrigger;
  baseComponentsPopoverButton: typeof BaseComponentsPopoverButton;
  ariaPopover: typeof BasePopover;
  baseComponentsOverlayArrow: typeof BaseComponentsOverlayArrow;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBaseComponentsPopover__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBaseComponentsPopover__VariantsArgs;
    args?: PlasmicBaseComponentsPopover__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBaseComponentsPopover__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBaseComponentsPopover__ArgsType,
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
          internalArgPropNames: PlasmicBaseComponentsPopover__ArgProps,
          internalVariantPropNames: PlasmicBaseComponentsPopover__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBaseComponentsPopover__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaDialogTrigger") {
    func.displayName = "PlasmicBaseComponentsPopover";
  } else {
    func.displayName = `PlasmicBaseComponentsPopover.${nodeName}`;
  }
  return func;
}

export const PlasmicBaseComponentsPopover = Object.assign(
  // Top-level PlasmicBaseComponentsPopover renders the root element
  makeNodeComponent("ariaDialogTrigger"),
  {
    // Helper components rendering sub-elements
    baseComponentsPopoverButton: makeNodeComponent(
      "baseComponentsPopoverButton"
    ),
    ariaPopover: makeNodeComponent("ariaPopover"),
    baseComponentsOverlayArrow: makeNodeComponent("baseComponentsOverlayArrow"),

    // Metadata about props expected for PlasmicBaseComponentsPopover
    internalVariantProps: PlasmicBaseComponentsPopover__VariantProps,
    internalArgProps: PlasmicBaseComponentsPopover__ArgProps
  }
);

export default PlasmicBaseComponentsPopover;
/* prettier-ignore-end */
