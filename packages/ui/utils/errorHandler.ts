import toast from 'react-hot-toast';

const errorHandler = (e: unknown) => {
  if (e instanceof Error) {
    if (e.message.includes('user rejected action')) {
      return toast.error('User rejected wallet action!');
    }

    toast.error('Error: ' + e.message);
  }
};

export { errorHandler };
