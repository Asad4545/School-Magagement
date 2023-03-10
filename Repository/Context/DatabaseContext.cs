using Microsoft.EntityFrameworkCore;
using Models;

namespace Repository
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) :base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            modelBuilder.Entity<Student>(s => {
                s.HasKey(s => s.StudentId);
                s.Property(s => s.StudentId).ValueGeneratedOnAdd();
            });

            modelBuilder.Entity<Teacher>(t => {
                t.HasKey(t => t.TeacherId);
                t.Property(t => t.TeacherId).ValueGeneratedOnAdd();
            });

            modelBuilder.Entity<TeacherAddress>(t => {
                t.HasKey(t => t.AddressId);
                t.Property(t => t.AddressId).ValueGeneratedOnAdd();
            });

            modelBuilder.Entity<StudentAddress>(s => {
                s.HasKey(s => s.AddressId);
                s.Property(s => s.AddressId).ValueGeneratedOnAdd();
            });

            modelBuilder.Entity<TeacherAttendance>(t => {
                t.HasKey(t => t.AttendanceId);
                t.Property(t => t.AttendanceId).ValueGeneratedOnAdd();
            });

            modelBuilder.Entity<StudenceAttendance>(s => {
                s.HasKey(s => s.AttendanceId);
                s.Property(s => s.AttendanceId).ValueGeneratedOnAdd();
            });

            modelBuilder.Entity<Classes>(c => {
                c.HasKey(c => c.Id);
                c.Property(c => c.Id).ValueGeneratedOnAdd();
            });

            modelBuilder.Entity<Admin>(a => {
                a.HasKey(a => a.Admin_Id);
                a.Property(a => a.Admin_Id).ValueGeneratedOnAdd();
            });

            modelBuilder.Entity<Fees>(f => {
                f.HasKey(f => f.Fee_Id);
                f.Property(f => f.Fee_Id).ValueGeneratedOnAdd();
            });


            // Configure one-to-one relationship between Student and StudentAddress

            modelBuilder.Entity<Student>()
                .HasOne<StudentAddress>(s => s.studentAddress)
                .WithOne(ad => ad.student)
                .HasForeignKey<StudentAddress>(ad => ad.StudentId);

            // Configure one-to-one relationship between Teacher and TeacherAddress
            modelBuilder.Entity<Teacher>()
                .HasOne<TeacherAddress>(t => t.teacherAddress)
                .WithOne(ad => ad.teacher)
                .HasForeignKey<TeacherAddress>(ad => ad.TeacherId);



            // Configure one-to-Many relationship between Student and StudentAttendance
            modelBuilder.Entity<Student>()
                .HasMany<StudenceAttendance>(sa => sa.studenceAttendances)
                .WithOne(a => a.student)
                .HasForeignKey(s => s.StudentId);

            // Configure one-to-Many relationship between Teacher and TeacherAttendance
            modelBuilder.Entity<Teacher>()
                .HasMany<TeacherAttendance>(ta => ta.teacherAttendances)
                .WithOne(t => t.teacher)
                .HasForeignKey(t => t.TeacherId);

            // Configure one-to-Many relationship between Student and Fees
            modelBuilder.Entity<Student>()
                .HasMany<Fees>(f => f.Fees)
                .WithOne(fs => fs.student)
                .HasForeignKey(f => f.StudentId);


            modelBuilder.Entity<Classes>()
               .HasMany<Student>(s => s.Students)
               .WithOne(fs => fs.classes)
               .HasForeignKey(f => f.Id);

            modelBuilder.Entity<Classes>()
               .HasMany<Teacher>(s => s.Teachers)
               .WithOne(fs => fs.classes)
               .HasForeignKey(f => f.Id);

            //DATABASE Validation using Fluent API

            modelBuilder.Entity<Student>(s =>
            {
                s.Property(s => s.StudentName).IsRequired().HasMaxLength(50);
                s.Property(s => s.Gender).IsRequired().HasMaxLength(8);
                s.Property(s => s.Email).IsRequired().HasMaxLength(100)
                .HasAnnotation("RegularExpression", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
                s.Property(s => s.Password).IsRequired()
                .HasMaxLength(20)
                .HasAnnotation("RegularExpression", "^[a-zA-Z0-9]{8,20}$")
                .HasAnnotation("Description", "Password must be 8 to 20 characters long and contain only alphanumeric characters.");
                s.Property(s => s.Phone).IsRequired().HasMaxLength(11).IsUnicode(false);
                s.Property(s => s.DOB).IsRequired();
            });

            modelBuilder.Entity<Teacher>(t =>
            {
                t.Property(t => t.TeacherName).IsRequired().HasMaxLength(50);
                t.Property(t => t.Gender).IsRequired().HasMaxLength(8);
                t.Property(t => t.Email).IsRequired().HasMaxLength(100)
                .HasAnnotation("RegularExpression", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
                t.Property(s => s.Password).IsRequired()
                .HasMaxLength(20)
                .HasAnnotation("RegularExpression", "^[a-zA-Z0-9]{8,20}$")
                .HasAnnotation("Description", "Password must be 8 to 20 characters long and contain only alphanumeric characters.");
                t.Property(t => t.Phone).IsRequired().HasMaxLength(11);
                t.Property(t => t.DOB).IsRequired()
                .HasConversion(
                 d => d.ToString("yyyyy-MM-dd"),
                 d=>DateTime.Parse(d));
            });

            modelBuilder.Entity<Admin>(a =>
            {
                a.Property(a => a.Admin_Name).IsRequired().HasMaxLength(50);
                a.Property(t => t.Admin_Email).IsRequired().HasMaxLength(100)
                .HasAnnotation("RegularExpression", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
                a.Property(s => s.Password).IsRequired()
                .HasMaxLength(20)
                .HasAnnotation("RegularExpression", "^[a-zA-Z0-9]{8,20}$")
                .HasAnnotation("Description", "Password must be 8 to 20 characters long and contain only alphanumeric characters.");
                a.Property(t => t.Admin_Phone).IsRequired().HasMaxLength(11);
            });

            modelBuilder.Entity<StudentAddress>(sa =>
            {
                sa.Property(s => s.Address).IsRequired().HasMaxLength(50);
                sa.Property(s => s.City).IsRequired().HasMaxLength(20);
                sa.Property(s => s.State).IsRequired().HasMaxLength(20);
            });

            modelBuilder.Entity<TeacherAddress>(ta =>
            {
                ta.Property(s => s.Address).IsRequired().HasMaxLength(50);
                ta.Property(s => s.City).IsRequired().HasMaxLength(20);
                ta.Property(s => s.State).IsRequired().HasMaxLength(20);
            });

            modelBuilder.Entity<StudenceAttendance>(sa =>
            {
                sa.Property(s => s.Date).IsRequired()
               .HasConversion(
               v => v.ToString("yyyy-MM-dd"),
               v => DateTime.Parse(v));
                sa.Property(s => s.AttendanceStatus).IsRequired().HasMaxLength(15);
            });

            modelBuilder.Entity<TeacherAttendance>(ta =>
            {
                ta.Property(t => t.Date).IsRequired()
               .HasConversion(
               v => v.ToString("yyyy-MM-dd"),
               v => DateTime.Parse(v));
                ta.Property(s => s.AttendanceStatus).IsRequired().HasMaxLength(15);
            });
        }

        public DatabaseContext() : base()
        {

        }

        public DbSet<Student> Students { get; set; }
        public DbSet<StudentAddress> studentAddresses { get; set; }
        public DbSet<Teacher> teachers { get; set; }
        public DbSet<TeacherAddress> teacherAddresses { get; set; }
        public DbSet<StudenceAttendance> studenceAttendances { get; set; }
        public DbSet<TeacherAttendance> teacherAttendances  { get; set; }
        public DbSet<Fees> fees { get; set; }
        public DbSet<Admin> admins { get; set; }
        public DbSet<Classes> classes { get; set; }
    }
}
