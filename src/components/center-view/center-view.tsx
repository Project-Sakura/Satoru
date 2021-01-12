import { Prop, Component, Host, h } from '@stencil/core';

@Component({
  tag: 'center-view',
  styleUrl: 'center-view.css',
  shadow: true,
})
export class CenterView {

  // Rev Counter
  @Prop({ attribute: "rpm" }) rpm: string; // unit: rpm
  @Prop({ attribute: "limiter-rpm" }) limiterRpm: string; // unit: rpm
  @Prop({ attribute: "limiter-glow" }) limiterGlow: boolean;
  @Prop({ attribute: "launch-glow" }) launchGlow: boolean;
  @Prop({ attribute: "launch-stage" }) launchStage: number;

  // Inner data
  @Prop({ attribute: "speed" }) speed: string; // unit: kph
  @Prop({ attribute: "shift-light-state" }) shiftLightState: string; // 1- 6
  @Prop({ attribute: "gearbox-mode" }) gearboxMode: string; // R / N / D
  @Prop({ attribute: "gear-number" }) gearNumber: string; // 1 - 8
  @Prop({ attribute: "powertrain-mode" }) powertrainMode: string; // string
  @Prop({ attribute: "traction-mode" }) tractionMode: string; // string
  @Prop({ attribute: "vtec-active" }) vtecActive: boolean;

  // Side gauges
  @Prop({ attribute: "oil-temp" }) oilTemp: string; // unit: 1/10 °C
  @Prop({ attribute: "coolant-temp" }) coolantTemp: string; // unit: 1/10 °C
  @Prop({ attribute: "oil-pressure" }) oilPressure: string; // unit: mbar
  @Prop({ attribute: "fuel-level" }) fuelLevel: string; // unit: %

  // Intro play state
  @Prop({ attribute: "playing-intro" }) playingIntro: boolean;

  render() {
    return (
      <Host>
        <center-view-rev-counter
          limiter-rpm={this.limiterRpm}
          rpm={this.rpm}
          limiter-glow={this.limiterGlow}
          launch-glow={this.launchGlow}
          launch-stage={this.launchStage}>
        </center-view-rev-counter>

        <img id="center-view-rings" src="../assets/images/ring_assembly.png" />

        <center-view-side-gauges
          oil-temp={this.oilTemp}
          coolant-temp={this.coolantTemp}
          oil-pressure={this.oilPressure}
          fuel-level={this.fuelLevel}></center-view-side-gauges>

        <center-view-inner-content
          speed={this.speed}
          shift-light-state={this.shiftLightState}
          gearbox-mode={this.gearboxMode}
          gear-number={this.gearNumber}
          powertrain-mode={this.powertrainMode}
          traction-mode={this.tractionMode}
          vtec-active={this.vtecActive}
          launch-stage={this.launchStage}>
        </center-view-inner-content>

        <intro-view playing-intro={this.playingIntro}></intro-view>

      </Host>
    );
  }

}
