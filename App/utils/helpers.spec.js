import React, { Component } from 'react';
import {
  renderIf,
  fieldPresent
} from './helpers';

describe('helpers', () => {
  describe('renderIf', () => {
    it('should return the component when the condition is true', () => {
      const component = <Component />;
      expect(renderIf(true, () => component)).toBe(component);
    });

    it('should return null when the condition is false', () => {
      expect(renderIf(false, () => <Component />)).toBe(null);
    });
  });

  describe('fieldPresent', () => {
    it('should return true when the field is not undefined or null', () => {
      expect(fieldPresent(5)).toBe(true);
      expect(fieldPresent('hello')).toBe(true);
      expect(fieldPresent({})).toBe(true);
    });

    it('should return false when the field is undefined', () => {
      expect(fieldPresent(undefined)).toBe(false);
    });

    it('should return false when the field is null', () => {
      expect(fieldPresent(null)).toBe(false);
    });
  });
});
