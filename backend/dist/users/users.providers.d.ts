import { Connection } from 'mongoose';
export declare const userProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        username: string;
        password: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        username: string;
        password: string;
    }> & {
        username: string;
        password: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        username: string;
        password: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        username: string;
        password: string;
    }>> & import("mongoose").FlatRecord<{
        username: string;
        password: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
