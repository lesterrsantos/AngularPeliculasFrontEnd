import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamic-array',
  templateUrl: './dinamic-array.component.html',
  styleUrls: ['./dinamic-array.component.css'],
})
export class DinamicArrayComponent implements OnInit {
  constructor() {}

  title = 'Reactive forms';

  items!: FormArray;

  reactForm = new FormGroup({
    code: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    deladdress: new FormArray([]),
  });

  // formArray = new FormArray([new FormControl(''), new FormControl('')]);

  ngOnInit(): void {
    this.AddNewRow();
  }

  ProceedSave() {
    console.log(this.reactForm.value);
  }

  AddNewRow() {
    this.items = this.reactForm.get('deladdress') as FormArray;
    this.items.push(this.GenerateRow());
  }

  get deladdress(){
    return this.reactForm.get('deladdress') as FormArray;
  }

  GenerateRow(): FormGroup {
    return new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.maxLength(6)])
      ),
    });
  }

  RemoveItem(index: any){
    this.items = this.reactForm.get('deladdress') as FormArray;
    this.items.removeAt(index);
  }
}
