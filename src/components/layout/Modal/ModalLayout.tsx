import { MouseEventHandler, ReactNode, useEffect } from "react";

import classNames from "src/helper/classNames";
import { bodyScrollOff, bodyScrollOn } from "src/helper/bodyScroll";
import CloseButton from "src/components/ui/buttons/CloseButton";

import classes from "./modal.module.scss";

type ModalLayoutProps = {
  className?: string;
  canClose?: boolean;
  children: ReactNode;
  hide?: () => void;
};

/**
 *
 * @description для правильной работы этот компонент должен быть размонтирован когда модалка не видна
 *
 */
const ModalLayout = ({
  className = "",
  canClose = true,
  children,
  hide,
}: ModalLayoutProps) => {
  useEffect(() => {
    bodyScrollOff();

    return () => {
      bodyScrollOn();
    };
  }, []);

  const handleClose = () => {
    if (canClose) {
      hide?.();
    }
  };

  const handleModalClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  const wrapperClassName = classNames(classes.wrapper, className);

  const renderCloseButton = canClose && (
    <CloseButton className={classes.close_button} onClick={handleClose} />
  );

  return (
    <div className={wrapperClassName} onClick={handleClose}>
      <div className={classes.modal} onClick={handleModalClick}>
        {renderCloseButton}
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
