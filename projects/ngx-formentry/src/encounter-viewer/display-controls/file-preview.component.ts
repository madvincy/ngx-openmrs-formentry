import {
    Component, OnInit, Input, forwardRef,
    OnChanges, Output, EventEmitter
  } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EncounterViewerService } from '../encounter-viewer.service';
import { DataSource } from '../../form-entry/question-models/interfaces/data-source';
const noop = () => {};

@Component({
    selector: 'file-preview',
    styles: [``],
    template: `<div *ngIf="innerValue">
              <img *ngIf="!resultsIsPdf" class="img-responsive"
                [src]="innerValue | secure:this._dataSource.fetchFile" alt="image" />
                </div>
                <a *ngIf="resultsIsPdf" (click)="getUrl()" style="cursor: pointer"><u>Open PDF</u></a>
                `,

    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => FilePreviewComponent),
        multi: true
      }
    ]
  })
export class FilePreviewComponent implements ControlValueAccessor, OnInit {
    @Input() public source: any;
    public innerValue = null;
    public pdfUrl: any;
    public resultsIsPdf = false;
    public _dataSource: DataSource;
    @Input()
    public get dataSource(): DataSource {
        return this._dataSource;
    }
    public set dataSource(v: DataSource) {
        this._dataSource = v;
    }
    // Placeholders for the callbacks which are later providesd
    // by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;
    constructor(private encounterService: EncounterViewerService) {}
    ngOnInit() {  }
    // get accessor
    get value(): any {
      return this.innerValue;
    }

    // set accessor including call the onchange callback
    set value(v: any) {
      if (v !== this.innerValue) {
        this.innerValue = v;
      }
    }
    // Current time string.

    public writeValue(v: any) {
      if (v !== this.innerValue) {
          this.innerValue = v;
          const re = /pdf/gi;
          if (this.innerValue.search(re) !== -1) {
            this.resultsIsPdf = true;
          }
      }
    }

    // From ControlValueAccessor interface
    public registerOnChange(fn: any) {
      this.onChangeCallback = fn;
    }

    // From ControlValueAccessor interface
    public registerOnTouched(fn: any) {
      this.onTouchedCallback = fn;
    }

    public onBlur() {
      this.onTouchedCallback();
    }

    public onChange(event: any) {
      // const files = event.srcElement.files;
      // const fileToLoad = files[0];

      // const fileReader = new FileReader();

      // fileReader.onload = (fileLoadedEvent) => {
      //   const data = fileReader.result;
      //   const fileType = data.substring('data:image/'.length, data.indexOf(';base64'));
      //   const payload = {
      //     data,
      //     extension: fileType
      //   };
      // };

      // fileReader.readAsDataURL(fileToLoad);
    }
  public getUrl() {
      this.dataSource.fetchFile(this.innerValue, 'pdf').subscribe((file) => {
        if (window.navigator.userAgent.indexOf('Linux') !== -1)  {   window.open(file , '_blank'); } else {
          window.open(file.changingThisBreaksApplicationSecurity , '_blank');
        }
      });
  }
}
