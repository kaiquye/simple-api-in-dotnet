using Microsoft.EntityFrameworkCore;
using server.src.Models.entity;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace server.src.Database.Connection
{
    public class UserMapping : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("User");

            builder.Property(p => p.fist_name)
                .IsUnicode(false)
                .IsRequired(true);

            builder.Property(p => p.last_name)
                .HasMaxLength(100)
                .IsUnicode(false)
                .IsRequired(false);

            builder.Property(p => p.email)
                .IsUnicode(true)
                .IsRequired(true);

            builder.Property(p => p.password)
                .IsUnicode(false)
                .IsRequired(true);

            builder.HasOne(p => p.address)
                .WithOne()
                .HasForeignKey<Address>(x => x.user_id);
        }
    }
}