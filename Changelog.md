# About Project

* ✅ **Components** (UI building blocks)
* 🔧 **Services** (data, backend, logic)
* 🚀 **Features** (business capabilities composed of components/services)

This table is ideal for new developers onboarding the project, providing a quick reference to file structure, responsibility, and scope.

---

### ✅ Components

| Component           | Purpose / Responsibility                             | Related Issues |
| ------------------- | ---------------------------------------------------- | -------------- |
| `Input`             | Text input field                                     | `#19`          |
| `Label`             | Form label for accessibility and clarity             | `#18`          |
| `Search`            | Search bar for user filtering                        | `#20`          |
| `Select`            | Dropdown selector with padding fixes                 | `#50`          |
| `Checkbox`          | Generic checkbox input                               | `#25`          |
| `CheckboxHighlight` | Specialized checkbox for "highlight oldest per city" | `#26`          |
| `Card`              | Container for user cards                             | `#15`, `#16`   |
| `CardUserList`      | Visual list of users inside card layout              | `#37`, `#35`   |
| `TableList`         | Main table layout container                          | `#22`          |
| `TableListItem`     | Row representation for each user                     | `#23`, `#57`   |
| `TableHeader`       | Header row with dynamic titles                       | `#21`, `#44`   |
| `TableContainer`    | High-level container managing pagination and state   | `#9`, `#41`    |
| `Filter`            | Block for filter controls (name, city, highlight)    | `#8`, `#29`    |

---

### 🔧 Services

| Service / Module    | Purpose / Responsibility                                 | Related Issues      |
| ------------------- | -------------------------------------------------------- | ------------------- |
| `services/database` | Manages backend logic, sorting, formatting, test cases   | `#43`, `#45`, `#51` |
| `api/proxy`         | Proxies external `dummyjson` data through internal route | (refactor)          |

---

### 🚀 Features

| Feature Module             | Business Purpose                                               | Related Issues |
| -------------------------- | -------------------------------------------------------------- | -------------- |
| `features/users/getTable`  | Retrieves and prepares user table data (e.g. name concat)      | `#48`          |
| `features/list/users`      | Handles user list logic with TypeScript generics and utilities | `#13`          |
| `features/filterByName`    | Enables filtering users by name                                | `#11`          |
| `features/filterByCity`    | Enables filtering users by city                                | `#8`           |
| `features/highlightOldest` | Highlights the oldest user in each city                        | `#9`, `#26`    |
| `features/users/table`     | Adds infinite scroll and pagination to user table              | `#32`          |
| `blocks/table`             | Table block logic (refactored into container)                  | `#24`, `#34`   |
| `blocks/card/list`         | Container + display for user cards with list view integration  | `#27`, `#35`   |
| `blocks/filter`            | Filter UI and logic block composed of checkboxes and selects   | `#29`          |

---

### 📂 Structure Overview (Simplified)

```
├── components/
│   ├── Input.tsx
│   ├── Label.tsx
│   ├── Search.tsx
│   ├── Checkbox.tsx
│   ├── Table/
│   └── Card/
│
├── features/
│   ├── users/
│   ├── filterByName/
│   ├── filterByCity/
│   └── highlightOldest/
│
├── services/
│   └── database.ts
│
├── blocks/
│   ├── table/
│   ├── card/
│   └── filter/
```



# 📘 Changelog & Development History

This document provides a curated overview of key development milestones for this project, intended for **developers, maintainers, and collaborators**. It includes new features, architectural decisions, bug fixes, design adjustments, and structural refactoring.

---

## 👤 Author

- All contributions below were made by: **@boraoren**
- Timeframe: **June 19 – June 26, 2025**

---

## 🗓️ June 26, 2025

### 🚀 Features
- Integrated `CardUserList` into `App.tsx`, completing the UI flow for user display. [`#37`]
- Implemented fallback messaging in the `Table` component when no data is present. [`#59`]

### 🎨 Design & Style Updates
- Adjusted `Select` component padding for visual alignment. [`#50`]
- Left-aligned table cell content to maintain column consistency. [`#57`]

### 🐛 Fixes
- Resolved infinite scroll bug in user list view, ensuring smooth pagination. [`#58`]

---

## 🗓️ June 25, 2025

### 🚀 Features
- Added database-level sorting of table rows by `firstName` (ascending). [`#45`]
- Merged `firstName` and `lastName` into a unified `name` field for display consistency. [`#48`]
- Implemented name-based filtering in the user search functionality. [`#11`]

### 🐛 Fixes
- Corrected misaligned or unordered table headers in the user list. [`#44`]
- Added missing test cases to ensure stability of database service behavior. [`#51`]

### 🎨 Design & Style Updates
- Fixed a visual selection issue in table rows when highlighting was active. [`#56`]
- Standardized `birthDate` display using `d.M.yyyy` formatting (e.g., `1996-5-30` → `30.5.30`). [`#43`]
- Increased table row padding to improve spacing in the list view. [`#52`]

### 🔧 Refactors
- Routed external `dummyjson` API data through an internal service proxy to decouple dependencies and enable mocking in tests.

---

## 🗓️ June 24, 2025

### 🚀 Features
- Added feature to highlight the **oldest user per city**, supporting visual grouping logic. [`#9`]

### 🐛 Fixes
- Fixed hook-level state updates in `table/container` integration, which previously led to stale render issues. [`#9`]

### 🔧 Refactors
- Extracted scroll management and data fetching logic into a reusable custom hook for tables. [`#41`]
- Integrated `CardUserList` container component into the application shell (`App.tsx`). [`#37`]

---

## 🗓️ June 23, 2025

### 🚀 Features
- Added city-based filtering logic and linked it with the Card UI for improved data navigation. [`#8`]

---

## 🗓️ June 22, 2025

### 🚀 Features
- Enabled infinite scroll behavior for the user table, optimizing performance and user experience. [`#32`]

### 🔧 Refactors
- Connected `CardUserList` with Storybook for component testing and visual debugging. [`#35`]
- Moved business logic out of `blocks/table` and into a dedicated container to improve modularity. [`#34`]
- Introduced scrollable tables with explicit scroll handling via `overflow` properties. [`#13`]
- Created a utility for transforming camelCase keys into user-friendly table headers. [`#13`]
- Applied TypeScript generics to improve type safety and extendibility in user list components. [`#13`]

### 🐛 Fixes
- Renamed the `selected` prop to `highlighted` for semantic clarity. [`#13`]

---

## 🗓️ June 21, 2025

### 🚀 Features
- Developed a robust test suite (unit + integration) for the `user list` module. [`#13`]

---

## 🗓️ June 20, 2025

### 🧩 Component Implementations
- `CardList` — Visual block to present summarized user info. [`#27`]
- `Table` — Main container for displaying paginated user data. [`#24`]
- `Filter` — Dynamic filtering control used across different modules. [`#29`]
- `Checkbox` — Implemented standard and highlight-based toggles. [`#25`, `#26`]
- `TableList`, `TableListItem`, `TableHeader` — Core structural components for dynamic data rendering. [`#22`, `#23`, `#21`]
- `Search` — Input element for searching users. [`#20`]

---

## 🗓️ June 19, 2025

### 🧩 Component Implementations
- `Input`, `Label`, and `Card` components added to support form entry and layout structure. [`#15`, `#18`, `#19`]

### 🧪 Testing & QA
- Linting issues resolved to support Storybook integration. [`#17`]

### ⚙️ Setup & Tooling
- Installed initial dependencies. [`#14`]
- Bootstrapped Storybook for isolated UI component development. [`#3`, `#16`]

---

## 📘 Developer Notes

- ✅ Follow commit scopes for identifying component ownership (`feat(components/xyz)`, `fix(services/db)`, etc.)
- 📦 Components follow a **modular architecture**, and feature-level logic is separated from UI blocks and data services.
- 🔄 Data transformations (e.g., name concatenation, birthDate formatting) occur server-side where possible.
- 🧪 Ensure **unit tests and integration tests** are maintained, especially when touching `features/users`, `services/database`, or anything related to filters/infinite scroll.
- 📐 `App.tsx` serves as the shell and composition layer — all containers are registered there.

---

## 📌 Changelog Key

| Label       | Meaning                                                      |
|-------------|--------------------------------------------------------------|
| `feat`      | New functionality introduced                                 |
| `fix`       | Bug or regression resolved                                   |
| `style`     | UI and CSS changes without logic modification                |
| `refactor`  | Code structure changes without altering functionality        |
| `chore`     | Maintenance or setup work not directly tied to a feature     |
