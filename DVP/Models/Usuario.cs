﻿using System;
using System.Collections.Generic;

namespace DVP.Models;

public partial class Usuario
{
    public int Id { get; set; }

    
    public string Usuario1 { get; set; } = null!;

    public string Pass { get; set; } = null!;

    public string? FechaCreacion { get; set; }
}
