import { Element, Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'center-view-side-gauges',
  styleUrl: 'center-view-side-gauges.css',
  shadow: true,
})
export class CenterViewSideGauges {

  @Element() thisElement: HTMLElement;

  @Prop({ attribute: "oil-temp" }) oilTemp: string; // unit: 1/10 °C
  @Prop({ attribute: "coolant-temp" }) coolantTemp: string; // unit: 1/10 °C
  @Prop({ attribute: "oil-pressure" }) oilPressure: string; // unit: mbar
  @Prop({ attribute: "fuel-level" }) fuelLevel: string; // unit: mbar

  gaugeMaxHeight: number = 206;
  gaugeMinHeight: number = 10;

  oilMinTemp: number = 400;
  oilMaxTemp: number = 1500;

  coolantMinTemp: number = 700;
  coolantMaxTemp: number = 1200;

  oilMinPressure: number = 0;
  oilMaxPressure: number = 6000;

  fuelMinLevel: number = 0;
  fuelMaxLevel: number = 100;

  @Watch("oilTemp")
  updateOilTempGauge() {
    let oilTemp = parseInt(this.oilTemp);
    let oilTempGauge = this.thisElement.shadowRoot.getElementById("oil_temp");
    if (oilTempGauge == null) { return; }

    if (oilTemp <= this.oilMinTemp) {
      oilTempGauge.style.height = this.gaugeMinHeight.toString() + "px";
    } else if (oilTemp >= this.oilMaxTemp) {
      oilTempGauge.style.height = this.gaugeMaxHeight.toString() + "px";
    } else {
      let newHeight = this.gaugeMinHeight + ((oilTemp - this.oilMinTemp) * (this.gaugeMaxHeight - this.gaugeMinHeight) / (this.oilMaxTemp - this.oilMinTemp))
      oilTempGauge.style.height = Math.round(newHeight).toString() + "px";
    }
  }

  @Watch("coolantTemp")
  updateCoolantTempGauge() {
    let coolantTemp = parseInt(this.coolantTemp);
    let coolantTempGauge = this.thisElement.shadowRoot.getElementById("coolant_temp");
    if (coolantTempGauge == null) { return; }

    if (coolantTemp <= this.coolantMinTemp) {
      coolantTempGauge.style.height = this.gaugeMinHeight.toString() + "px";
    } else if (coolantTemp >= this.coolantMaxTemp) {
      coolantTempGauge.style.height = this.gaugeMaxHeight.toString() + "px";
    } else {
      let newHeight = this.gaugeMinHeight + ((coolantTemp - this.coolantMinTemp) * (this.gaugeMaxHeight - this.gaugeMinHeight) / (this.coolantMaxTemp - this.coolantMinTemp))
      coolantTempGauge.style.height = Math.round(newHeight).toString() + "px";
    }
  }

  @Watch("oilPressure")
  updateOilPressureGauge() {
    let oilPressure = parseInt(this.oilPressure);
    let oilPressureGauge = this.thisElement.shadowRoot.getElementById("oil_pressure");
    if (oilPressureGauge == null) { return; }

    if (oilPressure <= this.oilMinPressure) {
      oilPressureGauge.style.height = this.gaugeMinHeight.toString() + "px";
    } else if (oilPressure >= this.oilMaxPressure) {
      oilPressureGauge.style.height = this.gaugeMaxHeight.toString() + "px";
    } else {
      let newHeight = this.gaugeMinHeight + ((oilPressure - this.oilMinPressure) * (this.gaugeMaxHeight - this.gaugeMinHeight) / (this.oilMaxPressure - this.oilMinPressure))
      oilPressureGauge.style.height = Math.round(newHeight).toString() + "px";
    }
  }

  @Watch("fuelLevel")
  updateFuelLevelGauge() {
    let fuelLevel = parseInt(this.fuelLevel);
    let fuelLevelGauge = this.thisElement.shadowRoot.getElementById("fuel_level");
    if (fuelLevelGauge == null) { return; }

    if (fuelLevel <= this.fuelMinLevel) {
      fuelLevelGauge.style.height = this.gaugeMinHeight.toString() + "px";
    } else if (fuelLevel >= this.fuelMaxLevel) {
      fuelLevelGauge.style.height = this.gaugeMaxHeight.toString() + "px";
    } else {
      let newHeight = this.gaugeMinHeight + ((fuelLevel - this.fuelMinLevel) * (this.gaugeMaxHeight - this.gaugeMinHeight) / (this.fuelMaxLevel - this.fuelMinLevel))
      fuelLevelGauge.style.height = Math.round(newHeight).toString() + "px";
    }
  }

  render() {
    this.updateOilTempGauge();
    this.updateCoolantTempGauge();
    this.updateOilPressureGauge();
    this.updateFuelLevelGauge();

    return (
      <Host>
        <div id="oil_temp"></div>
        <div id="coolant_temp"></div>
        <div id="oil_pressure"></div>
        <div id="fuel_level"></div>
        <img src="../assets/images/symbols/oil_temp.png" id="oil_temp_symbol" />
        <img src="../assets/images/symbols/coolant_temp.png" id="coolant_temp_symbol" />
        <img src="../assets/images/symbols/oil_pressure.png" id="oil_pressure_symbol" />
        <img src="../assets/images/symbols/fuel_level.png" id="fuel_level_symbol" />
        <span class="gauge_unit" id="oil_temp_unit">°C</span>
        <span class="gauge_unit" id="coolant_temp_unit">°C</span>
        <span class="gauge_unit" id="oil_pressure_unit">bar</span>
        <span class="gauge_unit" id="fuel_level_unit">km</span>
        <span class="gauge_value" id="oil_temp_value">{(parseInt(this.oilTemp) / 10.0)}</span>
        <span class="gauge_value" id="coolant_temp_value">{(parseInt(this.coolantTemp) / 10.0)}</span>
        <span class="gauge_value" id="oil_pressure_value">{(parseInt(this.oilPressure) / 1000.0)}</span>
        <span class="gauge_value" id="fuel_level_value">{(parseInt(this.fuelLevel) / 1.0)}</span>
      </Host>
    );
  }

}
