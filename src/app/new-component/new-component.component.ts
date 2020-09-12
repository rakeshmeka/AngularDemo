import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-new-component",
  templateUrl: "./new-component.component.html",
  styleUrls: ["./new-component.component.css"]
})
export class NewComponentComponent implements OnInit {
  stringArray: string[];
  newfirstname: string[] = ["one", "two", "three"];
  newlastname: string[] = ["111", "222", "333"];
  i = 0;
  constructor() {
    setInterval(() => {
      if (this.i % 2 == 0) {
        this.stringArray = this.newfirstname;
        console.log("if");
      } else {
        this.stringArray = this.newlastname;
        console.log("else");
      }
      this.i++;
    }, 3000);
  }

  ngOnInit() {}
}
