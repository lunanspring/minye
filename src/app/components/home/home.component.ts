import { Component, OnInit } from '@angular/core';
import { StuDataService } from '../../services/stu-data.service';
import { Student } from '../../class/student';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public stuList: Array<Student>;

  unitsCheck = -1;

  tensCheck = -1;

  constructor( private stuDataService: StuDataService) { }

  ngOnInit() {
    this.stuList = this.stuDataService.getStuList();
  }
  call(pop: string): void {
    const n = Math.floor(Math.random() * 10);
    switch (pop) {
      case 'units':
        this.unitsCheck = n;
        this.random(n, this.stuList, pop);
        break;
      case 'tens':
        this.tensCheck = n;
        this.random(n, this.stuList, pop);
        break;
    }
  }

  random(n: number, array: Array<Student>, pop: string): void {
    for (let i = 0; i < array.length; i++) {
      array[i][pop] = -1;
    }

    for (let i = 0; i < array.length; i++) {
      let num;

      switch (pop) {
        case 'units':
          num = array[i].stu_id % 10;
          break;
        case 'tens':
          const numstr: string = array[i].stu_id.toString();
          numstr.length === 1 ? (num = 0) : (num = parseInt(numstr[0], 10));
          break;
      }
      if (num === n) {
        array[i][pop] = n;
      }
    }
  }

  clear(): void {
    for (let i = 0; i < this.stuList.length; i++) {
      this.stuList[i].tens = -1;
      this.stuList[i].units = -1;
    }
    this.unitsCheck = -1;
    this.tensCheck = -1;
  }
}

