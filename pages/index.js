import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom'
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  useCommand
} from 'cmdk'
import React, {useEffect} from "react";
import { CommandK } from "../src/components/cmdk";

export default function Home() {
  return (
    <div className={styles.container}>
      <CommandK>
      <Head>
        <title>Toby B Development</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/peep (3).png" />
      </Head>
      <ChakraProvider>
    <div className="App">
      <header className="App-header" />
  </div>
  
  <div className={styles.popupDiv}>
  <button className={styles.popupButton} onClick={"actions"}>⌘</button>
  </div>

  <h1 className={styles.opentext}>Hi,<br></br> I&apos;m <br></br>Toby.</h1>
  <h1 className={styles.info}>13 y/o full stack web dev & designer.</h1>

  <div className={styles.mediv}>
    <button id="mebutton">
  <Image className={styles.me} src="/peep (3).png" alt="Toby" height="700" width="700" />
  </button>
  </div>

    <div className={styles.hellodiv} idName="hellodiv">
  <Image className={styles.hello} idName={styles.hello} onClick={appearImage} src="/hello.png" alt="hello" height="700" width="700" />
  </div>

  
  <button className={styles.button} idName="button" onClick={appearImage}>
    test
  </button>

        </ChakraProvider>
        </CommandK>
  </div>
  );
}

function appearImage() {
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(function appearImage() {
const targetDiv = document.getElementById("hellodiv");
const btn = document.getElementById("mebutton");
btn.onClick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
      };
    };
  });
  console.log('appear image')
};
