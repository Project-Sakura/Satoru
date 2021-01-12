import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'center-view-inner-content',
  styleUrl: 'center-view-inner-content.css',
  shadow: true,
})
export class CenterViewInnerContent {

  @Prop({ attribute: "speed" }) speed: string;
  @Prop({ attribute: "shift-light-state" }) shiftLightState: string;
  @Prop({ attribute: "gearbox-mode" }) gearboxMode: string;
  @Prop({ attribute: "gear-number" }) gearNumber: string;
  @Prop({ attribute: "powertrain-mode" }) powertrainMode: string;
  @Prop({ attribute: "traction-mode" }) tractionMode: string;
  @Prop({ attribute: "launch-stage" }) launchStage: number;
  @Prop({ attribute: "vtec-active" }) vtecActive: boolean;


  render() {
    return (
      <Host>
        <img id="center-view-inner-ring" src="../assets/images/inner_ring.png" />
        <p id="center-view-speed">{this.speed}</p>
        <p id="center-view-speed-unit">km/h</p>
        <center-view-shift-lights light-state={this.shiftLightState} launch-stage={this.launchStage} vtec-active={this.vtecActive}></center-view-shift-lights>
        <center-view-gearbox-state gearbox-mode={this.gearboxMode} gear-number={this.gearNumber}></center-view-gearbox-state>
        <p id="center-view-powertrain-mode">{this.powertrainMode}</p>
        <p id="center-view-traction-mode">{this.tractionMode}</p>
      </Host >
    );
  }

}
