import React from "react";
import Image from "next/image";
import Client1 from "@/public/c1.png";
import Client2 from "@/public/c2.png";
import Client3 from "@/public/c4.png";
import Client4 from "@/public/a3.png";
import Client5 from "@/public/c5.png";
import Client6 from "@/public/c7.png";
import Client7 from "@/public/c8.png";
import Client8 from "@/public/c10.png";
import Client9 from "@/public/c14.png";
import Client10 from "@/public/c15.jpg";
import Client11 from "@/public/c16.png";
import Client12 from "@/public/c17.png";
import Client13 from "@/public/c18.jpg";
import Client14 from "@/public/c19.jpg";
import Client15 from "@/public/c20.jpg";
import Client16 from "@/public/c21.jpg";
import Client17 from "@/public/c1.png";
function Clients() {
  const clientsImageArray = [
    Client1,
    Client2,
    Client3,
    Client4,
    Client5,
    Client6,
    Client7,
    Client8,
    Client9,
    Client10,
    Client11,
    Client12,
    Client13,
    Client14,
    Client15,
    Client16,
    Client17,
  ];
  return (
    <>
      clients
      <div className="flex flex-wrap">
        {clientsImageArray
          .map((client) => (
            <div>
              <Image src={client}></Image>
            </div>
          ))}
      </div>
    </>
  );
}

export default Clients;
