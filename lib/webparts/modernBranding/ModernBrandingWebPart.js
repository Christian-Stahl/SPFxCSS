var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import * as strings from 'ModernBrandingWebPartStrings';
import { DisplayMode } from '@microsoft/sp-core-library';
// added
import * as $ from 'jquery';
var ModernBrandingWebPart = (function (_super) {
    __extends(ModernBrandingWebPart, _super);
    function ModernBrandingWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModernBrandingWebPart.prototype.render = function () {
        // Reference to the css file
        require('./assets/Main.css');
        // Display the private methods globally
        this.hideWebPart();
        // Skapa HTML
        this.domElement.innerHTML = "<div class=\"modernBranding\">This is the CSS Branding Web Part!</div>";
    };
    // Privat method
    ModernBrandingWebPart.prototype.hideWebPart = function () {
        var _this = this;
        $(document).ready(function () {
            if (_this.displayMode == DisplayMode.Edit) {
                $(".modernBranding").parents('.CanvasZoneContainer').css("background", "plum");
            }
            else if (_this.displayMode == DisplayMode.Read) {
                $(".modernBranding").parents('.CanvasZoneContainer').css("display", "none");
            }
        });
    };
    Object.defineProperty(ModernBrandingWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ModernBrandingWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    };
    return ModernBrandingWebPart;
}(BaseClientSideWebPart));
export default ModernBrandingWebPart;
//# sourceMappingURL=ModernBrandingWebPart.js.map