import { Component, OnInit,Input} from '@angular/core';
import {TMDB} from '../../../config/tmdb.config';
import {CommonService} from '../../../services/common.service';

@Component({
  selector: 'app-mov-fav-view',
  templateUrl: './mov-fav-view.component.html',
  styleUrls: ['./mov-fav-view.component.css'],
  providers[CommonService]
})
export class MovFavViewComponent implements OnInit {
  
  @Input() movie;
  
  baseUrl=TMDB.baseUrl;
  constructor(private commonService : CommonService) { }

  ngOnInit() {
  }

  //Delete Movie
  deleteMovie(movie){
    return this.commonService.deleteMovie(movie).subscribe((res) =>{
      alert("Successfully Deleted ");
    },(err)=>{
      
    })
  }

}
