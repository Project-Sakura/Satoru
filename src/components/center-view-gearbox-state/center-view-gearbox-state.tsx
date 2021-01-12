import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'center-view-gearbox-state',
  styleUrl: 'center-view-gearbox-state.css',
  shadow: true,
})
export class CenterViewGearboxState {

  @Prop({ attribute: "gearbox-mode" }) gearboxMode: string;
  @Prop({ attribute: "gear-number" }) gearNumber: string;

  render() {
    return (
      <Host>
        <div class={{ "hidden": this.gearboxMode != "D" || this.gearNumber != "8" }}>
          <p class="center-view-gearbox-state">D<span class="gear_number">8</span></p>
        </div>
        <div class={{ "hidden": this.gearboxMode != "D" || this.gearNumber != "7" }}>
          <p class="center-view-gearbox-state">D<span class="gear_number">7</span></p>
        </div>
        <div class={{ "hidden": this.gearboxMode != "D" || this.gearNumber != "6" }}>
          <p class="center-view-gearbox-state">D<span class="gear_number">6</span></p>
        </div>
        <div class={{ "hidden": this.gearboxMode != "D" || this.gearNumber != "5" }}>
          <p class="center-view-gearbox-state">D<span class="gear_number">5</span></p>
        </div>
        <div class={{ "hidden": this.gearboxMode != "D" || this.gearNumber != "4" }}>
          <p class="center-view-gearbox-state">D<span class="gear_number">4</span></p>
        </div>
        <div class={{ "hidden": this.gearboxMode != "D" || this.gearNumber != "3" }}>
          <p class="center-view-gearbox-state">D<span class="gear_number">3</span></p>
        </div>
        <div class={{ "hidden": this.gearboxMode != "D" || this.gearNumber != "2" }}>
          <p class="center-view-gearbox-state">D<span class="gear_number">2</span></p>
        </div>
        <div class={{ "hidden": this.gearboxMode != "D" || this.gearNumber != "1" }}>
          <p class="center-view-gearbox-state">D<span class="gear_number">1</span></p>
        </div>
        <div class={{ "hidden": this.gearboxMode != "N" }}>
          <p class="center-view-gearbox-state"><span class="gear_number">N</span></p>
        </div>
        <div class={{ "hidden": this.gearboxMode != "R" }}>
          <p class="center-view-gearbox-state"><span class="gear_number">R</span></p>
        </div>
      </Host >
    );
  }

}
