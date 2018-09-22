import { Injectable } from '@angular/core';
import { ElectronService } from '../providers/electron.service';
import { Student } from '../class/student';

const dir = 'src/assets/students.json';

@Injectable({
  providedIn: 'root'
})
export class StuDataService {


  constructor(private electronService: ElectronService) { }

  getStuList(): Array<Student> {

    let lists: Student[];

    const data: Buffer = this.electronService.fs.readFileSync(dir);
    console.log(data);
    console.log(data.values());
    if (data.length < 5) {

      lists = [{ name: '良民也', stu_id: 1, tens: -1, units: -1 }];

      this.reWriteStu(lists);

    } else {

      lists = JSON.parse(data.toString());

    }

    return lists;

  }

  reWriteStu(lists: Array<Student>): any {
    lists.sort((a, b) => a.stu_id - b.stu_id);
    const dataN: any = JSON.stringify(lists);
    this.electronService.fs.writeFile(dir, dataN, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }

  addStu(student: Student) {
    const data = this.getStuList();
    let bol = true;
    for (let i = 0; i < data.length; i++) {
      if (student.stu_id === data[i].stu_id) {
        bol = false;
      }
    }
    console.log(bol);
    if (bol) {
      data.push(student);
      this.reWriteStu(data);
      alert('操作成功');
    } else {
      alert('該學號學生已存在');
    }

  }

  delStu(sid: number) {
    const data = this.getStuList();
    let delNum = -1;
    for (let i = 0; i < data.length; i++) {
      if (data[i].stu_id === sid) {
        delNum = i;
      }
    }
    console.log(delNum);
    if (delNum > -1) {
      data.splice(delNum, 1);
      this.reWriteStu(data);
      alert('操作成功');
    } else {
      alert('該學號學生不存在');
    }
  }

}

