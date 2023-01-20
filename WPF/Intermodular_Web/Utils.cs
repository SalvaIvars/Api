using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Media.Animation;

namespace Intermodular_Web
{
    class Utils
    {
        public static void cambiarColorBordeActivado(Border borde, Boolean activo)
        {
            ColorAnimation ca = new ColorAnimation();
            if (activo)
            {

                ca.From = Brushes.Silver.Color;
                ca.To = Brushes.Gold.Color;
            }
            else
            {
                ca.From = Brushes.Gold.Color;
                ca.To = Brushes.Silver.Color;
            }
            ca.Duration = TimeSpan.FromMilliseconds(300);
            Storyboard sb = new Storyboard();
            sb.Children.Add(ca);
            Storyboard.SetTarget(ca, borde);
            Storyboard.SetTargetProperty(ca, new PropertyPath("(Border.BorderBrush).(SolidColorBrush.Color)"));
            sb.Begin();
        }

    }
}
