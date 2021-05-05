import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { of } from "rxjs";
import { UserComponent } from "./user.component";
import { UserService } from "./user.service";

describe("UserComponent", () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [UserComponent],
        providers: [UserService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should call getUsers() on click of getUserts button", () => {
    let mock = spyOn(component, "getUsers");
    let el = fixture.debugElement.nativeElement;
    let getUsersBtn = el.querySelector("button");
    // let headerName = el.nativeElement.querySelector("h4");
    // let span = Array.from(
    //   el.querySelectorAll("span")
    // ).map(({ textContent }) => textContent);
    getUsersBtn.click();
    expect(mock).toHaveBeenCalled();
    fixture.detectChanges();
    spyOn(userService, "getUsers$").and.callFake(() => {
      return of(null);
    });
    component.userService.getUsers$();
    expect(component.userService.getUsers$).toHaveBeenCalled();
    //     (headerName.textContent).toContain(component.users['name']);
    // expect(span).toContain("john.placeholder@fakemail.com");
    // expect(span).toContain("03/16/2021");
    // expect(span).toContain("unconfirmed");
  });
});
