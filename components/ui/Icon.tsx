import { Icon as IconifyIcon, IconProps as IconifyIconProps } from "@iconify/react";

export interface IconProps extends Omit<IconifyIconProps, "icon"> {
    icon?: string;
    name: string,
}

export default function Icon({icon, name, ...props}: IconProps) {
    return <IconifyIcon icon={icon ?? `majesticons:${name}`} {...props} />
}