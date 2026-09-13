import styles from "./page.module.css";
import Stack from "@/components/ui/Stack";
import {Typography} from "@/components/ui/Typography";
import {useTranslations} from "next-intl";
import {Providers} from "@/lib/auth";
import OAuthButtons from "@/components/auth/OAuthButtons";
import Divider from "@/components/ui/Divider";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
    const t = useTranslations();

    return (
        <Stack
            component={"main"}
            direction={"horizontal"}
            width={"100%"}
            vAlign={"center"}
            height={"100dvh"}
            wrap={false}
            className={styles.mainContainer}
        >
            <Stack padding={[40, 20, 20, 20]} maxWidth={600} width={"100%"} gap={30} wrap={false}>
                <Stack>
                    <Typography variant={"title"}>{t("auth.login.title")}</Typography>
                    <Typography variant={"caption"} color={"lightSecondary"}>{t("auth.login.description")}</Typography>
                </Stack>

                <OAuthButtons
                    providers={Object.entries(Providers).map(([name, provider]) => ({
                        id: name,
                        name: provider.name,
                        backgroundColor: provider.backgroundColor,
                        textColor: provider.textColor,
                    }))}
                />

                <Divider text={t("action.or")}/>

                <LoginForm />
            </Stack>
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    objectFit: "cover",
                    width: "calc(100vw - 600px)",
                    height: "100%",
                    position: "fixed",
                    top: 0,
                    right: 0,
                    bottom: 0,
                }}
                className={styles.video}
            >
                <source src="/video/sample_video_large.m4v" />
            </video>
        </Stack>
    );
}

/*
<div className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-zinc-900">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Sign in to your LostMedia account
          </p>
        </div>

        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault()

            const formData = new FormData(event.currentTarget)

            const email = String(formData.get("email") ?? "")
            const password = String(formData.get("password") ?? "")

            handleEmailLogin(email, password)
          }}
        >
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-zinc-700"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 outline-none focus:border-zinc-900"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-zinc-700"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Your password"
              className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 outline-none focus:border-zinc-900"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-zinc-900 py-2.5 font-medium text-white transition hover:bg-zinc-800"
          >
            Sign in
          </button>
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-zinc-200" />
          <span className="text-sm text-zinc-400">OR</span>
          <div className="h-px flex-1 bg-zinc-200" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
          <button
            onClick={() => handleOauthLogin("figma")}
            type="button"
            className="w-full rounded-lg border border-zinc-300 py-2.5 font-medium text-zinc-700 transition hover:bg-zinc-50"
          >
            figma
          </button>

          <button
            onClick={() => handleOauthLogin("twitch")}
            type="button"
            className="w-full rounded-lg border border-zinc-300 py-2.5 font-medium text-zinc-700 transition hover:bg-zinc-50"
          >
            twitch
          </button>

          <button
            onClick={() => handleOauthLogin("notion")}
            type="button"
            className="w-full rounded-lg border border-zinc-300 py-2.5 font-medium text-zinc-700 transition hover:bg-zinc-50"
          >
            notion
          </button>

          <button
            onClick={() => handleOauthLogin("huggingface")}
            type="button"
            className="w-full rounded-lg border border-zinc-300 py-2.5 font-medium text-zinc-700 transition hover:bg-zinc-50"
          >
            huggingface
          </button>

          <button
            onClick={() => handleOauthLogin("epic")}
            type="button"
            className="w-full rounded-lg border border-zinc-300 py-2.5 font-medium text-zinc-700 transition hover:bg-zinc-50"
          >
            epic
          </button>

          <button
            onClick={() => handleOauthLogin("wikipedia")}
            type="button"
            className="w-full rounded-lg border border-zinc-300 py-2.5 font-medium text-zinc-700 transition hover:bg-zinc-50"
          >
            wikipedia
          </button>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => handleOauthLogin("intra")}
            type="button"
            className="w-full rounded-lg border border-zinc-300 py-2.5 font-medium text-zinc-700 transition hover:bg-zinc-50"
          >
            Continue with 42 Intra
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-zinc-900 hover:underline"
          >
            Register
          </a>
        </p>
      </div>
 */