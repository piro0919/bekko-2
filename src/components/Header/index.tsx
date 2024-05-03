import { Comfortaa, Poppins } from "next/font/google";
import Link from "next/link";
import { MouseEventHandler } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import Spacer from "react-spacer";
import styles from "./style.module.scss";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: "400",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export type HeaderProps = {
  onOpen: MouseEventHandler<HTMLButtonElement>;
};

export default function Header({ onOpen }: HeaderProps): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/">
          <h1 className={`${comfortaa.className} ${styles.h1}`}>Natsuzolab</h1>
        </Link>
        <Spacer grow={1} />
        <ul className={`${poppins.className} ${styles.list}`}>
          <li>
            <Link href="/discography">Discography</Link>
          </li>
          <li>
            <Link href="/works">Works</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
        <button className={styles.button} onClick={onOpen}>
          <RiMenu3Fill color="#fff" size={24} />
        </button>
      </div>
    </header>
  );
}
