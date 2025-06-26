# DPS Frontend Coding Challenge

## Table of contents

1. [Check project scope](#project-scope)
2. [Run project](#run-project)
3. [Links](#links)
4. [steps taken to complete the challenge](#steps-taken-to-complete-the-challenge)
5. [key considerations](#key-considerations)
    - [1. why i used pnpm over npm](#1-why-i-used-pnpm-over-npm)
    - [2. what's the difference between vite and pnpm?](#2-whats-the-difference-between-vite-and-pnpm)
    - [3. preference for headless table libraries](#3-preference-for-headless-table-libraries)
    - [4. preference for component libraries](#4-preference-for-component-libraries)
    - [5. i used semantic commit messages](#5-i-used-semantic-commit-messages)
    - [6. why i didn't use react.fc](#6-why-i-didnt-use-reactfc)
    - [7. why children is typed as react.reactnode](#7-why-children-is-typed-as-reactreactnode)
    - [8. storybook esm error](#8-storybook-esm-error)
6. [assumptions & design decisions](#assumptions--design-decisions)
    - [api behaviour & architectural assumption](#api-behaviour--architectural-assumption)
    - [data volatility assumption](#data-volatility-assumption)
    - [data handling & api constraints](#data-handling--api-constraints)
    - [tools & libraries](#tools--libraries)
    - [ux & ui improvements](#ux--ui-improvements)
    - [backend query format (optional)](#backend-query-format-optional)

---
## Project Scope

Click [here](./SCOPE.md) for detail.

## Run Project

### step 1: backend
1. go to Project Directory
2. run `pnpm dev`
3. Endpoints,
    1. `GET` /users/ping: response is `'I'm alive'`
    2. `POST` /users with parameter `filters`, `options` and `pagination`
   ```json
   {  
     "filters": {
       "name": {
           "title": "Name",
           "titleBold": true,
           "delay": 1000
   }, 
      "select": {
          "title": "City",
          "titleBold": true,
          "placeHolder": "Select City"
      }, 
      "checkbox": {
       "title": "Highlight oldest per city"
      }
   },
     "options": {
       "select": [
         "id",
         "name",
         "firstName",
         "lastName",
         "address.city",
         "birthDate"
      ],
      "concat": [ 
        {
          "values": ["firstName", "lastName"],
          "to": "name"
        },
        {
          "values": ["birthDate"],
          "to": "Birthday"
        }
      ]
   },
     "pagination": {
         "limit": 15,
         "skip": 0
     }
   }
   ```
   **Response** will be `{users, total, skip,limit}`


### step 2: frontend
1. go to Project Directory
2. cd `backend`
3. run `pnpm dev`
4. url is [http://localhost:3000](http://localhost:3000)


### optional: storybook
1. go to Project Directory
2. run ``
3. pnpm storybook
4. go to url [http://localhost:6006/](http://localhost:6006/) 

## Links

### [Figma](https://www.figma.com/design/QNVnTIeijnmnUZbXZtWALh/DPS?node-id=5-41&t=yzT4DLmBRBAKDp3T-1)

### [GitHub](https://github.com/boraoren/dps-frontend-challenge/tree/v1.3.0)

##  Steps taken to complete the challenge

- **Forked the project**  
  I started by forking the repository to my own Github account for development.


- **Designed ui in Figma**  
  Created a prototype to visualize the user interface and interaction flow.


- **Created reusable components in Figma**  
  Broke down the ui into atomic components (buttons, inputs, etc.) for consistency and scalability.


- **Set up storybook**  
  Integrated storybook to build and showcase components in isolation.


- **Developed ui components based on Figma designs**  
  Translated the Figma components into functional code using a component-driven development approach.


- **Implemented features using test-driven development (tdd)**  
  Followed tdd principles: wrote tests first, then implemented code to satisfy the tests, ensuring reliability and maintainability.

---

## Key considerations

### 1. Why I used pnpm over npm
`pnpm` is a faster and more efficient package manager compared to `npm`. it uses hard links and a content-addressable filesystem, which drastically reduces disk space usage and speeds up installations — especially helpful for monorepos or shared environments.

### 2. What's the difference between vite and pnpm?
- `vite` is a **build tool** offering fast development startup and hot module replacement.
- `pnpm` is a **package manager**, an alternative to `npm` or `yarn`.

They serve different purposes: vite runs the app; pnpm installs dependencies.

### 3. Preference for headless table libraries
I prefer **headless table libraries** (like `@tanstack/react-table`) because they offer **maximum flexibility**. they allow custom styling and can integrate seamlessly with any design system.

### 4. Preference for component libraries
Component libraries such as **radix ui**, **chakra ui**, or **mui** improve development speed, ensure accessibility, and provide consistent ux patterns without reinventing core components.

### 5. I Used semantic commit messages
I follow [semantic commit conventions](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) to keep git history **clean, structured, and automation-friendly** (e.g., for changelogs or ci tools).

### 6. Why U didn't use react.fc
`react.fc` adds implicit `children` and limits flexibility in typing props. i prefer to **explicitly define props**, which improves type inference and prevents unintended behaviors.

### 7. Why children is typed as react.reactnode
`react.reactnode` covers everything react can render — strings, numbers, jsx, arrays, `null`, etc. it’s the safest and most inclusive type for children props.

### 8. Storybook esm error

error:
```
error [err_require_esm]: require() of es module ... not supported.
```

cause:
Some storybook dependencies or configs rely on commonjs, but imported packages are now pure esm.

fix:
- convert storybook config files to `.mjs`, or use dynamic `import()` instead of `require()`.
- align storybook version and tooling with esm-compatible packages.

---

## Assumptions & design decisions

During development, I made several assumptions based on api limitations, project constraints, and ux goals. these helped shape practical and scalable decisions.

---

### Api behaviour & architectural assumption

#### Immutable api design

I assumed the project uses a **third-party or legacy api** that cannot be modified.

**Problem:**  
The ui requires filtering users by both **name** and **city**.

**Limitations:**
- [`/users/search`](https://dummyjson.com/docs/users#search): only supports full-text search (name, email, etc.)
- [`/users/filter`](https://dummyjson.com/docs/users#filter): supports filtering by **only one key** (e.g., `address.city`)

**Solution:**
- Retrieved all users via `/users`
- Applied **combined filtering** (name + city) on the **frontend**
- Calculated **oldest person per city** on the frontend as well

---

### Data volatility assumption

I assumed the `/users` dataset is:

- **Relatively static** (doesn’t change often)
- Suitable for **client-side filtering and caching**

If data changes, it's assumed the **server will trigger refresh** via:
- Polling
- Webhooks
- Reactive hooks

> this is a common trade-off when using **read-only** or **legacy apis**.

---

### Data handling & api constraints

- **Api limitations:**  
  `/users/filter?key=address.city&value=denver` returns full address and company.  
  → **approach:** applied additional **frontend filtering** by `address.city`.

- **Single-attribute filter only:**  
  → assumed **all multi-attribute filters** must be handled on the **frontend**.

- **Oldest person per city:**  
  → Assumed only one oldest person per city, and that this rarely changes.  
  → Cached the result unless data changes (typical for legacy/vendor systems).

---

### Tools & libraries

- **Zod for schema validation:**  
  used [zod](https://zod.dev/) for runtime validation and type safety.

- **Used snyk for package security:**  
  reviewed dependencies (e.g., [`loglevel`](https://security.snyk.io/package/npm/loglevel)) using snyk to ensure safe packages.

---

### UXx & UI improvements

- **Clear button in city combobox:**  
  → Added a “clear” button so users can reset their selection easily.

- **Flexible select field structure:**
```ts
select: [
  { label: 'id', format: 'number' },
  { label: 'birthdate', format: 'date' },
]
```

---

### Backend query format (optional)

To simulate backend flexibility and formatting, used this mock query structure:

```json
{ 
  "options": {
    "select": [
      "id",
      "firstname",
      "lastname",
      "address.city",
      "birthdate"
    ],
    "concat": [
      {
        "values": [
          "firstname",
          "lastname"
        ],
        "to": "name"
      }
    ]
  }
}
```
