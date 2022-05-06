import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../Services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
MovieData:any = [];
  constructor(private movieService:MoviesService) { }

  ngOnInit() {
    this.movieService.GetMovieData().subscribe(
      (data)=>{
        this.MovieData = data.SearchName;
        console.log(this.MovieData);
      }
    )
  }

}
