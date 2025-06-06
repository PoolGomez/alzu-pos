import { FaDollyFlatbed, FaHome } from "react-icons/fa";
import { v } from "../styles/variables";
// import {
//   AiOutlineHome,
//   AiOutlineSetting,
// } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaGear, FaShop } from "react-icons/fa6";

export const DesplegableUser = [
  {
    text: "Mi perfil",
    icono: <v.iconoUser/>,
    tipo: "miperfil",
  },
  {
    text: "Configuracion",
    icono: <v.iconoSettings/>,
    tipo: "configuracion",
  },
  {
    text: "Cerrar sesión",
    icono: <v.iconoCerrarSesion/>,
    tipo: "cerrarsesion",
  },
];



//data SIDEBAR
export const LinksArray = [
  {
    label: "Home",
    // icon: "noto-v1:house",
    icon: FaHome,
    to: "/",
  },
  {
    label: "VENDER",
    // icon: "flat-color-icons:shop",
    icon: FaShop ,
    to: "/pos",
  },
  {
    label: "Kardex",
    // icon: "flat-ui:box",
    icon: FaDollyFlatbed ,
    to: "/kardex",
  },
  {
    label: "Reportes",
    // icon: "flat-ui:graph",
    icon: BsGraphUpArrow,
    to: "/reportes",
  },
 
];
export const SecondarylinksArray = [
 
  {
    label: "Configuración",
    // icon:"icon-park:setting-two",
    icon: FaGear ,
    to: "/configurar",
    color:"#CE82FF"
  },
  
  

];
//temas
export const TemasData = [
  {
    icono: "🌞",
    descripcion: "light",
   
  },
  {
    icono: "🌚",
    descripcion: "dark",
    
  },
];

//data configuracion
export const DataModulosConfiguracion =[
  {
    title:"Productos",
    subtitle:"registra tus productos",
    icono:"https://i.ibb.co/85zJ6yG/caja-del-paquete.png",
    link:"/configurar/productos",
   
  },
  {
    title:"Personal",
    subtitle:"ten el control de tu personal",
    icono:"https://i.ibb.co/5vgZ0fX/hombre.png",
    link:"/configurar/usuarios",
   
  },

  {
    title:"Tu empresa",
    subtitle:"configura tus opciones básicas",
    icono:"https://i.ibb.co/x7mHPgm/administracion-de-empresas.png",
    link:"/configurar/empresa",
    
  },
  {
    title:"Categoria de productos",
    subtitle:"asigna categorias a tus productos",
    icono:"https://i.ibb.co/VYbMRLZ/categoria.png",
    link:"/configurar/categorias",
    
  },
  {
    title:"Marca de productos",
    subtitle:"gestiona tus marcas",
    icono:"https://i.ibb.co/1qsbCRb/piensa-fuera-de-la-caja.png",
    link:"/configurar/marca",
   
  },

]
//tipo usuario
export const TipouserData = [
  {
    descripcion: "empleado",
    icono: "🪖",
  },
  {
    descripcion: "administrador",
    icono: "👑",
  },
];
//tipodoc
export const TipoDocData = [
  {
    descripcion: "Dni",
    icono: "🪖",
  },
  {
    descripcion: "Libreta electoral",
    icono: "👑",
  },
  {
    descripcion: "Otros",
    icono: "👑",
  },
];