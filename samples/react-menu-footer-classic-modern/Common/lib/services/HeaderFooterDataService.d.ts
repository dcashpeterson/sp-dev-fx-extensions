import IHeaderFooterData from '../model/IHeaderFooterData';
export default class HeaderFooterDataService {
    static get(): Promise<IHeaderFooterData | string>;
}
