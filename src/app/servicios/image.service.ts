
import { Injectable } from '@angular/core';
import {Storage, StorageReference, list, ref, uploadBytes,getDownloadURL} from '@angular/fire/storage'


@Injectable({
  providedIn: 'root'
})


export class ImageService {
url: string =""
  constructor(private storage: Storage) { }

  public uploadImagePerfil($event:any, name: string){
    const file = $event.target.files[0]
  const imgRef = ref(this.storage, 'imagen/' + name)
  uploadBytes(imgRef, file)
  .then(response => {this.getImages()})
  .catch(error => console.log(error))
     }

  getImages(){
    const imgagesRef = ref(this.storage, 'imagen')
    list (imgagesRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log(this.url);
      }
    })
    .catch(error => console.log(error))
  }

}



function getDownloadUrl(item: StorageReference): string | PromiseLike<string> {
  throw new Error('Function not implemented.');
}
 /*   https://console.firebase.google.com/u/0/project/my-portfolio-c86f2/storage?hl=es-419   con cuenta de gmail  carlosalfredogomez1981@gmail.com */