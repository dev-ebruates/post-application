import { Modal } from "antd";

const CreateBill = ({isModalOpen, setIsModalOpen}) => {
  return (
    <Modal
      title="Sipariş Oluştur"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={false}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default CreateBill;
