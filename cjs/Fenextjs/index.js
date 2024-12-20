"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorFenextjs = void 0;
const Error_1 = require("fenextjs-interface/cjs/Error");
class ErrorFenextjs extends Error {
    code;
    content;
    message;
    msg;
    input;
    data;
    constructor({ code, data, message, input, content, }) {
        super(message);
        this.code = code ?? Error_1.ErrorCode.ERROR;
        this.name = code ?? Error_1.ErrorCode.ERROR;
        this.message = (message ?? "") + (input ? ` [${input}]` : "");
        this.msg = message ?? "";
        this.data = data;
        this.input = input;
        this.content = content;
    }
}
exports.ErrorFenextjs = ErrorFenextjs;
//# sourceMappingURL=index.js.map