import { ReactComponentElement } from "react";

/**
 * The modal component is very versatile and accepts several different properties depending on our needs.
 * isOpen: Boolean, optional value that we can use if we want to perform an action when the modal opens
 * modalTitle: The title we want to give the modal
 * children: Allows us to render other jsx elements inside our modal tag, in this case, we accept only arrays of react components as children.
 * toggable: If true, we can open and close it with a fab button, if false, remains open.
 * cssClass: So far accepts the classes 'big' or 'small' since we will need them for different scenarios. Should we need more custom classes,
 * we'll pass them to the modal through this property.
 */

export type ModalProps = {
    isOpen?: boolean,
    modalTitle: string,
    children?: ReactComponentElement<any, any>[],
    toggable?: boolean,
    //In this case the css class is 'big' or 'small'
    cssClass: string
}