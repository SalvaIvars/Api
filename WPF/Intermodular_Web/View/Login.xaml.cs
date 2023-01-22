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
using System.Windows.Media.Animation;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace Intermodular_Web
{
    /// <summary>
    /// Lógica de interacción para Login.xaml
    /// </summary>
    public partial class Login : Window
    {       

        public Login()
        {
            InitializeComponent();
        }      

        //Eventos del Campo Usuario

        private void textoUsuario_GotFocus(object sender, RoutedEventArgs e)
        {
            textoUsuarioFalso.Visibility = Visibility.Collapsed;
            textoUsuarioReal.Visibility = Visibility.Visible;
            textoUsuarioReal.Focus();
        }

        private void campoUsuario_LostFocus(object sender, RoutedEventArgs e)
        {
            if (textoUsuarioReal.Text == "")
            {
                textoUsuarioReal.Visibility = Visibility.Collapsed;
                textoUsuarioFalso.Visibility = Visibility.Visible;
            }
            else
            {
                textoUsuarioReal.Visibility = Visibility.Visible;
            }
            Utils.cambiarColorBordeActivado(bordeCampoUsuario, false);
        }


        private void textoUsuarioFalso_LostFocus(object sender, RoutedEventArgs e)
        {
            Utils.cambiarColorBordeActivado(bordeCampoUsuario,false);
        }

        private void textoUsuarioReal_GotFocus(object sender, RoutedEventArgs e)
        {
            Utils.cambiarColorBordeActivado(bordeCampoUsuario, true);
        }



        //Eventos del Campo Contrasenya
        private void BotonMostrarContra_Click(object sender, RoutedEventArgs e)
        {
            textoContrasenyaFalso.Visibility = Visibility.Collapsed;
            if (textoContrasenyaVisible.Visibility == Visibility.Visible)
            {
                textoContrasenyaVisible.Visibility = Visibility.Collapsed;
                textoContrasenyaOculto.Visibility = Visibility.Visible;
                textoContrasenyaOculto.Password = textoContrasenyaVisible.Text;
                textoContrasenyaVisible.Text = "";
            }
            else
            {
                textoContrasenyaOculto.Visibility = Visibility.Collapsed;
                textoContrasenyaVisible.Visibility = Visibility.Visible;
                textoContrasenyaVisible.Text = textoContrasenyaOculto.Password;
                textoContrasenyaOculto.Password = "";
            }
        }

        private void textoContrasenyaFalso_GotFocus(object sender, RoutedEventArgs e)
        {
            textoContrasenyaFalso.Visibility = Visibility.Collapsed;
            textoContrasenyaVisible.Visibility = Visibility.Collapsed;
            textoContrasenyaOculto.Visibility = Visibility.Visible;
            textoContrasenyaOculto.Focus();
            Utils.cambiarColorBordeActivado(bordeCampoPassword, true);
        }

        private void textoContrasenyaOculto_LostFocus(object sender, RoutedEventArgs e)
        {
            if (textoContrasenyaVisible.Text == "" && textoContrasenyaOculto.Password == "")
            {
                textoContrasenyaVisible.Visibility = Visibility.Collapsed;
                textoContrasenyaOculto.Visibility = Visibility.Collapsed;
                textoContrasenyaFalso.Visibility = Visibility.Visible;
            }
            Utils.cambiarColorBordeActivado(bordeCampoPassword, false);
        }

        private void textoContrasenyaVisible_LostFocus(object sender, RoutedEventArgs e)
        {
            if (textoContrasenyaVisible.Text == "" && textoContrasenyaOculto.Password == "")
            {
                textoContrasenyaVisible.Visibility = Visibility.Collapsed;
                textoContrasenyaOculto.Visibility = Visibility.Collapsed;
                textoContrasenyaFalso.Visibility = Visibility.Visible;
            }
            Utils.cambiarColorBordeActivado(bordeCampoPassword, false);
        }
        private void textoContrasenyaVisible_GotFocus(object sender, RoutedEventArgs e)
        {
            Utils.cambiarColorBordeActivado(bordeCampoPassword, true);
        }
        private void textoContrasenyaOculto_GotFocus(object sender, RoutedEventArgs e)
        {
            Utils.cambiarColorBordeActivado(bordeCampoPassword, true);
        }

        //Eventos Hipervinculos
        private void Hyperlink_Click(object sender, RoutedEventArgs e)
        {
            Registro registro = new Registro();
            registro.Show();
        }

        //Eventos Boton Login 
        private void Button_Click(object sender, RoutedEventArgs e)
        {
            login();
        }

        private void login()
        {
            if (textoUsuarioReal.Text == "") bordeCampoUsuario.BorderBrush = Brushes.Red;
            if (textoContrasenyaOculto.Password == "" && textoContrasenyaVisible.Text == "") bordeCampoPassword.BorderBrush = Brushes.Red;
            if (textoUsuarioReal.Text == "" || (textoContrasenyaOculto.Password == "" && textoContrasenyaVisible.Text == ""))
            {
                MensajeError.Content = "Es necesario introducir un usuario y contraseña";
                MensajeError.Visibility = Visibility.Visible;
            }
            else
            {
                bordeCampoUsuario.BorderBrush = Brushes.Silver;
                bordeCampoPassword.BorderBrush = Brushes.Silver;
                string pass = textoContrasenyaOculto.Password != "" ? textoContrasenyaOculto.Password : textoContrasenyaVisible.Text;
                (int response,Usuario user) = LlamadasAPI.login(textoUsuarioReal.Text, pass);
                switch (response)
                {
                    case 200:
                        Home ventanaHome = new Home(user);
                        ventanaHome.Show();
                        break;
                    case 401:
                        MensajeError.Content = "No existe ninguna cuenta con esa combinación de usuario y contraseña";
                        MensajeError.Visibility = Visibility.Visible;
                        break;
                }
            }
        }

        private void Image_MouseUp(object sender, MouseButtonEventArgs e)
        {
            this.Close();
        }

        private void Image_MouseUp_1(object sender, MouseButtonEventArgs e)
        {
            this.WindowState = WindowState.Minimized;
        }

        private void Hyperlink_Click_1(object sender, RoutedEventArgs e)
        {
            if (textoUsuarioReal.Text == "")
            {
                bordeCampoUsuario.BorderBrush = Brushes.Red;
                MensajeError.Content = "Es necesario introducir un usuario para recuperar la contraseña";
                MensajeError.Visibility = Visibility.Visible;
            }
            else
            {
                bordeCampoUsuario.BorderBrush = Brushes.Silver;
                MensajeError.Visibility = Visibility.Collapsed;
                if (MessageBox.Show("Enviar un correo de recuperación al usuario: " + textoUsuarioReal.Text + " ?", "Contraseña olvidada", MessageBoxButton.YesNo) == MessageBoxResult.Yes)
                {
                    switch (LlamadasAPI.CorreoRecuperarPass(textoUsuarioReal.Text))
                    {
                        case 200:
                            MessageBox.Show("Correo enviado correctamente");
                            break;
                        case 401:
                            MensajeError.Content = "No existe ninguna cuenta con ese usuario";
                            MensajeError.Visibility = Visibility.Visible;
                            break;
                    }
                }

            }
        }

    }
}
