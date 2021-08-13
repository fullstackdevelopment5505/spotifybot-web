import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {SpotifyService} from '../spotify.service';
import {ToastService} from '../shared/services/toast-service';
import { AppSettings } from '../shared/constants';
//import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {
  TrackStatistics, TrackStatisticsResponse, Track, TrackTransactionResponse, OperationResponse,
  AccountPlayList, AccountPlaylistModel, AccountModel, AccountResponse, ProxyListModel, ProxyModel, AccountListModel, SelectModel, AccountPlayingResponse, AccountState, OrderModel, OrderResponse, TransactionResponse, OrderDetailResponse, JobModel, OrderJobDetailResponse, AccountTrackModel, AccountTrackResponse
} from '../spotify.model';
@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {


  public orderJobs: JobModel[];
  public orderAccountTracks: AccountTrackModel[];
  public accounts: AccountModel[];
  public proxies: ProxyModel[];
  public newOrder = new OrderModel();
  isLoadingResults = false;

  orderForm: FormGroup;
  submitted = false;
  onAdd = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddOrderComponent>,
    private spotify: SpotifyService,
    private _toastr: ToastService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.orderForm = this.formBuilder.group({
      orderTitle : ['', [ Validators.required ]],
      trackTitle: ['', [ Validators.required ]],
      trackId: ['', [ Validators.required ]],
      reqCount: ['', [ Validators.required ]],
      orderDpt: ['', [ Validators.required ]],
    });
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.submitted = true;
    if (this.orderForm.invalid) {
      return;
    }
    this.clearResult();
    this.newOrder.title = this.orderForm.controls.orderTitle.value;
    this.newOrder.description = this.orderForm.controls.orderDpt.value;
    this.newOrder.requiredPlayCount = this.orderForm.controls.reqCount.value;
    this.newOrder.trackIds = this.orderForm.controls.trackId.value;
    this.newOrder.trackTitle = this.orderForm.controls.trackTitle.value;
    this.newOrder.isProcessed = true;
    this.isLoadingResults = true;
    this.spotify.placeOrder(this.newOrder)
      .subscribe((res: OrderResponse) => {
        this.isLoadingResults = false;
        this.onAdd.emit();
        this._toastr.success("Order placed ", "Success");
        //this.processOrder(res.newOrder);
      }, (err: any) => {
        this.isLoadingResults = false;
        this._toastr.error("An error has occurred", "Error");

        console.log(err);
      });

  }

  private clearResult() {
    this.orderJobs = [];
    this.orderAccountTracks = [];
  }


}
