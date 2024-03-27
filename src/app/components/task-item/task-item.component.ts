import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "../../interfaces/Task";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-task-item",
  templateUrl: "./task-item.component.html",
  styleUrl: "./task-item.component.css",
})
export class TaskItemComponent {
  @Input() task: Task | undefined;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggle: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  deleteTask(task: any) {
    this.onDeleteTask.emit(task);
  }

  onToggleReminder(task: any) {
    this.onToggle.emit(task);
  }
}
