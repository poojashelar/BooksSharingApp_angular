import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule , HttpTestingController} from '@angular/common/http/testing';

import { AuthService } from './auth.service';
const dummyUsers = [
  {
    id: '1',
    email: 'user@zz.com',
    password: 'password',
  },
];

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
  });

  beforeEach(inject(
    [AuthService, HttpTestingController],
    (serviceInstance, httpMock) => {
      service = serviceInstance;
      httpTestingController = httpMock;
    }
  ));

  it('should be created', () => {+
    expect(service).toBeTruthy();
  });

  it('login: should return an array containing the valid user', () => {
    const mockCheckLoginUser = {
      id: '1',
      email: 'user@zz.com',
      password: 'password',
    };
    service
      .logIn('user@zz.com', 'password')
      .subscribe((user) => {
        expect(user).toBeDefined();
        expect(user.length).toBe(1);
        expect(user.id).toBe(1);
      });
  });

  it('signup: should return an array containing signed up user object', () => {
    const mockCheckLoginUser = {
      email: 'new@zz.com',
      password: 'new',
    };
    service.signUp(mockCheckLoginUser.email, mockCheckLoginUser.password).subscribe((user) => {
      expect(user).toBeDefined();
      expect(user.id).toBeDefined();
      expect(user.email).toBe(mockCheckLoginUser.email);
      expect(user.password).toBe(mockCheckLoginUser.password);
    });
  });
});
