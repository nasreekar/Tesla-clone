import React from 'react';
import { render } from "@testing-library/react-native";
import BrowserScreen from '../screens/BrowserScreen';

beforeEach(() => {
    jest.useFakeTimers();
  });
  

describe('<BrowserScreen />', () => {
    let snapshot;

    const mockedParams = {
        route: { params: { redirectUrl: 'www.google.com' } },
        navigation: ''
      };

    it('renders correctly', () => {
        snapshot = render(<BrowserScreen {...mockedParams} />);
        expect(snapshot.toJSON()).toMatchSnapshot();
      });

      it('should set webview uri', () => {
        snapshot = render(<BrowserScreen {...mockedParams} />);
        const child = snapshot.toJSON().children[0].children[0].props.source;
        expect(child.uri).toEqual('www.google.com');
      });
});