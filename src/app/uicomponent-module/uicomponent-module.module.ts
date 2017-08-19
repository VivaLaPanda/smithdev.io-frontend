import {
  MdCoreModule,
  MdButtonModule,
  MdCheckboxModule,
  MdSidenavModule,
  MdToolbarModule,
  MdListModule,
  MdIconModule,
  MdCardModule, MdDialogModule,
} from '@angular/material';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// Module used to bundle together out imports for UI components such as Angular Material
@NgModule({
  imports: [
    MdCoreModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    MdDialogModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  exports: [
    MdCoreModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    MdDialogModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
})
export class UIComponentModule {}
