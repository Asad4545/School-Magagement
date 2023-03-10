using Bussines.Interfaces;
using Bussines;
using Microsoft.EntityFrameworkCore;
using Repository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DatabaseContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"), b=>b.MigrationsAssembly("SchoolSystem")));
builder.Services.AddScoped<IStudentManager, StudentManager>();
builder.Services.AddScoped<ITeacherManager, TeacherManager>();
builder.Services.AddScoped<IClasseManager, ClassManager>();
builder.Services.AddScoped<IAttendance, AttendanceManager>();
builder.Services.AddScoped<IFeeManager, FeeManager>();
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
