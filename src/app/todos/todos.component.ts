import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: { userId: number, id: number, title: string, completed: boolean }[] = [];
  searchResults: { userId: number, id: number, title: string, completed: boolean }[] = [];
  searchTerm: string = '';

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.todosService.getTodos().subscribe((data) => {
      this.todos = data;
      this.searchResults = data;
    });
  }

  onSearchTermChange(): void {
  }

  searchTodos(): void {
    if (this.searchTerm && this.searchTerm.trim().length > 0) {
      this.searchResults = this.todos.filter(todo =>
        todo.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.searchResults = this.todos;
    }
  }
}
