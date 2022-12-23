import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomeLowercasePipe } from "./pipes/custome-lowercase.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [CustomeLowercasePipe],
  exports: [CustomeLowercasePipe]
})
export class SharedModule {}