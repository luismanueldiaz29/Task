import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../services/task-data.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  constructor(private taskDataService: TaskDataService) { }

  ngOnInit() {
    this.tasks = this.taskDataService.getAll();
  }

}
