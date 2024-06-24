// import { STATUS_CODES } from "http";

enum StatusCodes {
    NOT_FOUND= 404,
    BAD_REQUEST= 400,
    SERVER_ERROR= 500,
    FORBIDDEN = 403
}

class ApiError extends Error {
    statusCode: number;
  
    constructor(statusCode: number, message: string) {
      super(message);
  
      this.statusCode = statusCode;
    }

    ErrorMessage(error:string){
        return {
            statusCode: this.statusCode,
            body: JSON.stringify({
            error: error
            }),
            };
    }
  }

export const NotFoundError = new ApiError(StatusCodes.NOT_FOUND, 'Not found')
  
export const ServerError = new ApiError(StatusCodes.SERVER_ERROR, 'Internal Server Error')

export const BadRequestError = new ApiError(StatusCodes.BAD_REQUEST, 'Bad Request')

export const ForbiddenError = new ApiError(StatusCodes.FORBIDDEN, 'Forbidden')