import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";
import { User } from "../models/user";
import { Subscription } from "rxjs";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  users: User[];
  private subscription = new Subscription();
  constructor(public userService: UserService) {}

  ngOnInit() {}

  // Allow getUsers() to populate the users variable, and makes them available to the view.
  getUsers(): void {
    // call this.userService.getUsers$() to populate the users variable.
    this.subscription.add(
      this.userService.getUsers$().subscribe(resp => {
        this.users = resp;
        console.log("this.users", this.users);
      })
    );
  }

  ngOnDestory() {
    this.subscription.unsubscribe();
  }
}
