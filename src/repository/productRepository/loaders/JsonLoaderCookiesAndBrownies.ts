import * as CookiesAndBrowniesA from '../data/Bakery/Cookies and Brownies/a.json';
import * as CookiesAndBrowniesB from '../data/Bakery/Cookies and Brownies/b.json';
import * as CookiesAndBrowniesC from '../data/Bakery/Cookies and Brownies/c.json';

export default class JsonLoaderCookiesAndBrownies {

    public static load() : Array<any> {
        return [
            CookiesAndBrowniesA,
            CookiesAndBrowniesB,
            CookiesAndBrowniesC
        ];
    }
}