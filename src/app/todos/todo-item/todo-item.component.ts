import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToDo } from '../../models/todo.model';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: ToDo;
  @ViewChild('inputSelect') txtInputSelect: ElementRef;

  checkCompleted: FormControl;
  txtInput: FormControl;

  editing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.checkCompleted.valueChanges.subscribe((value) => {
      this.store.dispatch(actions.toogle({id: this.todo.id}));
    })
  }

  edit(){

    this.editing = true;
    
    this.txtInput.setValue(this.todo.text);
    
    setTimeout(() => {
      this.txtInputSelect.nativeElement.focus();
    }, 1);

  }

  blurHandleInput(){
    this.editing = false;

    if(this.txtInput.invalid) { return; }
    if(this.txtInput.value === this.todo.text) { return; }

    this.store.dispatch(actions.editToDo({id: this.todo.id, text: this.txtInput.value}));
  }

  delete(){

    this.store.dispatch(actions.deleteToDo({id: this.todo.id}));
  }

}
