"use client";

import { useAppContext } from "@/components/app-provider";
import Link from "next/link";

const menuItems = [
  {
    title: "Món ăn",
    href: "/menu",
  },
  {
    title: "Đơn hàng",
    href: "/orders",
  },
  {
    title: "Đăng nhập",
    href: "/login",
    authRequired: false, // chưa đăng nhập sẽ hiển thị
  },
  {
    title: "Quản lý",
    href: "/manage/dashboard",
    authRequired: true, // đã đăng nhập mới hiển thị
  },
];

export default function NavItems({ className }: { className?: string }) {
  const { isAuth } = useAppContext();

  return menuItems.map((item) => {
    if (
      (item.authRequired === true && !isAuth) ||
      (item.authRequired === false && isAuth)
    )
      return null;
    return (
      <Link href={item.href} key={item.href} className={className}>
        {item.title}
      </Link>
    );
  });
}
