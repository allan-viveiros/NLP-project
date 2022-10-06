import { handleSubmit } from './js/formHandler';
import { checkForName } from './js/nameChecker';
import { nlpText } from './js/formHandler';
import { nlpHandler } from './js/nlpTextHandler';
import { doGetMockRequest } from './js/mockHandler';
 
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

//alert("I EXIST")
//console.log(checkForName);

export {
    checkForName,
    handleSubmit,
    nlpText,
    nlpHandler,
    doGetMockRequest
}
