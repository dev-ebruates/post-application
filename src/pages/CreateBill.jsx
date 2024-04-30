import { Modal, Form, Input, Select, Button, Card } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Modal
      title="Sipariş Oluştur"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={false}
    
    >
      <Form layout={"vertical"}   onFinish={onFinish}>
        <Form.Item label="Müşteri Adı" 
        name={"customerName"}
        rules={[{ required: true }]}>
          <Input placeholder="Bir müşteri adı yazınız" />
        </Form.Item>
        <Form.Item label="Tel No"
        name={"phoneNumber"} rules={[{ required: true }]}>
          <Input placeholder="Bir tel no yazınız" />
        </Form.Item>
        <Form.Item label="Ödeme Yöntemi"
        name={"paymentMode"} rules={[{ required: true }]}>
          <Select placeholder="Nakit">
            <Select.Option value="Nakit">Nakit</Select.Option>
            <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
          </Select>
        </Form.Item>
        <Card className="w-full">
          <div className="flex justify-between">
            <span>Ara Toplam</span>
            <span>110₺</span>
          </div>
          <div className="flex justify-between my-2">
            <span>Kdv Toplam %8</span>
            <span className="text-red-600">+8.80₺</span>
          </div>
          <div className="flex justify-between">
            <b>Toplam</b>
            <b>118.80₺</b>
          </div>
          <Button
            onClick={() => setIsModalOpen(true)}
            type="primary"
            className="mt-4 w-full"
            size="large"
            htmlType="submit"
          >
            Sipariş Oluştur
          </Button>
        </Card>
      </Form>
    </Modal>
  );
};

export default CreateBill;
