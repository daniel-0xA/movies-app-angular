import { Component, Input, OnInit } from '@angular/core';
import {MovieData} from '../MovieData'
import {IMG_API, IMG_REPLACEMENT} from '../API'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: MovieData
  
  posterPath =""
  voteClass(vote){
    if(vote >= 8)
      return "green"
    else if(vote >= 6)
      return "orange"
    else return "red"
  }
  ngOnInit(): void {
    this.posterPath = this.movie.poster_path ? IMG_API + this.movie.poster_path : IMG_REPLACEMENT
  }
}
