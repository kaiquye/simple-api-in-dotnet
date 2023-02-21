using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using server.src.Models.entity;

namespace server.src.Database.Mappings
{
    public class AddressMapping : IEntityTypeConfiguration<Address>
    {
        public void Configure(EntityTypeBuilder<Address> builder)
        {
            builder.ToTable("Address");

            builder.Property(p => p.city)
                .IsUnicode(false)
                .IsRequired(true);

            builder.Property(p => p.street)
                .HasMaxLength(100)
                .IsUnicode(false)
                .IsRequired(true);

            builder.Property(p => p.zip_code)
                .IsUnicode(false)
                .IsRequired(true);

        }
    }
}