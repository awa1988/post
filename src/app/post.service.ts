import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
    url: string
    constructor(private http: HttpClient) {
        
    }

    getPost() {
        return this.http.get('https://hn.algolia.com/api/v1/search_by_date?tags=story');
       
    }
}