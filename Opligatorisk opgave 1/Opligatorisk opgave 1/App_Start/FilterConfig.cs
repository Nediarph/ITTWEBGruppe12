using System.Web;
using System.Web.Mvc;

namespace Opligatorisk_opgave_1
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
