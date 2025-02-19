import type {DividerVariantProps} from "@nextui-org/theme";

import {SeparatorProps as AriaSeparatorProps, useSeparator} from "@react-aria/separator";
import {HTMLNextUIProps, PropGetter} from "@nextui-org/system";
import {divider} from "@nextui-org/theme";
import {useDOMRef} from "@nextui-org/react-utils";
import {Ref, useCallback, useMemo} from "react";
import {mergeProps} from "@react-aria/utils";

interface Props extends HTMLNextUIProps<"hr"> {
  /**
   * Ref to the DOM node.
   */
  ref?: Ref<HTMLElement> | undefined;
}

export type UseDividerProps = Props & DividerVariantProps & Omit<AriaSeparatorProps, "elementType">;

export function useDivider(props: UseDividerProps) {
  const {ref, as, className, orientation, ...otherProps} = props;

  let Component = as || "hr";

  const domRef = useDOMRef(ref);

  if (Component === "hr" && orientation === "vertical") {
    Component = "div";
  }

  const {separatorProps} = useSeparator({
    elementType: typeof Component === "string" ? Component : "hr",
    orientation,
  });

  const styles = useMemo(
    () =>
      divider({
        orientation,
        className,
      }),
    [orientation, className],
  );

  const getDividerProps: PropGetter = useCallback(
    (props = {}) => ({
      ref: domRef,
      className: styles,
      role: "separator",
      "data-orientation": orientation,
      ...mergeProps(separatorProps, otherProps, props),
    }),
    [domRef, styles, orientation, separatorProps, otherProps],
  );

  return {Component, getDividerProps};
}

export type UseDividerReturn = ReturnType<typeof useDivider>;
