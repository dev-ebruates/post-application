import { Button } from "antd";
import {PlusCircleOutlined, MinusCircleOutlined} from "@ant-design/icons"
const CartItem = () => {
  return (
    <li className="cart-item flex justify-between">
      <div className="flex items-center">
        <img
          src="https://www.agfresh.com.tr/public/uploads/elma.webp"
          alt=""
          className="w-16 h-16 object-cover"
        />
        <div className="flex flex-col ml-2">
          <b>Elma</b>
          <span>12₺ x 2</span>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <Button
          type="primary"
          size="small"
          className="w-full  flex items-center justify-center rounded-full"
          icon={<PlusCircleOutlined />}
        />
        <span>1</span>
        <Button
          type="primary"
          size="small"
          className="w-full flex items-center justify-center rounded-full"
          icon={<MinusCircleOutlined />}
        />

      </div>
    </li>
  );
};

export default CartItem;
