export type ButtonProps = {
    title: string;
    onClick?: () => void | Promise<void>; // optional, but recommended to handle async operations
    //For the places where we will use green buttons
    isGreen: boolean;
    //FIXME: add correct typing
    icon?: any;
}