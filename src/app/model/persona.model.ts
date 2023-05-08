export class persona 
{
  id?: number;
  nombre: string;
  apellido: string;
  imgBanner: string;
  imgPerfil: string;
  dni: string;
  nacionalidad: string;
  fecha_nacimiento: string;
  mail: string;
  telefono: string;
  descripcion: string;
  github: string;
  facebook : string;
  instagram: string;
  whatsapp: string

  constructor(
    nombre: string,
    apellido: string,
    imgBanner: string,
    imgPerfil: string,
    dni: string,
    nacionalidad: string,
    fecha_nacimiento: string,
    mail: string,
    telefono: string,
    descripcion: string,
    github: string,
    facebook : string,
    instagram: string,
    whatsapp: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.imgBanner = imgBanner;
    this.imgPerfil = imgPerfil;
    this.dni = dni;
    this.nacionalidad = nacionalidad;
    this.fecha_nacimiento = fecha_nacimiento;
    this.mail = mail;
    this.telefono = telefono;
    this.descripcion = descripcion;
    this.github = github;
    this.facebook = facebook;
    this.instagram = instagram;
    this.whatsapp = whatsapp;

  }
}
