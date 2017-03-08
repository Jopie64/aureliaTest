//import {customElement, bindable} from 'aurelia-framework';

//@customElement('jotest')
export class Jotest {
  message:string = "This is a beautiful class isn't it?..";

  replies:string[] = [];
  counter:number = 0;
  bKeepAdding:boolean = false;

  addReply() {
    this.replies.push('Yes it is ' + ++this.counter + '!');
  }

  keepAdding(){
    this.bKeepAdding = true;
    this.addAndSetTimer();
  }

  stopAdding(){
    this.bKeepAdding = false;
  }

  addAndSetTimer() {
    setTimeout(()=>{ this.addReply(); if (this.bKeepAdding) this.addAndSetTimer(); }, 100);
  }
}
