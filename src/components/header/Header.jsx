import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserAddOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Badge, Input } from "antd";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-10 ">
        <div className="logo ">
          <a href="/">
            <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
          </a>
        </div>
        <div className="header-search flex-1 flex justify-center">
          <Input
            size="large"
            placeholder="Ürün ara"
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px]"
          />
        </div>
        <div className="menu-links flex justify-between items-center gap-6 md:static fixed z-50 bottom-0 md:w-auto w-screen md:bg-transparent bg-white lef-0 md:border-t-0 border-t md:px-0 px-4 py-1">
          <Link
            to={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff]"
          >
            <HomeOutlined className="md:text-2xl text-xl flex-col " />
            <span className="md:text-[12px] text-[10px]">Ana Sayfa</span>
          </Link>

          <Badge count={5} offset={[0, 6]} className="md:flex hidden">
            <Link
            to={"/cart"}
              className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
            >
              <ShoppingCartOutlined className="md:text-2xl text-xl flex-col" />
              <span className="md:text-[12px] text-[10px]">Sepet</span>
            </Link>
          </Badge>

          <Link to={"/bills"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <CopyOutlined className="md:text-2xl text-xl flex-col" />
            <span className="md:text-[12px] text-[10px]">Faturalar</span>
          </Link>
          <Link to={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <UserAddOutlined className="md:text-2xl text-xl flex-col" />
            <span className="md:text-[12px] text-[10px]">Müşteriler</span>
          </Link>
          <Link to={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <BarChartOutlined className="md:text-2xl text-xl flex-col" />
            <span className="md:text-[12px] text-[10px]">İstatistikler</span>
          </Link>
          <Link to={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <LogoutOutlined className="md:text-2xl text-xl flex-col" />
            <span className="md:text-[12px] text-[10px]">Çıkış</span>
          </Link>
        </div>
        <Badge count={5} offset={[0, 6]} className="md:hidden flex">
          <Link to={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <ShoppingCartOutlined className="text-2xl flex-col" />
            <span className="md:text-[12px] text-[10px]">Sepet</span>
          </Link>
        </Badge>
      </header>
    </div>
  );
};

export default Header;
