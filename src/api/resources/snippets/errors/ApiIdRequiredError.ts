/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";

export class ApiIdRequiredError extends errors.FernError {
    constructor(body: string) {
        super({
            message: "ApiIdRequiredError",
            statusCode: 400,
            body: body,
        });
        Object.setPrototypeOf(this, ApiIdRequiredError.prototype);
    }
}
