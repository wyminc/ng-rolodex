import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BackendService {
    baseUrl: string = "localhost:/9000";

    constructor(private http: HttpClient) {}

    getContacts() {
        const url = this.baseUrl + "/all";
        return this.http.get(url).toPromise();
    }

}

