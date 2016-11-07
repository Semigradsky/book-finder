import { Component, OnInit } from '@angular/core';

class SearchModel {
  constructor(public criteria: string = null) {}
}

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  model = new SearchModel();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
  }

}
