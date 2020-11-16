import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  searchTerm: string;

  @Output() searchName = new EventEmitter<any>();

  searchUser() {
    this.searchName.emit(this.searchTerm);
  }

  constructor() {}

  ngOnInit(): void {}
}
