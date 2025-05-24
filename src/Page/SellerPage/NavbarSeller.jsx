import { useParams } from "react-router-dom";
import HomeSeller from "./component/HomeSeller";
import NavbarSeller from "../../Layout/NavBarSeller";
import InvaSeller from "./component/InvaSeller";
import ProductSeller from "./component/ProductSeller";
import MarketingSeller from "./component/MarketingSeller";
import MessageSeller from "./component/MessageSeller";
import SettingSeller from "./component/SettingSeller";
import RestrictedAccess from "./component/RestrictedAccess";
import AllProduct from "./component/AllProduct";

export default function NavbarSellerWrap() {
  const { section } = useParams();

  const componentMap = {
    home: HomeSeller,
    invantion: InvaSeller,
    addProduct: ProductSeller,
    marketing: MarketingSeller,
    message: MessageSeller,
    setting: SettingSeller,
    restricted: RestrictedAccess,
    product: AllProduct,
  };

  const SelectedComponent = componentMap[section] || RestrictedAccess;

  return <NavbarSeller Component={SelectedComponent} />;
}
