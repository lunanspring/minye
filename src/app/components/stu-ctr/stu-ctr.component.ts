import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { StuDataService } from '../../services/stu-data.service';
import { Student } from '../../class/student';
@Component({
  selector: 'app-stu-ctr',
  templateUrl: './stu-ctr.component.html',
  styleUrls: ['./stu-ctr.component.scss']
})
export class StuCtrComponent implements OnInit {

  stuForm = this.fb.group({
    name: ['', Validators.required, ],
    stuid: ['', [Validators.required, Validators.min(1), Validators.max(99)]]
  });

  constructor(private fb: FormBuilder, private stuDataService: StuDataService) {
  }

  ngOnInit() {
  }
  add(fileName) {
    this.stuDataService.addStu(new Student(this.stuForm.value.name, this.stuForm.value.stuid, -1, -1), fileName);
  }
  del(fileName) {
    this.stuDataService.delStu(this.stuForm.value.stuid, fileName);
  }
}
