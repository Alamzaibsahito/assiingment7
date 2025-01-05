import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div >
    <div className="w-full h-[650px] content-center bg-red-600 ">
      <div>
        <div className=""><h1 className="text-center font-semibold ">Alam Zaib</h1></div>
        <h1 className="text-[30px] text-center font-extrabold">
          Welcome To My  Data Fetching Methods
        </h1>
      <br />
        <p className="font-bold text-[white] text-center ">
          Choose Your Desired Method To Fetch The Data
        </p>
      </div>
      <br />

      <div className="flex justify-center items-center gap-5">
           <Link href="/ClientSide_DataFacting"> <button className="w-[220px] h-[50px] font-bold border
                      border-yellow rounded-[10px] bg-yellow-500">Client Side Data Fetching</button></Link>

           <Link href="/ServerSide_DataFetching"><button className="w-[220px] h-[50px] font-bold border
                    border-red rounded-[10px] bg-orange-600">Server Side Data Fetching</button>
           </Link>
      </div>
      </div>
    </div>
  );
}