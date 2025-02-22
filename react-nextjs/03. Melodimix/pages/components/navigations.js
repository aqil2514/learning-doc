"use client";
import { useRouter } from "next/navigation";
import "@/src/css/main-layout.css";

export default function Navigation() {
  const router = useRouter();

  return (
    <div id="navigation">
      <button id="left-navigation" onClick={() => router.back()}>
        &lt;
      </button>
      <button id="right-navigation" onClick={() => router.forward()}>
        &gt;
      </button>
    </div>
  );
}
