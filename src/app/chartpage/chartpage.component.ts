import { Component, Inject, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ChartModel} from '../spotify.model';
import { ToastService} from '../shared/services/toast-service';

@Component({
  selector: 'app-chartpage',
  templateUrl: './chartpage.component.html',
  styleUrls: ['./chartpage.component.scss']
})
export class ChartpageComponent implements OnInit {

  chartDataList: ChartModel[];
  editString: string;

  constructor(private spotify: SpotifyService, private _toastr: ToastService) {
  }

  ngOnInit() {
    this.getChartDataList();
  }

  getChartDataList(){
    this.spotify.getChartDataList().subscribe( (res: ChartModel[]) => {
      this._toastr.success("success","success");
      this.chartDataList = res;
    },(err: any) => {
      this._toastr.error("error message","error");
    });
  }

}
