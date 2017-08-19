/* @flow */
declare module 'entria/natura/flow-typed-wip/flow-typed/react-relay' {
  declare export type PayloadError = {
    message: string,
    locations?: Array<{
      line: number,
      column: number,
    }>,
  };

  declare export type onCompleted = (response: ?Object, errors: ?Array<PayloadError>) => void;
  declare export type onError = (error: Error) => void;

  declare export type CommitOptions = {
    onCompleted: onCompleted,
    onError: onError,
  };

  /**
   * Ideally this would be a union of Field/Fragment/Mutation/Query/Subscription,
   * but that causes lots of Flow errors.
   */
  declare export type ConcreteBatchCallVariable = {
    jsonPath: string,
    kind: 'BatchCallVariable',
    sourceQueryID: string,
  };
  declare export type ConcreteCall = {
    kind: 'Call',
    metadata: {
      type?: ?string,
    },
    name: string,
    value: ?ConcreteValue,
  };
  declare export type ConcreteCallValue = {
    callValue: mixed,
    kind: 'CallValue',
  };
  declare export type ConcreteCallVariable = {
    callVariableName: string,
    kind: 'CallVariable',
  };
  declare export type ConcreteDirective = {
    args: Array<ConcreteDirectiveArgument>,
    kind: 'Directive',
    name: string,
  };
  declare export type ConcreteDirectiveArgument = {
    name: string,
    value: ?ConcreteDirectiveValue,
  };
  declare export type ConcreteDirectiveValue =
    | ConcreteCallValue
    | ConcreteCallVariable
    | Array<ConcreteCallValue | ConcreteCallVariable>;
  declare export type ConcreteFieldMetadata = {
    canHaveSubselections?: ?boolean,
    inferredPrimaryKey?: ?string,
    inferredRootCallName?: ?string,
    isAbstract?: boolean,
    isConnection?: boolean,
    isConnectionWithoutNodeID?: boolean,
    isFindable?: boolean,
    isGenerated?: boolean,
    isPlural?: boolean,
    isRequisite?: boolean,
  };
  declare export type ConcreteFragmentMetadata = {
    isAbstract?: boolean,
    pattern?: boolean,
    plural?: boolean,
  };
  declare export type ConcreteMutation = {
    calls: Array<ConcreteCall>,
    children?: ?Array<?ConcreteSelection>,
    directives?: ?Array<ConcreteDirective>,
    kind: 'Mutation',
    metadata: {
      inputType?: ?string,
    },
    name: string,
    responseType: string,
  };
  declare export type ConcreteOperationMetadata = {
    inputType?: ?string,
  };
  declare export type ConcreteQuery = {
    calls?: ?Array<ConcreteCall>,
    children?: ?Array<?ConcreteSelection>,
    directives?: ?Array<ConcreteDirective>,
    fieldName: string,
    isDeferred?: boolean,
    kind: 'Query',
    metadata: {
      identifyingArgName?: ?string,
      identifyingArgType?: ?string,
      isAbstract?: ?boolean,
      isPlural?: ?boolean,
    },
    name: string,
    type: string,
  };
  declare export type ConcreteQueryMetadata = {
    identifyingArgName: ?string,
    identifyingArgType: ?string,
    isAbstract: ?boolean,
    isDeferred: ?boolean,
    isPlural: ?boolean,
  };
  declare export type ConcreteSubscription = {
    calls: Array<ConcreteCall>,
    children?: ?Array<?ConcreteSelection>,
    directives?: ?Array<ConcreteDirective>,
    kind: 'Subscription',
    name: string,
    responseType: string,
    metadata: {
      inputType?: ?string,
    },
  };
  declare export type ConcreteValue =
    | ConcreteBatchCallVariable
    | ConcreteCallValue
    | ConcreteCallVariable
    | Array<ConcreteCallValue | ConcreteCallVariable>;

  /**
   * The output of a graphql-tagged fragment definition.
   */
  declare export type ConcreteFragmentDefinition = {
    kind: 'FragmentDefinition',
    argumentDefinitions: Array<ConcreteArgumentDefinition>,
    node: ConcreteFragment,
  };

  declare export type ConcreteLocalArgumentDefinition = {
    kind: 'LocalArgument',
    name: string,
    defaultValue: mixed,
  };

  declare export type ConcreteRootArgumentDefinition = {
    kind: 'RootArgument',
    name: string,
  };

  /**
   * The output of a graphql-tagged operation definition.
   */
  declare export type ConcreteOperationDefinition = {
    kind: 'OperationDefinition',
    argumentDefinitions: Array<ConcreteLocalArgumentDefinition>,
    name: string,
    operation: 'mutation' | 'query' | 'subscription',
    node: ConcreteFragment | ConcreteMutation | ConcreteSubscription,
  };

  declare export type ConcreteArgument = ConcreteLiteral | ConcreteVariable;
  declare export type ConcreteArgumentDefinition = ConcreteLocalArgument | ConcreteRootArgument;
  /**
   * Represents a single ConcreteRoot along with metadata for processing it at
   * runtime. The persisted `id` (or `text`) can be used to fetch the query,
   * the `fragment` can be used to read the root data (masking data from child
   * fragments), and the `query` can be used to normalize server responses.
   *
   * NOTE: The use of "batch" in the name is intentional, as this wrapper around
   * the ConcreteRoot will provide a place to store multiple concrete nodes that
   * are part of the same batch, e.g. in the case of deferred nodes or
   * for streaming connections that are represented as distinct concrete roots but
   * are still conceptually tied to one source query.
   */
  declare export type ConcreteBatch = {
    kind: 'Batch',
    fragment: ConcreteFragment,
    id: ?string,
    metadata: { [key: string]: mixed },
    name: string,
    query: ConcreteRoot,
    text: ?string,
  };
  declare export type ConcreteCondition = {
    kind: 'Condition',
    passingValue: boolean,
    condition: string,
    selections: Array<ConcreteSelection>,
  };
  declare export type ConcreteField = ConcreteScalarField | ConcreteLinkedField;
  declare export type ConcreteFragment = {
    argumentDefinitions: Array<ConcreteArgumentDefinition>,
    kind: 'Fragment',
    metadata: ?{ [key: string]: mixed },
    name: string,
    selections: Array<ConcreteSelection>,
    type: string,
  };
  declare export type ConcreteFragmentSpread = {
    args: ?Array<ConcreteArgument>,
    kind: 'FragmentSpread',
    name: string,
  };
  declare export type ConcreteHandle = ConcreteScalarHandle | ConcreteLinkedHandle;
  declare export type ConcreteRootArgument = {
    kind: 'RootArgument',
    name: string,
    type: ?string,
  };
  declare export type ConcreteInlineFragment = {
    kind: 'InlineFragment',
    selections: Array<ConcreteSelection>,
    type: string,
  };
  declare export type ConcreteLinkedField = {
    alias: ?string,
    args: ?Array<ConcreteArgument>,
    concreteType: ?string,
    kind: 'LinkedField',
    name: string,
    plural: boolean,
    selections: Array<ConcreteSelection>,
    storageKey: ?string,
  };
  declare export type ConcreteLinkedHandle = {
    alias: ?string,
    args: ?Array<ConcreteArgument>,
    kind: 'LinkedHandle',
    name: string,
    handle: string,
    key: string,
    filters: ?Array<string>,
  };
  declare export type ConcreteLiteral = {
    kind: 'Literal',
    name: string,
    type: ?string,
    value: mixed,
  };
  declare export type ConcreteLocalArgument = {
    defaultValue: mixed,
    kind: 'LocalArgument',
    name: string,
    type: string,
  };
  declare export type ConcreteNode =
    | ConcreteCondition
    | ConcreteLinkedField
    | ConcreteFragment
    | ConcreteInlineFragment
    | ConcreteRoot;
  declare export type ConcreteRoot = {
    argumentDefinitions: Array<ConcreteLocalArgument>,
    kind: 'Root',
    name: string,
    operation: 'mutation' | 'query' | 'subscription',
    selections: Array<ConcreteSelection>,
  };
  declare export type ConcreteScalarField = {
    alias: ?string,
    args: ?Array<ConcreteArgument>,
    kind: 'ScalarField',
    name: string,
    storageKey: ?string,
  };
  declare export type ConcreteScalarHandle = {
    alias: ?string,
    args: ?Array<ConcreteArgument>,
    kind: 'ScalarHandle',
    name: string,
    handle: string,
    key: string,
    filters: ?Array<string>,
  };
  declare export type ConcreteSelection =
    | ConcreteCondition
    | ConcreteField
    | ConcreteFragmentSpread
    | ConcreteHandle
    | ConcreteInlineFragment;
  declare export type ConcreteVariable = {
    kind: 'Variable',
    name: string,
    type: ?string,
    variableName: string,
  };
  declare export type ConcreteSelectableNode = ConcreteFragment | ConcreteRoot;
  declare export type GeneratedNode = ConcreteBatch | ConcreteFragment;

  // The type of a graphql`...` tagged template expression.
  declare export type GraphQLTaggedNode =
    | (() => ConcreteFragment | ConcreteBatch)
    | {
        modern: () => ConcreteFragment | ConcreteBatch,
        classic: () => ConcreteFragmentDefinition | ConcreteOperationDefinition,
      };

  declare export function graphql(strings: Array<string>): GraphQLTaggedNode;

  declare export type GeneratedNodeMap = { [key: string]: GraphQLTaggedNode };

  declare export function createFragmentContainer<TBase: ReactClass<*>>(
    Component: TBase,
    fragmentSpec: GraphQLTaggedNode | GeneratedNodeMap,
  ): TBase;

  declare export type Variables = { [name: string]: $FlowFixMe };
  declare export type DataID = string;

  declare type TEnvironment = Environment;
  declare type TFragment = ConcreteFragment;
  declare type TGraphQLTaggedNode = GraphQLTaggedNode;
  declare type TNode = ConcreteSelectableNode;
  declare type TOperation = ConcreteBatch;
  declare type TPayload = RelayResponsePayload;

  declare export type FragmentMap = CFragmentMap<TFragment>;
  declare export type OperationSelector = COperationSelector<TNode, TOperation>;
  declare export type RelayContext = CRelayContext<TEnvironment>;
  declare export type Selector = CSelector<TNode>;
  declare export type TSnapshot<TRecord> = CSnapshot<TNode, TRecord>;
  declare export type Snapshot = TSnapshot<Record>;
  declare export type ProxySnapshot = TSnapshot<RecordProxy>;
  declare export type UnstableEnvironmentCore = CUnstableEnvironmentCore<
    TEnvironment,
    TFragment,
    TGraphQLTaggedNode,
    TNode,
    TOperation,
  >;

  declare export interface IRecordSource<TRecord> {
    get(dataID: DataID): ?TRecord,
  }

  /**
   * A read-only interface for accessing cached graph data.
   */
  declare export interface RecordSource extends IRecordSource<Record> {
    get(dataID: DataID): ?Record,

    getRecordIDs(): Array<DataID>,

    getStatus(dataID: DataID): RecordState,

    has(dataID: DataID): boolean,

    load(dataID: DataID, callback: (error: ?Error, record: ?Record) => void): void,

    size(): number,
  }

  /**
   * A read/write interface for accessing and updating graph data.
   */
  declare export interface MutableRecordSource extends RecordSource {
    clear(): void,

    delete(dataID: DataID): void,

    remove(dataID: DataID): void,

    set(dataID: DataID, record: Record): void,
  }

  /**
   * An interface for keeping multiple views of data consistent across an
   * application.
   */
  declare export interface Store {
    /**
     * Get a read-only view of the store's internal RecordSource.
     */
    getSource(): RecordSource,

    /**
     * Determine if the selector can be resolved with data in the store (i.e. no
     * fields are missing).
     */
    check(selector: Selector): boolean,

    /**
     * Read the results of a selector from in-memory records in the store.
     */
    lookup(selector: Selector): Snapshot,

    /**
     * Notify subscribers (see `subscribe`) of any data that was published
     * (`publish()`) since the last time `notify` was called.
     */
    notify(): void,

    /**
     * Publish new information (e.g. from the network) to the store, updating its
     * internal record source. Subscribers are not immediately notified - this
     * occurs when `notify()` is called.
     */
    publish(source: RecordSource): void,

    /**
     * Attempts to load all the records necessary to fulfill the selector into the
     * target record source.
     */
    resolve(target: MutableRecordSource, selector: Selector, callback: AsyncLoadCallback): void,

    /**
     * Ensure that all the records necessary to fulfill the given selector are
     * retained in-memory. The records will not be eligible for garbage collection
     * until the returned reference is disposed.
     */
    retain(selector: Selector): Disposable,

    /**
     * Subscribe to changes to the results of a selector. The callback is called
     * when `notify()` is called *and* records have been published that affect the
     * selector results relative to the last `notify()`.
     */
    subscribe(snapshot: Snapshot, callback: (snapshot: Snapshot) => void): Disposable,
  }

  /**
   * An interface for imperatively getting/setting properties of a `Record`. This interface
   * is designed to allow the appearance of direct Record manipulation while
   * allowing different implementations that may e.g. create a changeset of
   * the modifications.
   */
  declare export interface RecordProxy {
    copyFieldsFrom(source: RecordProxy): void,

    getDataID(): DataID,

    getLinkedRecord(name: string, args?: ?Variables): ?RecordProxy,

    getLinkedRecords(name: string, args?: ?Variables): ?Array<?RecordProxy>,

    getOrCreateLinkedRecord(name: string, typeName: string, args?: ?Variables): RecordProxy,

    getType(): string,

    getValue(name: string, args?: ?Variables): mixed,

    setLinkedRecord(record: RecordProxy, name: string, args?: ?Variables): RecordProxy,

    setLinkedRecords(records: Array<?RecordProxy>, name: string, args?: ?Variables): RecordProxy,

    setValue(value: mixed, name: string, args?: ?Variables): RecordProxy,
  }

  /**
   * An interface for imperatively getting/setting properties of a `RecordSource`. This interface
   * is designed to allow the appearance of direct RecordSource manipulation while
   * allowing different implementations that may e.g. create a changeset of
   * the modifications.
   */
  declare export interface RecordSourceProxy extends IRecordSource<RecordProxy> {
    create(dataID: DataID, typeName: string): RecordProxy,

    delete(dataID: DataID): void,

    get(dataID: DataID): ?RecordProxy,

    getRoot(): RecordProxy,
  }

  /**
   * Extends the RecordSourceProxy interface with methods for accessing the root
   * fields of a Selector.
   */
  declare export interface RecordSourceSelectorProxy extends IRecordSource<RecordProxy> {
    create(dataID: DataID, typeName: string): RecordProxy,

    delete(dataID: DataID): void,

    get(dataID: DataID): ?RecordProxy,

    getRoot(): RecordProxy,

    getRootField(fieldName: string): ?RecordProxy,

    getPluralRootField(fieldName: string): ?Array<?RecordProxy>,

    getResponse(): ?Object,
  }

  declare export interface IRecordReader<TRecord> {
    getDataID(record: TRecord): DataID,

    getType(record: TRecord): string,

    getValue(record: TRecord, name: string, args?: ?Variables): mixed,

    getLinkedRecordID(record: TRecord, name: string, args?: ?Variables): ?DataID,

    getLinkedRecordIDs(record: TRecord, name: string, args?: ?Variables): ?Array<?DataID>,
  }

  /**
   * Settings for how a query response may be cached.
   *
   * - `force`: causes a query to be issued unconditionally, irrespective of the
   *   state of any configured response cache.
   * - `poll`: causes a query to live update by polling at the specified interval
   in milliseconds. (This value will be passed to setTimeout.)
   */
  declare export type CacheConfig = {
    force?: ?boolean,
    poll?: ?number,
  };

  /**
   * Represents any resource that must be explicitly disposed of. The most common
   * use-case is as a return value for subscriptions, where calling `dispose()`
   * would cancel the subscription.
   */
  declare export type Disposable = {
    dispose(): void,
  };

  /**
   * Arbitrary data e.g. received by a container as props.
   */
  declare export type Props = { [key: string]: mixed };

  /*
   * An individual cached graph object.
   */
  declare export type Record = { [key: string]: mixed };

  /**
   * A collection of records keyed by id.
   */
  declare export type RecordMap<T> = { [dataID: DataID]: ?T };

  /**
   * A selector defines the starting point for a traversal into the graph for the
   * purposes of targeting a subgraph.
   */
  declare export type CSelector<TNode> = {
    dataID: DataID,
    node: TNode,
    variables: Variables,
  };

  /**
   * A representation of a selector and its results at a particular point in time.
   */
  declare export type CSnapshot<TNode, TRecord> = CSelector<TNode> & {
    data: ?SelectorData,
    seenRecords: RecordMap<TRecord>,
  };

  /**
   * The results of a selector given a store/RecordSource.
   */
  declare export type SelectorData = { [key: string]: mixed };

  /**
   * The results of reading the results of a FragmentMap given some input
   * `Props`.
   */
  declare export type FragmentSpecResults = { [key: string]: mixed };

  /**
   * A utility for resolving and subscribing to the results of a fragment spec
   * (key -> fragment mapping) given some "props" that determine the root ID
   * and variables to use when reading each fragment. When props are changed via
   * `setProps()`, the resolver will update its results and subscriptions
   * accordingly. Internally, the resolver:
   * - Converts the fragment map & props map into a map of `Selector`s.
   * - Removes any resolvers for any props that became null.
   * - Creates resolvers for any props that became non-null.
   * - Updates resolvers with the latest props.
   */
  declare export interface FragmentSpecResolver {
    /**
     * Stop watching for changes to the results of the fragments.
     */
    dispose(): void,

    /**
     * Get the current results.
     */
    resolve(): FragmentSpecResults,

    /**
     * Update the resolver with new inputs. Call `resolve()` to get the updated
     * results.
     */
    setProps(props: Props): void,

    /**
     * Override the variables used to read the results of the fragments. Call
     * `resolve()` to get the updated results.
     */
    setVariables(variables: Variables): void,
  }

  declare export type CFragmentMap<TFragment> = { [key: string]: TFragment };

  /**
   * An operation selector describes a specific instance of a GraphQL operation
   * with variables applied.
   *
   * - `root`: a selector intended for processing server results or retaining
   *   response data in the store.
   * - `fragment`: a selector intended for use in reading or subscribing to
   *   the results of the the operation.
   */
  declare export type COperationSelector<TNode, TOperation> = {
    fragment: CSelector<TNode>,
    node: TOperation,
    root: CSelector<TNode>,
    variables: Variables,
  };

  /**
   * The public API of Relay core. Represents an encapsulated environment with its
   * own in-memory cache.
   */
  declare export interface CEnvironment<
    TEnvironment,
    TFragment,
    TGraphQLTaggedNode,
    TNode,
    TOperation,
    TPayload,
  > {
    /**
     * Read the results of a selector from in-memory records in the store.
     */
    lookup(selector: CSelector<TNode>): CSnapshot<TNode, Record>,

    /**
     * Subscribe to changes to the results of a selector. The callback is called
     * when data has been committed to the store that would cause the results of
     * the snapshot's selector to change.
     */
    subscribe(
      snapshot: CSnapshot<TNode, Record>,
      callback: (snapshot: CSnapshot<TNode, Record>) => void,
    ): Disposable,

    /**
     * Ensure that all the records necessary to fulfill the given selector are
     * retained in-memory. The records will not be eligible for garbage collection
     * until the returned reference is disposed.
     *
     * Note: This is a no-op in the classic core.
     */
    retain(selector: CSelector<TNode>): Disposable,

    /**
     * Send a query to the server with request/response semantics: the query will
     * either complete successfully (calling `onNext` and `onCompleted`) or fail
     * (calling `onError`).
     *
     * Note: Most applications should use `streamQuery` in order to
     * optionally receive updated information over time, should that feature be
     * supported by the network/server. A good rule of thumb is to use this method
     * if you would otherwise immediately dispose the `streamQuery()`
     * after receving the first `onNext` result.
     */
    sendQuery(config: {|
      cacheConfig?: ?CacheConfig,
      onCompleted?: ?() => void,
      onError?: ?(error: Error) => void,
      onNext?: ?(payload: TPayload) => void,
      operation: COperationSelector<TNode, TOperation>,
    |}): Disposable,

    /**
     * Send a query to the server with request/subscription semantics: one or more
     * responses may be returned (via `onNext`) over time followed by either
     * the request completing (`onCompleted`) or an error (`onError`).
     *
     * Networks/servers that support subscriptions may choose to hold the
     * subscription open indefinitely such that `onCompleted` is not called.
     */
    streamQuery(config: {|
      cacheConfig?: ?CacheConfig,
      onCompleted?: ?() => void,
      onError?: ?(error: Error) => void,
      onNext?: ?(payload: TPayload) => void,
      operation: COperationSelector<TNode, TOperation>,
    |}): Disposable,

    unstable_internal: CUnstableEnvironmentCore<
      TEnvironment,
      TFragment,
      TGraphQLTaggedNode,
      TNode,
      TOperation,
    >,
  }

  declare export interface CUnstableEnvironmentCore<
    TEnvironment,
    TFragment,
    TGraphQLTaggedNode,
    TNode,
    TOperation,
  > {
    /**
     * Create an instance of a FragmentSpecResolver.
     *
     * TODO: The FragmentSpecResolver *can* be implemented via the other methods
     * defined here, so this could be moved out of core. It's convenient to have
     * separate implementations until the experimental core is in OSS.
     */
    createFragmentSpecResolver: (
      context: CRelayContext<TEnvironment>,
      fragments: CFragmentMap<TFragment>,
      props: Props,
      callback: () => void,
    ) => FragmentSpecResolver,

    /**
     * Creates an instance of an OperationSelector given an operation definition
     * (see `getOperation`) and the variables to apply. The input variables are
     * filtered to exclude variables that do not matche defined arguments on the
     * operation, and default values are populated for null values.
     */
    createOperationSelector: (
      operation: TOperation,
      variables: Variables,
    ) => COperationSelector<TNode, TOperation>,

    /**
     * Given a graphql`...` tagged template, extract a fragment definition usable
     * by this version of Relay core. Throws if the value is not a fragment.
     */
    getFragment: (node: TGraphQLTaggedNode) => TFragment,

    /**
     * Given a graphql`...` tagged template, extract an operation definition
     * usable by this version of Relay core. Throws if the value is not an
     * operation.
     */
    getOperation: (node: TGraphQLTaggedNode) => TOperation,

    /**
     * Determine if two selectors are equal (represent the same selection). Note
     * that this function returns `false` when the two queries/fragments are
     * different objects, even if they select the same fields.
     */
    areEqualSelectors: (a: CSelector<TNode>, b: CSelector<TNode>) => boolean,

    /**
     * Given the result `item` from a parent that fetched `fragment`, creates a
     * selector that can be used to read the results of that fragment for that item.
     *
     * Example:
     *
     * Given two fragments as follows:
     *
     * ```
     * fragment Parent on User {
   *   id
   *   ...Child
   * }
     * fragment Child on User {
   *   name
   * }
     * ```
     *
     * And given some object `parent` that is the results of `Parent` for id "4",
     * the results of `Child` can be accessed by first getting a selector and then
     * using that selector to `lookup()` the results against the environment:
     *
     * ```
     * const childSelector = getSelector(queryVariables, Child, parent);
     * const childData = environment.lookup(childSelector).data;
     * ```
     */
    getSelector: (
      operationVariables: Variables,
      fragment: TFragment,
      prop: mixed,
    ) => ?CSelector<TNode>,

    /**
     * Given the result `items` from a parent that fetched `fragment`, creates a
     * selector that can be used to read the results of that fragment on those
     * items. This is similar to `getSelector` but for "plural" fragments that
     * expect an array of results and therefore return an array of selectors.
     */
    getSelectorList: (
      operationVariables: Variables,
      fragment: TFragment,
      props: Array<mixed>,
    ) => ?Array<CSelector<TNode>>,

    /**
     * Given a mapping of keys -> results and a mapping of keys -> fragments,
     * extracts the selectors for those fragments from the results.
     *
     * The canonical use-case for this function are Relay Containers, which
     * use this function to convert (props, fragments) into selectors so that they
     * can read the results to pass to the inner component.
     */
    getSelectorsFromObject: (
      operationVariables: Variables,
      fragments: CFragmentMap<TFragment>,
      props: Props,
    ) => { [key: string]: ?(CSelector<TNode> | Array<CSelector<TNode>>) },

    /**
     * Given a mapping of keys -> results and a mapping of keys -> fragments,
     * extracts a mapping of keys -> id(s) of the results.
     *
     * Similar to `getSelectorsFromObject()`, this function can be useful in
     * determining the "identity" of the props passed to a component.
     */
    getDataIDsFromObject: (
      fragments: CFragmentMap<TFragment>,
      props: Props,
    ) => { [key: string]: ?(DataID | Array<DataID>) },

    /**
     * Given a mapping of keys -> results and a mapping of keys -> fragments,
     * extracts the merged variables that would be in scope for those
     * fragments/results.
     *
     * This can be useful in determing what varaibles were used to fetch the data
     * for a Relay container, for example.
     */
    getVariablesFromObject: (
      operationVariables: Variables,
      fragments: CFragmentMap<TFragment>,
      props: Props,
    ) => Variables,
  }

  /**
   * The type of the `relay` property set on React context by the React/Relay
   * integration layer (e.g. QueryRenderer, FragmentContainer, etc).
   */
  declare export type CRelayContext<TEnvironment> = {
    environment: TEnvironment,
    variables: Variables,
  };

  /**
   * The public API of Relay core. Represents an encapsulated environment with its
   * own in-memory cache.
   */
  declare export interface Environment
    extends CEnvironment<TEnvironment, TFragment, TGraphQLTaggedNode, TNode, TOperation, TPayload> {
    /**
     * Apply an optimistic update to the environment. The mutation can be reverted
     * by calling `dispose()` on the returned value.
     */
    applyUpdate(updater: StoreUpdater): Disposable,

    /**
     * Determine if the selector can be resolved with data in the store (i.e. no
     * fields are missing).
     *
     * Note that this operation effectively "executes" the selector against the
     * cache and therefore takes time proportional to the size/complexity of the
     * selector.
     */
    check(selector: Selector): boolean,

    /**
     * Commit an updater to the environment. This mutation cannot be reverted and
     * should therefore not be used for optimistic updates. This is mainly
     * intended for updating fields from client schema extensions.
     */
    commitUpdate(updater: StoreUpdater): void,

    /**
     * Get the environment's internal Store.
     */
    getStore(): Store,

    /**
     * Send a mutation to the server. If provided, the optimistic updater is
     * executed immediately and reverted atomically when the server payload is
     * committed.
     */
    sendMutation(config: {|
      onCompleted?: ?(errors: ?Array<PayloadError>) => void,
      onError?: ?(error: Error) => void,
      operation: OperationSelector,
      optimisticResponse?: ?() => Object,
      optimisticUpdater?: ?SelectorStoreUpdater,
      updater?: ?SelectorStoreUpdater,
      uploadables?: UploadableMap,
    |}): Disposable,

    /**
     * Send a (GraphQL) subscription to the server. Whenever there is a push from
     * the server, commit the update to the environment.
     */
    sendSubscription(config: {|
      onCompleted?: ?(errors: ?Array<PayloadError>) => void,
      onNext?: ?(payload: RelayResponsePayload) => void,
      onError?: ?(error: Error) => void,
      operation: OperationSelector,
      updater?: ?SelectorStoreUpdater,
    |}): Disposable,
  }

  declare export type Observer<T> = {
    onCompleted?: ?() => void,
    onError?: ?(error: Error) => void,
    onNext?: ?(data: T) => void,
  };

  /**
   * The results of reading data for a fragment. This is similar to a `Selector`,
   * but references the (fragment) node by name rather than by value.
   */
  declare export type FragmentPointer = {
    __id: DataID,
    __fragments: { [fragmentName: string]: Variables },
  };

  /**
   * A callback for resolving a Selector from a source.
   */
  declare export type AsyncLoadCallback = (loadingState: LoadingState) => void;
  declare export type LoadingState = $Exact<{
    status: 'aborted' | 'complete' | 'error' | 'missing',
    error?: Error,
  }>;

  /**
   * A map of records affected by an update operation.
   */
  declare export type UpdatedRecords = { [dataID: DataID]: boolean };

  /**
   * A function that updates a store (via a proxy) given the results of a "handle"
   * field payload.
   */
  declare export type Handler = {
    update: (store: RecordSourceProxy, fieldPayload: HandleFieldPayload) => void,
  };

  /**
   * A payload that is used to initialize or update a "handle" field with
   * information from the server.
   */
  declare export type HandleFieldPayload = $Exact<{
    // The arguments that were fetched.
    args: Variables,
    // The __id of the record containing the source/handle field.
    dataID: DataID,
    // The (storage) key at which the original server data was written.
    fieldKey: string,
    // The name of the handle.
    handle: string,
    // The (storage) key at which the handle's data should be written by the
    // handler.
    handleKey: string,
  }>;

  /**
   * A function that receives a proxy over the store and may trigger side-effects
   * (indirectly) by calling `set*` methods on the store or its record proxies.
   */
  declare export type StoreUpdater = (store: RecordSourceProxy) => void;

  /**
   * Similar to StoreUpdater, but accepts a proxy tied to a specific selector in
   * order to easily access the root fields of a query/mutation.
   */
  declare export type SelectorStoreUpdater = (store: RecordSourceSelectorProxy) => void;

  declare export function commitMutation(
    environment: Environment,
    config: MutationConfig,
  ): Disposable;

  declare export class QueryRenderer extends React$Component {
    props: {
      cacheConfig?: ?CacheConfig,
      environment: Environment | ClassicEnvironment,
      query: ?GraphQLTaggedNode,
      render: (readyState: ReadyState, prevState: ?ReadyState) => ?React$Element<*>,
      variables: Variables,
    },
  }

  declare type RefetchOptions = {
    force?: boolean, // Refetch even if already fetched this query and variables.
  };

  declare export type RelayRefetchContext = {
    refetch: (
      refetchVariables: Variables | ((fragmentVariables: Variables) => Variables),
      renderVariables: ?Variables,
      callback: ?(error: ?Error) => void,
      options?: RefetchOptions,
    ) => Disposable,
  };
}

declare module 'react-relay/compat' {
  declare module.exports: any;
}
