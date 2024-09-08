export const ERROR_NAME = {
  UNAUTHORIZED: "Unauthorized access",
  INTERNAL_SERVER_ERROR: "Internal server error",
  BAD_REQUEST: "Bad request",
  NOT_FOUND: "Resource not found",
  FORBIDDEN: "Access forbidden",
  CONFLICT: "Resource conflict",
  UNPROCESSABLE_ENTITY: "Unprocessable entity",
  TOO_MANY_REQUESTS: "Too many requests",
  SERVICE_UNAVAILABLE: "Service unavailable",
  GATEWAY_TIMEOUT: "Gateway timeout",
  VALIDATION_ERROR: "Validation error",
  AUTHENTICATION_FAILED: "Authentication failed",
  INSUFFICIENT_PERMISSIONS: "Insufficient permissions",
  REQUEST_TIMEOUT: "Request timeout",
  UNSUPPORTED_MEDIA_TYPE: "Unsupported media type",
  METHOD_NOT_ALLOWED: "Method not allowed",
  DATABASE_ERROR: "Database error",
  NETWORK_ERROR: "Network error",
  RESOURCE_GONE: "Resource gone",
  PRECONDITION_FAILED: "Precondition failed",
};

export const ERROR_CODE = {
  UNAUTHORIZED: 401,
  INTERNAL_SERVER_ERROR: 500,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  FORBIDDEN: 403,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  VALIDATION_ERROR: 422,
  AUTHENTICATION_FAILED: 401,
  INSUFFICIENT_PERMISSIONS: 403,
  REQUEST_TIMEOUT: 408,
  UNSUPPORTED_MEDIA_TYPE: 415,
  METHOD_NOT_ALLOWED: 405,
  DATABASE_ERROR: 500,
  NETWORK_ERROR: 502,
  RESOURCE_GONE: 410,
  PRECONDITION_FAILED: 412,
};

export class CustomError extends Error {
  name: keyof typeof ERROR_CODE;
  code: number;
  error: unknown;
  constructor(name: keyof typeof ERROR_CODE, message: string, error?: unknown) {
    super(message);
    this.code = ERROR_CODE[name];
    this.name = name;
    this.error = error;
  }
}
