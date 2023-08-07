import { ReactComponentElement } from "react";

export type ModalProps = {
    isOpen?: boolean,
    modalTitle: string,
    //TODO: type this more specifically
    children?: ReactComponentElement<any, any>[],
    toggable?: boolean,
    //In this case css class is big or small
    cssClass: string
}