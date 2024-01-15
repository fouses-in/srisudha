import Image from "next/image";
import { useRouter } from "next/router";
import { AnotherHeaderItem } from "./headerItem";
import { useSelector } from "react-redux";

import { FaRegAddressCard } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import FixHeader from "./fixHeader";

export function Logo({ height = "h-14", width = "w-44", url }) {
  const router = useRouter(null);
  return (
    <div
      className="flex items-end cursor-pointer space-x-1 "
      onClick={() => {
        router.push("/");
      }}
    >
      <div
        className={`relative ${height} ${width}  flex  flex-grow  justify-center overflow-hidden sm:flex-grow-0  md:flex-grow-0 `}
      >
        <Image
          src={"/images/logo.png"}
          alt="Sudha consultancy"
          objectFit="contain"
          layout="fill"
        />
      </div>
    </div>
  );
}
export default function Header({ opaque = false, fixed = true }) {
  const router = useRouter();
  const detail = useSelector((state) => state.auth);

  return (
    <header
      className={`  max-w-1200 relative     z-50 w-full  mx-auto items-center  py-4 md:py-8 md:pb-16 `}
    >
      <div className="flex  w-full justify-between">
        <Logo height="h-[50px]" width="w-[200px]" opaque={opaque} />

        <nav className="hidden   justify-end items-center text-xl font-medium  md:flex md:gap-x-20 ">
          {[
            {
              label: "Call us: +91 9843045936",
              value: "(Mon-Sat)",
              Icon: MdOutlineWifiCalling3,
            },
            {
              label: "Mail us for help:",
              value: "Sreenivasarao@asrfca.com",
              Icon: IoMailUnreadOutline,
            },
            {
              label: "2C, Thygraja Complex, Kilpauk",
              value: "Chennai",
              Icon: FaRegAddressCard,
            },
          ].map((value) => (
            <AnotherHeaderItem {...value} />
          ))}
        </nav>
      </div>

      <FixHeader />
    </header>
  );
}
