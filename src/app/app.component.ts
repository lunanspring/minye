import { Component } from "@angular/core";
import { Student, StudentsService } from "./shared/students.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "minye";

  private stuList: Array<Student>;

  units: number = -1;

  tens: number = -1;

  constructor(private studentsService: StudentsService) {}

  ngOnInit() {
    this.stuList = this.studentsService.setStuList();
  }
  call(pop: string): void {
    let n = Math.floor(Math.random() * 10);
    switch (pop) {
      case "units":
        this.units = n;
        this.random(n, this.stuList, pop);
        break;
      case "tens":
        this.tens = n;
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
        case "units":
          num = array[i].stu_id % 10;
          break;
        case "tens":
          let numstr: string = array[i].stu_id.toString();
          numstr.length == 1 ? (num = 0) : (num = parseInt(numstr[0], 10));
          break;
      }
      if (num == n) {
        array[i][pop] = n;
      }
    }
  }

  clear(): void {
    for (let i = 0; i < this.stuList.length; i++) {
      this.stuList[i].tens = -1;
      this.stuList[i].units = -1;
    }
    this.units = -1;
    this.tens = -1;
  }

  add(stu_id: number, name: string): void {
    this.stuList.push(new Student(name, stu_id));
    this.stuList = this.stuList.sort((a, b) => a.stu_id - b.stu_id);
  }

  del(stu_id: number): void {
    this.stuList = this.stuList.splice(
      this.stuList.findIndex(v => v.stu_id === stu_id),1);
  }
}
