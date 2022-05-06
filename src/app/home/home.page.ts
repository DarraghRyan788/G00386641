import { Component, OnInit } from '@angular/core';
import { MoviesService} from '../Services/movies.service'; // has to be imported to be able to use the service
import { Storage } from '@ionic/storage-angular';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 storage: any;
 myMovie:string = "";
 constructor(private movie:Storage, private flashlight: Flashlight){} 

 Flashlight(){
  this.flashlight.toggle();
 }

 ionViewDidEnter(){
   this.storage.create()
   .then(()=>{
     this.storage.get('movie')
     .then((movie)=>{
       this.myMovie = movie
     })
     .catch();
   })
   .catch();
 }

 
}
