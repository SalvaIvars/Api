using Microsoft.Win32;
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
    /// Lógica de interacción para Registro.xaml
    /// </summary>
    public partial class Registro : Window
    {
        String urlImage;
        public Registro()
        {
            InitializeComponent();
        }

        private void Image_MouseUp(object sender, MouseButtonEventArgs e)
        {
            this.Close();
        }

        private void Image_MouseUp_1(object sender, MouseButtonEventArgs e)
        {
            this.WindowState = WindowState.Minimized;
        }

        private void Border_MouseUp(object sender, MouseButtonEventArgs e)
        {
            OpenFileDialog openFileDialog = new OpenFileDialog();
            if (openFileDialog.ShowDialog() == true)
            {
                try
                {
                    urlImage = openFileDialog.FileName;
                    ImageSource imageSource = new BitmapImage(new Uri(urlImage));
                    CuadroImagenVacia.Visibility = Visibility.Collapsed;
                    CuadroImagen.Visibility = Visibility.Visible;
                    ImagenUsuario.Source = imageSource;
                }
                catch
                {
                    urlImage = "";
                    MessageBox.Show("Fichero de imagen no válido");
                }
            }
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            //Revisar que todos los campos tengan dato
            //Crear objecto usuario
            if (TextoNombre.Text == "") BordeTextoNombre.BorderBrush = Brushes.Red;

            if (TextoNombre.Text == "" || true )//añadir resto de campos)
            {
                //mostrar texto campos obligatorios
            }
        } 


        private void TextoNombre_GotFocus(object sender, RoutedEventArgs e)
        {
            Utils.cambiarColorBordeActivado(BordeTextoNombre, true);
        }

        private void TextoNombre_LostFocus(object sender, RoutedEventArgs e)
        {
            Utils.cambiarColorBordeActivado(BordeTextoNombre, false);
        }
    }
}
