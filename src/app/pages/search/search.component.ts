import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  contacts: any = [];

  searchString: string = " ";

  timer:any ;

  showAll() {
    this.contacts = this.backend.contacts;

    this.backend.getAllContacts()
    .then((data) => {
      this.contacts = data;
    })
  }

  search() {
    this.contacts = this.backend.contacts;
    this.backend.searchContact(this.searchString)
    .then((data) => {
      this.searchString = "";
      console.log(data);
      this.contacts = data;
    })
  }

  // keydown() {
  //   clearTimeout()
  // }

  keyup(event: any) {
    // setTimeout(function() {
    //   // this.searchString += event.key;
    //   console.log(event, "WUTISTHIS");
    // }, 1500)

    if (event.keyCode === 13) {
      return this.searchString
    } else if (event.keyCode === 8) {
      this.searchString = this.searchString.substr(0, this.searchString.length-1)
    } else {
      this.searchString += event.key;
      console.log(this.searchString, "WUTISTHIS");
    }
  }

  constructor(private backend: BackendService) {}

  ngOnInit() {
  }

}
