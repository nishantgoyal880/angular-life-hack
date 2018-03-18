import { Component, OnInit,Input} from '@angular/core';
import {TMDB} from '../../../../config/tmdb.config';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-moviesingle',
  templateUrl: './moviesingle.component.html',
  styleUrls: ['./moviesingle.component.css']
})
export class MoviesingleComponent implements OnInit {
  
  baseUrl=TMDB.baseUrl;
  @Input() movie: any

  constructor(private commonService:CommonService) { }

  ngOnInit() {
  }

  // Add favourite movie to database
 addMovie(movie) {
  this.commonService.addMovie(movie).subscribe((res) =>{
    alert("Successfully Added ");  
  }, (err) =>{
    alert("Already present");
  })
}

}
