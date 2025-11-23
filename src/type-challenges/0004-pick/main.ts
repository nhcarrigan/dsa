/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import type { Equal, Expect } from "@type-challenges/utils";

/**
 * Original code:.
 *
 * ```ts
 * type MyPick<T, K> = any
 * ```
 */

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * Test cases.
 */

// @ts-expect-error -- Unused variable.
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- This is necessary for tests.
type Cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error -- Invalid key.
  MyPick<Todo, "title" | "completed" | "invalid">,
];

interface Todo {
  title:       string;
  description: string;
  completed:   boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title:     string;
  completed: boolean;
}
