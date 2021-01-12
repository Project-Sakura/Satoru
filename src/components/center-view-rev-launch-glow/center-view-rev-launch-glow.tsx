import { Prop, Element, Watch, Component, Host, h } from '@stencil/core';

@Component({
  tag: 'center-view-rev-launch-glow',
  styleUrl: 'center-view-rev-launch-glow.css',
  shadow: true,
})
export class CenterViewRevLaunchGlow {

  imageCount = 10;
  numberLength = 2;
  activeImageNumber: number = 0;

  @Prop({ attribute: "is-active" }) isActive: boolean;

  @Prop({ attribute: "stage" }) stage: number;

  @Element() thisElement: HTMLElement;

  connectedCallback() {
    // clear child dom
    while (this.thisElement.firstChild) {
      this.thisElement.removeChild(this.thisElement.lastChild);
    }

    // load all images for animation
    for (let i = 0; i < this.imageCount; i++) {
      let newImg: HTMLImageElement = document.createElement("img") as HTMLImageElement;
      newImg.src = "../assets/videos/launch_flash/launch_flash" + i.toString().padStart(this.numberLength, '0') + ".png";
      newImg.id = "launch_flash_img" + i.toString();
      this.thisElement.shadowRoot.appendChild(newImg);
    }
  }

  getCorrelatingImageId(id: number) {
    return "launch_flash_img" + id.toString();
  }

  draw(context) {

    if (context.activeImageNumber == 0 && context.isActive == false) {
      return;
    }

    if (this.thisElement.shadowRoot.getElementById(context.getCorrelatingImageId(this.activeImageNumber)) != null) {
      this.thisElement.shadowRoot.getElementById(context.getCorrelatingImageId(this.activeImageNumber)).style.opacity = "0.0";
    }

    if (context.activeImageNumber < (this.imageCount - 1)) {
      context.activeImageNumber++;
    } else {
      context.activeImageNumber = 0;
    }

    if (this.thisElement.shadowRoot.getElementById(context.getCorrelatingImageId(this.activeImageNumber)) != null) {
      this.thisElement.shadowRoot.getElementById(context.getCorrelatingImageId(this.activeImageNumber)).style.opacity = "1.0";
    }


    let freq = 1000 / 30;
    if (this.stage == 2) { freq = 1000 / 60; }
    setTimeout(function () {
      context.draw(context);
    }, freq);
  }


  @Watch("isActive")
  setlaunchGlow() {
    if (this.isActive) {
      let freq = 1000 / 30;
      if (this.stage == 2) { freq = 1000 / 60; }
      let context = this;
      setTimeout(function () {
        context.draw(context);
      }, freq);
    }
  }

  render() {
    return (
      <Host>
      </Host>
    );
  }

}
