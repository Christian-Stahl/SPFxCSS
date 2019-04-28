import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IModernBrandingWebPartProps {
    description: string;
}
export default class ModernBrandingWebPart extends BaseClientSideWebPart<IModernBrandingWebPartProps> {
    render(): void;
    private hideWebPart();
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
