import React from 'react';
import { render } from "@testing-library/react-native";

import App from '../App';

beforeEach(() => {
    jest.useFakeTimers();
  });

describe('<App />', () => {
    it('sample test works', () => {
        expect(1).toBe(1);
    });

    // it('renders the correct screen', async () => {
    //         const { getByText } = render(<App />);
    //         await waitFor(() => getByText('HomeScreen'));
    //     });

    // it('renders correctly', () => {
    //     const { toJSON } = render(<App />);
    //     expect(toJSON()).toMatchSnapshot();
    //   });
});