/**
 * The RecipeListItem will be displayed while the user is already ccoking. 
 * This items will show the previous + next steps in order to complete the meal.
 * step: is a short description of the step.
 * cleared: if true, mean that the user has already cleared the step. If false, the step is pending.
 */

export type RecipeListItemProps = {
    step: string,
    cleared: boolean
}