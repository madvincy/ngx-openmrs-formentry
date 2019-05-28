/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { WebcamUtil } from 'ngx-webcam';
import jsPDF from 'jspdf';
// import * as pdfMake from 'pdfmake/build/pdfmake';
/** @type {?} */
const noop = (/**
 * @return {?}
 */
() => {
    // placeholder call backs
});
const ɵ0 = noop;
export class UploaderComponent {
    constructor() {
        this.urls = new Array();
        this.selectFileType = true;
        this.fileList = new Array();
        this.liveCamera = false;
        this.pdfAvailable = false;
        this.mobile = false;
        this.UploadCaptions = false;
        this.multiple = true;
        this.fileUpload = false;
        this.backButton = false;
        this.fileChanged = new EventEmitter();
        this.uploadData = new EventEmitter();
        this._onClear = new EventEmitter();
        this.showWebcam = true;
        this.allowCameraSwitch = true;
        this.multipleWebcamsAvailable = false;
        this.videoOptions = {};
        this.errors = [];
        // latest snapshot
        this.webcamImage = null;
        // webcam snapshot trigger
        this.trigger = new Subject();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new Subject();
        this.uploading = false;
        // The internal data model
        this.innerValue = '';
        // Placeholders for the callbacks which are later providesd
        // by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.singleFile) {
            this.multiple = false;
        }
        if (window.screen.width <= 692) {
            this.mobile = true;
        }
        WebcamUtil.getAvailableVideoInputs()
            .then((/**
         * @param {?} mediaDevices
         * @return {?}
         */
        (mediaDevices) => {
            this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        }));
    }
    // get accessor
    /**
     * @return {?}
     */
    get value() {
        return this.innerValue;
    }
    // set accessor including call the onchange callback
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }
    // Current time string.
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.onTouchedCallback();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        /** @type {?} */
        const files = event.srcElement.files;
        this.uploading = true;
        // const fileToLoad = files;
        if (files) {
            for (const file of files) {
                /** @type {?} */
                const fileReader = new FileReader();
                fileReader.onload = (/**
                 * @param {?} fileLoadedEvent
                 * @return {?}
                 */
                (fileLoadedEvent) => {
                    /** @type {?} */
                    const data = fileReader.result;
                    /** @type {?} */
                    const name = file.name;
                    /** @type {?} */
                    const fileSize = Math.round(file.size / 1024);
                    /** @type {?} */
                    const payload = {
                        data,
                        id: this.urls.length + 1,
                        name: name,
                        size: fileSize
                    };
                    if (!this.singleFile) {
                        this.urls.push(payload);
                        this.fileList.push(payload);
                    }
                    else {
                        this.fileChanged.emit(payload);
                        this.back();
                    }
                });
                fileReader.readAsDataURL(file);
            }
        }
    }
    /**
     * @return {?}
     */
    clear() {
        this.value = '';
        this.onChangeCallback(this.value);
        this.urls = [];
        this.back();
        this._onClear.emit();
    }
    /**
     * @return {?}
     */
    back() {
        this.selectFileType = true;
        this.urls = [];
        this.backButton = false;
        this.fileList = [];
        this.UploadCaptions = false;
        this.fileUpload = false;
        this.liveCamera = false;
    }
    /**
     * @param {?} filetype
     * @return {?}
     */
    toggleVisibility(filetype) {
        if (filetype === 'image') {
            this.fileType = 'image/png, image/jpeg, image/gif';
            this.fileUpload = true;
        }
        else if (filetype === 'pdf') {
            this.fileType = 'application/pdf';
            this.pdfAvailable = true;
            this.fileUpload = true;
        }
        else if (filetype === 'both') {
            this.fileType = 'image/png, image/jpeg, image/gif , application/pdf';
            this.pdfAvailable = true;
            this.fileUpload = true;
        }
        else if (filetype === 'liveCamera') {
            this.liveCamera = true;
        }
        this.selectFileType = false;
        this.backButton = true;
    }
    /**
     * @return {?}
     */
    upload() {
        this.uploadData.emit(this.fileList);
        this.back();
    }
    /**
     * @return {?}
     */
    MergeImages() {
        /** @type {?} */
        const doc = new jsPDF();
        doc.page = 1;
        for (let i = 0; i < this.fileList.length; i++) {
            /** @type {?} */
            const imageData = this.fileList[i].data || this.fileList[i].imageAsDataUrl;
            doc.addImage(imageData, 'JPG', 10, 10, 190, 270);
            doc.setFont('courier');
            doc.setFontType('normal');
            doc.text(180, 290, 'page ' + doc.page);
            doc.page++;
            if (i < this.fileList.length) {
                doc.addPage();
            }
        }
        doc.deletePage(this.fileList.length + 1);
        this.fileList = [];
        this.urls = [];
        /** @type {?} */
        const data = doc.output('datauristring');
        /** @type {?} */
        const payload = {
            data,
        };
        this.fileList.push(payload);
        this.urls.push(payload);
        doc.output('dataurlnewwindow');
        // doc.save('Test.pdf');
    }
    /**
     * @param {?} urls
     * @return {?}
     */
    delete(urls) {
        for (let i = 0; i <= this.urls.length; i++) {
            if (urls.data) {
                if (this.urls[i].data === urls.data) {
                    this.urls.splice(i, 1);
                    this.fileList.splice(i, 1);
                    break;
                }
            }
            else if (urls.imageAsDataUrl) {
                if (this.urls[i].imageAsDataUrl === urls.imageAsDataUrl) {
                    this.urls.splice(i);
                    this.fileList.splice(i, 1);
                    break;
                }
            }
        }
    }
    /**
     * @return {?}
     */
    triggerSnapshot() {
        this.trigger.next();
    }
    /**
     * @return {?}
     */
    toggleWebcam() {
        this.showWebcam = !this.showWebcam;
    }
    /**
     * @param {?} error
     * @return {?}
     */
    handleInitError(error) {
        this.errors.push(error);
    }
    /**
     * @param {?} directionOrDeviceId
     * @return {?}
     */
    showNextWebcam(directionOrDeviceId) {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    }
    /**
     * @param {?} webcamImage
     * @return {?}
     */
    handleImage(webcamImage) {
        // console.info('received webcam image', webcamImage);
        this.urls.push(webcamImage);
        this.fileList.push(webcamImage);
        this.UploadCaptions = true;
        this.webcamImage = webcamImage;
    }
    /**
     * @param {?} deviceId
     * @return {?}
     */
    cameraWasSwitched(deviceId) {
        // console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    }
    /**
     * @return {?}
     */
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    /**
     * @return {?}
     */
    get nextWebcamObservable() {
        return this.nextWebcam.asObservable();
    }
}
UploaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-uploader',
                template: `<div *ngIf="backButton">
  <button class="btn btn-default image-preview-clear" type="button" (click)="back()" >
    <span class="glyphicon glyphicon-circle-arrow-left"></span> Back
</button>
</div>
<div *ngIf="selectFileType" class="panel panel-primary">
  <div class="panel-heading">UPLOAD FILE TYPE</div>
  <div class="panel-body">
    <div class="row-cb">
      <span><input name="image" id="ima" (change)="toggleVisibility('image')" type="checkbox" /></span>
      <label for="ima">Image</label>

      <div class="clear-both"></div>
</div>
<div class="row-cb">
  <span><input name="option" id="pdf" (change)="toggleVisibility('pdf')" type="checkbox" /></span>
  <label for="pdf">PDF</label>

  <div class="clear-both"></div>
</div>
<div *ngIf="!singleFile" class="row-cb">
  <span><input name="option" id="both" (change)="toggleVisibility('both')" type="checkbox" /></span>
  <label  for="both">Image & PDF</label>

  <div class="clear-both"></div>
</div>
<div class="row-cb">
  <span><input name="camera" id="camera" (change)="toggleVisibility('liveCamera')" type="checkbox" /></span>
  <label for="camera" >Live Camera</label>

  <div class="clear-both"></div>
</div>
  </div>
</div>
<div style="display: block;">
  <div style="display: inline-block;" *ngFor="let url of urls;let i=index">
   <a class = "columne" id = "caption">
    <img style=" border: 1px solid rgb(97, 97, 97); margin: 2px; border-radius: 4px;padding: 5px;" id="img{{i}}" [src]="url.data || url.imageAsDataUrl" onError="this.onerror=null;this.src='59e6d5338faf193392f1bf9f89f4513dc548bd68.png | secure';" class="rounded mb-3" width="90" height="200">
    <div class="text"><h2 title="Click to Delete File {{url.name}}" (click)="delete(url)"  style="color: rgb(255, 255, 255); font-family: fantasy;"><span class="glyphicon glyphicon-trash"></span>REMOVE</h2></div>
   </a>
  </div>
  <button *ngIf="UploadCaptions" type="button" (click)="upload()" class="button">
    <span class="glyphicon glyphicon-upload"></span> Upload Files
</button>
<button *ngIf="!pdfAvailable && fileUpload || liveCamera" type="button" [disabled]="!urls[1]" (click)="MergeImages()"  title="merge the images as pages in one pdf document"  class="btn btn-default image-preview-clear">
  <span class="glyphicon glyphicon-upload"></span> Merge
</button>
</div>
<div *ngIf="fileUpload">

  <div class="input-group">
    <input type="text" class="form-control" readonly [(ngModel)]="value">
    <div class="input-group-btn">

      <div class="btn btn-default image-preview-input">
        <span class="glyphicon glyphicon-folder-open"></span>
        <span class="image-preview-input-title">SELECT FILE</span>
        <input *ngIf="multiple" type="file" multiple accept="{{fileType}}" (blur)="onBlur()" name="input-file-preview" (change)="onChange($event)"
        /> 
        <input *ngIf="!multiple" type="file" accept="{{fileType}}" (blur)="onBlur()" name="input-file-preview" (change)="onChange($event)"
        /> 
        <!-- rename it -->
      </div>
      <button *ngIf="value" type="button" (click)="clear()" class="btn btn-default image-preview-clear">
                        <span class="glyphicon glyphicon-remove"></span> Clear
    </button>
    <button *ngIf="multiple" type="button" (click)="upload()" class="button">
      <span class="glyphicon glyphicon-upload"></span> Upload
</button>
    </div>
  </div>
  <div *ngIf="!mobile" class="image-upload-wrap">
    <input *ngIf="multiple" class="file-upload-input" type='file' (change)="onChange($event)" multiple accept="{{fileType}}" />
    <input *ngIf="!multiple" class="file-upload-input" type='file' (change)="onChange($event)" accept="{{fileType}}" />
    <div class="drag-text">
      <h3>Drag and Drop file(s)</h3>
    </div>
  </div>
</div>
<div *ngIf="liveCamera">
  <div style="text-align:center">
    <div>
      <webcam [height]="700" [width]="700" [trigger]="triggerObservable" (imageCapture)="handleImage($event)" *ngIf="showWebcam"
              [allowCameraSwitch]="allowCameraSwitch" [switchCamera]="nextWebcamObservable"
              [videoOptions]="videoOptions"
              [imageQuality]="1"
              (cameraSwitched)="cameraWasSwitched($event)"
              (initError)="handleInitError($event)"
      ></webcam>
      <br/>
      <button class="btn btn-default image-preview-clear" (click)="triggerSnapshot();"><span class="glyphicon glyphicon-camera"></span>Take A Snapshot</button>
      <!-- <button class="actionBtn" (click)="toggleWebcam();">Toggle Webcam</button> -->
      <!-- <br/> -->
      <button class="btn btn-default image-preview-clear" (click)="showNextWebcam(true);" [disabled]="!multipleWebcamsAvailable">Change Camera</button>
      <!-- <input id="cameraSwitchCheckbox" type="checkbox" [(ngModel)]="allowCameraSwitch"><label for="cameraSwitchCheckbox">Allow Camera Switch</label>
      <br/> -->
      <!-- DeviceId: <input id="deviceId" type="text" [(ngModel)]="deviceId" style="width: 500px">
      <button (click)="showNextWebcam(deviceId);">Activate</button> -->
    </div>
  </div>
  <h4 *ngIf="errors.length > 0">Messages:</h4>
  <ul *ngFor="let error of errors">
    <li>{{error | json}}</li>
  </ul>
</div>


`,
                styles: [`.btn-file{position:relative;overflow:hidden}.btn-file input[type=file]{position:absolute;top:0;right:0;min-width:100%;min-height:100%;font-size:100px;text-align:right;opacity:0;outline:0;background:#fff;cursor:inherit;display:block}#img-upload{width:100%}.image-preview-input input[type=file]{position:absolute;top:0;right:0;margin:0;padding:0;font-size:20px;cursor:pointer;opacity:0}.file-upload{background-color:#fff;width:600px;margin:0 auto;padding:20px}.file-upload-btn{width:100%;margin:0;color:#fff;background:#1fb264;border:none;padding:10px;border-radius:4px;border-bottom:4px solid #15824b;transition:.2s;outline:0;text-transform:uppercase;font-weight:700}ul{list-style-type:none;margin:0;padding:0}.file-upload-btn:hover{background:#1aa059;color:#fff;transition:.2s;cursor:pointer}.file-upload-btn:active{border:0;transition:.2s}.file-upload-content{display:none;text-align:center}.file-upload-input{position:absolute;margin:0;padding:0;width:100%;height:100%;outline:0;opacity:0;cursor:pointer}.image-upload-wrap{margin-top:20px;border:4px dashed #3683c7;position:relative}.image-dropping,.image-upload-wrap:hover{background-color:#337ab7;border:4px dashed #fff}.image-title-wrap{padding:0 15px 15px;color:#222}.drag-text{text-align:center}.drag-text h3{font-weight:100;text-transform:uppercase;color:#155a82;padding:60px 0}.file-upload-image{max-height:200px;max-width:200px;margin:auto;padding:20px}.button{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;touch-action:manipulation;cursor:pointer;background-color:#004a7f;border:none;color:#fff;text-decoration:none;-webkit-animation:1.5s infinite glowing;animation:1.5s infinite glowing}@-webkit-keyframes glowing{0%{background-color:#002fb2;-webkit-box-shadow:0 0 3px #005cb2}50%{background-color:#203864;-webkit-box-shadow:0 0 40px #203864}100%{background-color:#005cb2;-webkit-box-shadow:0 0 3px #005cb2}}@keyframes glowing{0%,100%{background-color:#005cb2;box-shadow:0 0 3px #005cb2}50%{background-color:#203864;box-shadow:0 0 40px #203864}}.actionBtn{margin-top:5px;margin-bottom:2px;font-size:1.2em}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700;margin-right:10px}.row-cb{margin:auto;font-size:15px}.row-cb label{float:left}.row-cb span{float:left;text-align:left}.snapshot{text-align:center}.snapshot img{max-width:800px;max-height:800px}.columne#caption .text h1{margin:0;color:#fff}.columne#caption:hover .text{opacity:1;cursor:pointer;opacity:1}.columne#caption{position:relative}.columne#caption .text{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:10;opacity:0;transition:.8s}.columne#caption:hover img{-webkit-filter:sepia(90%)}@media (max-width:629px){.file-upload-input{display:none!important}}`]
            },] },
];
UploaderComponent.propDecorators = {
    singleFile: [{ type: Input }],
    source: [{ type: Input }],
    fileChanged: [{ type: Output }],
    uploadData: [{ type: Output }],
    _onClear: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UploaderComponent.prototype.urls;
    /** @type {?} */
    UploaderComponent.prototype.selectFileType;
    /** @type {?} */
    UploaderComponent.prototype.fileList;
    /** @type {?} */
    UploaderComponent.prototype.fileType;
    /** @type {?} */
    UploaderComponent.prototype.liveCamera;
    /** @type {?} */
    UploaderComponent.prototype.pdfAvailable;
    /** @type {?} */
    UploaderComponent.prototype.mobile;
    /** @type {?} */
    UploaderComponent.prototype.UploadCaptions;
    /** @type {?} */
    UploaderComponent.prototype.singleFile;
    /** @type {?} */
    UploaderComponent.prototype.multiple;
    /** @type {?} */
    UploaderComponent.prototype.fileUpload;
    /** @type {?} */
    UploaderComponent.prototype.backButton;
    /** @type {?} */
    UploaderComponent.prototype.source;
    /** @type {?} */
    UploaderComponent.prototype.fileChanged;
    /** @type {?} */
    UploaderComponent.prototype.uploadData;
    /** @type {?} */
    UploaderComponent.prototype._onClear;
    /** @type {?} */
    UploaderComponent.prototype._imagePath;
    /** @type {?} */
    UploaderComponent.prototype.showWebcam;
    /** @type {?} */
    UploaderComponent.prototype.allowCameraSwitch;
    /** @type {?} */
    UploaderComponent.prototype.multipleWebcamsAvailable;
    /** @type {?} */
    UploaderComponent.prototype.deviceId;
    /** @type {?} */
    UploaderComponent.prototype.videoOptions;
    /** @type {?} */
    UploaderComponent.prototype.errors;
    /** @type {?} */
    UploaderComponent.prototype.webcamImage;
    /**
     * @type {?}
     * @private
     */
    UploaderComponent.prototype.trigger;
    /**
     * @type {?}
     * @private
     */
    UploaderComponent.prototype.nextWebcam;
    /** @type {?} */
    UploaderComponent.prototype.uploading;
    /**
     * @type {?}
     * @private
     */
    UploaderComponent.prototype.innerValue;
    /**
     * @type {?}
     * @private
     */
    UploaderComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    UploaderComponent.prototype.onChangeCallback;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5tcnMtZm9ybWVudHJ5LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9maWxlLXVwbG9hZC91cGxvYWRlci91cGxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQWdDLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN0RSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7OztNQUdwQixJQUFJOzs7QUFBRyxHQUFHLEVBQUU7SUFDaEIseUJBQXlCO0FBQzNCLENBQUMsQ0FBQTs7QUFtSEQsTUFBTTtJQWhITjtRQWlIUyxTQUFJLEdBQUcsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUN4QixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixhQUFRLEdBQUcsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUU1QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUV2QixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVULGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUzRCxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6Qiw2QkFB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QUFDO0lBQ3hDLENBQUM7OztZQTNXRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EyR1g7Z0JBQ0MsTUFBTSxFQUFFLENBQUMseTBGQUF5MEYsQ0FBQzthQUNwMUY7Ozt5QkFVRSxLQUFLO3FCQUlMLEtBQUs7MEJBQ0wsTUFBTTt5QkFDTixNQUFNO3VCQUNOLE1BQU07Ozs7SUFmUCxpQ0FBK0I7O0lBQy9CLDJDQUE2Qjs7SUFDN0IscUNBQW1DOztJQUNuQyxxQ0FBd0I7O0lBQ3hCLHVDQUEwQjs7SUFDMUIseUNBQTRCOztJQUM1QixtQ0FBc0I7O0lBQ3RCLDJDQUE4Qjs7SUFDOUIsdUNBQWdDOztJQUNoQyxxQ0FBdUI7O0lBQ3ZCLHVDQUEwQjs7SUFDMUIsdUNBQTBCOztJQUMxQixtQ0FBNEI7O0lBQzVCLHdDQUFxRTs7SUFDckUsdUNBQW9FOztJQUNwRSxxQ0FBa0U7O0lBQ2xFLHVDQUEwQjs7SUFDMUIsdUNBQXlCOztJQUN6Qiw4Q0FBZ0M7O0lBQ2hDLHFEQUF3Qzs7SUFDeEMscUNBQXdCOztJQUN4Qix5Q0FHRTs7SUFDRixtQ0FBc0M7O0lBR3RDLHdDQUF1Qzs7Ozs7SUFHdkMsb0NBQXFEOzs7OztJQUVyRCx1Q0FBZ0Y7O0lBQ2hGLHNDQUF5Qjs7Ozs7SUFFekIsdUNBQTZCOzs7OztJQUk3Qiw4Q0FBNkM7Ozs7O0lBQzdDLDZDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFdlYmNhbUltYWdlLCBXZWJjYW1Jbml0RXJyb3IsIFdlYmNhbVV0aWwgfSBmcm9tICduZ3gtd2ViY2FtJztcbmltcG9ydCBqc1BERiBmcm9tICdqc3BkZic7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBpbXBvcnQgKiBhcyBwZGZNYWtlIGZyb20gJ3BkZm1ha2UvYnVpbGQvcGRmbWFrZSc7XG5jb25zdCBub29wID0gKCkgPT4ge1xuICAvLyBwbGFjZWhvbGRlciBjYWxsIGJhY2tzXG59O1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi11cGxvYWRlcicsXG4gIHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cImJhY2tCdXR0b25cIj5cbiAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBpbWFnZS1wcmV2aWV3LWNsZWFyXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJiYWNrKClcIiA+XG4gICAgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNpcmNsZS1hcnJvdy1sZWZ0XCI+PC9zcGFuPiBCYWNrXG48L2J1dHRvbj5cbjwvZGl2PlxuPGRpdiAqbmdJZj1cInNlbGVjdEZpbGVUeXBlXCIgY2xhc3M9XCJwYW5lbCBwYW5lbC1wcmltYXJ5XCI+XG4gIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+VVBMT0FEIEZJTEUgVFlQRTwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3ctY2JcIj5cbiAgICAgIDxzcGFuPjxpbnB1dCBuYW1lPVwiaW1hZ2VcIiBpZD1cImltYVwiIChjaGFuZ2UpPVwidG9nZ2xlVmlzaWJpbGl0eSgnaW1hZ2UnKVwiIHR5cGU9XCJjaGVja2JveFwiIC8+PC9zcGFuPlxuICAgICAgPGxhYmVsIGZvcj1cImltYVwiPkltYWdlPC9sYWJlbD5cblxuICAgICAgPGRpdiBjbGFzcz1cImNsZWFyLWJvdGhcIj48L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInJvdy1jYlwiPlxuICA8c3Bhbj48aW5wdXQgbmFtZT1cIm9wdGlvblwiIGlkPVwicGRmXCIgKGNoYW5nZSk9XCJ0b2dnbGVWaXNpYmlsaXR5KCdwZGYnKVwiIHR5cGU9XCJjaGVja2JveFwiIC8+PC9zcGFuPlxuICA8bGFiZWwgZm9yPVwicGRmXCI+UERGPC9sYWJlbD5cblxuICA8ZGl2IGNsYXNzPVwiY2xlYXItYm90aFwiPjwvZGl2PlxuPC9kaXY+XG48ZGl2ICpuZ0lmPVwiIXNpbmdsZUZpbGVcIiBjbGFzcz1cInJvdy1jYlwiPlxuICA8c3Bhbj48aW5wdXQgbmFtZT1cIm9wdGlvblwiIGlkPVwiYm90aFwiIChjaGFuZ2UpPVwidG9nZ2xlVmlzaWJpbGl0eSgnYm90aCcpXCIgdHlwZT1cImNoZWNrYm94XCIgLz48L3NwYW4+XG4gIDxsYWJlbCAgZm9yPVwiYm90aFwiPkltYWdlICYgUERGPC9sYWJlbD5cblxuICA8ZGl2IGNsYXNzPVwiY2xlYXItYm90aFwiPjwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwicm93LWNiXCI+XG4gIDxzcGFuPjxpbnB1dCBuYW1lPVwiY2FtZXJhXCIgaWQ9XCJjYW1lcmFcIiAoY2hhbmdlKT1cInRvZ2dsZVZpc2liaWxpdHkoJ2xpdmVDYW1lcmEnKVwiIHR5cGU9XCJjaGVja2JveFwiIC8+PC9zcGFuPlxuICA8bGFiZWwgZm9yPVwiY2FtZXJhXCIgPkxpdmUgQ2FtZXJhPC9sYWJlbD5cblxuICA8ZGl2IGNsYXNzPVwiY2xlYXItYm90aFwiPjwvZGl2PlxuPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48ZGl2IHN0eWxlPVwiZGlzcGxheTogYmxvY2s7XCI+XG4gIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCIgKm5nRm9yPVwibGV0IHVybCBvZiB1cmxzO2xldCBpPWluZGV4XCI+XG4gICA8YSBjbGFzcyA9IFwiY29sdW1uZVwiIGlkID0gXCJjYXB0aW9uXCI+XG4gICAgPGltZyBzdHlsZT1cIiBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTcsIDk3LCA5Nyk7IG1hcmdpbjogMnB4OyBib3JkZXItcmFkaXVzOiA0cHg7cGFkZGluZzogNXB4O1wiIGlkPVwiaW1ne3tpfX1cIiBbc3JjXT1cInVybC5kYXRhIHx8IHVybC5pbWFnZUFzRGF0YVVybFwiIG9uRXJyb3I9XCJ0aGlzLm9uZXJyb3I9bnVsbDt0aGlzLnNyYz0nNTllNmQ1MzM4ZmFmMTkzMzkyZjFiZjlmODlmNDUxM2RjNTQ4YmQ2OC5wbmcgfCBzZWN1cmUnO1wiIGNsYXNzPVwicm91bmRlZCBtYi0zXCIgd2lkdGg9XCI5MFwiIGhlaWdodD1cIjIwMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+PGgyIHRpdGxlPVwiQ2xpY2sgdG8gRGVsZXRlIEZpbGUge3t1cmwubmFtZX19XCIgKGNsaWNrKT1cImRlbGV0ZSh1cmwpXCIgIHN0eWxlPVwiY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgZm9udC1mYW1pbHk6IGZhbnRhc3k7XCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXCI+PC9zcGFuPlJFTU9WRTwvaDI+PC9kaXY+XG4gICA8L2E+XG4gIDwvZGl2PlxuICA8YnV0dG9uICpuZ0lmPVwiVXBsb2FkQ2FwdGlvbnNcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInVwbG9hZCgpXCIgY2xhc3M9XCJidXR0b25cIj5cbiAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdXBsb2FkXCI+PC9zcGFuPiBVcGxvYWQgRmlsZXNcbjwvYnV0dG9uPlxuPGJ1dHRvbiAqbmdJZj1cIiFwZGZBdmFpbGFibGUgJiYgZmlsZVVwbG9hZCB8fCBsaXZlQ2FtZXJhXCIgdHlwZT1cImJ1dHRvblwiIFtkaXNhYmxlZF09XCIhdXJsc1sxXVwiIChjbGljayk9XCJNZXJnZUltYWdlcygpXCIgIHRpdGxlPVwibWVyZ2UgdGhlIGltYWdlcyBhcyBwYWdlcyBpbiBvbmUgcGRmIGRvY3VtZW50XCIgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGltYWdlLXByZXZpZXctY2xlYXJcIj5cbiAgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXVwbG9hZFwiPjwvc3Bhbj4gTWVyZ2VcbjwvYnV0dG9uPlxuPC9kaXY+XG48ZGl2ICpuZ0lmPVwiZmlsZVVwbG9hZFwiPlxuXG4gIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcmVhZG9ubHkgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIj5cblxuICAgICAgPGRpdiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBpbWFnZS1wcmV2aWV3LWlucHV0XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1mb2xkZXItb3BlblwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbWFnZS1wcmV2aWV3LWlucHV0LXRpdGxlXCI+U0VMRUNUIEZJTEU8L3NwYW4+XG4gICAgICAgIDxpbnB1dCAqbmdJZj1cIm11bHRpcGxlXCIgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBhY2NlcHQ9XCJ7e2ZpbGVUeXBlfX1cIiAoYmx1cik9XCJvbkJsdXIoKVwiIG5hbWU9XCJpbnB1dC1maWxlLXByZXZpZXdcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAvPiBcbiAgICAgICAgPGlucHV0ICpuZ0lmPVwiIW11bHRpcGxlXCIgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJ7e2ZpbGVUeXBlfX1cIiAoYmx1cik9XCJvbkJsdXIoKVwiIG5hbWU9XCJpbnB1dC1maWxlLXByZXZpZXdcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAvPiBcbiAgICAgICAgPCEtLSByZW5hbWUgaXQgLS0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gKm5nSWY9XCJ2YWx1ZVwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiY2xlYXIoKVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGltYWdlLXByZXZpZXctY2xlYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcIj48L3NwYW4+IENsZWFyXG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiAqbmdJZj1cIm11bHRpcGxlXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ1cGxvYWQoKVwiIGNsYXNzPVwiYnV0dG9uXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdXBsb2FkXCI+PC9zcGFuPiBVcGxvYWRcbjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIiFtb2JpbGVcIiBjbGFzcz1cImltYWdlLXVwbG9hZC13cmFwXCI+XG4gICAgPGlucHV0ICpuZ0lmPVwibXVsdGlwbGVcIiBjbGFzcz1cImZpbGUtdXBsb2FkLWlucHV0XCIgdHlwZT0nZmlsZScgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgbXVsdGlwbGUgYWNjZXB0PVwie3tmaWxlVHlwZX19XCIgLz5cbiAgICA8aW5wdXQgKm5nSWY9XCIhbXVsdGlwbGVcIiBjbGFzcz1cImZpbGUtdXBsb2FkLWlucHV0XCIgdHlwZT0nZmlsZScgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgYWNjZXB0PVwie3tmaWxlVHlwZX19XCIgLz5cbiAgICA8ZGl2IGNsYXNzPVwiZHJhZy10ZXh0XCI+XG4gICAgICA8aDM+RHJhZyBhbmQgRHJvcCBmaWxlKHMpPC9oMz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgKm5nSWY9XCJsaXZlQ2FtZXJhXCI+XG4gIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPlxuICAgIDxkaXY+XG4gICAgICA8d2ViY2FtIFtoZWlnaHRdPVwiNzAwXCIgW3dpZHRoXT1cIjcwMFwiIFt0cmlnZ2VyXT1cInRyaWdnZXJPYnNlcnZhYmxlXCIgKGltYWdlQ2FwdHVyZSk9XCJoYW5kbGVJbWFnZSgkZXZlbnQpXCIgKm5nSWY9XCJzaG93V2ViY2FtXCJcbiAgICAgICAgICAgICAgW2FsbG93Q2FtZXJhU3dpdGNoXT1cImFsbG93Q2FtZXJhU3dpdGNoXCIgW3N3aXRjaENhbWVyYV09XCJuZXh0V2ViY2FtT2JzZXJ2YWJsZVwiXG4gICAgICAgICAgICAgIFt2aWRlb09wdGlvbnNdPVwidmlkZW9PcHRpb25zXCJcbiAgICAgICAgICAgICAgW2ltYWdlUXVhbGl0eV09XCIxXCJcbiAgICAgICAgICAgICAgKGNhbWVyYVN3aXRjaGVkKT1cImNhbWVyYVdhc1N3aXRjaGVkKCRldmVudClcIlxuICAgICAgICAgICAgICAoaW5pdEVycm9yKT1cImhhbmRsZUluaXRFcnJvcigkZXZlbnQpXCJcbiAgICAgID48L3dlYmNhbT5cbiAgICAgIDxici8+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGltYWdlLXByZXZpZXctY2xlYXJcIiAoY2xpY2spPVwidHJpZ2dlclNuYXBzaG90KCk7XCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNhbWVyYVwiPjwvc3Bhbj5UYWtlIEEgU25hcHNob3Q8L2J1dHRvbj5cbiAgICAgIDwhLS0gPGJ1dHRvbiBjbGFzcz1cImFjdGlvbkJ0blwiIChjbGljayk9XCJ0b2dnbGVXZWJjYW0oKTtcIj5Ub2dnbGUgV2ViY2FtPC9idXR0b24+IC0tPlxuICAgICAgPCEtLSA8YnIvPiAtLT5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgaW1hZ2UtcHJldmlldy1jbGVhclwiIChjbGljayk9XCJzaG93TmV4dFdlYmNhbSh0cnVlKTtcIiBbZGlzYWJsZWRdPVwiIW11bHRpcGxlV2ViY2Ftc0F2YWlsYWJsZVwiPkNoYW5nZSBDYW1lcmE8L2J1dHRvbj5cbiAgICAgIDwhLS0gPGlucHV0IGlkPVwiY2FtZXJhU3dpdGNoQ2hlY2tib3hcIiB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cImFsbG93Q2FtZXJhU3dpdGNoXCI+PGxhYmVsIGZvcj1cImNhbWVyYVN3aXRjaENoZWNrYm94XCI+QWxsb3cgQ2FtZXJhIFN3aXRjaDwvbGFiZWw+XG4gICAgICA8YnIvPiAtLT5cbiAgICAgIDwhLS0gRGV2aWNlSWQ6IDxpbnB1dCBpZD1cImRldmljZUlkXCIgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImRldmljZUlkXCIgc3R5bGU9XCJ3aWR0aDogNTAwcHhcIj5cbiAgICAgIDxidXR0b24gKGNsaWNrKT1cInNob3dOZXh0V2ViY2FtKGRldmljZUlkKTtcIj5BY3RpdmF0ZTwvYnV0dG9uPiAtLT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxoNCAqbmdJZj1cImVycm9ycy5sZW5ndGggPiAwXCI+TWVzc2FnZXM6PC9oND5cbiAgPHVsICpuZ0Zvcj1cImxldCBlcnJvciBvZiBlcnJvcnNcIj5cbiAgICA8bGk+e3tlcnJvciB8IGpzb259fTwvbGk+XG4gIDwvdWw+XG48L2Rpdj5cblxuXG5gLFxuICBzdHlsZXM6IFtgLmJ0bi1maWxle3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbn0uYnRuLWZpbGUgaW5wdXRbdHlwZT1maWxlXXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO21pbi13aWR0aDoxMDAlO21pbi1oZWlnaHQ6MTAwJTtmb250LXNpemU6MTAwcHg7dGV4dC1hbGlnbjpyaWdodDtvcGFjaXR5OjA7b3V0bGluZTowO2JhY2tncm91bmQ6I2ZmZjtjdXJzb3I6aW5oZXJpdDtkaXNwbGF5OmJsb2NrfSNpbWctdXBsb2Fke3dpZHRoOjEwMCV9LmltYWdlLXByZXZpZXctaW5wdXQgaW5wdXRbdHlwZT1maWxlXXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO21hcmdpbjowO3BhZGRpbmc6MDtmb250LXNpemU6MjBweDtjdXJzb3I6cG9pbnRlcjtvcGFjaXR5OjB9LmZpbGUtdXBsb2Fke2JhY2tncm91bmQtY29sb3I6I2ZmZjt3aWR0aDo2MDBweDttYXJnaW46MCBhdXRvO3BhZGRpbmc6MjBweH0uZmlsZS11cGxvYWQtYnRue3dpZHRoOjEwMCU7bWFyZ2luOjA7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiMxZmIyNjQ7Ym9yZGVyOm5vbmU7cGFkZGluZzoxMHB4O2JvcmRlci1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b206NHB4IHNvbGlkICMxNTgyNGI7dHJhbnNpdGlvbjouMnM7b3V0bGluZTowO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtmb250LXdlaWdodDo3MDB9dWx7bGlzdC1zdHlsZS10eXBlOm5vbmU7bWFyZ2luOjA7cGFkZGluZzowfS5maWxlLXVwbG9hZC1idG46aG92ZXJ7YmFja2dyb3VuZDojMWFhMDU5O2NvbG9yOiNmZmY7dHJhbnNpdGlvbjouMnM7Y3Vyc29yOnBvaW50ZXJ9LmZpbGUtdXBsb2FkLWJ0bjphY3RpdmV7Ym9yZGVyOjA7dHJhbnNpdGlvbjouMnN9LmZpbGUtdXBsb2FkLWNvbnRlbnR7ZGlzcGxheTpub25lO3RleHQtYWxpZ246Y2VudGVyfS5maWxlLXVwbG9hZC1pbnB1dHtwb3NpdGlvbjphYnNvbHV0ZTttYXJnaW46MDtwYWRkaW5nOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvdXRsaW5lOjA7b3BhY2l0eTowO2N1cnNvcjpwb2ludGVyfS5pbWFnZS11cGxvYWQtd3JhcHttYXJnaW4tdG9wOjIwcHg7Ym9yZGVyOjRweCBkYXNoZWQgIzM2ODNjNztwb3NpdGlvbjpyZWxhdGl2ZX0uaW1hZ2UtZHJvcHBpbmcsLmltYWdlLXVwbG9hZC13cmFwOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzMzN2FiNztib3JkZXI6NHB4IGRhc2hlZCAjZmZmfS5pbWFnZS10aXRsZS13cmFwe3BhZGRpbmc6MCAxNXB4IDE1cHg7Y29sb3I6IzIyMn0uZHJhZy10ZXh0e3RleHQtYWxpZ246Y2VudGVyfS5kcmFnLXRleHQgaDN7Zm9udC13ZWlnaHQ6MTAwO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtjb2xvcjojMTU1YTgyO3BhZGRpbmc6NjBweCAwfS5maWxlLXVwbG9hZC1pbWFnZXttYXgtaGVpZ2h0OjIwMHB4O21heC13aWR0aDoyMDBweDttYXJnaW46YXV0bztwYWRkaW5nOjIwcHh9LmJ1dHRvbntkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjZweCAxMnB4O21hcmdpbi1ib3R0b206MDtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MS40Mjg1NzE0Mzt0ZXh0LWFsaWduOmNlbnRlcjt3aGl0ZS1zcGFjZTpub3dyYXA7dmVydGljYWwtYWxpZ246bWlkZGxlO3RvdWNoLWFjdGlvbjptYW5pcHVsYXRpb247Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1jb2xvcjojMDA0YTdmO2JvcmRlcjpub25lO2NvbG9yOiNmZmY7dGV4dC1kZWNvcmF0aW9uOm5vbmU7LXdlYmtpdC1hbmltYXRpb246MS41cyBpbmZpbml0ZSBnbG93aW5nO2FuaW1hdGlvbjoxLjVzIGluZmluaXRlIGdsb3dpbmd9QC13ZWJraXQta2V5ZnJhbWVzIGdsb3dpbmd7MCV7YmFja2dyb3VuZC1jb2xvcjojMDAyZmIyOy13ZWJraXQtYm94LXNoYWRvdzowIDAgM3B4ICMwMDVjYjJ9NTAle2JhY2tncm91bmQtY29sb3I6IzIwMzg2NDstd2Via2l0LWJveC1zaGFkb3c6MCAwIDQwcHggIzIwMzg2NH0xMDAle2JhY2tncm91bmQtY29sb3I6IzAwNWNiMjstd2Via2l0LWJveC1zaGFkb3c6MCAwIDNweCAjMDA1Y2IyfX1Aa2V5ZnJhbWVzIGdsb3dpbmd7MCUsMTAwJXtiYWNrZ3JvdW5kLWNvbG9yOiMwMDVjYjI7Ym94LXNoYWRvdzowIDAgM3B4ICMwMDVjYjJ9NTAle2JhY2tncm91bmQtY29sb3I6IzIwMzg2NDtib3gtc2hhZG93OjAgMCA0MHB4ICMyMDM4NjR9fS5hY3Rpb25CdG57bWFyZ2luLXRvcDo1cHg7bWFyZ2luLWJvdHRvbToycHg7Zm9udC1zaXplOjEuMmVtfWxhYmVse2Rpc3BsYXk6aW5saW5lLWJsb2NrO21heC13aWR0aDoxMDAlO21hcmdpbi1ib3R0b206NXB4O2ZvbnQtd2VpZ2h0OjcwMDttYXJnaW4tcmlnaHQ6MTBweH0ucm93LWNie21hcmdpbjphdXRvO2ZvbnQtc2l6ZToxNXB4fS5yb3ctY2IgbGFiZWx7ZmxvYXQ6bGVmdH0ucm93LWNiIHNwYW57ZmxvYXQ6bGVmdDt0ZXh0LWFsaWduOmxlZnR9LnNuYXBzaG90e3RleHQtYWxpZ246Y2VudGVyfS5zbmFwc2hvdCBpbWd7bWF4LXdpZHRoOjgwMHB4O21heC1oZWlnaHQ6ODAwcHh9LmNvbHVtbmUjY2FwdGlvbiAudGV4dCBoMXttYXJnaW46MDtjb2xvcjojZmZmfS5jb2x1bW5lI2NhcHRpb246aG92ZXIgLnRleHR7b3BhY2l0eToxO2N1cnNvcjpwb2ludGVyO29wYWNpdHk6MX0uY29sdW1uZSNjYXB0aW9ue3Bvc2l0aW9uOnJlbGF0aXZlfS5jb2x1bW5lI2NhcHRpb24gLnRleHR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7ei1pbmRleDoxMDtvcGFjaXR5OjA7dHJhbnNpdGlvbjouOHN9LmNvbHVtbmUjY2FwdGlvbjpob3ZlciBpbWd7LXdlYmtpdC1maWx0ZXI6c2VwaWEoOTAlKX1AbWVkaWEgKG1heC13aWR0aDo2MjlweCl7LmZpbGUtdXBsb2FkLWlucHV0e2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9fWBdXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIHB1YmxpYyB1cmxzID0gbmV3IEFycmF5PGFueT4oKTtcbiAgcHVibGljIHNlbGVjdEZpbGVUeXBlID0gdHJ1ZTtcbiAgcHVibGljIGZpbGVMaXN0ID0gbmV3IEFycmF5PGFueT4oKTtcbiAgcHVibGljIGZpbGVUeXBlOiBzdHJpbmc7XG4gIHB1YmxpYyBsaXZlQ2FtZXJhID0gZmFsc2U7XG4gIHB1YmxpYyBwZGZBdmFpbGFibGUgPSBmYWxzZTtcbiAgcHVibGljIG1vYmlsZSA9IGZhbHNlO1xuICBwdWJsaWMgVXBsb2FkQ2FwdGlvbnMgPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIHNpbmdsZUZpbGU6IGFueTtcbiAgcHVibGljIG11bHRpcGxlID0gdHJ1ZTtcbiAgcHVibGljIGZpbGVVcGxvYWQgPSBmYWxzZTtcbiAgcHVibGljIGJhY2tCdXR0b24gPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIHNvdXJjZTogYW55O1xuICBAT3V0cHV0KCkgcHVibGljIGZpbGVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyB1cGxvYWREYXRhOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBfb25DbGVhcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHB1YmxpYyBfaW1hZ2VQYXRoOiBzdHJpbmc7XG4gIHB1YmxpYyBzaG93V2ViY2FtID0gdHJ1ZTtcbiAgcHVibGljIGFsbG93Q2FtZXJhU3dpdGNoID0gdHJ1ZTtcbiAgcHVibGljIG11bHRpcGxlV2ViY2Ftc0F2YWlsYWJsZSA9IGZhbHNlO1xuICBwdWJsaWMgZGV2aWNlSWQ6IHN0cmluZztcbiAgcHVibGljIHZpZGVvT3B0aW9uczogTWVkaWFUcmFja0NvbnN0cmFpbnRzID0ge1xuICAgIC8vIHdpZHRoOiB7aWRlYWw6IDEwMjR9LFxuICAgIC8vIGhlaWdodDoge2lkZWFsOiA1NzZ9XG4gIH07XG4gIHB1YmxpYyBlcnJvcnM6IFdlYmNhbUluaXRFcnJvcltdID0gW107XG5cbiAgLy8gbGF0ZXN0IHNuYXBzaG90XG4gIHB1YmxpYyB3ZWJjYW1JbWFnZTogV2ViY2FtSW1hZ2UgPSBudWxsO1xuXG4gIC8vIHdlYmNhbSBzbmFwc2hvdCB0cmlnZ2VyXG4gIHByaXZhdGUgdHJpZ2dlcjogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIC8vIHN3aXRjaCB0byBuZXh0IC8gcHJldmlvdXMgLyBzcGVjaWZpYyB3ZWJjYW07IHRydWUvZmFsc2U6IGZvcndhcmQvYmFja3dhcmRzLCBzdHJpbmc6IGRldmljZUlkXG4gIHByaXZhdGUgbmV4dFdlYmNhbTogU3ViamVjdDxib29sZWFuIHwgc3RyaW5nPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4gfCBzdHJpbmc+KCk7XG4gIHB1YmxpYyB1cGxvYWRpbmcgPSBmYWxzZTtcbiAgLy8gVGhlIGludGVybmFsIGRhdGEgbW9kZWxcbiAgcHJpdmF0ZSBpbm5lclZhbHVlOiBhbnkgPSAnJztcblxuICAvLyBQbGFjZWhvbGRlcnMgZm9yIHRoZSBjYWxsYmFja3Mgd2hpY2ggYXJlIGxhdGVyIHByb3ZpZGVzZFxuICAvLyBieSB0aGUgQ29udHJvbCBWYWx1ZSBBY2Nlc3NvclxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcblxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5zaW5nbGVGaWxlKSB7XG4gICAgICB0aGlzLm11bHRpcGxlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDw9IDY5MikgeyAvLyA3NjhweCBwb3J0cmFpdFxuICAgICAgdGhpcy5tb2JpbGUgPSB0cnVlO1xuICAgIH1cbiAgICBXZWJjYW1VdGlsLmdldEF2YWlsYWJsZVZpZGVvSW5wdXRzKClcbiAgICAgIC50aGVuKChtZWRpYURldmljZXM6IE1lZGlhRGV2aWNlSW5mb1tdKSA9PiB7XG4gICAgICAgIHRoaXMubXVsdGlwbGVXZWJjYW1zQXZhaWxhYmxlID0gbWVkaWFEZXZpY2VzICYmIG1lZGlhRGV2aWNlcy5sZW5ndGggPiAxO1xuICAgICAgfSk7XG4gIH1cblxuICAvLyBnZXQgYWNjZXNzb3JcbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJWYWx1ZTtcbiAgfVxuXG4gIC8vIHNldCBhY2Nlc3NvciBpbmNsdWRpbmcgY2FsbCB0aGUgb25jaGFuZ2UgY2FsbGJhY2tcbiAgc2V0IHZhbHVlKHY6IGFueSkge1xuICAgIGlmICh2ICE9PSB0aGlzLmlubmVyVmFsdWUpIHtcbiAgICAgIHRoaXMuaW5uZXJWYWx1ZSA9IHY7XG4gICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodik7XG4gICAgfVxuICB9XG4gIC8vIEN1cnJlbnQgdGltZSBzdHJpbmcuXG5cbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5pbm5lclZhbHVlKSB7XG4gICAgICB0aGlzLmlubmVyVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBGcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cblxuICAvLyBGcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIHB1YmxpYyBvbkJsdXIoKSB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgcHVibGljIG9uQ2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBmaWxlcyA9IGV2ZW50LnNyY0VsZW1lbnQuZmlsZXM7XG4gICAgdGhpcy51cGxvYWRpbmcgPSB0cnVlO1xuICAgIC8vIGNvbnN0IGZpbGVUb0xvYWQgPSBmaWxlcztcblxuICAgIGlmIChmaWxlcykge1xuICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gKGZpbGVMb2FkZWRFdmVudDogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGZpbGVSZWFkZXIucmVzdWx0O1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBmaWxlLm5hbWU7XG4gICAgICAgICAgY29uc3QgZmlsZVNpemUgPSBNYXRoLnJvdW5kKGZpbGUuc2l6ZSAvIDEwMjQpO1xuXG4gICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBpZDogdGhpcy51cmxzLmxlbmd0aCArIDEsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgc2l6ZTogZmlsZVNpemVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmICghdGhpcy5zaW5nbGVGaWxlKSB7XG4gICAgICAgICAgICB0aGlzLnVybHMucHVzaChwYXlsb2FkKTtcbiAgICAgICAgICAgIHRoaXMuZmlsZUxpc3QucHVzaChwYXlsb2FkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maWxlQ2hhbmdlZC5lbWl0KHBheWxvYWQpO1xuICAgICAgICAgICAgdGhpcy5iYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLnVybHMgPSBbXTtcbiAgICB0aGlzLmJhY2soKTtcbiAgICB0aGlzLl9vbkNsZWFyLmVtaXQoKTtcbiAgfVxuICBwdWJsaWMgYmFjaygpIHtcbiAgICB0aGlzLnNlbGVjdEZpbGVUeXBlID0gdHJ1ZTtcbiAgICB0aGlzLnVybHMgPSBbXTtcbiAgICB0aGlzLmJhY2tCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLmZpbGVMaXN0ID0gW107XG4gICAgdGhpcy5VcGxvYWRDYXB0aW9ucyA9IGZhbHNlO1xuICAgIHRoaXMuZmlsZVVwbG9hZCA9IGZhbHNlO1xuICAgIHRoaXMubGl2ZUNhbWVyYSA9IGZhbHNlO1xuICB9XG4gIHB1YmxpYyB0b2dnbGVWaXNpYmlsaXR5KGZpbGV0eXBlOiBzdHJpbmcpIHtcbiAgICBpZiAoZmlsZXR5cGUgPT09ICdpbWFnZScpIHtcbiAgICAgIHRoaXMuZmlsZVR5cGUgPSAnaW1hZ2UvcG5nLCBpbWFnZS9qcGVnLCBpbWFnZS9naWYnO1xuICAgICAgdGhpcy5maWxlVXBsb2FkID0gdHJ1ZTtcblxuICAgIH0gZWxzZSBpZiAoZmlsZXR5cGUgPT09ICdwZGYnKSB7XG4gICAgICB0aGlzLmZpbGVUeXBlID0gJ2FwcGxpY2F0aW9uL3BkZic7XG4gICAgICB0aGlzLnBkZkF2YWlsYWJsZSA9IHRydWU7XG4gICAgICB0aGlzLmZpbGVVcGxvYWQgPSB0cnVlO1xuXG4gICAgfSBlbHNlIGlmIChmaWxldHlwZSA9PT0gJ2JvdGgnKSB7XG4gICAgICB0aGlzLmZpbGVUeXBlID0gJ2ltYWdlL3BuZywgaW1hZ2UvanBlZywgaW1hZ2UvZ2lmICwgYXBwbGljYXRpb24vcGRmJztcbiAgICAgIHRoaXMucGRmQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZmlsZVVwbG9hZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChmaWxldHlwZSA9PT0gJ2xpdmVDYW1lcmEnKSB7XG4gICAgICB0aGlzLmxpdmVDYW1lcmEgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdEZpbGVUeXBlID0gZmFsc2U7XG4gICAgdGhpcy5iYWNrQnV0dG9uID0gdHJ1ZTtcblxuICB9XG5cbiAgcHVibGljIHVwbG9hZCgpIHtcbiAgICB0aGlzLnVwbG9hZERhdGEuZW1pdCh0aGlzLmZpbGVMaXN0KTtcbiAgICB0aGlzLmJhY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBNZXJnZUltYWdlcygpIHtcbiAgICBjb25zdCBkb2MgPSBuZXcganNQREYoKTtcbiAgICBkb2MucGFnZSA9IDE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpbWFnZURhdGEgPSB0aGlzLmZpbGVMaXN0W2ldLmRhdGEgfHwgdGhpcy5maWxlTGlzdFtpXS5pbWFnZUFzRGF0YVVybDtcbiAgICAgIGRvYy5hZGRJbWFnZShpbWFnZURhdGEsICdKUEcnLCAxMCwgMTAsIDE5MCwgMjcwKTtcbiAgICAgIGRvYy5zZXRGb250KCdjb3VyaWVyJyk7XG4gICAgICBkb2Muc2V0Rm9udFR5cGUoJ25vcm1hbCcpO1xuICAgICAgZG9jLnRleHQoMTgwLCAyOTAsICdwYWdlICcgKyBkb2MucGFnZSk7XG4gICAgICBkb2MucGFnZSsrO1xuICAgICAgaWYgKGkgPCB0aGlzLmZpbGVMaXN0Lmxlbmd0aCkge1xuICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBkb2MuZGVsZXRlUGFnZSh0aGlzLmZpbGVMaXN0Lmxlbmd0aCArIDEpO1xuICAgIHRoaXMuZmlsZUxpc3QgPSBbXTtcbiAgICB0aGlzLnVybHMgPSBbXTtcbiAgICBjb25zdCBkYXRhID0gZG9jLm91dHB1dCgnZGF0YXVyaXN0cmluZycpO1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBkYXRhLFxuICAgIH07XG4gICAgdGhpcy5maWxlTGlzdC5wdXNoKHBheWxvYWQpO1xuICAgIHRoaXMudXJscy5wdXNoKHBheWxvYWQpO1xuICAgIGRvYy5vdXRwdXQoJ2RhdGF1cmxuZXd3aW5kb3cnKTtcbiAgICAvLyBkb2Muc2F2ZSgnVGVzdC5wZGYnKTtcblxuICB9XG4gIHB1YmxpYyBkZWxldGUodXJsczogYW55KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy51cmxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodXJscy5kYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLnVybHNbaV0uZGF0YSA9PT0gdXJscy5kYXRhKSB7XG4gICAgICAgICAgdGhpcy51cmxzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB0aGlzLmZpbGVMaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh1cmxzLmltYWdlQXNEYXRhVXJsKSB7XG4gICAgICAgIGlmICh0aGlzLnVybHNbaV0uaW1hZ2VBc0RhdGFVcmwgPT09IHVybHMuaW1hZ2VBc0RhdGFVcmwpIHtcbiAgICAgICAgICB0aGlzLnVybHMuc3BsaWNlKGkpO1xuICAgICAgICAgIHRoaXMuZmlsZUxpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHB1YmxpYyB0cmlnZ2VyU25hcHNob3QoKTogdm9pZCB7XG4gICAgdGhpcy50cmlnZ2VyLm5leHQoKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVXZWJjYW0oKTogdm9pZCB7XG4gICAgdGhpcy5zaG93V2ViY2FtID0gIXRoaXMuc2hvd1dlYmNhbTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVJbml0RXJyb3IoZXJyb3I6IFdlYmNhbUluaXRFcnJvcik6IHZvaWQge1xuICAgIHRoaXMuZXJyb3JzLnB1c2goZXJyb3IpO1xuICB9XG5cbiAgcHVibGljIHNob3dOZXh0V2ViY2FtKGRpcmVjdGlvbk9yRGV2aWNlSWQ6IGJvb2xlYW4gfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyB0cnVlID0+IG1vdmUgZm9yd2FyZCB0aHJvdWdoIGRldmljZXNcbiAgICAvLyBmYWxzZSA9PiBtb3ZlIGJhY2t3YXJkcyB0aHJvdWdoIGRldmljZXNcbiAgICAvLyBzdHJpbmcgPT4gbW92ZSB0byBkZXZpY2Ugd2l0aCBnaXZlbiBkZXZpY2VJZFxuICAgIHRoaXMubmV4dFdlYmNhbS5uZXh0KGRpcmVjdGlvbk9yRGV2aWNlSWQpO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUltYWdlKHdlYmNhbUltYWdlOiBXZWJjYW1JbWFnZSk6IHZvaWQge1xuICAgIC8vIGNvbnNvbGUuaW5mbygncmVjZWl2ZWQgd2ViY2FtIGltYWdlJywgd2ViY2FtSW1hZ2UpO1xuICAgIHRoaXMudXJscy5wdXNoKHdlYmNhbUltYWdlKTtcbiAgICB0aGlzLmZpbGVMaXN0LnB1c2god2ViY2FtSW1hZ2UpO1xuICAgIHRoaXMuVXBsb2FkQ2FwdGlvbnMgPSB0cnVlO1xuICAgIHRoaXMud2ViY2FtSW1hZ2UgPSB3ZWJjYW1JbWFnZTtcbiAgfVxuXG4gIHB1YmxpYyBjYW1lcmFXYXNTd2l0Y2hlZChkZXZpY2VJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gY29uc29sZS5sb2coJ2FjdGl2ZSBkZXZpY2U6ICcgKyBkZXZpY2VJZCk7XG4gICAgdGhpcy5kZXZpY2VJZCA9IGRldmljZUlkO1xuICB9XG5cbiAgcHVibGljIGdldCB0cmlnZ2VyT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy50cmlnZ2VyLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHVibGljIGdldCBuZXh0V2ViY2FtT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5uZXh0V2ViY2FtLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG59XG4iXX0=