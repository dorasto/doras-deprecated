# Deploying to Cloudflare (for @Developers only)

1. Install Wrangler via https://docs.astro.build/en/guides/deploy/cloudflare/
2. .1 `npm install -g wrangler` to install wrangler
3. `wrangler login` to login to cloudflare
4. `pnpm cloud-build` to build the site and deploy it to Cloudflare.
    - Choose `Gezel io` account
    - Choose `Doras landing` project

## Example Release Notes

Tag: `Version number`: `0.0.1`
Title: `Version number`: `0.0.1`
Contents:
```
- Updated x
- Fixed [y](linktogithubissue.com)
```
