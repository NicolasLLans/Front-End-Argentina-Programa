import { HttpEvent, HttpHandler,HttpInterceptor,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token = this.tokenService.getToken();
    
    const intReq = req.clone({ 
      setHeaders: {
        Authorization:`Bearer  ${token}`
    }   
    });

    return next.handle(intReq);
    
  }
  
}
