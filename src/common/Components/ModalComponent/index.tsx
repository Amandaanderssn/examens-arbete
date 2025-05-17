import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface ModalComponentProps {
    isOpen: boolean
    handleConfirm: () => void
    handleCloseModal: () => void
}

const ModalComponent = (props: ModalComponentProps): React.JSX.Element => {
    const { isOpen, handleConfirm, handleCloseModal } = props

    return (
        <Modal
            open={isOpen}
            onClose={handleCloseModal}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography variant="h6">
                    Are you sure you want to delete you account?
                </Typography>
                <Button onClick={handleConfirm}>Yes</Button>
                <Button onClick={handleCloseModal}>No</Button>
            </Box>
        </Modal>
    );
}

export default ModalComponent