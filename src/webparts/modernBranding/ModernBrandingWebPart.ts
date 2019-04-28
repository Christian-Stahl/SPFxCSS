import { Version } from '@microsoft/sp-core-library';
import {BaseClientSideWebPart, IPropertyPaneConfiguration, PropertyPaneTextField} from '@microsoft/sp-webpart-base';
import { escape, isEqual } from '@microsoft/sp-lodash-subset';
import * as strings from 'ModernBrandingWebPartStrings';
import { DisplayMode } from '@microsoft/sp-core-library';
// added
import * as $ from 'jquery';
export interface IModernBrandingWebPartProps {description: string;}

export default class ModernBrandingWebPart extends BaseClientSideWebPart<IModernBrandingWebPartProps> {

  public render(): void {
    // Reference to the css file
    require('./assets/Main.css');

    // Display the private methods globally
    this.hideWebPart();
 
    // Skapa HTML
    this.domElement.innerHTML = `<div class="modernBranding">This is the CSS Branding Web Part!</div>`;
   
  }

  // Privat method
  private hideWebPart() {
    $(document).ready(() => {
        if (this.displayMode == DisplayMode.Edit) {
          $(".modernBranding").parents('.CanvasZoneContainer').css("background", "plum");
        }
        else if (this.displayMode == DisplayMode.Read) {
          $(".modernBranding").parents('.CanvasZoneContainer').css("display", "none");
        }
      });
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

