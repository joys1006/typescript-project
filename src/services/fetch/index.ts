/**
 * @author Has
 * @reg_date 2018-05-05
 * @summary Api Service
 * @description Api Service Class
 */

export class Api {
    /**
     * @author HoChoel Eom
     * @param {url} Api Url
     * @description Api Get Service
     */
    protected get(url: string) {
        return fetch(url, {
            method: 'GET'
        })
        .then((resp: Response) => resp.json());
    }
    /**
     * @author HoChoel Eom
     * @param {url} Api Url
     * @param {payload} Request Body
     * @description Api Post Service
     */
    protected post(url: string, payload: Types.Response.Dictionary<string>) {
        return fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(payload)
        });
    }
};
