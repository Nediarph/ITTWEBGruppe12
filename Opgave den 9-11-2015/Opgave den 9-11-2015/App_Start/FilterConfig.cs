using System.Web;
using System.Web.Mvc;

namespace Opgave_den_9_11_2015
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
