using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace server.src.common.filters
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
            })
            { StatusCode = 500 };
        }
    }
}