import { Prop, Element, Watch, Component, Host, h } from '@stencil/core';

@Component({
  tag: 'center-view-rev-needle',
  styleUrl: 'center-view-rev-needle.css',
  shadow: true,
})
export class CenterViewRevNeedle {

  imageCount = 2400;
  numberLength = 4;
  minVal = 0;
  maxVal = 9000;
  activeImage = "";

  @Prop({ attribute: "current-value" }) currentValue: number;

  @Element() thisElement: HTMLElement;

  connectedCallback() {
    // clear child dom
    while (this.thisElement.firstChild) {
      this.thisElement.removeChild(this.thisElement.lastChild);
    }

    // load all images for animation
    for (let i = 0; i < this.imageCount; i++) {
      let newImg: HTMLImageElement = document.createElement("img") as HTMLImageElement;
      newImg.src = "../assets/videos/rev_count_needle/rev_count_needle" + i.toString().padStart(this.numberLength, '0') + ".png";
      newImg.id = "rev_count_needle_img" + i.toString();
      this.thisElement.shadowRoot.appendChild(newImg);
    }
  }

  getCorrectImage(value: number): string {
    if (value <= this.minVal) {
      return "rev_count_needle_img0";
    } else if (value >= this.maxVal) {
      return ("rev_count_needle_img" + (this.imageCount - 1).toString())
    } else {
      let correctPic = Math.round((value - this.minVal) * (this.imageCount) / (this.maxVal - this.minVal));
      return ("rev_count_needle_img" + correctPic.toString());
    }
  }

  @Watch("currentValue")
  updateGraphic() {
    let newImage = this.getCorrectImage(this.currentValue);
    console.log(newImage);
    if (newImage != this.activeImage) {
      console.log("Updating graphic");
      if (this.activeImage != "" && this.thisElement.shadowRoot.getElementById(this.activeImage) != null) {
        this.thisElement.shadowRoot.getElementById(this.activeImage).style.opacity = "0.0";
        console.log("Invalidate old image");
      }
      if (this.thisElement.shadowRoot.getElementById(newImage) != null) {
        console.log("Draw new image");
        this.activeImage = newImage;
        this.thisElement.shadowRoot.getElementById(newImage).style.opacity = "1.0";
      }
    }
  }

  render() {
    this.updateGraphic();
    return (
      <Host>
      </Host>
    );
  }

}
