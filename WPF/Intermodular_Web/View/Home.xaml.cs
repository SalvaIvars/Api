using Intermodular_Web.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace Intermodular_Web
{
    /// <summary>
    /// Lógica de interacción para Home.xaml
    /// </summary>
    public partial class Home : Window
    {
        Usuario user;
        public Home()
        {
            InitializeComponent();
        }

        public Home(Usuario user)
        {
            InitializeComponent();
            this.user = user;
            mostrarDatosUsuario();
        }

        private void TextBlock_PreviewMouseDown(object sender, MouseButtonEventArgs e)
        {
            Login login = new Login();
            login.ShowDialog();
        }

        private void mostrarDatosUsuario()
        {
            BotonIniciarSesion.Visibility = Visibility.Collapsed;
            NombreUsuario.Content = user.Nombre;
            NombreUsuario.Visibility = Visibility.Visible;
        }
    }
}
