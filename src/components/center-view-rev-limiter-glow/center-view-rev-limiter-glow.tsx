import { Prop, Element, Watch, Component, Host, h } from '@stencil/core';

@Component({
  tag: 'center-view-rev-limiter-glow',
  styleUrl: 'center-view-rev-limiter-glow.css',
  shadow: true,
})
export class CenterViewRevLimiterGlow {

  imageCount = 10;
  numberLength = 2;
  activeImageNumber: number = 0;

  @Prop({ attribute: "is-active" }) isActive: boolean;

  @Element() thisElement: HTMLElement;

  connectedCallback() {
    // clear child dom
    while (this.thisElement.firstChild) {
      this.thisElement.removeChild(this.thisElement.lastChild);
    }

    // load all images for animation
    for (let i = 0; i < this.imageCount; i++) {
      let newImg: HTMLImageElement = document.createElement("img") as HTMLImageElement;
      newImg.src = "../assets/videos/limiter_flash/limiter_flash" + i.toString().padStart(this.numberLength, '0') + ".png";
      newImg.id = "limiter_flash_img" + i.toString();
      this.thisElement.shadowRoot.appendChild(newImg);
    }
  }

  getCorrelatingImageId(id: number) {
    return "limiter_flash_img" + id.toString();
  }

  draw(context) {
    console.log("Draw limiter flash");

    if (context.activeImageNumber == 0 && context.isActive == false) {
      return;
    }

    if (this.thisElement.shadowRoot.getElementById(context.getCorrelatingImageId(this.activeImageNumber)) != null) {
      this.thisElement.shadowRoot.getElementById(context.getCorrelatingImageId(this.activeImageNumber)).style.opacity = "0.0";
      console.log("Invalidate old image");
    }

    if (context.activeImageNumber < (this.imageCount - 1)) {
      context.activeImageNumber++;
    } else {
      context.activeImageNumber = 0;
    }

    if (this.thisElement.shadowRoot.getElementById(context.getCorrelatingImageId(this.activeImageNumber)) != null) {
      this.thisElement.shadowRoot.getElementById(context.getCorrelatingImageId(this.activeImageNumber)).style.opacity = "1.0";
      console.log("Drawing new image");
    }


    setTimeout(function () {
      context.draw(context);
    }, 1000 / 60);
  }


  @Watch("isActive")
  setLimiterGlow() {
    if (this.isActive) {
      let context = this;
      setTimeout(function () {
        context.draw(context);
      }, 1000 / 60);
    }
  }

  render() {
    return (
      <Host>
      </Host>
    );
  }

}
