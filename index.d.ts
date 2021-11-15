declare module 'rxgitcid' {

  export function cid(
    callback: (id: string | 'unknow') => void
  ): void;

  export function cidSync(value: any): String;
}