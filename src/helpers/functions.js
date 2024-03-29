import toast from 'react-hot-toast';

const formatter = new Intl.NumberFormat('id');

export default formatter;

export function roundNumber(number) {
  return Math.floor(number / 100) * 100;
}

export function turnPositive(number) {
  return Math.abs(number);
}

export function showToast(isBuying, price, quantity) {
  if (isBuying) {
    return toast.success(`Você comprou ${quantity} ações a ${price} reais`, {
      duration: 4000,
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  }
  return toast.success(`Você vendeu ${quantity} ações a ${price} reais`, {
    duration: 4000,
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  });
}
