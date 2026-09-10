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
    gap?: number
    padding?: SpacingValue
    margin?: SpacingValue
    height?: Property.Height
    width?: Property.Width
    vAlign?: Alignment;
    hAlign?: Alignment;
    flex?: FlexValue;
    backgroundColor?: Color;
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
        backgroundColor,
        radius,
        border,
        ...props
    }: StackProps
) {
    const computedStyle: CSSProperties = {
        display: "flex",
        ...DirectionToCSS(direction),
        flexWrap: "wrap",
        width,
        height,
        borderRadius: radius ? `${radius}px` : undefined,
        ...FlexValueToCSS(flex),
        border: border ? `1px solid ${ColorToCSS(border === "light" ? "borderLight" : "borderDark")}` : undefined,
        ...props.style
    }

    if (gap) computedStyle.gap = `${gap}px`;
    if (backgroundColor) computedStyle.backgroundColor = ColorToCSS(backgroundColor);
    if (hAlign) computedStyle.justifyContent = AlignmentToCSS(hAlign);
    if (vAlign) computedStyle.alignItems = AlignmentToCSS(vAlign);

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