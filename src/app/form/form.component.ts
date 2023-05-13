import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { statuses } from './status';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  reactiveForm!: FormGroup;
  statusList: string[];
  submitedForm: any;
  constructor(){
    this.reactiveForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      title: new FormControl('',[Validators.required]),
      status: new FormControl('',[Validators.required]),
      rating: new FormControl(0, [Validators.required,Validators.min(1)]),
      review: new FormControl('',[Validators.required,Validators.maxLength(50)]),
      date: new FormControl({value:this.formatDate(new Date('2019-11-11')),disabled:true},[Validators.required])
    })
    this.statusList = statuses;
  }

  ngOnInit(): void {
    
  }

  onStarClick(rating: number) {
    this.reactiveForm.get('rating')?.setValue(rating);
  }

  Submit() {
    this.submitedForm = this.reactiveForm.getRawValue();
    if(this.reactiveForm.invalid){
      return
    }

    console.log(this.submitedForm);
    
  }


  private formatDate(date:any) {
    const showDate = new Date(date);
    let month = '' + (showDate.getMonth() + 1);
    let day = '' + showDate.getDate();
    const year = showDate.getFullYear();
    if (month.length < 2){
      month = '0' + month
    };
    if (day.length < 2){
      day = '0' + day
    };
    return [year, month, day].join('-');
  }
}
