const FormatMoney = (number: number) => {
  return 'Rp' + Intl.NumberFormat('id-ID').format(number);
};

export default FormatMoney;
