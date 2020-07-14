import IHeaderFooterData from '../model/IHeaderFooterData';

// -- UPLOAD JSON WITH MENU CONTENTS AND PUT THE URL HERE --
const navUrl = 'https://derekcp.sharepoint.com/sites/GlobalNavWithSPFx/Style%20Library/HeaderFooterData.json.txt';

export default class HeaderFooterDataService {

  // Get the header/footer data
  public static async get(): Promise<IHeaderFooterData | string> {

    return new Promise<IHeaderFooterData | string>((resolve, reject) => {

      fetch(navUrl, {
        method: 'GET',
        headers: { "Accept": "application/json; odata=verbose" },
        credentials: 'same-origin'    // sends cookies, need for SharePoint AuthN
      })
        .then((response) => {
          if (response.status === 200) {
            // We have some data, now parse it
            response.json().then((data: IHeaderFooterData) => {
              // It parsed OK, fulfull the promise
              resolve(data);
            })
              .catch((error) => {
                // Bad news, couldn't parse the JSON
                reject(`Error parsing header footer data`);
              });
          } else {
            // Bad news, the HTTP request failed
            reject(`Error ${response.status} retrieving header footer data: ${response.statusText}`);
          }
        })
        .catch((error) => {
          // Bad news, we couldn't even issue an HTTP request
          reject(`Error requesting header footer data`);
        });

    });
  }
}