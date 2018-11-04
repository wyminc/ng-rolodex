import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: any = [];

  constructor(private backend: BackendService) {}

  ngOnInit() {
    this.contacts = this.backend.contacts;

    this.backend.getAllContacts()
    .then((data) => {
      console.log(data);
      this.contacts = data;
    })
  }

}
