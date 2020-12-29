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
        <center-view></center-view>
        <left-view-info></left-view-info>
        <right-view-scroll-container></right-view-scroll-container>
        <main-status-symbols-layer></main-status-symbols-layer>
        <welcome-view></welcome-view>
      </Host>
    );
  }

}
