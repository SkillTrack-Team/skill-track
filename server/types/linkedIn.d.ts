export interface LocalizedData {
  localized:{
    [locale: string]:string;
  };
  preferredLocale:{
    country:string;
    language:string;
  }
}