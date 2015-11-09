using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Opligatorisk_opgave_1.Startup))]
namespace Opligatorisk_opgave_1
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
