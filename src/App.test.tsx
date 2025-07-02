import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Portfolio/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders about me section', () => {
  render(<App />);
  const aboutSection = screen.getByText(/About Me/i);
  expect(aboutSection).toBeInTheDocument();
});

test('renders projects section', () => {
  render(<App />);
  const projectsSection = screen.getByText(/Projects/i);
  expect(projectsSection).toBeInTheDocument();
});

test('renders contact section', () => {
  render(<App />);
  const contactSection = screen.getByText(/Contact/i);
  expect(contactSection).toBeInTheDocument();
}); 