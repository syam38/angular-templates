import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommentsService {

  
  constructor(private http: HttpClient) { }

  getData() {
    const url = 'https://recursive-test.azurewebsites.net/api/comments';
    return this.http.get(url);
  }
}