import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

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
    changeTheme: (state, action: PayloadAction<Theme>) => {
      state.mode = action.payload;
    }
  }
});

export const selectThemeMode = (state: RootState) => state.theme.mode;
export const { changeTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
