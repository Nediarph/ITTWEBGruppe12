using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Dynamic;
using System;

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
        public int SpecificComponentId { get; set; }
        public string ComponentName { get; set; }
        public string CategoryName { get; set; }
        public string ReturnDate { get; set; }
    }

    public class LoanInfo
    {
        public string LoanDate { get; set; }
        public string ReturnDate { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string ComponentName { get; set; }
        public string SpecificComponentId { get; set; }

    }
}
