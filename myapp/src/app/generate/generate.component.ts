import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

  @Input() value: 'X' | 'O' = "X";

  constructor() {}

  ngOnInit(): void {
  }

}

