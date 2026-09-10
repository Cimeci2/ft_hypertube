"use client";
import {
    Alignment,
    ColorToCSS,
    Color,
    extractCSSPropertiesWithState,
    CSSPropertiesWithState
} from "@/components/ui/utils";
import {Typography} from "@/components/ui/Typography";
import {motion} from "motion/react"
import Stack from "@/components/ui/Stack";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps {
    left?: React.ReactNode,
    right?: React.ReactNode,
    children: string | React.ReactNode,
    align?: Alignment,
    backgroundColor?: Color,
    color?: Color,
    variant?: ButtonVariant,
    square?: boolean,
    scale?: number,
    onClick?: () => void,
}

export function Button(props: ButtonProps) {
    const variants: Record<ButtonVariant, CSSPropertiesWithState> = {
        primary: {
            backgroundColor: ColorToCSS("primary"),
            color: ColorToCSS("textDark"),
            borderStyle: "none",
            hover: {color: ColorToCSS("textLight")},
            active: {scale: props.scale ?? 0.96},
        },
        secondary: {
            backgroundColor: ColorToCSS("lightTertiary"),
            color: ColorToCSS("textLight"),
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: ColorToCSS("borderLight"),
            hover: {backgroundColor: ColorToCSS("lightTertiaryHighlighted")},
            active: {scale: props.scale ?? 0.96},
        }
    }

    return (
        <motion.button
            {...extractCSSPropertiesWithState({
                position: "relative",
                height: 45,
                width: props.square ? 45 : undefined,
                minWidth: typeof props.children === "string" ? 120 : undefined,
                padding: props.square ? "0px" : "0px 10px",
                display: "flex",
                alignItems: "center",
                justifyContent: props.align ?? "center",
                overflow: "hidden",
                outline: `1px solid ${ColorToCSS("primary")}00`,
                outlineOffset: 2,
                focus: {
                    outline: `2px solid ${ColorToCSS("primary")}`,
                },
                ...variants[props.variant ?? "secondary"]
            }, {variantHover: "hover"})}
            initial="initial"
            onClick={props.onClick}
        >
            {props.variant === "primary" && (["yellow", "orange", "red", "pink", "purple"] as Color[]).map((color, index) => (
                <motion.span
                    key={index}
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: ColorToCSS(color),
                    }}
                    variants={{
                        initial: {
                            y: "100%",
                            transition: {ease: "linear", delay: (5 - index) / 20}
                        },
                        hover: {
                            y: "0%",
                            transition: {ease: [.2, 0, 0, 1], duration: 0.2, delay: index / 20}
                        },
                    }}
                />
            ))}
            <motion.span
                style={{
                    position: "absolute",
                    inset: 0,
                    background: ColorToCSS("primary"),
                    opacity: 0.1,
                }}
                variants={{
                    initial: {
                        opacity: 0,
                        scale: 0.9,
                    },
                    focus: {
                        opacity: 1,
                        scale: 1,
                    }
                }}
            >

            </motion.span>
            <Stack direction={"horizontal"} style={{zIndex: 1}}>
                {props.left}
                {typeof props.children === "string" ?
                    <Typography bold={props.variant === "primary"}>{props.children}</Typography> : props.children}
                {props.right}
            </Stack>
        </motion.button>
    )
}