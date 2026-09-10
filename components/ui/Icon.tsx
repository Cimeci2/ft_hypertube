import { Icon as IconifyIcon, IconProps as IconifyIconProps } from "@iconify/react";
import majesticons from "@iconify/json/json/majesticons.json";

export interface IconProps extends Omit<IconifyIconProps, "icon"> {
    icon?: string;
    name: keyof typeof majesticons.icons,
    size?: number
}

export default function Icon({icon, name, size = 20, ...props}: IconProps) {
    return <IconifyIcon icon={icon ?? `majesticons:${name}`} width={size} height={size} {...props} />
}