import React from 'react'
import GameBoard from './components/GameBoard.js'
import { Provider } from 'react-redux'
import store from './redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <GameBoard />
    </Provider>
  );
}
