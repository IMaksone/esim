type FetcherParams = {
  endpoint: string;
  method?: "GET";
  body?: object;
  headers?: object;
};

export default async function fetcher(
  endpoint: string,
  params?: FetcherParams
) {
  const { method = "GET", body, headers = {} } = params || {};

  const url = process.env.NEXT_PUBLIC_API_URL + endpoint;

  try {
    const params: any = {
      method,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        ...(headers as Headers),
      },
    };

    if (body) {
      params.body = JSON.stringify(body);
    }

    const response = await fetch(url, params);

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Fetcher ERROR " + response.status);
    }
  } catch (error) {
    throw error;
  }
}
