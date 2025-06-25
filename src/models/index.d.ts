import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerAltPartRecommendation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AltPartRecommendation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly MPN: string;
  readonly Description?: string | null;
  readonly AltMPN1?: string | null;
  readonly AltMPN2?: string | null;
  readonly AltMPN3?: string | null;
  readonly LifecycleStatus?: string | null;
  readonly ROHS?: string | null;
  readonly EOL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAltPartRecommendation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AltPartRecommendation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly MPN: string;
  readonly Description?: string | null;
  readonly AltMPN1?: string | null;
  readonly AltMPN2?: string | null;
  readonly AltMPN3?: string | null;
  readonly LifecycleStatus?: string | null;
  readonly ROHS?: string | null;
  readonly EOL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AltPartRecommendation = LazyLoading extends LazyLoadingDisabled ? EagerAltPartRecommendation : LazyAltPartRecommendation

export declare const AltPartRecommendation: (new (init: ModelInit<AltPartRecommendation>) => AltPartRecommendation) & {
  copyOf(source: AltPartRecommendation, mutator: (draft: MutableModel<AltPartRecommendation>) => MutableModel<AltPartRecommendation> | void): AltPartRecommendation;
}