using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DVP.Models;

public partial class Persona
{
    public int Id { get; set; }

    public string Nombres { get; set; } = null!;

    public string Apellidos { get; set; } = null!;

    public string? NumeroIdentificacion { get; set; }

    public string Email { get; set; } = null!;

    public string? TipoIdentificacion { get; set; }

    public DateTime? FechaCreacion { get; set; }

    public string? Password { get; set; }

   
    public string? NumIdTipoId { get; private set; }
  
    public string? NombresApellidos { get; private set; }
}
