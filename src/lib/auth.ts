import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { genericOAuth } from "better-auth/plugins";
import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  baseURL: "http://localhost:3000/",
  emailAndPassword: {
    enabled: true
  },
  socialProviders: {
    figma: { 
      clientId: process.env.FIGMA_CLIENT_ID as string, 
      clientSecret: process.env.FIGMA_CLIENT_SECRET as string, 
    },
    linear: { 
      clientId: process.env.LINEAR_CLIENT_ID as string, 
      clientSecret: process.env.LINEAR_CLIENT_SECRET as string, 
    },
    linkedin: { 
      clientId: process.env.LINKEDIN_CLIENT_ID as string, 
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string, 
    },
    roblox: { 
      clientId: process.env.ROBLOX_CLIENT_ID as string, 
      clientSecret: process.env.ROBLOX_CLIENT_SECRET as string, 
    },
    tiktok: { 
      clientSecret: process.env.TIKTOK_CLIENT_SECRET as string, 
      clientKey: process.env.TIKTOK_CLIENT_KEY as string, 
    },
    twitch: { 
      clientId: process.env.TWITCH_CLIENT_ID as string,
      clientSecret: process.env.TWITCH_CLIENT_SECRET as string,
    },
    huggingface: { 
      clientId: process.env.HUGGINGFACE_CLIENT_ID as string, 
      clientSecret: process.env.HUGGINGFACE_CLIENT_SECRET as string, 
    },
    notion: { 
      clientId: process.env.NOTION_CLIENT_ID as string,
      clientSecret: process.env.NOTION_CLIENT_SECRET as string,
    },
    slack: { 
      clientId: process.env.SLACK_CLIENT_ID as string,
      clientSecret: process.env.SLACK_CLIENT_SECRET as string,
    },
  },
  plugins: [
    genericOAuth({
      config: [
        {
          providerId: "intra",
          clientId: process.env.INTRA_CLIENT_ID!,
          clientSecret: process.env.INTRA_CLIENT_SECRET!,
          authorizationUrl: "https://api.intra.42.fr/oauth/authorize",
          tokenUrl: "https://api.intra.42.fr/oauth/token",
          scopes: ["public"],
          userInfoUrl: "https://api.intra.42.fr/v2/me",
        },
        {
          providerId: "epic",
          clientId: process.env.EPIC_CLIENT_ID!,
          clientSecret: process.env.EPIC_CLIENT_SECRET!,
          authorizationUrl: "https://www.epicgames.com/id/api/redirect",
          tokenUrl: "https://account-public-service-prod.ol.epicgames.com/account/api/oauth/token",
          scopes: ["basic_profile"],
        },
        {
          providerId: "openstreetmap",
          clientId: process.env.OSM_CLIENT_ID!,
          clientSecret: process.env.OSM_CLIENT_SECRET!,
          authorizationUrl: "https://www.openstreetmap.org/oauth2/authorize",
          tokenUrl: "https://www.openstreetmap.org/oauth2/token",
          scopes: ["openid"],
        },
        {
          providerId: "wikipedia",

          clientId: process.env.WIKIPEDIA_CLIENT_ID!,
          clientSecret: process.env.WIKIPEDIA_CLIENT_SECRET!,

          authorizationUrl:
            "https://meta.wikimedia.org/w/rest.php/oauth2/authorize",

          tokenUrl:
            "https://meta.wikimedia.org/w/rest.php/oauth2/access_token",

          scopes: [],

          pkce: false,

          getUserInfo: async (tokens) => {
            const response = await fetch(
              "https://fr.wikipedia.org/w/rest.php/oauth2/resource/profile",
              {
                headers: {
                  Authorization: `Bearer ${tokens.accessToken}`,
                  "User-Agent": "lostmedia_42/1.0",
                },
              }
            );

            const body = await response.text();

            console.log("WIKIMEDIA PROFILE:", {
              status: response.status,
              body,
            });

            if (!response.ok) {
              return null;
            }

            const profile = JSON.parse(body);

            return {
              id: String(profile.sub),
              name: profile.username ?? "Wikimedia User",
              email: profile.email ?? `${profile.sub}@wikipedia.placeholder.invalid`,
              emailVerified: Boolean(profile.email),
            };
          },
        }
      ] 
    }) 
  ]
});
