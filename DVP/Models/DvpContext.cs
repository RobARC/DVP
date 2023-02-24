using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace DVP.Models;

public partial class DvpContext : DbContext
{
    public DvpContext(DbContextOptions<DvpContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Persona> Personas { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Persona>()
            .Property(u => u.NombresApellidos)
            .HasComputedColumnSql("[Nombres] + ' ' + [Apellidos]");

        modelBuilder.Entity<Persona>()
           .Property(u => u.NumIdTipoId)
           .HasComputedColumnSql("[NumeroIdentificacion] + ' ' + [TipoIdentificacion]");
    }

}