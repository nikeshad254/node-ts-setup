class ApiError extends Error {
  constructor(
    public staticCode: number,
    public message: string = "Something Went Wrong",
    public errors: any[] = [],
    public stack: string = ""
  ) {
    super(message);

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
