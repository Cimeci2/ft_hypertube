"use client";
import {AnchorHTMLAttributes, ReactNode} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";

export interface TransitionLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: ReactNode;
}

export default function TransitionLink(props: TransitionLinkProps) {
    const router = useRouter();

    return <Link
        {...props}
        onClick={(e) => {
            e.preventDefault();

            document.body.classList.add("transition");

            setTimeout(() => {
                router.push(props.href);
            }, 500);
            setTimeout(() => {
                document.body.classList.remove("transition");
            }, 1000);
        }}
    />
}