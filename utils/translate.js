import fr from '../lib/fr.json'
import en from '../lib/en.json'
const _ = require('lodash')

const translate = (langage, textKey) => {
    if (_.isNil(langage) || _.isNil(textKey)) {
        return 'no translation yet'
    }
    if (langage === 'en') {
        const trad = en[textKey]
        return trad
    }
    if (langage === 'fr') {
        const trad = fr[textKey]
        return trad
    }
}

export default translate
