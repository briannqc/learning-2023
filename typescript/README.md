# TypeScript tutorials

Source: https://www.youtube.com/watch?v=d56mG7DezGs&t=757s

## Introduction

### TypeScript is statically-typed

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

### Compile

```shell
❯ tsc -v
Version 5.0.4

❯ ls
index.ts

❯ tsc index.ts
❯ ls
index.js index.ts

❯ cat index.js
var age = 20;
console.log('Hello world');
```

By default, TSC compiles ts codes into ES5 codes. Hence, 'var' is used in place of 'let'.
We can configure TS, starting with creating `tsconfig.json` file: `tsc --init`.

Example:
```json
{
  "compilerOptions": {
    /* Language and Environment */
    "target": "es2016", /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */

    /* Modules */
    "module": "commonjs", /* Specify what module code is generated. */
    "rootDir": "./src", /* Specify the root folder within your source files. */

    /* Emit */
    "outDir": "./dist", /* Specify an output folder for all emitted files. */
    "removeComments": true, /* Disable emitting comments. */
    "noEmitOnError": true, /* Disable emitting files if any type checking errors are reported. */
  }
}
```

With `tsconfig.json`, we no longer need to specify, e.g. ts files, but simply run: `tsc`.

### Debugging
- Enable `"sourceMap": true` in `tsconfig.json`, which Create source map files for
  emitted JavaScript files.
- On VSCode, in Run and Debug tab, click Create `launch.json` for Node.js.
- Add `preLaunchTask` to `launch.json`.

## Fundamentals

- The any Type
- Arrays
- Tuples
- Enums
- Functions
- Objects

### Built-in Types

![Built-in Types](docs/ts-built-in-types.png)

```ts
let sales: number = 123_456;
let course: string = 'TypeScript';
let is_published: boolean = true;
```

#### Type Inferrence

TS can infer type via its value, e.g.

```ts
let age = 30;

// Is equivalent to:
let age: number = 30;
```

### Any type

```ts
// Variable with no decoration nor initial values
// has type of 'any'
let level; 

// Hence, we can assign any values into it.
// For that reason, any type should be avoided whenever it's possible.
// Otherwise, it defeats the whole idea of TS.
level = 5;
level = 'HARD';
```

We can turn off `noImplicitAny` in tsconfig.json, however, it's not recommended.

```ts
// DON'T
function render(doc) {
  // Do something
}

// DO this instead
function render(doc: any) {
  // Do something
}
```