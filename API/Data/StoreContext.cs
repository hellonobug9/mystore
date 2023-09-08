using API.Entities;
using Microsoft.EntityFrameworkCore;

public class StoreContext : DbContext
{
    public DbSet<Product> Products { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(CONNECTION_STRING);
        base.OnConfiguring(optionsBuilder);
    }

    private const string CONNECTION_STRING = "Host=localhost;Port=5432;" +
                                             "Username=chuongtran;" +
                                             "Password=i@mChuong47;" +
                                             "Database=postgres";
}

