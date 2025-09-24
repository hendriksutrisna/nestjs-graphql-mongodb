# Copilot Instructions for nestjs-graphql-mongodb

## Project Overview
This is a NestJS backend project using TypeScript, GraphQL, and MongoDB. The main entry point is `src/main.ts`, with the root module defined in `src/app.module.ts`. GraphQL is configured via `@nestjs/graphql` with automatic schema generation (`autoSchemaFile: true`).

## Architecture & Patterns
- **Modules**: Organized using NestJS modules. The root module is `AppModule` in `src/app.module.ts`.
- **GraphQL**: Uses Apollo Server via `@nestjs/graphql`. Schema is auto-generated from TypeScript decorators.
- **MongoDB**: Intended for MongoDB integration (no models/services present yet).
- **Testing**: E2E tests are in `test/app.e2e-spec.ts` using Jest. Config in `test/jest-e2e.json`.

## Developer Workflows
- **Install dependencies**: `npm install`
- **Start development server**: `npm run start:dev`
- **Start production server**: `npm run start:prod`
- **Run unit tests**: `npm run test`
- **Run e2e tests**: `npm run test:e2e`
- **Check test coverage**: `npm run test:cov`

## Key Files & Directories
- `src/main.ts`: Application bootstrap
- `src/app.module.ts`: Main module, GraphQL config
- `test/`: E2E tests and Jest config
- `package.json`: Scripts, dependencies
- `tsconfig*.json`: TypeScript config
- `nest-cli.json`: NestJS CLI config

## Conventions & Integration Points
- **GraphQL schema**: Generated from code, not manually written
- **No custom error handling or validation yet**
- **No database models/services yet**
- **Follows standard NestJS structure**

## Example: Adding a GraphQL Resolver
Create a new file in `src/`, define a class with `@Resolver()`, and add query/mutation methods with `@Query()`/`@Mutation()` decorators. Import the resolver in a module.

## External Resources
- [NestJS Docs](https://docs.nestjs.com)
- [GraphQL Integration](https://docs.nestjs.com/graphql/quick-start)
- [Testing](https://docs.nestjs.com/fundamentals/testing)

---
If any conventions or workflows are unclear, please provide feedback so this guide can be improved.