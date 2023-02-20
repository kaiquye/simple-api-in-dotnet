using Microsoft.EntityFrameworkCore;
using server.src.Models.entity;
using server.src.Models.entity.structure;

namespace server.src.Database.Connection
{
    public class ConnectionDb : DbContext
    {
        public ConnectionDb(DbContextOptions<ConnectionDb> connection) : base(connection)
        { }
        public DbSet<User> users { get; set; }
        public DbSet<Address> address { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        { }

        public override int SaveChanges()
        {
            AddTimestamps();
            return base.SaveChanges();
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        {
            AddTimestamps();
            return base.SaveChangesAsync();
        }

        private void AddTimestamps()
        {
            var entities = ChangeTracker.Entries()
                .Where(x => x.Entity is EntityBase && (x.State == EntityState.Added || x.State == EntityState.Modified));

            foreach (var entity in entities)
            {
                var now = DateTime.UtcNow;

                if (entity.State == EntityState.Added)
                {
                    ((EntityBase)entity.Entity).CreatedAt = now;
                }
                ((EntityBase)entity.Entity).UpdatedAt = now;
            }
        }
    }
}