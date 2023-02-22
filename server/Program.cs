using FluentValidation.AspNetCore;
using Microsoft.EntityFrameworkCore;
using server.src.Database.Connection;
using server.src.Database.Repository;
using server.src.Database.Repository.structure;
using server.src.Services;
using server.src.Services.structure;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Text;
using Microsoft.OpenApi.Models;
using server.src.Shaerd.filters;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ConnectionDb>(opts => opts.UseNpgsql(builder.Configuration.GetConnectionString("WebApiDatabase")));
builder.Services.AddScoped<IUserRep, UserRep>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddControllers((x => x.Filters.Add<ExceptionFilters>())).AddFluentValidation(config =>
{
    config.RegisterValidatorsFromAssemblies(AppDomain.CurrentDomain.GetAssemblies());
});


byte[] secret = Encoding.ASCII.GetBytes("my-secret-with-128bist.my-secret-with-128bist.my-secret-with-128bist.");
builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(x =>
{
    x.RequireHttpsMetadata = false; // https 
    x.SaveToken = true;
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(secret),
        ValidateIssuer = false,
        ValidateAudience = false
    };
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAuthorization();

builder.Services.AddSwaggerGen(option =>
{
    option.SwaggerDoc("v1", new OpenApiInfo { Title = "Demo API", Version = "v1" });
    option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please enter a valid token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "Bearer"
    });
    option.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type=ReferenceType.SecurityScheme,
                    Id="Bearer"
                }
            },
            new string[]{}
        }
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
