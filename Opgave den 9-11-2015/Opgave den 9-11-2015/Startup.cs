using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Opgave_den_9_11_2015.Startup))]
namespace Opgave_den_9_11_2015
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
