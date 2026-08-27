# Elysia with Bun runtime

## Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
bun create elysia ./elysia-example
```

## Development
To start the development server run:
```bash
bun run dev
```

## Structure
The project structure is as follows:
```
| src
  | modules
	| auth
	  | index.ts (Elysia controller)
	  | service.ts (service)
	  | model.ts (model)
	| user
	  | index.ts (Elysia controller)
	  | service.ts (service)
	  | model.ts (model)
  | utils
	| a
	  | index.ts
	| b
	  | index.ts
```

Open http://localhost:3000/ with your browser to see the result.
