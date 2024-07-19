# Nuxt 3 State & Layers

Experiment with Nuxt.js layers and state.

## Structure

```
src/apps
    /app-1/nuxt.config.ts      => extend from 'base'
    /app-2/nuxt.config.ts      => extend from 'base'
src/base

nuxt.config.ts      => extend from 'app-1', 'app-2'
```



## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm run generate
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
