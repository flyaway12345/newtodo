import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {
    
   }

  fetchListOfMovies():  Observable<any>{
    return this.http.get<any>('http://localhost:8080/movies')
  }

  addmovie(movie: Movie){
    return this.http.post<any>('http://localhost:8080/movies',movie);
  }

}