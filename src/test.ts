// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

// progress = data.filter(task => {
  //   return task.condition === 'In Progress'
  //   })
  // new = data.filter(task => {
  //   return task.condition === 'New'
  // })
  // progressByMonth = this.progress.map( task =>{
  //   let dateMonth = (new Date(task.date).getMonth() + 1)
  //   return { x: dateMonth, y: 1 } 
  // })
  // let dataNewMonths = this.new.map( task =>{
    //   return { x: new Date(task.date), y: task.priority}
    // })
    // console.log(dataNewMonths)
    // let dataProgressMonths = this.progress.map( task =>{
    //   return { x: new Date(task.date), y: task.priority}
    // })
