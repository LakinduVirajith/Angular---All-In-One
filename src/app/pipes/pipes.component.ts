import { Component } from '@angular/core';
import { Observable, interval, map, take } from 'rxjs';

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
  pipeType6: number = 0.45;
  pipeType7: object = {
    id: 1,
    name: 'post 1'
  };
  pipeType8: Array<string> = ['post 1', 'post 2', 'post 3', 'post 4', 'post 5']
  pipeType9: string = 'Slice Pipes'
  pipeType10: object = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com'
  };

  observableData$!: Observable<number>
  ngOnInit() {
    this.observableData$ = interval(1000).pipe(
      map((value) => value + 1),
      take(15)
    );
  }

  language: string = 'en';
  languageMapping = {
    'en': 'English language selected.',
    'fr': 'Langue française sélectionnée.',
    'es': 'Idioma español seleccionado.',
    'de': 'Deutsche Sprache ausgewählt.'
  };

  customPipe1 = {
    name: 'User 1',
    city: 'New York',
    countryCode: 'US'
  };
  customPipe2: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestias delectus hic quis suscipit tempora voluptates amet quo odio incidunt officiis numquam totam exercitationem cum qui, provident corrupti mollitia expedita!'
}


// I18nPluralPipe: Displays strings based on a numeric value and language plural rules.

// I18nSelectPipe: Displays strings based on a key-value map.
