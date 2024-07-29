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
                    new Customer { FirstName = "John", LastName = "Doe", Email = "john.doe@dynatron.com" },
                    new Customer { FirstName = "Jane", LastName = "Smith", Email = "jane.smith@dynatron.com" },
                    new Customer { FirstName = "Carmela", LastName = "Bumgarner", Email = "carmela.b@dynatron.com" },
                    new Customer { FirstName = "Judith", LastName = "Kimbrell", Email = "jkimbrell@dynatron.com" },
                    new Customer { FirstName = "Christina", LastName = "Roe", Email = "christina.roe@dynatron.com" },
                    new Customer { FirstName = "Alice", LastName = "Johnson", Email = "alice.johnson@dynatron.com" },
                    new Customer { FirstName = "Virginia", LastName = "Vazquez", Email = "virginia.vazquez@dynatron.com" },
                    new Customer { FirstName = "Robert", LastName = "Lau", Email = "robert.lau@dynatron.com" },
                    new Customer { FirstName = "Kayla", LastName = "Carl", Email = "kayla.carl@dynatron.com" },
                    new Customer { FirstName = "Amanda", LastName = "Davis", Email = "ananda.davis@dynatron.com" },

                    new Customer { FirstName = "Ben", LastName = "Corman", Email = "ben.corman@dynatron.com" },
                    new Customer { FirstName = "Karen", LastName = "Budd", Email = "karen.budd@dynatron.com" },
                    new Customer { FirstName = "Homer", LastName = "Doe", Email = "homer.doe@dynatron.com" },
                    new Customer { FirstName = "Deanna", LastName = "Elmore", Email = "deanna.elmore@dynatron.com" },
                    new Customer { FirstName = "Cheryl", LastName = "Harris", Email = "alice.johnson@dynatron.com" },
                    new Customer { FirstName = "Michael", LastName = "Doe", Email = "michael.doe@dynatron.com" },
                    new Customer { FirstName = "Tena", LastName = "McHenri", Email = "tena.mchenri@dynatron.com" },
                    new Customer { FirstName = "Casey", LastName = "Gallo", Email = "casey.gallo@dynatron.com" },
                    new Customer { FirstName = "Kim", LastName = "Butrell", Email = "kim.butrell@dynatron.com" },
                    new Customer { FirstName = "Karen", LastName = "Smith", Email = "karen.smith@dynatron.com" },
                    new Customer { FirstName = "Hank", LastName = "Voight", Email = "hank.voight@dynatron.com" }
                };

                context.Customers.AddRange(customers);
                context.SaveChanges();
            }
        }
    }
}
