// to make the file a module and avoid the TypeScript error
export {}

declare global {
    module Express {
        interface Request {
            //userID: number;
            //returnXML: boolean;
        }
    }
}
