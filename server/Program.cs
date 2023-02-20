using FluentValidation.AspNetCore;
using Microsoft.EntityFrameworkCore;
using server.src.Database.Connection;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ConnectionDb>(opts => opts.UseNpgsql(builder.Configuration.GetConnectionString("WebApiDatabase")));
builder.Services.AddControllers().AddFluentValidation(config => {
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
