import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Game } from '../../App'

type CarrinhoState = {
  // Tipo para o estado
  itens: Game[]
}

const initialState: CarrinhoState = {
  // Objeto para o estado inicial
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState, // O conteúdo dele será o objeto criado (L9)
  reducers: {
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload

      if (state.itens.find((game) => game.id === jogo.id)) {
        // O tipo deste 'itens' estará como 'never[]', portanto é preciso tipá-lo.
        alert('Item já adicionado')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
