import React from 'react';
import { render } from "@testing-library/react-native";
import Header from '../../components/Header';

beforeEach(() => {
    jest.useFakeTimers();
  });

describe('<Header />', () => {
    it('renders correctly', () => {
        const { toJSON } = render(<Header />);
        expect(toJSON()).toMatchSnapshot();
      });

    it('contains Tesla logo', () => {
        const { getByTestId } = render(<Header />);
        getByTestId('Tesla logo')
    });

    it('contains Menu Icon', () => {
        const { getByTestId } = render(<Header />);
        getByTestId('Menu Icon')
    });
});