import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  todo: { userId: number, id: number, title: string, completed: boolean } | null = null;

  constructor(
    private route: ActivatedRoute,
    private todosService: TodosService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.todosService.getTodoById(id).subscribe((data) => {
      this.todo = data;
    });
  }
}
