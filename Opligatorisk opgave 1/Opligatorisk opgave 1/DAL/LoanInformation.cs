//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Opligatorisk_opgave_1.DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class LoanInformation
    {
        public int LoanId { get; set; }
        public System.DateTime LoanDate { get; set; }
        public System.DateTime ReturnDate { get; set; }
        public string LoaneeName { get; set; }
        public string LoaneeEmail { get; set; }
        public Nullable<int> IsEmailSent { get; set; }
        public int SpecCompId { get; set; }
    
        public virtual SpecificComponent SpecificComponent { get; set; }
    }
}
