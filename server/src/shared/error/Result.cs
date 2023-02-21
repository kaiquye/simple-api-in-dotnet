using Microsoft.AspNetCore.Mvc;
using server.src.Models.entity;

namespace server.src.common.error
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

        public static Result success<T>(int status, params T[] value)
        {
            var response = new { data = value, status, sucess = true };
            return new Result(response, status);
        }

        public static Result fail<T>(int status, T value)
        {
            var response = new { error = value, status, sucess = false };
            return new Result(response, status);
        }
    }
}