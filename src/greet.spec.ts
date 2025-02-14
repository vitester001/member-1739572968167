import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return default greeting when only name is provided', () => {
    expect(greet('John')).toBe('Hello, John!');
  });

  it('should return custom greeting when both name and greeting are provided', () => {
    expect(greet('John', 'Hi')).toBe('Hi, John!');
  });

  it('should handle empty string name', () => {
    expect(greet('')).toBe('Hello, !');
  });

  it('should handle empty string greeting', () => {
    expect(greet('John', '')).toBe('Hello, John!');
  });

  it('should handle special characters in name', () => {
    expect(greet('John@#$')).toBe('Hello, John@#$!');
  });

  it('should handle special characters in greeting', () => {
    expect(greet('John', 'Hi@#$')).toBe('Hi@#$, John!');
  });

  it('should handle whitespace in name', () => {
    expect(greet('  John  ')).toBe('Hello,   John  !');
  });

  it('should handle whitespace in greeting', () => {
    expect(greet('John', '  Hi  ')).toBe('  Hi  , John!');
  });
});
