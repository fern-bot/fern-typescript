import * as core from "../../../../../core";
import * as Fern from "../../..";
import { Template } from "./Template";
import { Templates } from "../Client";


export class TemplateWrapper extends Templates {
    constructor(protected readonly _options: Templates.Options = {}) {
        super(_options);
    }

    /**
     * Get the endpoint's snippet template for a particular SDK.
     * @throws {@link Fern.UnauthorizedError}
     * @throws {@link Fern.SnippetNotFound}
     */
    public async get(
        request: Fern.GetSnippetTemplate,
        requestOptions?: Templates.RequestOptions
    ): Promise<Template> {
        const innerTemplate = await super.get(request, requestOptions);
        return Template.from(innerTemplate)
    }

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
