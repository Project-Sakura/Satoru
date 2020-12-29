import { Element, Component, Host, h } from '@stencil/core';

@Component({
  tag: 'intro-view',
  styleUrl: 'intro-view.css',
  shadow: true,
})
export class IntroView {

  @Element() thisElement: HTMLElement;

  playIntro() {
    let intro_video: HTMLVideoElement = document.getElementById("intro_item") as HTMLVideoElement;
    intro_video.play();
    let el = this.thisElement;
    intro_video.onended = function () {
      el.style.opacity = "0.0";
    }
  }

  render() {
    return (
      <Host>
        <video id="intro_item" src="../assets/videos/intro/intro.mp4" preload="auto" width="1920" height="720" />
      </Host>
    );
  }

}
