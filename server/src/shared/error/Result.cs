using Microsoft.AspNetCore.Mvc;

namespace server.src.Shared.error
{
    public class Result : JsonResult
    {
        public Result(string message, int status) : base(message)
        {
            this.StatusCode = status;
        }

        public Result(object value, int status) : base(value)
        {
            this.StatusCode = status;
        }

        public static Result success(int status, params object[] data)
        {
            var response = new { data = data, status = status, success = true };
            return new Result(response, status);
        }

        public static Result fail(int status, string message, object? data)
        {
            var response = new { messageError = message, status = status, success = false, data };
            return new Result(response, status);
        }
    }
}