import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-craigs-component',
  templateUrl: './craigs-component.component.html',
  styleUrls: ['./craigs-component.component.css']
})
export class CraigsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  typescriptFunction() {
    enum isTypescriptWorking {yes = "I'm created with typescript!", no = "typescript doesnt work!"};

    return isTypescriptWorking.yes;


  }
}

