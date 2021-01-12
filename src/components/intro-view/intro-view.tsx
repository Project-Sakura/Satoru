import { Element, Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'intro-view',
  styleUrl: 'intro-view.css',
  shadow: true,
})
export class IntroView {

  @Element() thisElement: HTMLElement;

  @Prop({ attribute: "playing-intro", mutable: true }) playingIntro: boolean;

  @Watch("playingIntro")
  playIntro() {
    if (this.playingIntro) {
      console.log("Start playing intro...");
      this.thisElement.style.opacity = "1.0";
      let intro_video: HTMLVideoElement = this.thisElement.shadowRoot.getElementById("intro_item") as HTMLVideoElement;
      intro_video.play();
      let el = this.thisElement;
      intro_video.onended = function () {
        el.style.opacity = "0.0";
      }
    }
  }

  render() {
    if (this.playingIntro) {
      this.playIntro();
    }
    return (
      <Host>
        <video id="intro_item" src="../assets/videos/intro/intro.mp4" preload="auto" width="1920" height="720" />
      </Host>
    );
  }

}
