import {CSSProperties, DetailedHTMLProps, HTMLAttributes} from "react";
import {Property} from "csstype";
import {
    Direction,
    Alignment,
    SpacingValue,
    DirectionToCSS,
    FlexValue,
    FlexValueToCSS,
    AlignmentToCSS, SpacingValueToCSS, ColorToCSS, Color
} from "@/components/ui/utils";


export interface StackProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    direction?: Direction
    gap?: number | "auto"
    padding?: SpacingValue
    margin?: SpacingValue
    height?: Property.Height<string | number>
    width?: Property.Width<string | number>
    maxWidth?: 1200 | Property.Width<string | number>
    vAlign?: Alignment;
    hAlign?: Alignment;
    flex?: FlexValue;
    background?: Color;
    border?: "light" | "dark",
    radius?: number;
}

export default function Stack(
    {
        direction = "vertical",
        gap = 10,
        padding,
        margin,
        width,
        height,
        hAlign,
        vAlign,
        flex,
        background,
        radius,
        border,
        maxWidth,
        ...props
    }: StackProps
) {
    const computedStyle: CSSProperties = {
        display: "flex",
        ...DirectionToCSS(direction),
        flexWrap: "wrap",
        width,
        height,
        maxWidth,
        borderRadius: radius ? `${radius}px` : undefined,
        ...FlexValueToCSS(flex),
        border: border ? `1px solid ${ColorToCSS(border === "light" ? "borderLight" : "borderDark")}` : undefined,
        ...props.style
    }

    if (background) computedStyle.background = ColorToCSS(background);
    if (hAlign) computedStyle.justifyContent = AlignmentToCSS(hAlign);
    if (vAlign) computedStyle.alignItems = AlignmentToCSS(vAlign);
    if (gap) {
        if (gap === "auto") {
            computedStyle[direction === "horizontal" ? "justifyContent" : "alignItems"] = "space-between";
        } else {
            computedStyle.gap = `${gap}px`;
        }
    }

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