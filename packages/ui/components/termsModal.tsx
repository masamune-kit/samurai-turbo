import toast from 'react-hot-toast';
import { Button } from '../clickables';
import { termsOfService } from '../constants/termsOfService';
import { Modal } from './modal';

type TermsModalProps = {
  termsAccepted: boolean;
  toggleVisible: () => void;
  handleAcceptTerms: () => void;
};

const TermsModal = ({ termsAccepted, toggleVisible, handleAcceptTerms }: TermsModalProps): JSX.Element => {
  const handleClose = () => {
    if (!termsAccepted) {
      return toast.error('You must first accept terms and conditions');
    }

    toggleVisible();
  };

  const handleAcceptWithClose = () => {
    handleAcceptTerms();
    toggleVisible();

    return toast.success('Terms and Conditions have been accepted!');
  };

  return (
    <Modal title="Terms of Service" handleClose={handleClose}>
      <div className="whitespace-pre-line">{termsOfService}</div>
      <Button
        className="mx-auto mt-3rem flex w-full max-w-350 items-center justify-center"
        onClick={handleAcceptWithClose}
      >
        I agree with the Terms of Service
      </Button>
    </Modal>
  );
};

export default TermsModal;
