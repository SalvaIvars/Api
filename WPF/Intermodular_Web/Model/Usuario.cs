using System;

namespace Intermodular_Web.Model
{
    public class Usuario
    {
        string user;
        string nombre;
        string apellidos;
        string email;
        string nick;
        string imgUrl;
        DateTime fechaNacimiento;

        public Usuario(string user, string nombre, string apellidos, string email, string nick, string imgUrl, DateTime fechaNacimiento)
        {
            this.User = user;
            this.Nombre = nombre;
            this.Apellidos = apellidos;
            this.Email = email;
            this.Nick = nick;
            this.ImgUrl = imgUrl;
            this.FechaNacimiento = fechaNacimiento;
        }

        public string User { get => user; set => user = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Apellidos { get => apellidos; set => apellidos = value; }
        public string Email { get => email; set => email = value; }
        public string Nick { get => nick; set => nick = value; }
        public string ImgUrl { get => imgUrl; set => imgUrl = value; }
        public DateTime FechaNacimiento { get => fechaNacimiento; set => fechaNacimiento = value; }


    }

}
