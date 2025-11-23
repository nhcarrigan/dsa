/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import type { Equal, Expect, NotAny } from "@type-challenges/utils";

/**
 * Original code:.
 *
 * ```ts
 * type HelloWorld = any // expected to be a string
 * ```
 */

type HelloWorld = string;

/**
 * Test cases.
 */

// @ts-expect-error -- Unused variable.
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- This is necessary for tests.
type Cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
];
