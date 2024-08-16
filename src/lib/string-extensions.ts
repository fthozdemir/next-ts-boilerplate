export const toLocaleCapitalCase = (str: string, locale?: string) => {
  const words: string[] = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i][0].toUpperCase() + words[i].slice(1).toLocaleLowerCase(locale);
  }
  return words.join(" ");
};
