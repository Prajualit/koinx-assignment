import Image from "next/image";
import Home from "@/components/Home/Home";
import Youmayalsolike from "@/components/Youmayalsolike/Youmayalsolike";
import { TrendingCoinsProvider } from "@/context/TrendingCoinsContext";
import Performance from "@/components/Performance/Performance";
import Sentiment from "@/components/Sentiment/Sentiment";
import Aboutbitcoin from "@/components/Aboutbitcoin/Aboutbitcoin";

export default function Page() {
  const interRegular = {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#000000",
  };

  return (
    <TrendingCoinsProvider>
      <div className={`${interRegular.className}`}>
        <Home />
        <Performance />
        <Sentiment />
        <Aboutbitcoin />
        <Youmayalsolike />
      </div>
    </TrendingCoinsProvider>
  );
}
