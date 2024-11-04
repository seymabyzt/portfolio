import {useLocale, useTranslations} from 'next-intl';
import LangButton from './langButton';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LangButton
      defaultValue={locale}
      items={[
        {
          value: 'en',
          label: t('en')
        },
        {
          value: 'tr',
          label: t('tr')
        }
      ]}
    />
  );
}