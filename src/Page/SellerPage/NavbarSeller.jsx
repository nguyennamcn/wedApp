import { useParams } from "react-router-dom";
import HomeSeller from "./component/HomeSeller";
import NavbarSeller from "../../Layout/NavBarSeller";
import InvaSeller from "./component/InvaSeller";
import ProductSeller from "./component/ProductSeller";
import MarketingSeller from "./component/MarketingSeller";
import MessageSeller from "./component/MessageSeller";
import SettingSeller from "./component/SettingSeller";


export default function NavbarSellerWrap() {
  const { section } = useParams();

  const componentMap = {
    home: HomeSeller,
    invantion: InvaSeller,
    product: ProductSeller,
    marketing: MarketingSeller,
    message: MessageSeller,
    setting: SettingSeller,
  };

  const SelectedComponent = componentMap[section] || HomeSeller;

  return <NavbarSeller Component={SelectedComponent} />;
}
