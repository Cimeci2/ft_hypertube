"use client";
import Stack from "@/components/ui/Stack";
import {Button} from "@/components/ui/Button";
import {Typography} from "@/components/ui/Typography";
import Icon from "@/components/ui/Icon";

export default function Home() {
    return (
        <Stack padding={20}>
            <Stack
                direction={"vertical"}
                gap={10}
                padding={20}
                flex
                radius={20}
                backgroundColor={"lightTertiary"}
                border={"light"}
            >
                <Typography variant={"title"}>The node module where everything start</Typography>
                <Typography color={"lightSecondary"}>Cupidatat dolor voluptate enim dolor ipsum velit ex sunt duis magna.</Typography>
            </Stack>

            <Stack direction={"horizontal"}>
                <Button align={"start"} left={<Icon name={"airplane-flight-2"} />} variant={"primary"}>Getting Started</Button>
                <Button align={"start"} left={<Icon name={"git-fork"} />}>Discover on GitHub</Button>
            </Stack>

        </Stack>
    );
}
