import CookiesAndBrowniesA from '../data/Bakery/Cookies and Brownies/a.json';
import CookiesAndBrowniesB from '../data/Bakery/Cookies and Brownies/b.json';
import CookiesAndBrowniesC from '../data/Bakery/Cookies and Brownies/c.json';

export default class JsonLoaderCookiesAndBrownies {

    public static load() : Array<any> {
        return [
            CookiesAndBrowniesA,
            CookiesAndBrowniesB,
            CookiesAndBrowniesC
        ];
    }
}