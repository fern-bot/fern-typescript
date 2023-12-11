/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Snippets } from "./api/resources/snippets/client/Client";

export declare namespace FernClient {
    interface Options {
        environment?: core.Supplier<environments.FernEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class FernClient {
    constructor(protected readonly _options: FernClient.Options) {}

    protected _snippets: Snippets | undefined;

    public get snippets(): Snippets {
        return (this._snippets ??= new Snippets(this._options));
    }
}
