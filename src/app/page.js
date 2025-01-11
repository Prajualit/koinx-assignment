import Image from "next/image";
import Home from "@/components/Home/Home";
import Youmayalsolike from "@/components/Youmayalsolike/Youmayalsolike";

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
    <div className={`${interRegular.className}`}>
      <Home />
      <Youmayalsolike />
    </div>
  );
}
