import { Modal, Form, Input, Select, Button, Card } from "antd";

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Modal
      title="Fatura Yazdır"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={false}
    >
      fatura
    </Modal>
  );
};

export default PrintBill;
