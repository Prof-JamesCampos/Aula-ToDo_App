import { Component } from '@angular/core';

class TaskInterface {
  id: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public tasks: TaskInterface[] = [

  // eslint-disable-next-line @typescript-eslint/semi
  ]

  constructor() {}

}
