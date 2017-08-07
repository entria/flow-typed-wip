declare module 'react-native' {
  declare var exports: any;
}
declare module 'react-navigation' {
  declare var exports: any;
}
declare module 'relay-runtime' {
  declare var exports: any;
}
declare module 'redux-persist' {
  declare var exports: any;
}

declare var module: {
  hot: {
    accept(callback: () => void): void,
  },
};