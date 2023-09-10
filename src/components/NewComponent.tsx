import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const NewComponent = () => {
  const [messages, setMessages] = useState(0);
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('main.new_messages', { count: messages })}</p>
      <p>{t('main.current_date', { date: t('main.current_date') })}</p>
      <p>
        {t('main.incoming_message', { from: 'Ann' })}
        <br />
        {t('main.message_contents', {
          body: 'How are you doing?',
          context: 'female',
        })}
      </p>
    </div>
  );
};
export default NewComponent;
