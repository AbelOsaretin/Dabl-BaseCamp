"use client";

import PageWithNavbar from "@/components/layout/page";
import { Account } from "@/components/web3/account";
import { ConnectKitButton } from "connectkit";
import SendEthModal from "@/components/web3/sendEthModal";

export default function Home() {
  return (
    <PageWithNavbar>
      <div className="page">
        <div className="container md:pt-4 lg:pt-12 xl:pt-20">
          <h1 className="mb-4 text-6xl">Dabl Dev Camp</h1>
          <div className="py-8 w-full flex flex-col items-center gap-y-4">
            <ConnectKitButton />
            <Account />
            <SendEthModal />
          </div>
        </div>
      </div>
    </PageWithNavbar>
  );
}
