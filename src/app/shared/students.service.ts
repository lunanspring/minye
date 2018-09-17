import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StudentsService {
  constructor() {}
  setStuList(): Array<Student> {
    let stuList: Array<Student> = [];

    for (let index = 0; index < 99; index++) {
      stuList.push(new Student("亚历山大帝", index + 1));
    }
    return stuList;
  }
}

export class Student {
  constructor(
    public name: string,
    public stu_id: number,
    public units: number = -1,
    public tens: number = -1
  ) {}
}
