import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'center-view',
  styleUrl: 'center-view.css',
  shadow: true,
})
export class CenterView {

  render() {
    return (
      <Host>
        <center-view-rev-counter></center-view-rev-counter>
        <img id="center-view-rings" src="../assets/images/ring_assembly.png" />
        <center-view-side-gauges></center-view-side-gauges>
        <center-view-inner-content></center-view-inner-content>
        <intro-view></intro-view>
      </Host>
    );
  }

}
