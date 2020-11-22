import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input #inputElementRef (keyup.enter)="submitValue($event.target.value)" />

    <button (click)="submitValue(inputElementRef.value)">Save</button>
  `,
  styleUrls: ['./input-button-unit.component.scss'],
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}
