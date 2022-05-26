import clsx from "clsx";

import styles from "./Button.module.scss";
// <button className={`${styles.btn} ${styles.active}`}>Click me</button>
// cách viet khá xấu
// cho nên người ta sẽ dùng 1 trong 2 lib classnames, clsx
console.log(styles);
function Button({ primary, disabled }) {
  // primary nhận ở propss sẽ là giá trị boolean: true
  const classes = clsx(styles.btn, {
    [styles.primary]: primary,
    // "d-flex": true,
    [styles.disabled]: disabled
  });

  return (
    <>
      <button className={classes}>Click me</button>
      {/* <button className={styles.btn}>Click me</button> */}
      {/* <button className={`${styles.btn} ${styles.active}`}>Click me</button>
      <button className={[styles.btn, styles.bigBtn].join(" ")}>
        Click me
      </button>
      <button className={clsx(styles.btn, styles.active)}>Click me</button> */}
      {/* truyen dinamic css module*/}
      {/* {
          [styles.active]: true
        }
        tuong duong voi {["_src_components_Button_Button_module__active"]:true} */}
      {/* <button
        className={clsx(styles.btn, {
          [styles.active]: true
        })}
      >
        Click me
      </button> */}
    </>
  );
}
export default Button;
