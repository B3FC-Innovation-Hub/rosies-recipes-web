import { ReactComponentElement } from "react";

export type ModalProps = {
    isOpen?: boolean,
    modalTitle: string,
    children?: ReactComponentElement<any, any>[],
    toggable?: boolean,
    //In this case the css class is 'big' or 'small'
    cssClass: string
}