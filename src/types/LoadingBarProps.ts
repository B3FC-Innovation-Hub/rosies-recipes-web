/**
 * The Loading bar props contain (so far), two parameters :
 * The recipe name, which is a string will be displayed above the loading bar,
 * The progress percent, to indicate the progress of the recipe's upload .
 */
export type LoadingBarProps = {
    recipeName: string;
    progressPercent?: number | null; // if not provided, the loading bar will be indeterminate, 
}