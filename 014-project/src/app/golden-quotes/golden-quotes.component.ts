import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-golden-quotes',
  templateUrl: './golden-quotes.component.html',
  styleUrls: ['./golden-quotes.component.css']
})
export class GoldenQuotesComponent implements OnInit {


  //id:number = 0;

  nick: string ='';
  quote:string = '';

  constructor(private router: ActivatedRoute) 
  {
    // Pobieranie numerków
    //this.id = Number(this.router.snapshot.paramMap.get('id'));

    this.router.paramMap.subscribe((params: ParamMap) =>{
      let param = params.get('id');
      if (param)
        this.nick = param;
        switch(this.nick)
        {
          case "ga": this.quote = 'Deświniujemy zmienne'; break;
          case "kd": this.quote = 'Robimy 2 przyciski'; break;
          case "bb": this.quote = 'Moje konie'; break;
          default: this.quote = 'Nie ma takiego cytatu'; break;
        }  
    });
  }

  ngOnInit(): void {
  }

}
