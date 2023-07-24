import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
  pipeType1: string = 'angular pipes';
  pipeType2: number = 28562;
  pipeType3: number = 3.5656;
  pipeType4: number = 50.8;
  pipeType5: Date = new Date();
  pipeType6: object = {
    id: 1,
    name: 'post 1'
  };
  pipeType7: number = 0.45;
  pipeType8: Array<string> = ['post 1', 'post 2', 'post 3', 'post 4', 'post 5']
  customPipe1 = {
    name: 'user 1',
    city: 'new york',
    countryCode: 'us'
  };
  customPipe2: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestias delectus hic quis suscipit tempora voluptates amet quo odio incidunt officiis numquam totam exercitationem cum qui, provident corrupti mollitia expedita!'
}
