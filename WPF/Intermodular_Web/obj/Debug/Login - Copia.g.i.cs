﻿#pragma checksum "..\..\Login - Copia.xaml" "{8829d00f-11b8-4213-878b-770e8597ac16}" "512835E370EE5024A4A55344DBEBE2EA4379348CACDDAB3B99053F1FC0E15C6F"
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
        
        
        #line 59 "..\..\Login - Copia.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Border bordeCampoUsuario;
        
        #line default
        #line hidden
        
        
        #line 70 "..\..\Login - Copia.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox textoUsuarioFalso;
        
        #line default
        #line hidden
        
        
        #line 71 "..\..\Login - Copia.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox textoUsuarioReal;
        
        #line default
        #line hidden
        
        
        #line 77 "..\..\Login - Copia.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Border bordeCampoPassword;
        
        #line default
        #line hidden
        
        
        #line 88 "..\..\Login - Copia.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Button BotonMostrarContra;
        
        #line default
        #line hidden
        
        
        #line 92 "..\..\Login - Copia.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox textoContrasenyaFalso;
        
        #line default
        #line hidden
        
        
        #line 93 "..\..\Login - Copia.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox textoContrasenyaVisible;
        
        #line default
        #line hidden
        
        
        #line 94 "..\..\Login - Copia.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.PasswordBox textoContrasenyaOculto;
        
        #line default
        #line hidden
        
        
        #line 98 "..\..\Login - Copia.xaml"
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
            System.Uri resourceLocater = new System.Uri("/Intermodular_Web;component/login%20-%20copia.xaml", System.UriKind.Relative);
            
            #line 1 "..\..\Login - Copia.xaml"
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
            
            #line 48 "..\..\Login - Copia.xaml"
            ((System.Windows.Controls.Image)(target)).MouseUp += new System.Windows.Input.MouseButtonEventHandler(this.Image_MouseUp_1);
            
            #line default
            #line hidden
            return;
            case 2:
            
            #line 49 "..\..\Login - Copia.xaml"
            ((System.Windows.Controls.Image)(target)).MouseUp += new System.Windows.Input.MouseButtonEventHandler(this.Image_MouseUp);
            
            #line default
            #line hidden
            return;
            case 3:
            this.bordeCampoUsuario = ((System.Windows.Controls.Border)(target));
            return;
            case 4:
            this.textoUsuarioFalso = ((System.Windows.Controls.TextBox)(target));
            
            #line 70 "..\..\Login - Copia.xaml"
            this.textoUsuarioFalso.GotFocus += new System.Windows.RoutedEventHandler(this.textoUsuario_GotFocus);
            
            #line default
            #line hidden
            
            #line 70 "..\..\Login - Copia.xaml"
            this.textoUsuarioFalso.LostFocus += new System.Windows.RoutedEventHandler(this.textoUsuarioFalso_LostFocus);
            
            #line default
            #line hidden
            return;
            case 5:
            this.textoUsuarioReal = ((System.Windows.Controls.TextBox)(target));
            
            #line 71 "..\..\Login - Copia.xaml"
            this.textoUsuarioReal.LostFocus += new System.Windows.RoutedEventHandler(this.campoUsuario_LostFocus);
            
            #line default
            #line hidden
            
            #line 71 "..\..\Login - Copia.xaml"
            this.textoUsuarioReal.GotFocus += new System.Windows.RoutedEventHandler(this.textoUsuarioReal_GotFocus);
            
            #line default
            #line hidden
            return;
            case 6:
            this.bordeCampoPassword = ((System.Windows.Controls.Border)(target));
            return;
            case 7:
            this.BotonMostrarContra = ((System.Windows.Controls.Button)(target));
            
            #line 88 "..\..\Login - Copia.xaml"
            this.BotonMostrarContra.Click += new System.Windows.RoutedEventHandler(this.BotonMostrarContra_Click);
            
            #line default
            #line hidden
            return;
            case 8:
            this.textoContrasenyaFalso = ((System.Windows.Controls.TextBox)(target));
            
            #line 92 "..\..\Login - Copia.xaml"
            this.textoContrasenyaFalso.GotFocus += new System.Windows.RoutedEventHandler(this.textoContrasenyaFalso_GotFocus);
            
            #line default
            #line hidden
            return;
            case 9:
            this.textoContrasenyaVisible = ((System.Windows.Controls.TextBox)(target));
            
            #line 93 "..\..\Login - Copia.xaml"
            this.textoContrasenyaVisible.LostFocus += new System.Windows.RoutedEventHandler(this.textoContrasenyaVisible_LostFocus);
            
            #line default
            #line hidden
            
            #line 93 "..\..\Login - Copia.xaml"
            this.textoContrasenyaVisible.GotFocus += new System.Windows.RoutedEventHandler(this.textoContrasenyaVisible_GotFocus);
            
            #line default
            #line hidden
            return;
            case 10:
            this.textoContrasenyaOculto = ((System.Windows.Controls.PasswordBox)(target));
            
            #line 94 "..\..\Login - Copia.xaml"
            this.textoContrasenyaOculto.LostFocus += new System.Windows.RoutedEventHandler(this.textoContrasenyaOculto_LostFocus);
            
            #line default
            #line hidden
            
            #line 94 "..\..\Login - Copia.xaml"
            this.textoContrasenyaOculto.GotFocus += new System.Windows.RoutedEventHandler(this.textoContrasenyaOculto_GotFocus);
            
            #line default
            #line hidden
            return;
            case 11:
            this.MensajeError = ((System.Windows.Controls.Label)(target));
            return;
            case 12:
            
            #line 100 "..\..\Login - Copia.xaml"
            ((System.Windows.Controls.Button)(target)).Click += new System.Windows.RoutedEventHandler(this.Button_Click);
            
            #line default
            #line hidden
            return;
            case 13:
            
            #line 109 "..\..\Login - Copia.xaml"
            ((System.Windows.Documents.Hyperlink)(target)).Click += new System.Windows.RoutedEventHandler(this.Hyperlink_Click);
            
            #line default
            #line hidden
            return;
            }
            this._contentLoaded = true;
        }
    }
}

