declare global {
  /**
   * ⚠️ FSD
   *
   * Its hack way to export redux infering types from @/app
   * and use it in @shared/model/hooks.ts
   */

  declare type RootState = import('../src/app/redux/store').RootState;
  declare type AppDispatch = import('../src/app/redux/store').AppDispatch;
}

export {};
