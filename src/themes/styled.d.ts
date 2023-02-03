import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      accent: string;
      background: string;
      text: string;
      secondary: string;
    };
  }
}
