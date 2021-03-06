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
    
    public partial class Component
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Component()
        {
            this.SpecificComponents = new HashSet<SpecificComponent>();
        }
    
        public int ComponentId { get; set; }
        public string ComponentName { get; set; }
        public string Description { get; set; }
        public Nullable<int> CompCategory { get; set; }
        public string Datasheet { get; set; }
        public byte[] Image { get; set; }
        public string ManufacturerLink { get; set; }
    
        public virtual Category Category { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SpecificComponent> SpecificComponents { get; set; }
    }
}
