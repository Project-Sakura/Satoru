import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'main-view',
  styleUrl: 'main-view.css',
  shadow: true,
})
export class MainView {

  render() {
    return (
      <Host>

        <img src="../assets/images/background.png" id="background_img" />

        <center-view
          limiter-rpm="8500"
          rpm="5000"
          limiter-glow="false"
          launch-glow="false"
          launch-stage="1"
          speed="70"
          shift-light-state="1"
          gearbox-mode="D"
          gear-number="1"
          powertrain-mode="RACE-1"
          traction-mode="TRAC-5"
          playing-intro="false"
          oil-temp="800"
          coolant-temp="1000"
          oil-pressure="3000"
          fuel-level="50"
          vtec-active="false">
        </center-view>

        <left-view-info></left-view-info>

        <right-view-scroll-container></right-view-scroll-container>

        <main-status-symbols-layer></main-status-symbols-layer>

        <welcome-view></welcome-view>

      </Host>
    );
  }

}
