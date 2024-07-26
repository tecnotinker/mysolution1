using CustomerApi.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace CustomerApi.Repositories
{
    public class CustomerContext : DbContext
    {
        public CustomerContext(DbContextOptions<CustomerContext> options) : base(options) { }

        public DbSet<Customer> Customers { get; set; }
    }
}
