import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Theme = 'dark' | 'light';

interface ThemeState {
  mode: Theme;
}

const initialState: ThemeState = {
  mode: 'light'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<Theme>) => {
      state.mode = action.payload;
    }
  }
});

export const { change } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
