﻿#pragma checksum "..\..\Login.xaml" "{8829d00f-11b8-4213-878b-770e8597ac16}" "F03CE076C1D3C7985AB7C5DEA913AD251F15957FFF176B8A51E9138F5618D228"
//------------------------------------------------------------------------------
// <auto-generated>
//     Este código fue generado por una herramienta.
//     Versión de runtime:4.0.30319.42000
//
//     Los cambios en este archivo podrían causar un comportamiento incorrecto y se perderán si
//     se vuelve a generar el código.
// </auto-generated>
//------------------------------------------------------------------------------

using Intermodular_Web;
using System;
using System.Diagnostics;
using System.Windows;
using System.Windows.Automation;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Markup;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Effects;
using System.Windows.Media.Imaging;
using System.Windows.Media.Media3D;
using System.Windows.Media.TextFormatting;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Shell;


namespace Intermodular_Web {
    
    
    /// <summary>
    /// Login
    /// </summary>
    public partial class Login : System.Windows.Window, System.Windows.Markup.IComponentConnector {
        
        
        #line 49 "..\..\Login.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Image cerrarVentana;
        
        #line default
        #line hidden
        
        
        #line 59 "..\..\Login.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Border bordeCampoUsuario;
        
        #line default
        #line hidden
        
        
        #line 70 "..\..\Login.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox textoUsuarioFalso;
        
        #line default
        #line hidden
        
        
        #line 71 "..\..\Login.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox textoUsuarioReal;
        
        #line default
        #line hidden
        
        
        #line 77 "..\..\Login.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Border bordeCampoPassword;
        
        #line default
        #line hidden
        
        
        #line 88 "..\..\Login.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Button BotonMostrarContra;
        
        #line default
        #line hidden
        
        
        #line 92 "..\..\Login.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox textoContrasenyaFalso;
        
        #line default
        #line hidden
        
        
        #line 93 "..\..\Login.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox textoContrasenyaVisible;
        
        #line default
        #line hidden
        
        
        #line 94 "..\..\Login.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.PasswordBox textoContrasenyaOculto;
        
        #line default
        #line hidden
        
        
        #line 98 "..\..\Login.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Label MensajeError;
        
        #line default
        #line hidden
        
        private bool _contentLoaded;
        
        /// <summary>
        /// InitializeComponent
        /// </summary>
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "4.0.0.0")]
        public void InitializeComponent() {
            if (_contentLoaded) {
                return;
            }
            _contentLoaded = true;
            System.Uri resourceLocater = new System.Uri("/Intermodular_Web;component/login.xaml", System.UriKind.Relative);
            
            #line 1 "..\..\Login.xaml"
            System.Windows.Application.LoadComponent(this, resourceLocater);
            
            #line default
            #line hidden
        }
        
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "4.0.0.0")]
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Never)]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Design", "CA1033:InterfaceMethodsShouldBeCallableByChildTypes")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Maintainability", "CA1502:AvoidExcessiveComplexity")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1800:DoNotCastUnnecessarily")]
        void System.Windows.Markup.IComponentConnector.Connect(int connectionId, object target) {
            switch (connectionId)
            {
            case 1:
            
            #line 48 "..\..\Login.xaml"
            ((System.Windows.Controls.Image)(target)).MouseUp += new System.Windows.Input.MouseButtonEventHandler(this.Image_MouseUp_1);
            
            #line default
            #line hidden
            return;
            case 2:
            this.cerrarVentana = ((System.Windows.Controls.Image)(target));
            
            #line 49 "..\..\Login.xaml"
            this.cerrarVentana.MouseUp += new System.Windows.Input.MouseButtonEventHandler(this.Image_MouseUp);
            
            #line default
            #line hidden
            return;
            case 3:
            this.bordeCampoUsuario = ((System.Windows.Controls.Border)(target));
            return;
            case 4:
            this.textoUsuarioFalso = ((System.Windows.Controls.TextBox)(target));
            
            #line 70 "..\..\Login.xaml"
            this.textoUsuarioFalso.GotFocus += new System.Windows.RoutedEventHandler(this.textoUsuario_GotFocus);
            
            #line default
            #line hidden
            
            #line 70 "..\..\Login.xaml"
            this.textoUsuarioFalso.LostFocus += new System.Windows.RoutedEventHandler(this.textoUsuarioFalso_LostFocus);
            
            #line default
            #line hidden
            return;
            case 5:
            this.textoUsuarioReal = ((System.Windows.Controls.TextBox)(target));
            
            #line 71 "..\..\Login.xaml"
            this.textoUsuarioReal.LostFocus += new System.Windows.RoutedEventHandler(this.campoUsuario_LostFocus);
            
            #line default
            #line hidden
            
            #line 71 "..\..\Login.xaml"
            this.textoUsuarioReal.GotFocus += new System.Windows.RoutedEventHandler(this.textoUsuarioReal_GotFocus);
            
            #line default
            #line hidden
            return;
            case 6:
            this.bordeCampoPassword = ((System.Windows.Controls.Border)(target));
            return;
            case 7:
            this.BotonMostrarContra = ((System.Windows.Controls.Button)(target));
            
            #line 88 "..\..\Login.xaml"
            this.BotonMostrarContra.Click += new System.Windows.RoutedEventHandler(this.BotonMostrarContra_Click);
            
            #line default
            #line hidden
            return;
            case 8:
            this.textoContrasenyaFalso = ((System.Windows.Controls.TextBox)(target));
            
            #line 92 "..\..\Login.xaml"
            this.textoContrasenyaFalso.GotFocus += new System.Windows.RoutedEventHandler(this.textoContrasenyaFalso_GotFocus);
            
            #line default
            #line hidden
            return;
            case 9:
            this.textoContrasenyaVisible = ((System.Windows.Controls.TextBox)(target));
            
            #line 93 "..\..\Login.xaml"
            this.textoContrasenyaVisible.LostFocus += new System.Windows.RoutedEventHandler(this.textoContrasenyaVisible_LostFocus);
            
            #line default
            #line hidden
            
            #line 93 "..\..\Login.xaml"
            this.textoContrasenyaVisible.GotFocus += new System.Windows.RoutedEventHandler(this.textoContrasenyaVisible_GotFocus);
            
            #line default
            #line hidden
            return;
            case 10:
            this.textoContrasenyaOculto = ((System.Windows.Controls.PasswordBox)(target));
            
            #line 94 "..\..\Login.xaml"
            this.textoContrasenyaOculto.LostFocus += new System.Windows.RoutedEventHandler(this.textoContrasenyaOculto_LostFocus);
            
            #line default
            #line hidden
            
            #line 94 "..\..\Login.xaml"
            this.textoContrasenyaOculto.GotFocus += new System.Windows.RoutedEventHandler(this.textoContrasenyaOculto_GotFocus);
            
            #line default
            #line hidden
            return;
            case 11:
            this.MensajeError = ((System.Windows.Controls.Label)(target));
            return;
            case 12:
            
            #line 100 "..\..\Login.xaml"
            ((System.Windows.Controls.Button)(target)).Click += new System.Windows.RoutedEventHandler(this.Button_Click);
            
            #line default
            #line hidden
            return;
            case 13:
            
            #line 103 "..\..\Login.xaml"
            ((System.Windows.Documents.Hyperlink)(target)).Click += new System.Windows.RoutedEventHandler(this.Hyperlink_Click_1);
            
            #line default
            #line hidden
            return;
            case 14:
            
            #line 109 "..\..\Login.xaml"
            ((System.Windows.Documents.Hyperlink)(target)).Click += new System.Windows.RoutedEventHandler(this.Hyperlink_Click);
            
            #line default
            #line hidden
            return;
            }
            this._contentLoaded = true;
        }
    }
}

