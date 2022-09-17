import {describe, expect, test} from '@jest/globals';
import {app} from '../src/app';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(app(1, 2)).toBe(3);
  });
});