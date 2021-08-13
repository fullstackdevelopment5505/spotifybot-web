import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private duration = 2000;
  constructor(private toastr: ToastrService) {}

  public success(message: string, title?: string) {
    this.toastr.success(message, title);
  }

  public warning(message: string, title?: string) {
    this.toastr.warning(message, title);
  }

  public error(message: string, title?: string) {
    this.toastr.error(message, title);
  }

  public errorObj(message: any, title?: string) {
    this.error(JSON.stringify(message), title);
  }
}
