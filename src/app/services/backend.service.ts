import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    baseUrl: string = "http://localhost:9000";

    contacts: any[] = [];

    constructor(private http: HttpClient) {}

    getAllContacts() {
        const url = this.baseUrl + "/all";
        return this.http.get(url).toPromise();
    }

    searchContact(name) {
        const url = this.baseUrl + `/search/${name}`;
        return this.http.get(url).toPromise();
    }

}

