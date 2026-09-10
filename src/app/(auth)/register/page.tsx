"use client";

import { useState } from "react";
import { authClient } from "@/src/lib/auth-client";

export default function RegisterPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(
      formData.get("confirmPassword") ?? ""
    );

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } = await authClient.signUp.email({
      email,
      password,
      name,
      callbackURL: '/home'
    });

    setLoading(false);

    if (error) {
      setError(error.message ?? "Unable to create account.");
      return;
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-950">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-zinc-900">
            Create an account
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Join the Hypertube community
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-zinc-700"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 outline-none focus:border-zinc-900"
            />
          </div>

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
              placeholder="you@example.com"
              required
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
              required
              className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 outline-none focus:border-zinc-900"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-1 block text-sm font-medium text-zinc-700"
            >
              Confirm password
            </label>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              required
              className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 outline-none focus:border-zinc-900"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-zinc-900 py-2.5 font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-zinc-200" />
          <span className="text-sm text-zinc-400">OR</span>
          <div className="h-px flex-1 bg-zinc-200" />
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-zinc-900 hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </main>
  );
}