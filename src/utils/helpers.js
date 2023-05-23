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

function removeHtmlTags(str) {
  return str.replace(/<[^>]*>/g, '');
};

export const convertHtmlToText = (str) => {
  str = str.toString();
  str = str.replace(/&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, " ");
  str = removeHtmlTags(str);
  return str;
};
