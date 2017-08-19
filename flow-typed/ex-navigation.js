/* @flow */
declare module '@expo/ex-navigation' {
  import type { EventEmitter } from 'fbemitter';

  declare class NavigationContext {
    push: () => void,
    pop: () => void,
    popToTop: () => void,
    replace: () => void,
    showLocalAlert: (message: string, options: mixed) => void,
  }

  declare type ExNavigatorContext = NavigationContext;

  declare class NavigatorContext {}

  declare type ExNavigationContext = {
    getNavigator: (navigationUID: string) => NavigatorContext,
  };

  declare type ExNavigationRoute = {
    getEventEmitter: () => EventEmitter,
  };

  declare class ExNavigationRouter<RC: RouteCreator> {
    constructor(routesCreator: Function, options: Object): ExNavigationRouter<RC>,
    getRoute(routeName: $Keys<RC>, routeParams: Object): ExNavigationRoute,
  }

  declare class NavigationProvider extends React$Component {
    router: ExNavigationRouter<*>,
    context?: ExNavigationContext,
    children?: any,
  }

  declare type FunctionComponent<P> = (props: P) => ?React$Element<any>;
  declare type ClassComponent<D, P, S> = Class<React$Component<D, P, S>>;
  declare type Component<P> = FunctionComponent<P> | ClassComponent<any, P, any>;

  declare type ExNavProps = {
    navigation: NavigationContext,
    navigator: ExNavigatorContext,
  };

  declare type WithNavigationOptions = {
    withRef: boolean,
  };

  // withNavigation should add navigator and navigation as defaultprops for WrappedComponent
  declare function withNavigation<DefaultProps, Props, State>(
    WrappedComponent: ClassComponent<DefaultProps, Props, State>,
    options?: WithNavigationOptions,
  ): ClassComponent<DefaultProps, $Diff<Props, ExNavProps>, State>;

  declare type ExNavigationStyles = {
    applyAnimation: ?(position: Animated.Value, navigationState: Object) => void,
    configureTransition: ?(
      a: NavigationTransitionProps,
      b: ?NavigationTransitionProps,
    ) => NavigationTransitionSpec,
    sceneAnimations: ?(props: NavigationSceneRendererProps) => Object,
    navigationBarAnimations: ?(props: NavigationSceneRendererProps) => Object,
    gestures: ?(props: NavigationSceneRendererProps) => Object,
  };

  declare type ExNavigationBarConfig = {
    visible?: boolean,
    styles?: ExNavigationStyles,
    title?: string | Function,
    titleStyle?: Object | number,
    tintColor?: string,
    backgroundColor?: string | Function,
    borderBottomWidth?: number,
    elevation?: number,
    borderBottomColor?: string,
    height?: number,
    translucent?: boolean,
    translucentTint?: 'dark' | 'default' | 'light',
    renderLeft?: (
      state: ExNavigationState,
      props: NavigationSceneRendererProps,
    ) => ?React.Element<{}>,
    renderTitle?: (
      state: ExNavigationState,
      props: NavigationSceneRendererProps,
    ) => ?React.Element<{}>,
    renderRight?: (
      state: ExNavigationState,
      props: NavigationSceneRendererProps,
    ) => ?React.Element<{}>,
    renderBackground?: (
      state: ExNavigationState,
      props: NavigationSceneRendererProps,
    ) => ?React.Element<{}>,
  };

  declare type ExNavigationConfig = {
    styles?: ExNavigationStyles,
    transitionOptions?: {
      transitionGroup: string,
    },
    navigationBar?: ExNavigationBarConfig,
    eventEmitter?: EventEmitter,
  };

  declare type ExNavigationRouteDefinition =
    | ReactClass<any>
    | ((state: ExNavigationState) => ReactClass<any>)
    | {
        render: (state: ExNavigationState) => ReactElement<any>,
        config?: (routeConfig: ExNavigationConfig, routeParams: Object) => ExNavigationConfig,
      };

  declare type RouteCreator = {
    [key: string]: () => ExNavigationRouteDefinition,
  };

  declare function createRouter<RC: RouteCreator>(
    routesCreator: () => RC,
    options?: Object,
  ): ExNavigationRouter<RC>;

  declare type Reducer = (state: any, action: any) => Object;

  declare type ExNavigatorState = {
    routes: any,
    index: number,
    key: string,
    type: string,
  };

  declare type ExNavigationState = {
    currentNavigatorUID: string,
    navigators: {
      [navigatorUID: string]: ExNavigatorState,
    },
  };

  declare type ExNavigationStore = {
    __exNavigationStateKey: string,
    getState(): ?ExNavigationState,
    dispatch(action: mixed): any,
    subscribe(listener: () => void): () => void,
  };

  declare type StoreCreator = (
    reducer: Reducer,
    initialState: ?Object,
    enhancer?: Function,
  ) => ExNavigationStore;

  declare type NavigationEnabledStoreOptions = {
    createStore?: StoreCreator,
    navigationStateKey?: string,
  };
  //declare function createNavigationEnabledStore(options: NavigationEnabledStoreOptions): StoreCreator;

  declare function NavigationReducer(state: any, action: any): any;
}