using Microsoft.EntityFrameworkCore;

namespace server.src.Database.Connection
{
    public class ConnectionDb : DbContext
    {
        public ConnectionDb(DbContextOptions<ConnectionDb> connection) : base(connection)
        { }
    }
}