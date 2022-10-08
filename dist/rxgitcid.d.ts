declare module 'rxgitcid' {

  export function cid(
    callback: (id: string | 'unknow') => void
  ): void;

  export function pathCid(
    path: string | null,
    callback: (id: string | 'unknow') => void
  ): void;

  export function cidSync(path: string | null): String;
}