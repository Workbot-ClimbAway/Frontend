import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'objectToArray',
})
export class ClimbingGymDetailsComponentPipeComponent implements PipeTransform {
  constructor() {}
  transform = (object: any = []) => {
    return Object.values(object);
  };

  ngOnInit(): void {}
}
