import React from 'react'
import {fireEvent, render, waitFor} from '@testing-library/react-native'
import Search from "../screens/Explore/components/SearchBar";
import { NativeBaseProvider } from 'native-base';

const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };

  
test('Test SearchBar', async () => {
  const onChangeText = jest.fn();
  const {getByTestId, getByText, queryByTestId, toJSON} = render(<NativeBaseProvider initialWindowMetrics={inset}>
      <Search onChangeText={onChangeText} />
  </NativeBaseProvider>)

  const inputVal = 'Apple inc.'

  const input = getByTestId('searchbar-input')
  fireEvent.changeText(input, inputVal)

  expect(onChangeText).toHaveBeenCalledWith(inputVal)
  expect(toJSON()).toMatchSnapshot()
})