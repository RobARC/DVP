﻿using System.ComponentModel.DataAnnotations;

namespace DVP.Models
{
    public class UserInfo
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }

    }
}
