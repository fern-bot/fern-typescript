/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernInternal from "../../..";

export interface SnippetRegistryEntry {
    sdk: FernInternal.Sdk;
    endpointId: FernInternal.EndpointIdentifier;
    /** The default snippet template to use */
    snippetTemplate: FernInternal.VersionedSnippetTemplate;
    /**
     * Additional templates to use for this endpoint, for example if you wanted
     * an async example, you could have { "async": Template(...) }.
     */
    additionalTemplates?: Record<string, FernInternal.VersionedSnippetTemplate>;
}
