using Microsoft.AspNetCore.Mvc;

namespace trabalhandoFilterException.src.Model
{
    public class Result: JsonResult
    {
        public Result(string message, int status): base(message)
        {
            this.StatusCode = status;
        }

        public Result(object value, int status): base(value)
        {
            this.StatusCode = status;
        }

        public static Result success(int status, params object[] value)
        {
            var response = new {data=value, status, sucess=true};
            return new Result(response, status);
        }

        public static Result fail(int status, string message)
        {
            var response = new {error=message, status, sucess=false};
            return new Result(response, status);
        }
    }  
}