export interface IMockResponse {
  url: string;
  requestBody?: string;
  response: string;
  requestId?: string;
  status?: number;
  ok?: boolean;
  statusText?: string;
  method: string;
}