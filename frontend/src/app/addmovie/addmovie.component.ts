import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  movie = new Movie();
  
  constructor(private router: Router,
    private dataService: DataService) { }

  ngOnInit(): void {
  }

  submitMovieButton(){
    this.dataService.addmovie(this.movie).subscribe(
      data => this.router.navigate(['movielist']));
  }
  goBackToList(){
    this.router.navigate(['movielist']);
  }
}
