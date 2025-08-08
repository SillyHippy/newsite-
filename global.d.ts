interface ImportMetaEnv {
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly [key: string]: any;
}

export {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {
    __REACT_DEVTOOLS_GLOBAL_HOOK__?: any;
  }
}
