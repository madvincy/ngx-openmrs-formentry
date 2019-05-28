import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared.module';
// import { SelectModule } from 'ng2-select/ng2-select';
import { SelectModule } from '../../components/select/select.module';
import { RemoteFileUploadComponent } from './file-upload.component';
import { UploaderComponent } from './uploader/uploader.component';
import { WebcamModule } from 'ngx-webcam';

@NgModule({
    imports: [CommonModule, SelectModule, FormsModule, SharedModule, WebcamModule],
    exports: [RemoteFileUploadComponent, UploaderComponent],
    declarations: [RemoteFileUploadComponent, UploaderComponent],
    providers: [],
})
export class RemoteFileUploadModule { }
