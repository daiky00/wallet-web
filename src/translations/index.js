import * as messages_en from "./en.js";
import * as messages_nl from "./nl.js";
import * as messages_zh from "./zh.js";
import * as messages_fa from "./fa.js";
import * as messages_ko from "./ko.js";

import {addLocaleData} from 'react-intl';
import nlLocaleData from 'react-intl/locale-data/nl';
import zhLocaleData from 'react-intl/locale-data/zh';
import faLocaleData from 'react-intl/locale-data/fa';
import koLocaleData from 'react-intl/locale-data/ko';

addLocaleData([...nlLocaleData, ...zhLocaleData, ...faLocaleData, ...koLocaleData]);

export const languages = {
    'nl': messages_nl.messages,
    'en': messages_en.messages,
    'zh': messages_zh.messages,
    'fa': messages_fa.messages,
    'ko': messages_ko.messages
};
