import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {

  constructor(private service: CurrencyService) { }

  value: number = 1;
  result: number = 0;
  temp: number = 0;
  firstCurrency: string = "PLN";
  secondCurrency: string = "EUR";

  convertCurrency()
  {
    this.service.getCurrency(this.firstCurrency, this.secondCurrency).subscribe(data => {
      this.temp = (this.value * data.info.rate);
      this.result = Math.round(this.temp * 100) / 100;
      //console.log(this.value);
      console.log(this.temp);
      console.log(this.result);
    });
  }

  ngOnInit(): void {
  }

}
