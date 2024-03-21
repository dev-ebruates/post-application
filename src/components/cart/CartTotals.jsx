import { Button } from "antd";
import {ClearOutlined} from "@ant-design/icons"
import CartItem from "./CartItem";
const CartTotals = () => {
  return (
    <div className="cart h-full flex max-h-[calc(100vh_-_90px)] flex-col">
      <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">
        Sepetteki Ürünler
      </h2>
      <ul className="cart-items px-2  overflow-y-auto py-2 flex flex-col gap-y-3 pt-2">
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>

            
      </ul>

      <div className="cart-totals mt-auto">
        <div className="border-b border-t">
          <div className="flex justify-between p-2">
            <b>Ara Toplam</b>
            <span>99₺</span>
          </div>
          <div className="flex justify-between p-2">
            <b>Kdv %8</b>
            <span className="text-red-700">+7.92₺</span>
          </div>
        </div>
        <div className="border-b mt-4">
          <div className="flex justify-between p-2">
            <b className="text-lg text-xl text-green-500">Genel Toplam</b>
            <span className="text-xl">99₺</span>
          </div>
        </div>
        <div className="py-4 px-2">
          <Button type="primary" size="large" className="w-full">
            Sipariş Oluştur
          </Button>

          <Button type="primary" size="large" className="w-full mt-2 flex items-center justify-center" danger icon={<ClearOutlined />}>
            Temizle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
