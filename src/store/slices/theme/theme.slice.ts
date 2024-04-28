import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

const THEMES = ['dark', 'light'] as const;
type Theme = (typeof THEMES)[number];

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

      document
        .querySelector('html')
        ?.setAttribute('data-theme', action.payload);
    }
  }
});

export const selectThemeMode = (state: RootState) => state.theme.mode;
export const { changeTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
