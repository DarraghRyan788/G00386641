import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  myMovie:string = "";
  constructor(private storage:Storage) { }

  ngOnInit() {
  }

  //When I copied this code in it threw errors for saveMovie()}{} - line 30
  //ionViewDidEnter(){
    //this.storage.create()
  //.then(()=>{
      //this.storage.get('movie')
      //.then((movie)=>{
        //this.myMovie = movie
      //})
      //.catch();
    //})
    //.catch();
  //}
 //}

  saveMovie(){
    this.storage.create()
    .then(()=>{
      this.storage.set("movie", this.myMovie)
      .then(()=>{console.log(this.myMovie)})
      .catch();
    })
    .catch();
  }

}
