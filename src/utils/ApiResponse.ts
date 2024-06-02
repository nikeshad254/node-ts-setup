class ApiResponse {
  constructor(
    public statusCode: number,
    public data: any,
    public message: string = "Success"
  ) {
    this.message = this.statusCode < 400 ? "Success" : "Failed";
  }
}

export { ApiResponse };
