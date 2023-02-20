using FluentValidation.AspNetCore;
using Microsoft.EntityFrameworkCore;
using server.src.common.filters;
using server.src.Database.Connection;
using server.src.Database.Repository;
using server.src.Database.Repository.structure;
using server.src.Services;
using server.src.Services.structure;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ConnectionDb>(opts => opts.UseNpgsql(builder.Configuration.GetConnectionString("WebApiDatabase")));
builder.Services.AddScoped<IUserRep, UserRep>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddControllers((x => x.Filters.Add<ExceptionFilters>())).AddFluentValidation(config =>
{
    config.RegisterValidatorsFromAssemblies(AppDomain.CurrentDomain.GetAssemblies());
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
