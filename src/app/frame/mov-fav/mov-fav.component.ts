import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service'

@Component({
  selector: 'app-mov-fav',
  templateUrl: './mov-fav.component.html',
  styleUrls: ['./mov-fav.component.css'],
  providers:[CommonService]
})
export class MovFavComponent implements OnInit {

  favMoviesList=[];

  constructor(private commonService:CommonService ) { }

  ngOnInit() {
    this.commonService.showFav().subscribe((res) =>{
      this.favMoviesList = res.movies;
     }
  })

  }

}
