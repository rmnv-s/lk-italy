import React from "react";
import styles from "./headerContant.module.css";
import Button from "../UI/buttons";

const HeaderContent = () => {
  return (
    <div className={styles.contant}>
      <div className={`${styles.contant__inner} wrapper`}>
        <h1 className={styles.contant__heading}> Linda Kristel </h1>
        <p className={styles.contant__text}>
          {" "}
          Dal 1961 ci prendiamo cura della vostra bellezza{" "}
        </p>
        <Button text="Scopri" />
      </div>
    </div>
  );
};

export default HeaderContent;
