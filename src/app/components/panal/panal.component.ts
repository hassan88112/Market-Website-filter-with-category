import {Component} from '@angular/core';

@Component({
  selector: 'app-panal',
  templateUrl: './panal.component.html',
  styleUrls: ['./panal.component.css']
})
export class PanalComponent {

  persons: string [] = ['hassan', 'smsm', 'sara'];

  peopleByCountry: any[] =
    [
      {
        'country': 'egypt',
        'names':
          [
            {name: 'cairo'},
            {name: 'Alex'}
          ]
      },
      {
        country: 'amrica',
        names:
          [
            {name: 'new yourk'},
            {name: 'calefornia'},
          ]
      }
    ];


  cources =
  [
    {'id':1 ,  'courseName' : 'java' } ,
    {'id':2 ,  'courseName' : 'c++'  },
    {'id':3 ,  'courseName' : 'php'  },
  ];



  onTrack(index :any,c :any){
    return c ? c.id :undefined;    // check if object is exsist or not lw mawgoud tmtm return id else undefined
  }

  onAdd() {
    this.cources.push({'id':4 ,  'courseName' : 'angular'});             //  function to add item to list
  }

  onRemove(c :any) {
   let index =this.cources.indexOf(c)
   this.cources.splice(index,1);      // function to  remmove item  from list
  }

  setVeiw(selected: string) {
     this.defaultView=selected;
  }

  defaultView: string='students';
  whatcolor: boolean =true;

}
