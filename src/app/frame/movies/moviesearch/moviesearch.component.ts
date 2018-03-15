import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-moviesearch',
  templateUrl: './moviesearch.component.html',
  styleUrls: ['./moviesearch.component.css'],
  providers:[CommonService]
})
export class MoviesearchComponent implements OnInit {

  @Output() success = new EventEmitter<any>();
	public searchedText: string='';
	public searchList=[];

  constructor(private commonService : CommonService) { }

  ngOnInit() {
  }

  // Function to get search text and make service call to get movies fromTMDB
  searchApi(){
  	this.commonService.search(this.searchedText).subscribe((res) =>{
    this.searchList = res.results;
    this.success.emit({
      'searchList': this.searchList
    });
    }, (error) =>{

    })
    alert(this.searchList);
  }

  }

