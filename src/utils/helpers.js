export const removeAccents = (str) => {
  const newStr = str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
  return newStr;
};

export const formatCurrencyValue = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const convertHtmlToText = (str) => {
  str = str.toString();
  return str.replace(/&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, " ");
};
