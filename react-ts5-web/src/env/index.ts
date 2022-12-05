const appConfig = {
  isDev: true,
  isMobile: /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? true : false,
};

const themes = {
  light: "https://cdn.jsdelivr.net/npm/antd@4.17.2/dist/antd.css",
  dark: "https://cdn.jsdelivr.net/npm/antd@4.17.2/dist/antd.dark.css",
};

export { appConfig, themes };
