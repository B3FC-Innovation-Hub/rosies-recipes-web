export type LoadingBarProps = {
    recipeName: string;
    progressPercent?: number | null; // if not provided, the loading bar will be indeterminate, 
}