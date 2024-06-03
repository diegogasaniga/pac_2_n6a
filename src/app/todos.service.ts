import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todosUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<{ userId: number, id: number, title: string, completed: boolean }[]> {
    return this.http.get<{ userId: number, id: number, title: string, completed: boolean }[]>(this.todosUrl);
  }

  getTodoById(id: string | null): Observable<{ userId: number, id: number, title: string, completed: boolean }> {
    return this.http.get<{ userId: number, id: number, title: string, completed: boolean }>(`${this.todosUrl}/${id}`);
  }
}
