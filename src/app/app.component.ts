import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  message = '';
  isEnabled =false;
  serverName=''

  name='Devesh'

  constructor(){
    setInterval(()=>{
      this.isEnabled=true;
    },3000)

    console.log('Constructor is the first one to be picked by Angular')
  }

  handleClick(){
    console.log('Button clicked');
    this.message='Server was added Successfully as '+ this.serverName;
  }
  
  onUpdateInputs(event:Event){
    console.log("Inside input change")
      this.serverName=(<HTMLInputElement>event.target).value
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('Ng on change implemented')
  }
}
