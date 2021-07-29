import '@testing-library/jest-dom';
import document from '../document.js';
import element from '../../src/api/element.js';

test('testing element wrapper for dom element', () => {
  const actual = element('h1', 'Hello world', 'className');
  const expected = document.createElement('h1');
  expected.className = 'className';
  expect(actual).toHaveClass('className');
  expect(actual.innerText).toEqual('Hello world');
  expect(actual.outerHTML).toEqual('<h1 class="className"></h1>');
});
