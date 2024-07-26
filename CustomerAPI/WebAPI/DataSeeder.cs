using CustomerApi.Repositories;
using CustomerApi.Entities;
using System.Collections.Generic;
using System.Linq;

namespace CustomerApi.WebApi
{
    public static class DataSeeder
    {
        public static void Seed(CustomerContext context)
        {
            if (!context.Customers.Any())
            {
                var customers = new List<Customer>
                {
                    new Customer { FirstName = "John", LastName = "Doe", Email = "john.doe@example.com" },
                    new Customer { FirstName = "Jane", LastName = "Smith", Email = "jane.smith@example.com" },
                    new Customer { FirstName = "Alice", LastName = "Johnson", Email = "alice.johnson@example.com" }
                };

                context.Customers.AddRange(customers);
                context.SaveChanges();
            }
        }
    }
}
