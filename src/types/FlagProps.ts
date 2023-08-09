/**
 * The flag props recives only 2 parameters for now:
 * color: It does not necessarily have to be from the palette but the 
 * only requirement is that the contrast ratio is sufficient.
 * 
 * flagText: The name of the flag, eg: 'Easy', 'Vegan'
 */

export type FlagProps =  {
    color: string;
    flagText: string;
}