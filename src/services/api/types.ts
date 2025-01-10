export type ApiRequest<Data = object> = (
  ...args: any[]
) => Promise<{ data?: Data; error?: string }>;
