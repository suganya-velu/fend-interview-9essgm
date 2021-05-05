import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { UserService } from "./user/user.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, CommonModule],
  declarations: [AppComponent, UserComponent],
  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule {}
