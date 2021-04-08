import { Component, OnInit } from '@angular/core';
import {MovieData} from './MovieData'
import {FEATURED_API, SEARCH_API} from './API'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'movie-app-angular';
  
  movies: MovieData[] = []

  async fetchData(API) {
    const response = await fetch(API)
    const data = await response.json()
    // console.log(data)
    this.movies = data.results
  }
  ngOnInit(){
    this.fetchData(FEATURED_API)
  }
  submitHandler(event, searchTerm){
    event.preventDefault()
    console.log('searchTerm.value', searchTerm.value)
    if(searchTerm.value)
      this.fetchData(SEARCH_API + searchTerm.value)
    searchTerm.value = ""
  }
  backHome(){
    this.fetchData(FEATURED_API)
  }
}