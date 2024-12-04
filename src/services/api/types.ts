export type ApiRequest<Data = Object> = (
  ...args: any[]
) => Promise<{ data?: Data; error?: string }>;
