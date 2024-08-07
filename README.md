# Toodo

Toodo app helps you keep track of tasks that need to be done.

## local setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/adii1203/todo.git

npm install
```

Then:

1. Run `npx convex dev --once`, and follow the steps to provision a Convex backend.

2. Generate private and public key by running `node generateKeys.mjs`.

   - Paste the private key `CONVEX_AUTH_PRIVATE_KEY=...` to the `.env.local` file.

   - Paste the public key `JWKS=...` to your [Convex dashboard](https://dashboard.convex.dev/deployment/settings/environment-variables).

3. Generate a random secret (via `openssl rand -base64 33` or `npx auth secret`) and save it as `AUTH_SECRET` to the `.env.local` file.

4. Generate another random secret and save it as `CONVEX_AUTH_ADAPTER_SECRET` to

   - the .env.local file
   - to your Convex dashboard

5. Follow [this guide](https://authjs.dev/guides/configuring-github#registering-your-app) to create a GitHub OAuth app and then add `AUTH_GITHUB_ID` and `AUTH_GITHUB_SECRET` to `.env.local`

Now your `.env.local` should match `.env.example` and there should be `JWKS` and `CONVEX_AUTH_ADAPTER_SECRET` variables on your Convex dashboard.
