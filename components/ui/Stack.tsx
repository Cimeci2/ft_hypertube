import {CSSProperties, DetailedHTMLProps, HTMLAttributes} from "react";
import {Property} from "csstype";

export type SpacingValue = number | [number, number] | [number, number, number, number];
export type Direction = "vertical" | "horizontal";
export type Alignment = "start" | "center" | "end";
export type BackgroundColorName =
    | "white"
    | "black"
    | "green"
    | "yellow"
    | "blue"
    | "red"
    | "purple"
    | "orange"
    | "cyan"
    | "light-yellow"
    | "pink"
    | "taupe"
    | "background"
    | "primary"
    | "gradientBackgroundTop"
    | "gradientBackgroundBottom"
    | "light"
    | "lightSecondary"
    | "lightTertiary"
    | "dark"
    | "darkSecondary"
    | "darkTertiary"

export type BackgroundColor =
    | BackgroundColorName
    | (string & {})

const BackgroundColorLinkedVariables: Record<BackgroundColorName, string> = {
    white: "var(--color-white)",
    black: "var(--color-black)",
    green: "var(--color-green)",
    yellow: "var(--color-yellow)",
    blue: "var(--color-blue)",
    red: "var(--color-red)",
    purple: "var(--color-purple)",
    orange: "var(--color-orange)",
    cyan: "var(--color-cyan)",
    "light-yellow": "var(--color-light-yellow)",
    pink: "var(--color-pink)",
    taupe: "var(--color-taupe)",

    background: "var(--surface-background)",
    primary: "var(--surface-primary)",
    gradientBackgroundTop: "var(--surface-gradient-background-top)",
    gradientBackgroundBottom: "var(--surface-gradient-background-bottom)",

    light: "var(--surface-light)",
    lightSecondary: "var(--surface-light-secondary)",
    lightTertiary: "var(--surface-light-tertiary)",

    dark: "var(--surface-dark)",
    darkSecondary: "var(--surface-dark-secondary)",
    darkTertiary: "var(--surface-dark-tertiary)",
}

const AlignementLinkedVariables: Record<Alignment, string> = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
}

export interface StackProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    direction?: Direction
    gap?: number
    padding?: SpacingValue
    margin?: SpacingValue
    height?: Property.Height
    width?: Property.Width
    vAlign?: Alignment;
    hAlign?: Alignment;
    flex?: number | boolean;
    backgroundColor?: BackgroundColor;
}

function SpacingValueToCSS(spacing: SpacingValue): string {
    if (Array.isArray(spacing)) {
        return `${spacing[0]}px ${spacing[1]}px${spacing.length > 2 ? ` ${spacing[2]}px ${spacing[3]}px` : ''}`;
    } else {
        return `${spacing}px`;
    }
}

export default function Stack(
    {
        direction = "vertical",
        gap,
        padding,
        margin,
        width,
        height,
        hAlign,
        vAlign,
        flex,
        backgroundColor,
        ...props
    }: StackProps
) {
    let computedStyle: CSSProperties = {
        display: "flex",
        width,
        height,
        flex: typeof flex === "number" ? flex : flex ? 1 : undefined,
        ...props.style
    }

    if (direction === "horizontal") computedStyle.flexDirection = "row";
    if (gap) computedStyle.gap = `${gap}px`;
    if (backgroundColor) computedStyle.backgroundColor = BackgroundColorLinkedVariables[backgroundColor as BackgroundColorName] ?? backgroundColor;
    if (hAlign) computedStyle.justifyContent = AlignementLinkedVariables[hAlign];
    if (vAlign) computedStyle.alignItems = AlignementLinkedVariables[vAlign];

    if (padding) computedStyle.padding = SpacingValueToCSS(padding);
    if (margin) computedStyle.margin = SpacingValueToCSS(margin);

    return (
        <div
            {...props}
            style={computedStyle}
        >
        </div>
    )
}