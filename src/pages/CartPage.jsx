import Header from "../components/header/Header";
import React, { useState } from "react";
import { Table ,Card, Button  } from "antd";
import CreateBill from "./CreateBill";

const CartPage = () => {
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
      <div> <Table columns={columns} dataSource={data} bordered pagination={false}/></div>
      <div className="cart-total flex justify-end mt-4">
      <Card className="w-72 ">
      <div className="flex justify-between">
        <span>Ara Toplam</span>
        <span>110₺</span>
      </div>
      <div className="flex justify-between my-2" >
        <span>Kdv Toplam %8</span>
        <span className="text-red-600">+8.80₺</span>
      </div>
      <div className="flex justify-between">
        <b>Toplam</b>
        <b>118.80₺</b>
      </div>
      <Button onClick={()=>setIsModalOpen(true)} type="primary" className="mt-4 w-full" size="large">Sipariş Oluştur</Button>
    </Card>
      </div>
      </div>
     <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>
  );
};

export default CartPage;
