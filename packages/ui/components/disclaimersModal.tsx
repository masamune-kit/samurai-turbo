import { Button } from '../clickables';
import { disclaimersAndRisks } from '../constants/disclaimersAndRisks';
import { Modal } from './modal';

type DisclaimersModalProps = {
  toggleVisible: () => void;
};

const DisclaimersModal = ({ toggleVisible }: DisclaimersModalProps): JSX.Element => {
  const handleClose = () => {
    toggleVisible();
  };

  return (
    <Modal title="Disclaimers and Risks" handleClose={handleClose}>
      <div className="whitespace-pre-line">{disclaimersAndRisks}</div>
      <Button className="mx-auto mt-3rem flex w-full max-w-350 items-center justify-center" onClick={handleClose}>
        I understand
      </Button>
    </Modal>
  );
};

export default DisclaimersModal;
