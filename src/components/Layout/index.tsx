"use client";
import { ReactNode } from "react";
import { useBoolean } from "usehooks-ts";
import Drawer from "../Drawer";
import Footer from "../Footer";
import Header from "../Header";
import NextTopLoader from "../NextTopLoader";
import styles from "./style.module.scss";
import useShowWindowSize from "@/hooks/useShowWindowSize";

export type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  const {
    setFalse: offIsOpen,
    setTrue: onIsOpen,
    value: isOpen,
  } = useBoolean(false);

  useShowWindowSize();

  return (
    <>
      <NextTopLoader />
      <div className={styles.wrapper}>
        <Header onOpen={onIsOpen} />
        <main>{children}</main>
        <Footer />
      </div>
      <Drawer onClose={offIsOpen} open={isOpen} />
    </>
  );
}
