"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProviders = void 0;
const users_schema_1 = require("./schemas/users.schema");
exports.userProviders = [
    {
        provide: 'USER_MODEL',
        useFactory: (connection) => connection.model('Users', users_schema_1.UsersSchema),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=users.providers.js.map