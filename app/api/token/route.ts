interface APITokenInfoResponse {
  success: boolean;
  response: {
    ico: string;
    total: string;
    total_amount: string;
    total_token: number;
    sold: string;
    sold_amount: string;
    sold_token: number;
    progress: number;
    price: number;
    bonus: {
      base: number;
      start: string;
      end: string;
      timezone: string;
      amount: { [key: string]: number };
    };
    start: string;
    end: string;
    timezone: string;
    min: number;
    max: number;
    soft: {
      cap: number;
      amount: string;
      percent: number;
    };
    hard: {
      cap: number;
      amount: string;
      percent: number;
    };
  };
}

export async function GET() {
  try {
    const response = await fetch(`${process.env.TOKEN_INFO_URL}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = (await response.json()) as APITokenInfoResponse;
    return Response.json(result);
  } catch (error) {
    console.error(`Error in GET ${process.env.TOKEN_INFO_URL}:`, error);
    return Response.json(
      { error: "Failed to fetch token information" },
      { status: 500 }
    );
  }
}
