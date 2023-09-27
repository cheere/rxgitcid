declare module 'rxgitcid' {
  interface DefCidRes extends Dict<string> {
    cid?: string;
    log?: string;
    gitDate?: string;
  }
  // -----------------------
  export function pathCid(
    path: string | null,
    callback: (id: string | 'unknow') => void
  ): void;

  // -----------------------
  export function cid(
    callback: (id: string | 'unknow') => void
  ): void;

  export function cidSync(path: string | null): String;

  // -----------------------
  export function cidObject(
    callback: (res: DefCidRes) => void
  ): void;

  export function cidObjectSync(path: string | null): DefCidRes;
}