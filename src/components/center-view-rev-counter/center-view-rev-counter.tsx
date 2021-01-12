import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'center-view-rev-counter',
  styleUrl: 'center-view-rev-counter.css',
  shadow: true,
})
export class CenterViewRevCounter {

  @Prop({ attribute: "rpm" }) rpm: string;
  @Prop({ attribute: "limiter-rpm" }) limiterRpm: string;
  @Prop({ attribute: "limiter-glow" }) limiterGlow: boolean;
  @Prop({ attribute: "launch-glow" }) launchGlow: boolean;
  @Prop({ attribute: "launch-stage" }) launchStage: number;

  render() {
    return (
      <Host>
        <center-view-rev-markers current-value={this.limiterRpm}></center-view-rev-markers>
        <center-view-rev-shade current-value={this.rpm}></center-view-rev-shade>
        <img id="center-view-numbers" src="../assets/images/numbers_full.png" />
        <center-view-rev-limiter-glow is-active={this.limiterGlow}></center-view-rev-limiter-glow>
        <center-view-rev-launch-glow is-active={this.launchGlow} stage={this.launchStage}></center-view-rev-launch-glow>
        <center-view-rev-needle current-value={this.rpm}></center-view-rev-needle>
      </Host >
    );
  }

}
