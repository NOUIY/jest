/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

describe('NodeEnvironment 2', () => {
  test('dispatch event', () => {
    new EventTarget().dispatchEvent(new Event('foo'));
  });
});
