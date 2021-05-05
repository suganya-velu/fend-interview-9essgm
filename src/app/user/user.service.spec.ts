import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { TestBed, waitForAsync } from "@angular/core/testing";
import { UserService } from "./user.service";
import { User } from "../models/user";

describe("UserService", () => {
  const usersJson = "/assets/users.json";

  let httpMock: HttpTestingController;
  let userService: UserService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [UserService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    httpMock = TestBed.inject(HttpTestingController);
    userService = TestBed.inject(UserService);
  });

  it("should be created", () => {
    expect(userService).toBeTruthy();
  });

  describe("when getUsers$() is successful", () => {
    const usersResponse: User[] = [
      {
        id: "u_8nB75i9",
        name: "John Placeholder",
        email: "john.placeholder@fakemail.com",
        created_at: "2021-03-16T19:38:45.850Z",
        confirmed: true
      }
    ];

    it("should return something", () => {
      userService.getUsers$().subscribe(res => {
        expect(res).toEqual(usersResponse);
      });

      httpMock.expectOne(usersJson).flush(usersResponse);
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
