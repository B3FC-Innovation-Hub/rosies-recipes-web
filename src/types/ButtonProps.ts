export type ButtonProps = {
    title?: string;
    onClick?: () => void | Promise<void>; // optional, but recommended to handle async operations
    //To specify which color the button will be
    color: string;
    //to pass the fab class directly to fab buttons
    fab?: string;
    icon?: string;
}