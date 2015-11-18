using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Dynamic;

namespace Opligatorisk_opgave_1.Models
{
    public class ComponentTable
    {
        public int ComponentId { get; set; }
        public string ComponentName { get; set; }
        [DefaultValue("")]
        public string CategoryName { get; set; }
        public int Amount { get; set; }
    }

    public class DetailsTable
    {
        public int ComponentId { get; set; }
        public string ComponentName { get; set; }
        [DefaultValue("")]
        public string CategoryName { get; set; }
        public string ReturnDate { get; set; }
    }
}
