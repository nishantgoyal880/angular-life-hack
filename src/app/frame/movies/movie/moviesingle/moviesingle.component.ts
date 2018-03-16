import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-moviesingle',
  templateUrl: './moviesingle.component.html',
  styleUrls: ['./moviesingle.component.css']
})
export class MoviesingleComponent implements OnInit {

  @Input() movie: any

  constructor() { }

  ngOnInit() {
  }

}
