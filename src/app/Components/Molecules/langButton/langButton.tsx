import { Menu, MenuItem } from "@mui/material";
import Button from "../../Atoms/Button/Button";
import LanguageIcon from '@mui/icons-material/Language';
import React, { useState } from "react";
import {useLocale, useTranslations} from 'next-intl';
import CheckIcon from '@mui/icons-material/Check';
import * as Select from '@radix-ui/react-select';
import clsx from 'clsx';
import {useTransition} from 'react';
import {Locale} from '../../../../i18n/config';
import {setUserLocale} from '../../../../services/locale';
import { LangProps } from "@/app/interfaces/interfaces";
import styles from './langButton.module.css'

const LangButton = ({ defaultValue,
  items}:LangProps) => {
  const [isPending, startTransition] = useTransition();
  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }
    const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  
return(
<>
 <Select.Root defaultValue={defaultValue} onValueChange={onChange}>
 <Select.Trigger
          className={clsx(
            'rounded-sm p-2 transition-colors hover:bg-slate-200',
            isPending && 'pointer-events-none opacity-60'
          )}
        >
          <Select.Icon>
            <LanguageIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={styles.dropdown}
            position="popper"
          >
            <Select.Viewport>
              {items.map((item) => (
                <Select.Item
                className={styles.items}
                  key={item.value}
                  value={item.value}
                >
                  <div>
                    {item.value === defaultValue && (
                      <CheckIcon className={styles.checkIcon} />
                    )}
                  </div>
                  <span >{item.label}</span>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.Arrow />
          </Select.Content>
        </Select.Portal>
            </Select.Root>
  </>)
}
export default LangButton