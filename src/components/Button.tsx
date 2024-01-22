import React from 'react';

// --- cara 1 ---
// type ButtonProps = {
//   text: string;
//   color?: string;
// };

//  --- cara 2 untuk css ---
// type ButtonProps = {
//   style?: React.CSSProperties;
// };

// --- cara 3 ---
// type ButtonProps = {
// lebih efektif
// borderRadius?: Record<string, number>; // record<type key, type value>

// borderRadius : {
//   kurang efektif
//   topLeft : number,
//   topRight : number,
// }
// };

// --- cara 4 utk props func---
// type ButtonProps = {
//   onClick: () => void; //void bila return func kosong, bila return func string maka string
// }

// --- cara 5 utk props children---
// type ButtonProps = {
//   children: React.ReactNode; //bila value children spesifik elemen jsx maka isi value dengan JSX.Element
// }

// --- cara 6 utk props berupa hooks ---
// type ButtonProps = {
//   setCount: React.Dispatch<React.SetStateAction<number>>; // bagian ini React.Dispatch<React.SetStateAction<number>> bisa kita hover dari func hooks yg digunakan, cth disini setCount()
// };

// --- cara 7 utk event pd func ---
// const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log('clicked'); // bagian ini React.MouseEvent<HTMLButtonElement, MouseEvent> bisa kita hover dari event handlernya

// --- cara 8 utk props berupa att elm html misal att btn seperti type, autoFocus, value, dll ---
// type ButtonProps = React.ComponentPropsWithoutRef<'button'>; // bila drilling props tanpa ref gunakan fungsi seperti cth, bila menggunakan ref gunakan ComponentPropsWitRef, lalu didalam <> masukan element spesifik yg dimaksud misal button, a, li, dll

// --- cara 9 penggunaan interface ---
// interface ButtonProps {
//   name: string;
//   quantity: number;
// }
// note:
// penggunaan ini lebih cocok pd kasus props yg cukup banyak sehingga perlu dibuat objek seperti pd cth dibawah,
// namun bila tdk banyak cukup gunakan type alias, cthnya type Color = 'red' | 'blue';
// karna bila menggunakan interface penulisnnya kurang efisien, lihat cth dibawah ini
// interface Color {
//   color: 'red' | 'blue'
// }

// --- cara 10 import declarasi file ts
// import { Color } from '../lib/types';
// type ButtonProps = {
//   color: Color;
//   name: string;
// };

const Button = () => {
  return <button>CLick Me</button>;
};

export default Button;
