export interface ErrorResponse {
  data: null;
  error: {
    status: number;
    name: string;
    message: string;
    details: Record<string, unknown>;
  };
}

export type QueryStatus = 'pending' | 'rejected' | 'fulfilled' | undefined;
