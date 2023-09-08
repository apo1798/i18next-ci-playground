import { regExpPattern } from './settings.js';

const toCheckContent = `import { useState } from 'react'; import { useTranslation } from 'react-i18next';  const NewComponent = () => {   const [messages, setMessages] = useState(0);   const { t } = useTranslation();    return (     <div>       <p>{t('main.new_messages', { count: messages })}</p>       <p>{t('main.current_date', { date: new Date() })}</p>       <p>         {t('main.incoming_message', { from: 'Ann' })}         <br />         {t('main.message_contents', {           body: 'How are you doing?',           context: 'female',         })}       </p>     </div>   ); }; export default NewComponent`;

console.log(toCheckContent);
console.log('//////////////////////////');

const regExp = regExpPattern;

console.log(toCheckContent.match(regExp));

const results = Array.from(new Set(toCheckContent.match(regExp)));
// console.log(result);
regExp.lastIndex = 0;

let translationKeys;

if (results !== null) {
  translationKeys = results.map((result) => {
    const regExpExecArray = regExp.exec(result)?.filter(Boolean);
    regExp.lastIndex = 0;
    return regExpExecArray ? regExpExecArray[2] : [];
  });
}

console.log(translationKeys);
