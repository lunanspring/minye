import { Injectable } from '@angular/core';
import { ElectronService } from '../providers/electron.service';
import { Student } from '../class/student';


@Injectable({
  providedIn: 'root'
})
export class StuDataService {

  constructor(private electronService: ElectronService) { }

  dir(fileName): string {
    return this.electronService.path.join(__dirname, 'assets/json/' + fileName + '.json');
  }

  getStuList(filName): Array<Student> {


    let lists: Student[];
    const data: Buffer = this.electronService.fs.readFileSync(this.dir(filName));

    if (data.length < 10) {

      lists = [{ name: '良民也', stu_id: 1, tens: -1, units: -1 }];

      this.reWriteStu(lists, filName);

    } else {

      lists = JSON.parse(data.toString());

    }

    return lists;

  }

  reWriteStu(lists: Array<Student>, fileName: string): any {
    lists.sort((a, b) => a.stu_id - b.stu_id);
    const dataN: any = JSON.stringify(lists);
    this.electronService.fs.writeFile(this.dir(fileName), dataN, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }

  addStu(student: Student, fileName: string) {
    const data = this.getStuList(fileName);
    let bol = true;
    for (let i = 0; i < data.length; i++) {
      if (student.stu_id === data[i].stu_id) {
        bol = false;
      }
    }
    console.log(bol);
    if (bol) {
      data.push(student);
      this.reWriteStu(data, fileName);
      alert('操作成功');
    } else {
      alert('該學號學生已存在');
    }

  }

  delStu(sid: number, fileName: string) {
    const data = this.getStuList(fileName);
    let delNum = -1;
    for (let i = 0; i < data.length; i++) {
      if (data[i].stu_id === sid) {
        delNum = i;
      }
    }
    console.log(delNum);
    if (delNum > -1) {
      data.splice(delNum, 1);
      this.reWriteStu(data, fileName);
      alert('操作成功');
    } else {
      alert('該學號學生不存在');
    }
  }

}

