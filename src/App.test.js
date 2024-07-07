import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  const { getByText, getByTestId } = render(<App />);

  // Zkontrolujeme, že komponenta renderuje správné texty na začátku
  expect(getByText('Klikněte na tlačítko pro dechové cvičení')).toBeInTheDocument();

  // Zkontrolujeme, že Start tlačítko je přítomné
  expect(getByTestId('startBtn')).toBeInTheDocument();

  // Zkontrolujeme, že Stop tlačítko je přítomné
  expect(getByTestId('stopBtn')).toBeInTheDocument();
});

test('starts and stops animation correctly', () => {
  const { getByTestId, getByText } = render(<App />);

  // Klikneme na tlačítko Start
  fireEvent.click(getByTestId('startBtn'));

  // Zkontrolujeme, že se začalo počítat s fází nádech a zobrazením času
  expect(getByText('4 sekund nádech')).toBeInTheDocument();

  // Klikneme na tlačítko Stop
  fireEvent.click(getByTestId('stopBtn'));

  // Zkontrolujeme, že se zastavilo a vrátilo se zpět na výchozí stav
  expect(getByText('Klikněte na tlačítko pro dechové cvičení')).toBeInTheDocument();
});
