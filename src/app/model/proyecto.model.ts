export class proyecto 
{
    id?: number;
    nombre: string;
    descripcion: string; 
    urlProyecto: string;
    imgProyecto: string;

constructor(nombre: string, descripcion: string, urlProyecto: string, imgProyecto: string){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.urlProyecto = urlProyecto;
    this.imgProyecto = imgProyecto;
}



}