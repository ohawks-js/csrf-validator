export class CSRFValidatorOptions {
    constructor(tokenSecretKey: string, ignoredMethods: string[], ignoredRoutes: string[], entryPointRoutes: string[],
                cookieKey?: string, cookieSecretKey?: string, cookieSessionKeys?: string[],
                customErrorMessage?: {code: string; message: string;}) {
        this.tokenSecretKey = tokenSecretKey;
        this.ignoredMethods = ignoredMethods;
        this.ignoredRoutes = ignoredRoutes;
        this.entryPointRoutes = entryPointRoutes;
        this.cookieKey = cookieKey;
        this.cookieSecretKey = cookieSecretKey;
        this.cookieSessionKeys = cookieSessionKeys;
    }

    /**
     * This is a secret key for csrf token encryption
     */
    tokenSecretKey: string;

    /**
     * These methods will be ignored
     */
    ignoredMethods: string[];

    /**
     * These routes will be ignored
     */
    ignoredRoutes: string[];

    /**
     * This is the entry point rotes, which means the csrf tokens will set to any route inside this array even if it is ignored
     */
    entryPointRoutes: string[];

    /**
     * This one is optional, if you want a custom cookie name, you can give that field name here
     */
    cookieKey?: string;

    /**
     * This is a secret key for cookies
     */
    cookieSecretKey?: string;

    /**
     * This is an array of secret keys for sessions
     */
    cookieSessionKeys?: string[];


    /**
     * This is an optional field, this will contain an object of error code and message
     */
    customErrorMessage?: {code: string; message: string;}
}
