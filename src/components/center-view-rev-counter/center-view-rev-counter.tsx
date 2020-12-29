import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'center-view-rev-counter',
  styleUrl: 'center-view-rev-counter.css',
  shadow: true,
})
export class CenterViewRevCounter {

  render() {
    return (
      <Host>
        <center-view-rev-markers current-value="4500"></center-view-rev-markers>
        <center-view-rev-shade current-value="1000"></center-view-rev-shade>
        <img id="center-view-numbers" src="../assets/images/numbers_full.png" />
        <center-view-rev-limiter-glow is-active="false"></center-view-rev-limiter-glow>
        <center-view-rev-needle current-value="1000"></center-view-rev-needle>
      </Host >
    );
  }

}
