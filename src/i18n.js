import i18next from "i18next";
import enNs1 from "./Localization/en/translations.json";
import ruNs1 from "./Localization/ru/translations.json";
import { initReactI18next } from "react-i18next";

i18next
    .use(initReactI18next)
    .init({
    debug: true,
    fallbackLng: "en",
    defaultNS: "ns1",
    resources: {
        en: {
            ns1: enNs1,
        },
        ru: {
            ns1: ruNs1,
        },
    },
})

export default i18next;