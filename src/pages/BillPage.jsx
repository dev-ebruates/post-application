import Header from "../components/header/Header";
import React, { useState } from "react";
import { Table ,Card, Button  } from "antd";
import PrintBill from "../components/bills/PrintBill";

const BillPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const columns = [
    {
      title: "Ürün Adı",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Ürün Görseli",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Ürün Fiyatı",
      dataIndex: "address",
      key: "address",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      img: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    < >
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Faturalar</h1>
      <div> <Table columns={columns} dataSource={data} bordered pagination={false}/></div>
      <div className="cart-total flex justify-end mt-4">
      <Card className="w-72 ">
      <Button onClick={()=>setIsModalOpen(true)} type="primary" className="mt-4 w-full" size="large">Fatura Yazdır</Button>
    </Card>
      </div>
      </div>
     <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>
  );
};

export default BillPage;
