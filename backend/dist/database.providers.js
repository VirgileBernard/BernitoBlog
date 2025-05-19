"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: () => mongoose.connect('mongodb://admin:admin123@localhost:27018/bernito-store?authSource=admin'),
    },
];
//# sourceMappingURL=database.providers.js.map