import { Component ,OnInit,ViewChild} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SpinnerTest';

  mostarSpinner:boolean =true;
  valorCarga:number=0;

  constructor(){
    
  }

  ngOnInit() {
      


  }

  sumar(){
    if (this.valorCarga<100)
      this.valorCarga+=10;
  }

  restar(){
    if (this.valorCarga > 0)
      this.valorCarga-=10;
  }

  ocultar(){
    this.mostarSpinner=!this.mostarSpinner;
  }

}
