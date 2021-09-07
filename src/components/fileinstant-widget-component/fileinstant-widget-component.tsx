// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h, State } from '@stencil/core'

@Component({
  tag: 'fileinstant-widget-component',
  styleUrl: 'fileinstant-widget-component.css',
  shadow: true,
})

export class MyComponent {

  @State() softwares: Array<any>;


  componentWillLoad() {
    return fetch("https://api.nexeclient.xyz/api/latest-software/5/")
      .then(response => response.json())
      .then(data => {
        this.softwares = data.data;
      });

  }
  render() {
    return (
      <div class="widget_preview">
        <br />
        <div class="latest_download">
          <h4>Latest downloads</h4>
          <div class="latest_download_content">
            <ul>
              {this.softwares.map(software =>
                <li>
                  <img
                    src={`https://api.nexeclient.xyz/uploads/${software.softwareID.softwareIcon}`}
                    alt=''
                    class='img-fluid'
                  />
                  <a href={`https://nexeclient.xyz/download/${software.softwareID.softwareName.trim().split(" ").join("-").toLowerCase()}/${software.softwareID._id.toString()}`}>{software.softwareID.softwareName + " " + software.softwareID.softwareVersion}</a>
                </li>
              )}
            </ul>
          </div>
          <div class="brand_bottom">Powered by Fieinstant</div>
        </div>
      </div>
    )
  }
}