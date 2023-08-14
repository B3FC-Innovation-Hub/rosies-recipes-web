export type TopBarProps = {
    /*
    This will be the email/name of the logged account. We can use this type to add more props in case we need in the future.
    */
   username?: string;
    /**  In case we want to pass down the name,
     the property name comes from MSAL as string | undefined */
    name?: string | undefined; 
}
