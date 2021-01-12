import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'center-view-shift-lights',
  styleUrl: 'center-view-shift-lights.css',
  shadow: true,
})
export class CenterViewShiftLights {

  @Prop({ attribute: "light-state" }) lightState: number;
  @Prop({ attribute: "launch-stage" }) launchStage: number;
  @Prop({ attribute: "vtec-active" }) vtecActive: boolean;


  render() {
    return (
      <Host>
        <img src="../assets/images/shift_lights_bg.png" />
        <img src="../assets/images/shift_lights_1.png" class={{ "hidden": this.lightState < 1 && this.launchStage != 1 && this.launchStage != 2 && !this.vtecActive }} />
        <img src="../assets/images/shift_lights_2.png" class={{ "hidden": this.lightState < 2 && this.launchStage != 2 }} />
        <img src="../assets/images/shift_lights_3.png" class={{ "hidden": this.lightState < 3 }} />
        <img src="../assets/images/shift_lights_4.png" class={{ "hidden": this.lightState < 4 }} />
        <img src="../assets/images/shift_lights_5.png" class={{ "hidden": this.lightState < 5 && this.launchStage != 2 }} />
        <img src="../assets/images/shift_lights_6.png" class={{ "hidden": this.lightState < 6 && this.launchStage != 2 }} />
      </Host>
    );
  }

}
