using System;
using System.Linq;

namespace Opligatorisk_opgave_1.DAL
{
    public class WriteEmbeddedStockRepository : IWriteEmbeddedStockRepository
    {
        private EmbeddedStockDbEntities dbContext;
        public WriteEmbeddedStockRepository(EmbeddedStockDbEntities context)
        {
            dbContext = context;
        }
        public void AddNewCategory(Category category)
        {
            dbContext.Categories.Add(category);
            dbContext.SaveChanges();
        }

        public void RemoveCategory(int catId)
        {
            var itemToRemove = dbContext.Categories.SingleOrDefault(x => x.CategoryId == catId);

            if (itemToRemove != null)
            {
                dbContext.Categories.Remove(itemToRemove);
                dbContext.SaveChanges();
            }
        }

        public void UpdateCategory(int catId, Category category)
        {
            var itemToUpdate = dbContext.Categories.SingleOrDefault(x => x.CategoryId == catId);
            if (itemToUpdate != null)
            {
                itemToUpdate = category;
                dbContext.SaveChanges();
            }
        }

        public void AddNewComponent(Component comp)
        {
            dbContext.Components.Add(comp);
            dbContext.SaveChanges();
        }

        public void AddNewSpecificComponent(SpecificComponent specComp)
        {
            dbContext.SpecificComponents.Add(specComp);
            dbContext.SaveChanges();
        }

        public void UpdateSpecificComponent(int specId, SpecificComponent specComp)
        {
            var itemToUpdate = dbContext.SpecificComponents.SingleOrDefault(x => x.SpecCompId == specId);
            if (itemToUpdate != null)
            {
                itemToUpdate = specComp;
                dbContext.SaveChanges();
            }
        }

        public void UpdateLoanInformation(int loanId, LoanInformation loan)
        {
            var itemToUpdate = dbContext.LoanInformation.SingleOrDefault(x => x.LoanId == loanId);
            if (itemToUpdate != null)
            {
                itemToUpdate = loan;
                dbContext.SaveChanges();
            }
        }

        public void UpdateComponent(int compId, Component component)
        {
            var itemToUpdate = dbContext.Components.SingleOrDefault(x => x.ComponentId == compId);
            if (itemToUpdate != null)
            {
                itemToUpdate = component;
                dbContext.SaveChanges();
            }
        }

        public void RemoveComponent(int compId)
        {
            var itemToRemove = dbContext.Components.SingleOrDefault(x => x.ComponentId == compId);

            if (itemToRemove != null)
            {
                dbContext.Components.Remove(itemToRemove);
                dbContext.SaveChanges();
            }
        }

        public void RemoveSpecificComponent(int specCompId)
        {
            var itemToRemove = dbContext.SpecificComponents.SingleOrDefault(x => x.SpecCompId == specCompId);

            if (itemToRemove != null)
            {
                dbContext.SpecificComponents.Remove(itemToRemove);
                dbContext.SaveChanges();
            }

        }

        public void AddLoanInformation(LoanInformation loan)
        {
            dbContext.LoanInformation.Add(loan);
            dbContext.SaveChanges();
        }

        public void RemoveLoanInformation(int loanId)
        {
            var itemToRemove = dbContext.LoanInformation.SingleOrDefault(x => x.LoanId == loanId);

            if (itemToRemove != null)
            {
                dbContext.LoanInformation.Remove(itemToRemove);
                dbContext.SaveChanges();
            }
        }
    }
}