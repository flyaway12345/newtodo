import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Movie } from '../movie';import { Router } from '@angular/router';
@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
// container
  movies: Movie[];  constructor(private dataService: DataService
    , private router:Router) { }  ngOnInit(): void {
  }  
  refreshMovies() {
    this.dataService.fetchListOfMovies().subscribe(
    data => {
          this.movies = data;
    },
    error => console.log(error)
    );
  }

  goToAddMovie(){
    this.router.navigate(['addmovie']);
  }
}