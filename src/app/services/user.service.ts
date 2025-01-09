import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserListItemModel } from '../models/user-list-item.model';

interface PaginatedResponse {
  total_items: number;
  users: UserListItemModel[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8010/users';

  constructor(private http: HttpClient) { }

  getUserLists(offset: number, limit: number): Observable<{ totalItems: number, users: UserListItemModel[] }> {
    let params = new HttpParams()
      .set('offset', offset.toString())
      .set('limit', limit.toString());

    return this.http.get<PaginatedResponse>(this.apiUrl+"/get-user-list", { params }).pipe(
      map(response => ({
        totalItems: response.total_items,
        users: response.users
      }))
    );
  }
}
