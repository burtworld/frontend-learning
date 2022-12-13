import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Locale = 'zh_CN' | 'en_US';

interface State {
  theme: "light" | "dark";
  loading: boolean;
  locale:Locale;
}

const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
const userTheme = localStorage.getItem("theme") as State["theme"];
// 初始化中文环境
const locale = (localStorage.getItem("locale") || 'zh_CN') as Locale;

const initialState: State = {
  theme: userTheme || systemTheme,
  loading: false,
  locale:locale,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setGlobalState(state, action: PayloadAction<Partial<State>>) {
      Object.assign(state, action.payload);
      if (action.payload.theme) {
        const body = document.body;
        if (action.payload.theme === "dark") {
          if (!body.hasAttribute("theme-mode")) {
            body.setAttribute("theme-mode", "dark");
          }
        } else {
          if (body.hasAttribute("theme-mode")) {
            body.removeAttribute("theme-mode");
          }
        }
        localStorage.setItem("theme",action.payload.theme);
      }
    },
  },
});


export const {setGlobalState} = globalSlice.actions;

export default globalSlice.reducer;