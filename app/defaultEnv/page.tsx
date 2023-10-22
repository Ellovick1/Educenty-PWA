"use client";
import EnvBody from "@/components/defaultEnv/envBody/envBody";
import { EnvHero } from "@/components/defaultEnv/envHero";
import EnvSideMenu from "@/components/defaultEnv/envSideMenu";
import { Header } from "@/components/shared/header/header";
import Router from "next/router";
import React from "react";
// import { LuPencilRuler } from "react-icons/lu";

function PersonalDashboard() {
  return (
    <div>
      <Header />
      <EnvHero />
      <div className="flex gap-4 p-4 w-screen ">
        <EnvSideMenu />
        <EnvBody />
        <div className="w-[30%]">
          {/* n <LuPencilRuler /> */}
        </div>
      </div>
      {/* page */}
    </div>
  );
}

export default PersonalDashboard;
