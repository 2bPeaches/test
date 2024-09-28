// components/ConfirmModal.tsx
import React from "react";
import Modal from "../../../../components/admin/equip/CreateClass/Modal";

interface ConfirmModalProps {
    visible: boolean;
    onOk: () => void;
    onCancel: () => void;
    confirmLoading: boolean;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ visible, onOk, onCancel, confirmLoading }) => (
    <Modal
        title="Confirm Save"
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
        confirmLoading={confirmLoading}
    >
        <p>Are you sure you want to save this equipment information?</p>
    </Modal>
);

export default ConfirmModal;
