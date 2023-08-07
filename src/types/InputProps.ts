/**
 * The input received two parameters (later on we'll add extra parameters to track if it was touched,
 * focus etc and other validation parameters)
 * multiline: if true, renders a texarea element, if false renders a regular input.
 * placeholder: A hint of what the user should type in the input.
 */

export type InputProps = {
    multiline: boolean;
    placeholder: string;
}