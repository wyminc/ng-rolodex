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

  search(event) {
    this.contacts = this.backend.contacts;
    this.searchString += event.key;
    console.log(this.searchString, "WUTISTHIS");
    // this.backend.searchContact(this.searchString)
    // .then((data) => {
    //   console.log(data);
    //   this.contacts = data;
    // })
  }

  keydown() {
    clearTimeout(this.timer)
  }

  keyup(event: any) {
    this.timer = setTimeout(function() {
      this.search(event)
    }, 1500)
    this.timer();
  }

  constructor(private backend: BackendService) {}

  ngOnInit() {
  }

}
