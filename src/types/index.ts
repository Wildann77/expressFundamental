export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: Record<string, string[] | string>;
}

export type SuccessResponse<T> = Required<Pick<ApiResponse<T>, "success" | "data">>;
export type ErrorResponse = Required<Pick<ApiResponse<never>, "success" | "message">> & { errors?: any };
