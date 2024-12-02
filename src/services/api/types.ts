export type ApiRequest = (
  ...args: any[]
) => Promise<{ data?: Object | Array<any>; error?: string }>;
