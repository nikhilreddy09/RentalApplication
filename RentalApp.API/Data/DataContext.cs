using RentalApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace RentalApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}
        
        public DbSet<Value> Values{get; set;} //table name is Values

        public DbSet<User> Users{get;set;}
    }
}