"use client";
import Stack from "@/components/ui/Stack";

export default function Home() {
    return (
        <Stack height={"100dvh"} style={{ position: "relative" }}>
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: "absolute",
                    inset: 0,
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                }}
            >
                <source src="/video/sample_video_large.m4v" media="(width >= 800px)" />
                <source src="foo.webm" />
            </video>
            <Stack background={"gradientBackgroundTop"} height={"100dvh"} flex={1}>

            </Stack>
        </Stack>
    );
}
