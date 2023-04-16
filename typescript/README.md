# TypeScript tutorials

Source: https://www.youtube.com/watch?v=d56mG7DezGs&t=757s

## TypeScript is statically-typed

TypeScript and JavaScript are brother and sister. While JavaScript is dyncmically-typed,
TypeScript is statically-typed. TypeScript is more disciplined. Everything we can do with
JavaScript, we can do with TypeScript too.

![TypeScript is statically typed](docs/typescript-is-statically-typed.png)

```ts
let x: number = 10;

// Compile error: Type 'string' is not assignable to type 'number'
x = "a";
```

**Benefits**

- Static typing
- Code completion
- Refactoring
- Shorthand notations

**Drawbacks**

- Compilation: At of now, browsers do NOT understand TypeScript but JavaScript.
  Therefore, we need to compile TypeScript code into JavaScript code. This process
  is called Transpilation.
  ![Transpilation](docs/typescript-transpilation.png)
- Discipline in coding (It's both pros and cons).

## Setting Up the Development Environment
- Install NodeJS (along with npm): `brew install node@18`
- Install typescript: `npm install -g typescript`

## Compile

```shell
❯ tsc -v
Version 5.0.4

❯ ls
index.ts

❯ tsc index.ts
❯ ls
index.js index.ts 
```
