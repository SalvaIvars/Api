using Intermodular_Web.Model;
using System;

namespace Intermodular_Web
{
    class LlamadasAPI
    {
        //TODO Hacer llamadas reales a la API

        public static (int response ,Usuario user) login(string user, string password)
        {
            if (user == "a" && password == "b")
            {
                Usuario usuario = new Usuario("a", "pruebaA", "a Apellidos", "a@gmail.com" , "aaa", @"C:\tmp\a.png" , DateTime.Now);
                return (200,usuario);
            }
            else
            {
                return (401,null);
            }
        }

        public static int CorreoRecuperarPass(string user)
        {
            if (user == "a")
            {
                return 200;
            }
            else
            {
                return 401;
            }
        }
    }
}
