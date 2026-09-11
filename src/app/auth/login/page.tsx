"use client"

import { authClient } from "@/lib/auth-client";

type ProviderName = "linear" | "roblox" | "figma" | "linkedin" | "tiktok" | "slack" | "twitch" | "notion" | "huggingface" | "intra" | "epic" | "wikipedia"

export default function LoginPage() {
  const handleEmailLogin = async (email: string, password: string) => {
    const { error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/home"
    })
    if (error) {
      console.error("Email login error:", error);
    }
  }

  const handleOauthLogin = async (providerName: ProviderName) => {

    const { error } = await authClient.signIn.social({
      provider: providerName,
      callbackURL: "/home"
    });
    if (error) {
      console.error("Oauth login error:", error);
    }
    
  };
  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-950">
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
    </main>
  );
}