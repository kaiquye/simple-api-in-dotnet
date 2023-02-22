using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace server.src.Shaerd.filters
{
    public class ExceptionFilters : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            context.ExceptionHandled = true;
            context.Result = new JsonResult(new
            {
                message = "internal error. Contact an adm.",
                success = false,
                code = "error.internal-error"
            })
            { StatusCode = 500 };
        }
    }
}