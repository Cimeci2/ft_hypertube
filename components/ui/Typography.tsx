import {ComponentPropsWithRef, CSSProperties} from "react";
import {Color, ColorToCSS} from "@/components/ui/utils";

export type TypographyVariant =
    | "title"
    | "body"

export interface TypographyProps extends ComponentPropsWithRef<"p"> {
    variant?: TypographyVariant;
    bold?: number | boolean;
    fontSize?: number;
    color?: Color;
    children: string;
    uppercase?: boolean;
}

interface TypographyStyleProps extends CSSProperties {
    component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
}

const TypographyVariants: Record<TypographyVariant, TypographyStyleProps> = {
    title: {
        component: "h1",
        fontSize: "2rem",
        fontWeight: 700,
    },
    body: {
        component: "p",
        fontSize: "1rem",
        fontWeight: 400,
    }
}

export function Typography(props: TypographyProps) {
    const computedStyle: TypographyStyleProps = {
        fontFamily: "var(--font-body)",
        margin: 0,
        ...TypographyVariants[props.variant ?? "body"],
        textTransform: props.uppercase ? "uppercase" : undefined,
    }

    if (props.bold) computedStyle.fontWeight = typeof props.bold === "number" ? props.bold : 600
    if (props.fontSize) computedStyle.fontSize = `${props.fontSize}px`
    if (props.color) computedStyle.color = ColorToCSS(props.color);

    const { component: Component, ...style } = computedStyle;
    return <Component style={{...style, ...props.style}}>{props.children}</Component>
}