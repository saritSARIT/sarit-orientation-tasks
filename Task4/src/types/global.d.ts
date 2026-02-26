//I have to use this name.
// eslint-disable-next-line unicorn/prevent-abbreviations
interface ImportMetaEnv {
  VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
