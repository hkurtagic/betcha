
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserToken
 * 
 */
export type UserToken = $Result.DefaultSelection<Prisma.$UserTokenPayload>
/**
 * Model Bet
 * 
 */
export type Bet = $Result.DefaultSelection<Prisma.$BetPayload>
/**
 * Model Choice
 * 
 */
export type Choice = $Result.DefaultSelection<Prisma.$ChoicePayload>
/**
 * Model BetStake
 * 
 */
export type BetStake = $Result.DefaultSelection<Prisma.$BetStakePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Groups
 * const groups = await prisma.group.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Groups
   * const groups = await prisma.group.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userToken`: Exposes CRUD operations for the **UserToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTokens
    * const userTokens = await prisma.userToken.findMany()
    * ```
    */
  get userToken(): Prisma.UserTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bet`: Exposes CRUD operations for the **Bet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bets
    * const bets = await prisma.bet.findMany()
    * ```
    */
  get bet(): Prisma.BetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.choice`: Exposes CRUD operations for the **Choice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Choices
    * const choices = await prisma.choice.findMany()
    * ```
    */
  get choice(): Prisma.ChoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.betStake`: Exposes CRUD operations for the **BetStake** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BetStakes
    * const betStakes = await prisma.betStake.findMany()
    * ```
    */
  get betStake(): Prisma.BetStakeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Group: 'Group',
    User: 'User',
    UserToken: 'UserToken',
    Bet: 'Bet',
    Choice: 'Choice',
    BetStake: 'BetStake'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "group" | "user" | "userToken" | "bet" | "choice" | "betStake"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserToken: {
        payload: Prisma.$UserTokenPayload<ExtArgs>
        fields: Prisma.UserTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          findFirst: {
            args: Prisma.UserTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          findMany: {
            args: Prisma.UserTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>[]
          }
          create: {
            args: Prisma.UserTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          createMany: {
            args: Prisma.UserTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>[]
          }
          delete: {
            args: Prisma.UserTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          update: {
            args: Prisma.UserTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          deleteMany: {
            args: Prisma.UserTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>[]
          }
          upsert: {
            args: Prisma.UserTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          aggregate: {
            args: Prisma.UserTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserToken>
          }
          groupBy: {
            args: Prisma.UserTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTokenCountArgs<ExtArgs>
            result: $Utils.Optional<UserTokenCountAggregateOutputType> | number
          }
        }
      }
      Bet: {
        payload: Prisma.$BetPayload<ExtArgs>
        fields: Prisma.BetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          findFirst: {
            args: Prisma.BetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          findMany: {
            args: Prisma.BetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>[]
          }
          create: {
            args: Prisma.BetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          createMany: {
            args: Prisma.BetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>[]
          }
          delete: {
            args: Prisma.BetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          update: {
            args: Prisma.BetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          deleteMany: {
            args: Prisma.BetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>[]
          }
          upsert: {
            args: Prisma.BetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          aggregate: {
            args: Prisma.BetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBet>
          }
          groupBy: {
            args: Prisma.BetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BetGroupByOutputType>[]
          }
          count: {
            args: Prisma.BetCountArgs<ExtArgs>
            result: $Utils.Optional<BetCountAggregateOutputType> | number
          }
        }
      }
      Choice: {
        payload: Prisma.$ChoicePayload<ExtArgs>
        fields: Prisma.ChoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          findFirst: {
            args: Prisma.ChoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          findMany: {
            args: Prisma.ChoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>[]
          }
          create: {
            args: Prisma.ChoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          createMany: {
            args: Prisma.ChoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>[]
          }
          delete: {
            args: Prisma.ChoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          update: {
            args: Prisma.ChoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          deleteMany: {
            args: Prisma.ChoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>[]
          }
          upsert: {
            args: Prisma.ChoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          aggregate: {
            args: Prisma.ChoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChoice>
          }
          groupBy: {
            args: Prisma.ChoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChoiceCountArgs<ExtArgs>
            result: $Utils.Optional<ChoiceCountAggregateOutputType> | number
          }
        }
      }
      BetStake: {
        payload: Prisma.$BetStakePayload<ExtArgs>
        fields: Prisma.BetStakeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BetStakeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetStakePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BetStakeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetStakePayload>
          }
          findFirst: {
            args: Prisma.BetStakeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetStakePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BetStakeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetStakePayload>
          }
          findMany: {
            args: Prisma.BetStakeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetStakePayload>[]
          }
          create: {
            args: Prisma.BetStakeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetStakePayload>
          }
          createMany: {
            args: Prisma.BetStakeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BetStakeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetStakePayload>[]
          }
          delete: {
            args: Prisma.BetStakeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetStakePayload>
          }
          update: {
            args: Prisma.BetStakeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetStakePayload>
          }
          deleteMany: {
            args: Prisma.BetStakeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BetStakeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BetStakeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetStakePayload>[]
          }
          upsert: {
            args: Prisma.BetStakeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetStakePayload>
          }
          aggregate: {
            args: Prisma.BetStakeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBetStake>
          }
          groupBy: {
            args: Prisma.BetStakeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BetStakeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BetStakeCountArgs<ExtArgs>
            result: $Utils.Optional<BetStakeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    group?: GroupOmit
    user?: UserOmit
    userToken?: UserTokenOmit
    bet?: BetOmit
    choice?: ChoiceOmit
    betStake?: BetStakeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    User: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | GroupCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    UserToken: number
    Bet: number
    BetStake: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserToken?: boolean | UserCountOutputTypeCountUserTokenArgs
    Bet?: boolean | UserCountOutputTypeCountBetArgs
    BetStake?: boolean | UserCountOutputTypeCountBetStakeArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBetStakeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetStakeWhereInput
  }


  /**
   * Count Type BetCountOutputType
   */

  export type BetCountOutputType = {
    choices: number
    BetStake: number
  }

  export type BetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    choices?: boolean | BetCountOutputTypeCountChoicesArgs
    BetStake?: boolean | BetCountOutputTypeCountBetStakeArgs
  }

  // Custom InputTypes
  /**
   * BetCountOutputType without action
   */
  export type BetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetCountOutputType
     */
    select?: BetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BetCountOutputType without action
   */
  export type BetCountOutputTypeCountChoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoiceWhereInput
  }

  /**
   * BetCountOutputType without action
   */
  export type BetCountOutputTypeCountBetStakeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetStakeWhereInput
  }


  /**
   * Count Type ChoiceCountOutputType
   */

  export type ChoiceCountOutputType = {
    BetStake: number
  }

  export type ChoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BetStake?: boolean | ChoiceCountOutputTypeCountBetStakeArgs
  }

  // Custom InputTypes
  /**
   * ChoiceCountOutputType without action
   */
  export type ChoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoiceCountOutputType
     */
    select?: ChoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChoiceCountOutputType without action
   */
  export type ChoiceCountOutputTypeCountBetStakeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetStakeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    pin: string | null
    isActive: boolean | null
  }

  export type GroupMaxAggregateOutputType = {
    pin: string | null
    isActive: boolean | null
  }

  export type GroupCountAggregateOutputType = {
    pin: number
    isActive: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    pin?: true
    isActive?: true
  }

  export type GroupMaxAggregateInputType = {
    pin?: true
    isActive?: true
  }

  export type GroupCountAggregateInputType = {
    pin?: true
    isActive?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    pin: string
    isActive: boolean
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pin?: boolean
    isActive?: boolean
    User?: boolean | Group$UserArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pin?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pin?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    pin?: boolean
    isActive?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pin" | "isActive", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Group$UserArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pin: string
      isActive: boolean
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `pin`
     * const groupWithPinOnly = await prisma.group.findMany({ select: { pin: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `pin`
     * const groupWithPinOnly = await prisma.group.createManyAndReturn({
     *   select: { pin: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `pin`
     * const groupWithPinOnly = await prisma.group.updateManyAndReturn({
     *   select: { pin: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Group$UserArgs<ExtArgs> = {}>(args?: Subset<T, Group$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly pin: FieldRef<"Group", 'String'>
    readonly isActive: FieldRef<"Group", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data?: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.User
   */
  export type Group$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    user_id: string | null
    name: string | null
    groupPin: string | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: string | null
    name: string | null
    groupPin: string | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    name: number
    groupPin: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    user_id?: true
    name?: true
    groupPin?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    name?: true
    groupPin?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    name?: true
    groupPin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: string
    name: string
    groupPin: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    groupPin?: boolean
    group?: boolean | User$groupArgs<ExtArgs>
    UserToken?: boolean | User$UserTokenArgs<ExtArgs>
    Bet?: boolean | User$BetArgs<ExtArgs>
    BetStake?: boolean | User$BetStakeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    groupPin?: boolean
    group?: boolean | User$groupArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    groupPin?: boolean
    group?: boolean | User$groupArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    name?: boolean
    groupPin?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "name" | "groupPin", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | User$groupArgs<ExtArgs>
    UserToken?: boolean | User$UserTokenArgs<ExtArgs>
    Bet?: boolean | User$BetArgs<ExtArgs>
    BetStake?: boolean | User$BetStakeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | User$groupArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | User$groupArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs> | null
      UserToken: Prisma.$UserTokenPayload<ExtArgs>[]
      Bet: Prisma.$BetPayload<ExtArgs>[]
      BetStake: Prisma.$BetStakePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      name: string
      groupPin: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends User$groupArgs<ExtArgs> = {}>(args?: Subset<T, User$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    UserToken<T extends User$UserTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$UserTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Bet<T extends User$BetArgs<ExtArgs> = {}>(args?: Subset<T, User$BetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    BetStake<T extends User$BetStakeArgs<ExtArgs> = {}>(args?: Subset<T, User$BetStakeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetStakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly groupPin: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.group
   */
  export type User$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * User.UserToken
   */
  export type User$UserTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    where?: UserTokenWhereInput
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    cursor?: UserTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTokenScalarFieldEnum | UserTokenScalarFieldEnum[]
  }

  /**
   * User.Bet
   */
  export type User$BetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    where?: BetWhereInput
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    cursor?: BetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * User.BetStake
   */
  export type User$BetStakeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetStake
     */
    select?: BetStakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetStake
     */
    omit?: BetStakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetStakeInclude<ExtArgs> | null
    where?: BetStakeWhereInput
    orderBy?: BetStakeOrderByWithRelationInput | BetStakeOrderByWithRelationInput[]
    cursor?: BetStakeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BetStakeScalarFieldEnum | BetStakeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserToken
   */

  export type AggregateUserToken = {
    _count: UserTokenCountAggregateOutputType | null
    _min: UserTokenMinAggregateOutputType | null
    _max: UserTokenMaxAggregateOutputType | null
  }

  export type UserTokenMinAggregateOutputType = {
    user_id: string | null
    token: string | null
  }

  export type UserTokenMaxAggregateOutputType = {
    user_id: string | null
    token: string | null
  }

  export type UserTokenCountAggregateOutputType = {
    user_id: number
    token: number
    _all: number
  }


  export type UserTokenMinAggregateInputType = {
    user_id?: true
    token?: true
  }

  export type UserTokenMaxAggregateInputType = {
    user_id?: true
    token?: true
  }

  export type UserTokenCountAggregateInputType = {
    user_id?: true
    token?: true
    _all?: true
  }

  export type UserTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserToken to aggregate.
     */
    where?: UserTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTokens to fetch.
     */
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTokens
    **/
    _count?: true | UserTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTokenMaxAggregateInputType
  }

  export type GetUserTokenAggregateType<T extends UserTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateUserToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserToken[P]>
      : GetScalarType<T[P], AggregateUserToken[P]>
  }




  export type UserTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTokenWhereInput
    orderBy?: UserTokenOrderByWithAggregationInput | UserTokenOrderByWithAggregationInput[]
    by: UserTokenScalarFieldEnum[] | UserTokenScalarFieldEnum
    having?: UserTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTokenCountAggregateInputType | true
    _min?: UserTokenMinAggregateInputType
    _max?: UserTokenMaxAggregateInputType
  }

  export type UserTokenGroupByOutputType = {
    user_id: string
    token: string
    _count: UserTokenCountAggregateOutputType | null
    _min: UserTokenMinAggregateOutputType | null
    _max: UserTokenMaxAggregateOutputType | null
  }

  type GetUserTokenGroupByPayload<T extends UserTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTokenGroupByOutputType[P]>
            : GetScalarType<T[P], UserTokenGroupByOutputType[P]>
        }
      >
    >


  export type UserTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    token?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userToken"]>

  export type UserTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    token?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userToken"]>

  export type UserTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    token?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userToken"]>

  export type UserTokenSelectScalar = {
    user_id?: boolean
    token?: boolean
  }

  export type UserTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "token", ExtArgs["result"]["userToken"]>
  export type UserTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserToken"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      token: string
    }, ExtArgs["result"]["userToken"]>
    composites: {}
  }

  type UserTokenGetPayload<S extends boolean | null | undefined | UserTokenDefaultArgs> = $Result.GetResult<Prisma.$UserTokenPayload, S>

  type UserTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTokenCountAggregateInputType | true
    }

  export interface UserTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserToken'], meta: { name: 'UserToken' } }
    /**
     * Find zero or one UserToken that matches the filter.
     * @param {UserTokenFindUniqueArgs} args - Arguments to find a UserToken
     * @example
     * // Get one UserToken
     * const userToken = await prisma.userToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTokenFindUniqueArgs>(args: SelectSubset<T, UserTokenFindUniqueArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTokenFindUniqueOrThrowArgs} args - Arguments to find a UserToken
     * @example
     * // Get one UserToken
     * const userToken = await prisma.userToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenFindFirstArgs} args - Arguments to find a UserToken
     * @example
     * // Get one UserToken
     * const userToken = await prisma.userToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTokenFindFirstArgs>(args?: SelectSubset<T, UserTokenFindFirstArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenFindFirstOrThrowArgs} args - Arguments to find a UserToken
     * @example
     * // Get one UserToken
     * const userToken = await prisma.userToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTokens
     * const userTokens = await prisma.userToken.findMany()
     * 
     * // Get first 10 UserTokens
     * const userTokens = await prisma.userToken.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userTokenWithUser_idOnly = await prisma.userToken.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserTokenFindManyArgs>(args?: SelectSubset<T, UserTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserToken.
     * @param {UserTokenCreateArgs} args - Arguments to create a UserToken.
     * @example
     * // Create one UserToken
     * const UserToken = await prisma.userToken.create({
     *   data: {
     *     // ... data to create a UserToken
     *   }
     * })
     * 
     */
    create<T extends UserTokenCreateArgs>(args: SelectSubset<T, UserTokenCreateArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTokens.
     * @param {UserTokenCreateManyArgs} args - Arguments to create many UserTokens.
     * @example
     * // Create many UserTokens
     * const userToken = await prisma.userToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTokenCreateManyArgs>(args?: SelectSubset<T, UserTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTokens and returns the data saved in the database.
     * @param {UserTokenCreateManyAndReturnArgs} args - Arguments to create many UserTokens.
     * @example
     * // Create many UserTokens
     * const userToken = await prisma.userToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTokens and only return the `user_id`
     * const userTokenWithUser_idOnly = await prisma.userToken.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, UserTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserToken.
     * @param {UserTokenDeleteArgs} args - Arguments to delete one UserToken.
     * @example
     * // Delete one UserToken
     * const UserToken = await prisma.userToken.delete({
     *   where: {
     *     // ... filter to delete one UserToken
     *   }
     * })
     * 
     */
    delete<T extends UserTokenDeleteArgs>(args: SelectSubset<T, UserTokenDeleteArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserToken.
     * @param {UserTokenUpdateArgs} args - Arguments to update one UserToken.
     * @example
     * // Update one UserToken
     * const userToken = await prisma.userToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTokenUpdateArgs>(args: SelectSubset<T, UserTokenUpdateArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTokens.
     * @param {UserTokenDeleteManyArgs} args - Arguments to filter UserTokens to delete.
     * @example
     * // Delete a few UserTokens
     * const { count } = await prisma.userToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTokenDeleteManyArgs>(args?: SelectSubset<T, UserTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTokens
     * const userToken = await prisma.userToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTokenUpdateManyArgs>(args: SelectSubset<T, UserTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTokens and returns the data updated in the database.
     * @param {UserTokenUpdateManyAndReturnArgs} args - Arguments to update many UserTokens.
     * @example
     * // Update many UserTokens
     * const userToken = await prisma.userToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTokens and only return the `user_id`
     * const userTokenWithUser_idOnly = await prisma.userToken.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, UserTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserToken.
     * @param {UserTokenUpsertArgs} args - Arguments to update or create a UserToken.
     * @example
     * // Update or create a UserToken
     * const userToken = await prisma.userToken.upsert({
     *   create: {
     *     // ... data to create a UserToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserToken we want to update
     *   }
     * })
     */
    upsert<T extends UserTokenUpsertArgs>(args: SelectSubset<T, UserTokenUpsertArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenCountArgs} args - Arguments to filter UserTokens to count.
     * @example
     * // Count the number of UserTokens
     * const count = await prisma.userToken.count({
     *   where: {
     *     // ... the filter for the UserTokens we want to count
     *   }
     * })
    **/
    count<T extends UserTokenCountArgs>(
      args?: Subset<T, UserTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserTokenAggregateArgs>(args: Subset<T, UserTokenAggregateArgs>): Prisma.PrismaPromise<GetUserTokenAggregateType<T>>

    /**
     * Group by UserToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTokenGroupByArgs['orderBy'] }
        : { orderBy?: UserTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserToken model
   */
  readonly fields: UserTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserToken model
   */
  interface UserTokenFieldRefs {
    readonly user_id: FieldRef<"UserToken", 'String'>
    readonly token: FieldRef<"UserToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserToken findUnique
   */
  export type UserTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserToken to fetch.
     */
    where: UserTokenWhereUniqueInput
  }

  /**
   * UserToken findUniqueOrThrow
   */
  export type UserTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserToken to fetch.
     */
    where: UserTokenWhereUniqueInput
  }

  /**
   * UserToken findFirst
   */
  export type UserTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserToken to fetch.
     */
    where?: UserTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTokens to fetch.
     */
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTokens.
     */
    cursor?: UserTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTokens.
     */
    distinct?: UserTokenScalarFieldEnum | UserTokenScalarFieldEnum[]
  }

  /**
   * UserToken findFirstOrThrow
   */
  export type UserTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserToken to fetch.
     */
    where?: UserTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTokens to fetch.
     */
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTokens.
     */
    cursor?: UserTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTokens.
     */
    distinct?: UserTokenScalarFieldEnum | UserTokenScalarFieldEnum[]
  }

  /**
   * UserToken findMany
   */
  export type UserTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserTokens to fetch.
     */
    where?: UserTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTokens to fetch.
     */
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTokens.
     */
    cursor?: UserTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTokens.
     */
    skip?: number
    distinct?: UserTokenScalarFieldEnum | UserTokenScalarFieldEnum[]
  }

  /**
   * UserToken create
   */
  export type UserTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a UserToken.
     */
    data: XOR<UserTokenCreateInput, UserTokenUncheckedCreateInput>
  }

  /**
   * UserToken createMany
   */
  export type UserTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTokens.
     */
    data: UserTokenCreateManyInput | UserTokenCreateManyInput[]
  }

  /**
   * UserToken createManyAndReturn
   */
  export type UserTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * The data used to create many UserTokens.
     */
    data: UserTokenCreateManyInput | UserTokenCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserToken update
   */
  export type UserTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a UserToken.
     */
    data: XOR<UserTokenUpdateInput, UserTokenUncheckedUpdateInput>
    /**
     * Choose, which UserToken to update.
     */
    where: UserTokenWhereUniqueInput
  }

  /**
   * UserToken updateMany
   */
  export type UserTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTokens.
     */
    data: XOR<UserTokenUpdateManyMutationInput, UserTokenUncheckedUpdateManyInput>
    /**
     * Filter which UserTokens to update
     */
    where?: UserTokenWhereInput
    /**
     * Limit how many UserTokens to update.
     */
    limit?: number
  }

  /**
   * UserToken updateManyAndReturn
   */
  export type UserTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * The data used to update UserTokens.
     */
    data: XOR<UserTokenUpdateManyMutationInput, UserTokenUncheckedUpdateManyInput>
    /**
     * Filter which UserTokens to update
     */
    where?: UserTokenWhereInput
    /**
     * Limit how many UserTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserToken upsert
   */
  export type UserTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the UserToken to update in case it exists.
     */
    where: UserTokenWhereUniqueInput
    /**
     * In case the UserToken found by the `where` argument doesn't exist, create a new UserToken with this data.
     */
    create: XOR<UserTokenCreateInput, UserTokenUncheckedCreateInput>
    /**
     * In case the UserToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTokenUpdateInput, UserTokenUncheckedUpdateInput>
  }

  /**
   * UserToken delete
   */
  export type UserTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter which UserToken to delete.
     */
    where: UserTokenWhereUniqueInput
  }

  /**
   * UserToken deleteMany
   */
  export type UserTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTokens to delete
     */
    where?: UserTokenWhereInput
    /**
     * Limit how many UserTokens to delete.
     */
    limit?: number
  }

  /**
   * UserToken without action
   */
  export type UserTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
  }


  /**
   * Model Bet
   */

  export type AggregateBet = {
    _count: BetCountAggregateOutputType | null
    _min: BetMinAggregateOutputType | null
    _max: BetMaxAggregateOutputType | null
  }

  export type BetMinAggregateOutputType = {
    bet_id: string | null
    name: string | null
    isClosed: boolean | null
    userUser_id: string | null
  }

  export type BetMaxAggregateOutputType = {
    bet_id: string | null
    name: string | null
    isClosed: boolean | null
    userUser_id: string | null
  }

  export type BetCountAggregateOutputType = {
    bet_id: number
    name: number
    isClosed: number
    userUser_id: number
    _all: number
  }


  export type BetMinAggregateInputType = {
    bet_id?: true
    name?: true
    isClosed?: true
    userUser_id?: true
  }

  export type BetMaxAggregateInputType = {
    bet_id?: true
    name?: true
    isClosed?: true
    userUser_id?: true
  }

  export type BetCountAggregateInputType = {
    bet_id?: true
    name?: true
    isClosed?: true
    userUser_id?: true
    _all?: true
  }

  export type BetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bet to aggregate.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bets
    **/
    _count?: true | BetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BetMaxAggregateInputType
  }

  export type GetBetAggregateType<T extends BetAggregateArgs> = {
        [P in keyof T & keyof AggregateBet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBet[P]>
      : GetScalarType<T[P], AggregateBet[P]>
  }




  export type BetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetWhereInput
    orderBy?: BetOrderByWithAggregationInput | BetOrderByWithAggregationInput[]
    by: BetScalarFieldEnum[] | BetScalarFieldEnum
    having?: BetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BetCountAggregateInputType | true
    _min?: BetMinAggregateInputType
    _max?: BetMaxAggregateInputType
  }

  export type BetGroupByOutputType = {
    bet_id: string
    name: string
    isClosed: boolean
    userUser_id: string
    _count: BetCountAggregateOutputType | null
    _min: BetMinAggregateOutputType | null
    _max: BetMaxAggregateOutputType | null
  }

  type GetBetGroupByPayload<T extends BetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BetGroupByOutputType[P]>
            : GetScalarType<T[P], BetGroupByOutputType[P]>
        }
      >
    >


  export type BetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bet_id?: boolean
    name?: boolean
    isClosed?: boolean
    userUser_id?: boolean
    openedBy?: boolean | UserDefaultArgs<ExtArgs>
    choices?: boolean | Bet$choicesArgs<ExtArgs>
    BetStake?: boolean | Bet$BetStakeArgs<ExtArgs>
    _count?: boolean | BetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bet"]>

  export type BetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bet_id?: boolean
    name?: boolean
    isClosed?: boolean
    userUser_id?: boolean
    openedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bet"]>

  export type BetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bet_id?: boolean
    name?: boolean
    isClosed?: boolean
    userUser_id?: boolean
    openedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bet"]>

  export type BetSelectScalar = {
    bet_id?: boolean
    name?: boolean
    isClosed?: boolean
    userUser_id?: boolean
  }

  export type BetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bet_id" | "name" | "isClosed" | "userUser_id", ExtArgs["result"]["bet"]>
  export type BetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    openedBy?: boolean | UserDefaultArgs<ExtArgs>
    choices?: boolean | Bet$choicesArgs<ExtArgs>
    BetStake?: boolean | Bet$BetStakeArgs<ExtArgs>
    _count?: boolean | BetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    openedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    openedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bet"
    objects: {
      openedBy: Prisma.$UserPayload<ExtArgs>
      choices: Prisma.$ChoicePayload<ExtArgs>[]
      BetStake: Prisma.$BetStakePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      bet_id: string
      name: string
      isClosed: boolean
      userUser_id: string
    }, ExtArgs["result"]["bet"]>
    composites: {}
  }

  type BetGetPayload<S extends boolean | null | undefined | BetDefaultArgs> = $Result.GetResult<Prisma.$BetPayload, S>

  type BetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BetCountAggregateInputType | true
    }

  export interface BetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bet'], meta: { name: 'Bet' } }
    /**
     * Find zero or one Bet that matches the filter.
     * @param {BetFindUniqueArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BetFindUniqueArgs>(args: SelectSubset<T, BetFindUniqueArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BetFindUniqueOrThrowArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BetFindUniqueOrThrowArgs>(args: SelectSubset<T, BetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindFirstArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BetFindFirstArgs>(args?: SelectSubset<T, BetFindFirstArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindFirstOrThrowArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BetFindFirstOrThrowArgs>(args?: SelectSubset<T, BetFindFirstOrThrowArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bets
     * const bets = await prisma.bet.findMany()
     * 
     * // Get first 10 Bets
     * const bets = await prisma.bet.findMany({ take: 10 })
     * 
     * // Only select the `bet_id`
     * const betWithBet_idOnly = await prisma.bet.findMany({ select: { bet_id: true } })
     * 
     */
    findMany<T extends BetFindManyArgs>(args?: SelectSubset<T, BetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bet.
     * @param {BetCreateArgs} args - Arguments to create a Bet.
     * @example
     * // Create one Bet
     * const Bet = await prisma.bet.create({
     *   data: {
     *     // ... data to create a Bet
     *   }
     * })
     * 
     */
    create<T extends BetCreateArgs>(args: SelectSubset<T, BetCreateArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bets.
     * @param {BetCreateManyArgs} args - Arguments to create many Bets.
     * @example
     * // Create many Bets
     * const bet = await prisma.bet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BetCreateManyArgs>(args?: SelectSubset<T, BetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bets and returns the data saved in the database.
     * @param {BetCreateManyAndReturnArgs} args - Arguments to create many Bets.
     * @example
     * // Create many Bets
     * const bet = await prisma.bet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bets and only return the `bet_id`
     * const betWithBet_idOnly = await prisma.bet.createManyAndReturn({
     *   select: { bet_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BetCreateManyAndReturnArgs>(args?: SelectSubset<T, BetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bet.
     * @param {BetDeleteArgs} args - Arguments to delete one Bet.
     * @example
     * // Delete one Bet
     * const Bet = await prisma.bet.delete({
     *   where: {
     *     // ... filter to delete one Bet
     *   }
     * })
     * 
     */
    delete<T extends BetDeleteArgs>(args: SelectSubset<T, BetDeleteArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bet.
     * @param {BetUpdateArgs} args - Arguments to update one Bet.
     * @example
     * // Update one Bet
     * const bet = await prisma.bet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BetUpdateArgs>(args: SelectSubset<T, BetUpdateArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bets.
     * @param {BetDeleteManyArgs} args - Arguments to filter Bets to delete.
     * @example
     * // Delete a few Bets
     * const { count } = await prisma.bet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BetDeleteManyArgs>(args?: SelectSubset<T, BetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bets
     * const bet = await prisma.bet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BetUpdateManyArgs>(args: SelectSubset<T, BetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bets and returns the data updated in the database.
     * @param {BetUpdateManyAndReturnArgs} args - Arguments to update many Bets.
     * @example
     * // Update many Bets
     * const bet = await prisma.bet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bets and only return the `bet_id`
     * const betWithBet_idOnly = await prisma.bet.updateManyAndReturn({
     *   select: { bet_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BetUpdateManyAndReturnArgs>(args: SelectSubset<T, BetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bet.
     * @param {BetUpsertArgs} args - Arguments to update or create a Bet.
     * @example
     * // Update or create a Bet
     * const bet = await prisma.bet.upsert({
     *   create: {
     *     // ... data to create a Bet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bet we want to update
     *   }
     * })
     */
    upsert<T extends BetUpsertArgs>(args: SelectSubset<T, BetUpsertArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetCountArgs} args - Arguments to filter Bets to count.
     * @example
     * // Count the number of Bets
     * const count = await prisma.bet.count({
     *   where: {
     *     // ... the filter for the Bets we want to count
     *   }
     * })
    **/
    count<T extends BetCountArgs>(
      args?: Subset<T, BetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BetAggregateArgs>(args: Subset<T, BetAggregateArgs>): Prisma.PrismaPromise<GetBetAggregateType<T>>

    /**
     * Group by Bet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BetGroupByArgs['orderBy'] }
        : { orderBy?: BetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bet model
   */
  readonly fields: BetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    openedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    choices<T extends Bet$choicesArgs<ExtArgs> = {}>(args?: Subset<T, Bet$choicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    BetStake<T extends Bet$BetStakeArgs<ExtArgs> = {}>(args?: Subset<T, Bet$BetStakeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetStakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bet model
   */
  interface BetFieldRefs {
    readonly bet_id: FieldRef<"Bet", 'String'>
    readonly name: FieldRef<"Bet", 'String'>
    readonly isClosed: FieldRef<"Bet", 'Boolean'>
    readonly userUser_id: FieldRef<"Bet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bet findUnique
   */
  export type BetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet findUniqueOrThrow
   */
  export type BetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet findFirst
   */
  export type BetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bets.
     */
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet findFirstOrThrow
   */
  export type BetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bets.
     */
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet findMany
   */
  export type BetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bets to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet create
   */
  export type BetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * The data needed to create a Bet.
     */
    data: XOR<BetCreateInput, BetUncheckedCreateInput>
  }

  /**
   * Bet createMany
   */
  export type BetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bets.
     */
    data: BetCreateManyInput | BetCreateManyInput[]
  }

  /**
   * Bet createManyAndReturn
   */
  export type BetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * The data used to create many Bets.
     */
    data: BetCreateManyInput | BetCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bet update
   */
  export type BetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * The data needed to update a Bet.
     */
    data: XOR<BetUpdateInput, BetUncheckedUpdateInput>
    /**
     * Choose, which Bet to update.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet updateMany
   */
  export type BetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bets.
     */
    data: XOR<BetUpdateManyMutationInput, BetUncheckedUpdateManyInput>
    /**
     * Filter which Bets to update
     */
    where?: BetWhereInput
    /**
     * Limit how many Bets to update.
     */
    limit?: number
  }

  /**
   * Bet updateManyAndReturn
   */
  export type BetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * The data used to update Bets.
     */
    data: XOR<BetUpdateManyMutationInput, BetUncheckedUpdateManyInput>
    /**
     * Filter which Bets to update
     */
    where?: BetWhereInput
    /**
     * Limit how many Bets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bet upsert
   */
  export type BetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * The filter to search for the Bet to update in case it exists.
     */
    where: BetWhereUniqueInput
    /**
     * In case the Bet found by the `where` argument doesn't exist, create a new Bet with this data.
     */
    create: XOR<BetCreateInput, BetUncheckedCreateInput>
    /**
     * In case the Bet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BetUpdateInput, BetUncheckedUpdateInput>
  }

  /**
   * Bet delete
   */
  export type BetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter which Bet to delete.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet deleteMany
   */
  export type BetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bets to delete
     */
    where?: BetWhereInput
    /**
     * Limit how many Bets to delete.
     */
    limit?: number
  }

  /**
   * Bet.choices
   */
  export type Bet$choicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    where?: ChoiceWhereInput
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    cursor?: ChoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * Bet.BetStake
   */
  export type Bet$BetStakeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetStake
     */
    select?: BetStakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetStake
     */
    omit?: BetStakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetStakeInclude<ExtArgs> | null
    where?: BetStakeWhereInput
    orderBy?: BetStakeOrderByWithRelationInput | BetStakeOrderByWithRelationInput[]
    cursor?: BetStakeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BetStakeScalarFieldEnum | BetStakeScalarFieldEnum[]
  }

  /**
   * Bet without action
   */
  export type BetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
  }


  /**
   * Model Choice
   */

  export type AggregateChoice = {
    _count: ChoiceCountAggregateOutputType | null
    _min: ChoiceMinAggregateOutputType | null
    _max: ChoiceMaxAggregateOutputType | null
  }

  export type ChoiceMinAggregateOutputType = {
    choice_id: string | null
    text: string | null
    winningChoice: boolean | null
    bet_id: string | null
  }

  export type ChoiceMaxAggregateOutputType = {
    choice_id: string | null
    text: string | null
    winningChoice: boolean | null
    bet_id: string | null
  }

  export type ChoiceCountAggregateOutputType = {
    choice_id: number
    text: number
    winningChoice: number
    bet_id: number
    _all: number
  }


  export type ChoiceMinAggregateInputType = {
    choice_id?: true
    text?: true
    winningChoice?: true
    bet_id?: true
  }

  export type ChoiceMaxAggregateInputType = {
    choice_id?: true
    text?: true
    winningChoice?: true
    bet_id?: true
  }

  export type ChoiceCountAggregateInputType = {
    choice_id?: true
    text?: true
    winningChoice?: true
    bet_id?: true
    _all?: true
  }

  export type ChoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Choice to aggregate.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Choices
    **/
    _count?: true | ChoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoiceMaxAggregateInputType
  }

  export type GetChoiceAggregateType<T extends ChoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateChoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChoice[P]>
      : GetScalarType<T[P], AggregateChoice[P]>
  }




  export type ChoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoiceWhereInput
    orderBy?: ChoiceOrderByWithAggregationInput | ChoiceOrderByWithAggregationInput[]
    by: ChoiceScalarFieldEnum[] | ChoiceScalarFieldEnum
    having?: ChoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoiceCountAggregateInputType | true
    _min?: ChoiceMinAggregateInputType
    _max?: ChoiceMaxAggregateInputType
  }

  export type ChoiceGroupByOutputType = {
    choice_id: string
    text: string
    winningChoice: boolean
    bet_id: string
    _count: ChoiceCountAggregateOutputType | null
    _min: ChoiceMinAggregateOutputType | null
    _max: ChoiceMaxAggregateOutputType | null
  }

  type GetChoiceGroupByPayload<T extends ChoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoiceGroupByOutputType[P]>
            : GetScalarType<T[P], ChoiceGroupByOutputType[P]>
        }
      >
    >


  export type ChoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    choice_id?: boolean
    text?: boolean
    winningChoice?: boolean
    bet_id?: boolean
    Bet?: boolean | Choice$BetArgs<ExtArgs>
    BetStake?: boolean | Choice$BetStakeArgs<ExtArgs>
    _count?: boolean | ChoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["choice"]>

  export type ChoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    choice_id?: boolean
    text?: boolean
    winningChoice?: boolean
    bet_id?: boolean
    Bet?: boolean | Choice$BetArgs<ExtArgs>
  }, ExtArgs["result"]["choice"]>

  export type ChoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    choice_id?: boolean
    text?: boolean
    winningChoice?: boolean
    bet_id?: boolean
    Bet?: boolean | Choice$BetArgs<ExtArgs>
  }, ExtArgs["result"]["choice"]>

  export type ChoiceSelectScalar = {
    choice_id?: boolean
    text?: boolean
    winningChoice?: boolean
    bet_id?: boolean
  }

  export type ChoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"choice_id" | "text" | "winningChoice" | "bet_id", ExtArgs["result"]["choice"]>
  export type ChoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bet?: boolean | Choice$BetArgs<ExtArgs>
    BetStake?: boolean | Choice$BetStakeArgs<ExtArgs>
    _count?: boolean | ChoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bet?: boolean | Choice$BetArgs<ExtArgs>
  }
  export type ChoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bet?: boolean | Choice$BetArgs<ExtArgs>
  }

  export type $ChoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Choice"
    objects: {
      Bet: Prisma.$BetPayload<ExtArgs> | null
      BetStake: Prisma.$BetStakePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      choice_id: string
      text: string
      winningChoice: boolean
      bet_id: string
    }, ExtArgs["result"]["choice"]>
    composites: {}
  }

  type ChoiceGetPayload<S extends boolean | null | undefined | ChoiceDefaultArgs> = $Result.GetResult<Prisma.$ChoicePayload, S>

  type ChoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChoiceCountAggregateInputType | true
    }

  export interface ChoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Choice'], meta: { name: 'Choice' } }
    /**
     * Find zero or one Choice that matches the filter.
     * @param {ChoiceFindUniqueArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChoiceFindUniqueArgs>(args: SelectSubset<T, ChoiceFindUniqueArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Choice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChoiceFindUniqueOrThrowArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ChoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Choice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceFindFirstArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChoiceFindFirstArgs>(args?: SelectSubset<T, ChoiceFindFirstArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Choice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceFindFirstOrThrowArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ChoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Choices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Choices
     * const choices = await prisma.choice.findMany()
     * 
     * // Get first 10 Choices
     * const choices = await prisma.choice.findMany({ take: 10 })
     * 
     * // Only select the `choice_id`
     * const choiceWithChoice_idOnly = await prisma.choice.findMany({ select: { choice_id: true } })
     * 
     */
    findMany<T extends ChoiceFindManyArgs>(args?: SelectSubset<T, ChoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Choice.
     * @param {ChoiceCreateArgs} args - Arguments to create a Choice.
     * @example
     * // Create one Choice
     * const Choice = await prisma.choice.create({
     *   data: {
     *     // ... data to create a Choice
     *   }
     * })
     * 
     */
    create<T extends ChoiceCreateArgs>(args: SelectSubset<T, ChoiceCreateArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Choices.
     * @param {ChoiceCreateManyArgs} args - Arguments to create many Choices.
     * @example
     * // Create many Choices
     * const choice = await prisma.choice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChoiceCreateManyArgs>(args?: SelectSubset<T, ChoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Choices and returns the data saved in the database.
     * @param {ChoiceCreateManyAndReturnArgs} args - Arguments to create many Choices.
     * @example
     * // Create many Choices
     * const choice = await prisma.choice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Choices and only return the `choice_id`
     * const choiceWithChoice_idOnly = await prisma.choice.createManyAndReturn({
     *   select: { choice_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ChoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Choice.
     * @param {ChoiceDeleteArgs} args - Arguments to delete one Choice.
     * @example
     * // Delete one Choice
     * const Choice = await prisma.choice.delete({
     *   where: {
     *     // ... filter to delete one Choice
     *   }
     * })
     * 
     */
    delete<T extends ChoiceDeleteArgs>(args: SelectSubset<T, ChoiceDeleteArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Choice.
     * @param {ChoiceUpdateArgs} args - Arguments to update one Choice.
     * @example
     * // Update one Choice
     * const choice = await prisma.choice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChoiceUpdateArgs>(args: SelectSubset<T, ChoiceUpdateArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Choices.
     * @param {ChoiceDeleteManyArgs} args - Arguments to filter Choices to delete.
     * @example
     * // Delete a few Choices
     * const { count } = await prisma.choice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChoiceDeleteManyArgs>(args?: SelectSubset<T, ChoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Choices
     * const choice = await prisma.choice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChoiceUpdateManyArgs>(args: SelectSubset<T, ChoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Choices and returns the data updated in the database.
     * @param {ChoiceUpdateManyAndReturnArgs} args - Arguments to update many Choices.
     * @example
     * // Update many Choices
     * const choice = await prisma.choice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Choices and only return the `choice_id`
     * const choiceWithChoice_idOnly = await prisma.choice.updateManyAndReturn({
     *   select: { choice_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ChoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Choice.
     * @param {ChoiceUpsertArgs} args - Arguments to update or create a Choice.
     * @example
     * // Update or create a Choice
     * const choice = await prisma.choice.upsert({
     *   create: {
     *     // ... data to create a Choice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Choice we want to update
     *   }
     * })
     */
    upsert<T extends ChoiceUpsertArgs>(args: SelectSubset<T, ChoiceUpsertArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceCountArgs} args - Arguments to filter Choices to count.
     * @example
     * // Count the number of Choices
     * const count = await prisma.choice.count({
     *   where: {
     *     // ... the filter for the Choices we want to count
     *   }
     * })
    **/
    count<T extends ChoiceCountArgs>(
      args?: Subset<T, ChoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Choice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChoiceAggregateArgs>(args: Subset<T, ChoiceAggregateArgs>): Prisma.PrismaPromise<GetChoiceAggregateType<T>>

    /**
     * Group by Choice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChoiceGroupByArgs['orderBy'] }
        : { orderBy?: ChoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Choice model
   */
  readonly fields: ChoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Choice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Bet<T extends Choice$BetArgs<ExtArgs> = {}>(args?: Subset<T, Choice$BetArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    BetStake<T extends Choice$BetStakeArgs<ExtArgs> = {}>(args?: Subset<T, Choice$BetStakeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetStakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Choice model
   */
  interface ChoiceFieldRefs {
    readonly choice_id: FieldRef<"Choice", 'String'>
    readonly text: FieldRef<"Choice", 'String'>
    readonly winningChoice: FieldRef<"Choice", 'Boolean'>
    readonly bet_id: FieldRef<"Choice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Choice findUnique
   */
  export type ChoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choice to fetch.
     */
    where: ChoiceWhereUniqueInput
  }

  /**
   * Choice findUniqueOrThrow
   */
  export type ChoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choice to fetch.
     */
    where: ChoiceWhereUniqueInput
  }

  /**
   * Choice findFirst
   */
  export type ChoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choice to fetch.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Choices.
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Choices.
     */
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * Choice findFirstOrThrow
   */
  export type ChoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choice to fetch.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Choices.
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Choices.
     */
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * Choice findMany
   */
  export type ChoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choices to fetch.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Choices.
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * Choice create
   */
  export type ChoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Choice.
     */
    data: XOR<ChoiceCreateInput, ChoiceUncheckedCreateInput>
  }

  /**
   * Choice createMany
   */
  export type ChoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Choices.
     */
    data: ChoiceCreateManyInput | ChoiceCreateManyInput[]
  }

  /**
   * Choice createManyAndReturn
   */
  export type ChoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Choices.
     */
    data: ChoiceCreateManyInput | ChoiceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Choice update
   */
  export type ChoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Choice.
     */
    data: XOR<ChoiceUpdateInput, ChoiceUncheckedUpdateInput>
    /**
     * Choose, which Choice to update.
     */
    where: ChoiceWhereUniqueInput
  }

  /**
   * Choice updateMany
   */
  export type ChoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Choices.
     */
    data: XOR<ChoiceUpdateManyMutationInput, ChoiceUncheckedUpdateManyInput>
    /**
     * Filter which Choices to update
     */
    where?: ChoiceWhereInput
    /**
     * Limit how many Choices to update.
     */
    limit?: number
  }

  /**
   * Choice updateManyAndReturn
   */
  export type ChoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * The data used to update Choices.
     */
    data: XOR<ChoiceUpdateManyMutationInput, ChoiceUncheckedUpdateManyInput>
    /**
     * Filter which Choices to update
     */
    where?: ChoiceWhereInput
    /**
     * Limit how many Choices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Choice upsert
   */
  export type ChoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Choice to update in case it exists.
     */
    where: ChoiceWhereUniqueInput
    /**
     * In case the Choice found by the `where` argument doesn't exist, create a new Choice with this data.
     */
    create: XOR<ChoiceCreateInput, ChoiceUncheckedCreateInput>
    /**
     * In case the Choice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChoiceUpdateInput, ChoiceUncheckedUpdateInput>
  }

  /**
   * Choice delete
   */
  export type ChoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter which Choice to delete.
     */
    where: ChoiceWhereUniqueInput
  }

  /**
   * Choice deleteMany
   */
  export type ChoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Choices to delete
     */
    where?: ChoiceWhereInput
    /**
     * Limit how many Choices to delete.
     */
    limit?: number
  }

  /**
   * Choice.Bet
   */
  export type Choice$BetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    where?: BetWhereInput
  }

  /**
   * Choice.BetStake
   */
  export type Choice$BetStakeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetStake
     */
    select?: BetStakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetStake
     */
    omit?: BetStakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetStakeInclude<ExtArgs> | null
    where?: BetStakeWhereInput
    orderBy?: BetStakeOrderByWithRelationInput | BetStakeOrderByWithRelationInput[]
    cursor?: BetStakeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BetStakeScalarFieldEnum | BetStakeScalarFieldEnum[]
  }

  /**
   * Choice without action
   */
  export type ChoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choice
     */
    omit?: ChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
  }


  /**
   * Model BetStake
   */

  export type AggregateBetStake = {
    _count: BetStakeCountAggregateOutputType | null
    _avg: BetStakeAvgAggregateOutputType | null
    _sum: BetStakeSumAggregateOutputType | null
    _min: BetStakeMinAggregateOutputType | null
    _max: BetStakeMaxAggregateOutputType | null
  }

  export type BetStakeAvgAggregateOutputType = {
    amount: number | null
  }

  export type BetStakeSumAggregateOutputType = {
    amount: number | null
  }

  export type BetStakeMinAggregateOutputType = {
    user_id: string | null
    choice_id: string | null
    bet_id: string | null
    amount: number | null
  }

  export type BetStakeMaxAggregateOutputType = {
    user_id: string | null
    choice_id: string | null
    bet_id: string | null
    amount: number | null
  }

  export type BetStakeCountAggregateOutputType = {
    user_id: number
    choice_id: number
    bet_id: number
    amount: number
    _all: number
  }


  export type BetStakeAvgAggregateInputType = {
    amount?: true
  }

  export type BetStakeSumAggregateInputType = {
    amount?: true
  }

  export type BetStakeMinAggregateInputType = {
    user_id?: true
    choice_id?: true
    bet_id?: true
    amount?: true
  }

  export type BetStakeMaxAggregateInputType = {
    user_id?: true
    choice_id?: true
    bet_id?: true
    amount?: true
  }

  export type BetStakeCountAggregateInputType = {
    user_id?: true
    choice_id?: true
    bet_id?: true
    amount?: true
    _all?: true
  }

  export type BetStakeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BetStake to aggregate.
     */
    where?: BetStakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetStakes to fetch.
     */
    orderBy?: BetStakeOrderByWithRelationInput | BetStakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BetStakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetStakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetStakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BetStakes
    **/
    _count?: true | BetStakeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BetStakeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BetStakeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BetStakeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BetStakeMaxAggregateInputType
  }

  export type GetBetStakeAggregateType<T extends BetStakeAggregateArgs> = {
        [P in keyof T & keyof AggregateBetStake]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBetStake[P]>
      : GetScalarType<T[P], AggregateBetStake[P]>
  }




  export type BetStakeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetStakeWhereInput
    orderBy?: BetStakeOrderByWithAggregationInput | BetStakeOrderByWithAggregationInput[]
    by: BetStakeScalarFieldEnum[] | BetStakeScalarFieldEnum
    having?: BetStakeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BetStakeCountAggregateInputType | true
    _avg?: BetStakeAvgAggregateInputType
    _sum?: BetStakeSumAggregateInputType
    _min?: BetStakeMinAggregateInputType
    _max?: BetStakeMaxAggregateInputType
  }

  export type BetStakeGroupByOutputType = {
    user_id: string
    choice_id: string
    bet_id: string
    amount: number
    _count: BetStakeCountAggregateOutputType | null
    _avg: BetStakeAvgAggregateOutputType | null
    _sum: BetStakeSumAggregateOutputType | null
    _min: BetStakeMinAggregateOutputType | null
    _max: BetStakeMaxAggregateOutputType | null
  }

  type GetBetStakeGroupByPayload<T extends BetStakeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BetStakeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BetStakeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BetStakeGroupByOutputType[P]>
            : GetScalarType<T[P], BetStakeGroupByOutputType[P]>
        }
      >
    >


  export type BetStakeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    choice_id?: boolean
    bet_id?: boolean
    amount?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Bet?: boolean | BetDefaultArgs<ExtArgs>
    Choice?: boolean | ChoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["betStake"]>

  export type BetStakeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    choice_id?: boolean
    bet_id?: boolean
    amount?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Bet?: boolean | BetDefaultArgs<ExtArgs>
    Choice?: boolean | ChoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["betStake"]>

  export type BetStakeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    choice_id?: boolean
    bet_id?: boolean
    amount?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Bet?: boolean | BetDefaultArgs<ExtArgs>
    Choice?: boolean | ChoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["betStake"]>

  export type BetStakeSelectScalar = {
    user_id?: boolean
    choice_id?: boolean
    bet_id?: boolean
    amount?: boolean
  }

  export type BetStakeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "choice_id" | "bet_id" | "amount", ExtArgs["result"]["betStake"]>
  export type BetStakeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Bet?: boolean | BetDefaultArgs<ExtArgs>
    Choice?: boolean | ChoiceDefaultArgs<ExtArgs>
  }
  export type BetStakeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Bet?: boolean | BetDefaultArgs<ExtArgs>
    Choice?: boolean | ChoiceDefaultArgs<ExtArgs>
  }
  export type BetStakeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Bet?: boolean | BetDefaultArgs<ExtArgs>
    Choice?: boolean | ChoiceDefaultArgs<ExtArgs>
  }

  export type $BetStakePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BetStake"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Bet: Prisma.$BetPayload<ExtArgs>
      Choice: Prisma.$ChoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      choice_id: string
      bet_id: string
      amount: number
    }, ExtArgs["result"]["betStake"]>
    composites: {}
  }

  type BetStakeGetPayload<S extends boolean | null | undefined | BetStakeDefaultArgs> = $Result.GetResult<Prisma.$BetStakePayload, S>

  type BetStakeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BetStakeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BetStakeCountAggregateInputType | true
    }

  export interface BetStakeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BetStake'], meta: { name: 'BetStake' } }
    /**
     * Find zero or one BetStake that matches the filter.
     * @param {BetStakeFindUniqueArgs} args - Arguments to find a BetStake
     * @example
     * // Get one BetStake
     * const betStake = await prisma.betStake.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BetStakeFindUniqueArgs>(args: SelectSubset<T, BetStakeFindUniqueArgs<ExtArgs>>): Prisma__BetStakeClient<$Result.GetResult<Prisma.$BetStakePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BetStake that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BetStakeFindUniqueOrThrowArgs} args - Arguments to find a BetStake
     * @example
     * // Get one BetStake
     * const betStake = await prisma.betStake.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BetStakeFindUniqueOrThrowArgs>(args: SelectSubset<T, BetStakeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BetStakeClient<$Result.GetResult<Prisma.$BetStakePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BetStake that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetStakeFindFirstArgs} args - Arguments to find a BetStake
     * @example
     * // Get one BetStake
     * const betStake = await prisma.betStake.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BetStakeFindFirstArgs>(args?: SelectSubset<T, BetStakeFindFirstArgs<ExtArgs>>): Prisma__BetStakeClient<$Result.GetResult<Prisma.$BetStakePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BetStake that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetStakeFindFirstOrThrowArgs} args - Arguments to find a BetStake
     * @example
     * // Get one BetStake
     * const betStake = await prisma.betStake.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BetStakeFindFirstOrThrowArgs>(args?: SelectSubset<T, BetStakeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BetStakeClient<$Result.GetResult<Prisma.$BetStakePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BetStakes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetStakeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BetStakes
     * const betStakes = await prisma.betStake.findMany()
     * 
     * // Get first 10 BetStakes
     * const betStakes = await prisma.betStake.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const betStakeWithUser_idOnly = await prisma.betStake.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends BetStakeFindManyArgs>(args?: SelectSubset<T, BetStakeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetStakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BetStake.
     * @param {BetStakeCreateArgs} args - Arguments to create a BetStake.
     * @example
     * // Create one BetStake
     * const BetStake = await prisma.betStake.create({
     *   data: {
     *     // ... data to create a BetStake
     *   }
     * })
     * 
     */
    create<T extends BetStakeCreateArgs>(args: SelectSubset<T, BetStakeCreateArgs<ExtArgs>>): Prisma__BetStakeClient<$Result.GetResult<Prisma.$BetStakePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BetStakes.
     * @param {BetStakeCreateManyArgs} args - Arguments to create many BetStakes.
     * @example
     * // Create many BetStakes
     * const betStake = await prisma.betStake.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BetStakeCreateManyArgs>(args?: SelectSubset<T, BetStakeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BetStakes and returns the data saved in the database.
     * @param {BetStakeCreateManyAndReturnArgs} args - Arguments to create many BetStakes.
     * @example
     * // Create many BetStakes
     * const betStake = await prisma.betStake.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BetStakes and only return the `user_id`
     * const betStakeWithUser_idOnly = await prisma.betStake.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BetStakeCreateManyAndReturnArgs>(args?: SelectSubset<T, BetStakeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetStakePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BetStake.
     * @param {BetStakeDeleteArgs} args - Arguments to delete one BetStake.
     * @example
     * // Delete one BetStake
     * const BetStake = await prisma.betStake.delete({
     *   where: {
     *     // ... filter to delete one BetStake
     *   }
     * })
     * 
     */
    delete<T extends BetStakeDeleteArgs>(args: SelectSubset<T, BetStakeDeleteArgs<ExtArgs>>): Prisma__BetStakeClient<$Result.GetResult<Prisma.$BetStakePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BetStake.
     * @param {BetStakeUpdateArgs} args - Arguments to update one BetStake.
     * @example
     * // Update one BetStake
     * const betStake = await prisma.betStake.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BetStakeUpdateArgs>(args: SelectSubset<T, BetStakeUpdateArgs<ExtArgs>>): Prisma__BetStakeClient<$Result.GetResult<Prisma.$BetStakePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BetStakes.
     * @param {BetStakeDeleteManyArgs} args - Arguments to filter BetStakes to delete.
     * @example
     * // Delete a few BetStakes
     * const { count } = await prisma.betStake.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BetStakeDeleteManyArgs>(args?: SelectSubset<T, BetStakeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BetStakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetStakeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BetStakes
     * const betStake = await prisma.betStake.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BetStakeUpdateManyArgs>(args: SelectSubset<T, BetStakeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BetStakes and returns the data updated in the database.
     * @param {BetStakeUpdateManyAndReturnArgs} args - Arguments to update many BetStakes.
     * @example
     * // Update many BetStakes
     * const betStake = await prisma.betStake.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BetStakes and only return the `user_id`
     * const betStakeWithUser_idOnly = await prisma.betStake.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BetStakeUpdateManyAndReturnArgs>(args: SelectSubset<T, BetStakeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetStakePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BetStake.
     * @param {BetStakeUpsertArgs} args - Arguments to update or create a BetStake.
     * @example
     * // Update or create a BetStake
     * const betStake = await prisma.betStake.upsert({
     *   create: {
     *     // ... data to create a BetStake
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BetStake we want to update
     *   }
     * })
     */
    upsert<T extends BetStakeUpsertArgs>(args: SelectSubset<T, BetStakeUpsertArgs<ExtArgs>>): Prisma__BetStakeClient<$Result.GetResult<Prisma.$BetStakePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BetStakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetStakeCountArgs} args - Arguments to filter BetStakes to count.
     * @example
     * // Count the number of BetStakes
     * const count = await prisma.betStake.count({
     *   where: {
     *     // ... the filter for the BetStakes we want to count
     *   }
     * })
    **/
    count<T extends BetStakeCountArgs>(
      args?: Subset<T, BetStakeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BetStakeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BetStake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetStakeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BetStakeAggregateArgs>(args: Subset<T, BetStakeAggregateArgs>): Prisma.PrismaPromise<GetBetStakeAggregateType<T>>

    /**
     * Group by BetStake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetStakeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BetStakeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BetStakeGroupByArgs['orderBy'] }
        : { orderBy?: BetStakeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BetStakeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBetStakeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BetStake model
   */
  readonly fields: BetStakeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BetStake.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BetStakeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Bet<T extends BetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BetDefaultArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Choice<T extends ChoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChoiceDefaultArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BetStake model
   */
  interface BetStakeFieldRefs {
    readonly user_id: FieldRef<"BetStake", 'String'>
    readonly choice_id: FieldRef<"BetStake", 'String'>
    readonly bet_id: FieldRef<"BetStake", 'String'>
    readonly amount: FieldRef<"BetStake", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BetStake findUnique
   */
  export type BetStakeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetStake
     */
    select?: BetStakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetStake
     */
    omit?: BetStakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetStakeInclude<ExtArgs> | null
    /**
     * Filter, which BetStake to fetch.
     */
    where: BetStakeWhereUniqueInput
  }

  /**
   * BetStake findUniqueOrThrow
   */
  export type BetStakeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetStake
     */
    select?: BetStakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetStake
     */
    omit?: BetStakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetStakeInclude<ExtArgs> | null
    /**
     * Filter, which BetStake to fetch.
     */
    where: BetStakeWhereUniqueInput
  }

  /**
   * BetStake findFirst
   */
  export type BetStakeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetStake
     */
    select?: BetStakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetStake
     */
    omit?: BetStakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetStakeInclude<ExtArgs> | null
    /**
     * Filter, which BetStake to fetch.
     */
    where?: BetStakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetStakes to fetch.
     */
    orderBy?: BetStakeOrderByWithRelationInput | BetStakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BetStakes.
     */
    cursor?: BetStakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetStakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetStakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BetStakes.
     */
    distinct?: BetStakeScalarFieldEnum | BetStakeScalarFieldEnum[]
  }

  /**
   * BetStake findFirstOrThrow
   */
  export type BetStakeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetStake
     */
    select?: BetStakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetStake
     */
    omit?: BetStakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetStakeInclude<ExtArgs> | null
    /**
     * Filter, which BetStake to fetch.
     */
    where?: BetStakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetStakes to fetch.
     */
    orderBy?: BetStakeOrderByWithRelationInput | BetStakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BetStakes.
     */
    cursor?: BetStakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetStakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetStakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BetStakes.
     */
    distinct?: BetStakeScalarFieldEnum | BetStakeScalarFieldEnum[]
  }

  /**
   * BetStake findMany
   */
  export type BetStakeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetStake
     */
    select?: BetStakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetStake
     */
    omit?: BetStakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetStakeInclude<ExtArgs> | null
    /**
     * Filter, which BetStakes to fetch.
     */
    where?: BetStakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetStakes to fetch.
     */
    orderBy?: BetStakeOrderByWithRelationInput | BetStakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BetStakes.
     */
    cursor?: BetStakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetStakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetStakes.
     */
    skip?: number
    distinct?: BetStakeScalarFieldEnum | BetStakeScalarFieldEnum[]
  }

  /**
   * BetStake create
   */
  export type BetStakeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetStake
     */
    select?: BetStakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetStake
     */
    omit?: BetStakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetStakeInclude<ExtArgs> | null
    /**
     * The data needed to create a BetStake.
     */
    data: XOR<BetStakeCreateInput, BetStakeUncheckedCreateInput>
  }

  /**
   * BetStake createMany
   */
  export type BetStakeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BetStakes.
     */
    data: BetStakeCreateManyInput | BetStakeCreateManyInput[]
  }

  /**
   * BetStake createManyAndReturn
   */
  export type BetStakeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetStake
     */
    select?: BetStakeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BetStake
     */
    omit?: BetStakeOmit<ExtArgs> | null
    /**
     * The data used to create many BetStakes.
     */
    data: BetStakeCreateManyInput | BetStakeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetStakeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BetStake update
   */
  export type BetStakeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetStake
     */
    select?: BetStakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetStake
     */
    omit?: BetStakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetStakeInclude<ExtArgs> | null
    /**
     * The data needed to update a BetStake.
     */
    data: XOR<BetStakeUpdateInput, BetStakeUncheckedUpdateInput>
    /**
     * Choose, which BetStake to update.
     */
    where: BetStakeWhereUniqueInput
  }

  /**
   * BetStake updateMany
   */
  export type BetStakeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BetStakes.
     */
    data: XOR<BetStakeUpdateManyMutationInput, BetStakeUncheckedUpdateManyInput>
    /**
     * Filter which BetStakes to update
     */
    where?: BetStakeWhereInput
    /**
     * Limit how many BetStakes to update.
     */
    limit?: number
  }

  /**
   * BetStake updateManyAndReturn
   */
  export type BetStakeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetStake
     */
    select?: BetStakeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BetStake
     */
    omit?: BetStakeOmit<ExtArgs> | null
    /**
     * The data used to update BetStakes.
     */
    data: XOR<BetStakeUpdateManyMutationInput, BetStakeUncheckedUpdateManyInput>
    /**
     * Filter which BetStakes to update
     */
    where?: BetStakeWhereInput
    /**
     * Limit how many BetStakes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetStakeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BetStake upsert
   */
  export type BetStakeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetStake
     */
    select?: BetStakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetStake
     */
    omit?: BetStakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetStakeInclude<ExtArgs> | null
    /**
     * The filter to search for the BetStake to update in case it exists.
     */
    where: BetStakeWhereUniqueInput
    /**
     * In case the BetStake found by the `where` argument doesn't exist, create a new BetStake with this data.
     */
    create: XOR<BetStakeCreateInput, BetStakeUncheckedCreateInput>
    /**
     * In case the BetStake was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BetStakeUpdateInput, BetStakeUncheckedUpdateInput>
  }

  /**
   * BetStake delete
   */
  export type BetStakeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetStake
     */
    select?: BetStakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetStake
     */
    omit?: BetStakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetStakeInclude<ExtArgs> | null
    /**
     * Filter which BetStake to delete.
     */
    where: BetStakeWhereUniqueInput
  }

  /**
   * BetStake deleteMany
   */
  export type BetStakeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BetStakes to delete
     */
    where?: BetStakeWhereInput
    /**
     * Limit how many BetStakes to delete.
     */
    limit?: number
  }

  /**
   * BetStake without action
   */
  export type BetStakeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetStake
     */
    select?: BetStakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BetStake
     */
    omit?: BetStakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetStakeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GroupScalarFieldEnum: {
    pin: 'pin',
    isActive: 'isActive'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    groupPin: 'groupPin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserTokenScalarFieldEnum: {
    user_id: 'user_id',
    token: 'token'
  };

  export type UserTokenScalarFieldEnum = (typeof UserTokenScalarFieldEnum)[keyof typeof UserTokenScalarFieldEnum]


  export const BetScalarFieldEnum: {
    bet_id: 'bet_id',
    name: 'name',
    isClosed: 'isClosed',
    userUser_id: 'userUser_id'
  };

  export type BetScalarFieldEnum = (typeof BetScalarFieldEnum)[keyof typeof BetScalarFieldEnum]


  export const ChoiceScalarFieldEnum: {
    choice_id: 'choice_id',
    text: 'text',
    winningChoice: 'winningChoice',
    bet_id: 'bet_id'
  };

  export type ChoiceScalarFieldEnum = (typeof ChoiceScalarFieldEnum)[keyof typeof ChoiceScalarFieldEnum]


  export const BetStakeScalarFieldEnum: {
    user_id: 'user_id',
    choice_id: 'choice_id',
    bet_id: 'bet_id',
    amount: 'amount'
  };

  export type BetStakeScalarFieldEnum = (typeof BetStakeScalarFieldEnum)[keyof typeof BetStakeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    pin?: StringFilter<"Group"> | string
    isActive?: BoolFilter<"Group"> | boolean
    User?: UserListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    pin?: SortOrder
    isActive?: SortOrder
    User?: UserOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    pin?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    isActive?: BoolFilter<"Group"> | boolean
    User?: UserListRelationFilter
  }, "pin">

  export type GroupOrderByWithAggregationInput = {
    pin?: SortOrder
    isActive?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    pin?: StringWithAggregatesFilter<"Group"> | string
    isActive?: BoolWithAggregatesFilter<"Group"> | boolean
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    groupPin?: StringFilter<"User"> | string
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    UserToken?: UserTokenListRelationFilter
    Bet?: BetListRelationFilter
    BetStake?: BetStakeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrder
    groupPin?: SortOrder
    group?: GroupOrderByWithRelationInput
    UserToken?: UserTokenOrderByRelationAggregateInput
    Bet?: BetOrderByRelationAggregateInput
    BetStake?: BetStakeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    groupPin?: StringFilter<"User"> | string
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    UserToken?: UserTokenListRelationFilter
    Bet?: BetListRelationFilter
    BetStake?: BetStakeListRelationFilter
  }, "user_id" | "name">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrder
    groupPin?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    groupPin?: StringWithAggregatesFilter<"User"> | string
  }

  export type UserTokenWhereInput = {
    AND?: UserTokenWhereInput | UserTokenWhereInput[]
    OR?: UserTokenWhereInput[]
    NOT?: UserTokenWhereInput | UserTokenWhereInput[]
    user_id?: StringFilter<"UserToken"> | string
    token?: StringFilter<"UserToken"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserTokenOrderByWithRelationInput = {
    user_id?: SortOrder
    token?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type UserTokenWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    token?: string
    AND?: UserTokenWhereInput | UserTokenWhereInput[]
    OR?: UserTokenWhereInput[]
    NOT?: UserTokenWhereInput | UserTokenWhereInput[]
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "user_id" | "token">

  export type UserTokenOrderByWithAggregationInput = {
    user_id?: SortOrder
    token?: SortOrder
    _count?: UserTokenCountOrderByAggregateInput
    _max?: UserTokenMaxOrderByAggregateInput
    _min?: UserTokenMinOrderByAggregateInput
  }

  export type UserTokenScalarWhereWithAggregatesInput = {
    AND?: UserTokenScalarWhereWithAggregatesInput | UserTokenScalarWhereWithAggregatesInput[]
    OR?: UserTokenScalarWhereWithAggregatesInput[]
    NOT?: UserTokenScalarWhereWithAggregatesInput | UserTokenScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"UserToken"> | string
    token?: StringWithAggregatesFilter<"UserToken"> | string
  }

  export type BetWhereInput = {
    AND?: BetWhereInput | BetWhereInput[]
    OR?: BetWhereInput[]
    NOT?: BetWhereInput | BetWhereInput[]
    bet_id?: StringFilter<"Bet"> | string
    name?: StringFilter<"Bet"> | string
    isClosed?: BoolFilter<"Bet"> | boolean
    userUser_id?: StringFilter<"Bet"> | string
    openedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    choices?: ChoiceListRelationFilter
    BetStake?: BetStakeListRelationFilter
  }

  export type BetOrderByWithRelationInput = {
    bet_id?: SortOrder
    name?: SortOrder
    isClosed?: SortOrder
    userUser_id?: SortOrder
    openedBy?: UserOrderByWithRelationInput
    choices?: ChoiceOrderByRelationAggregateInput
    BetStake?: BetStakeOrderByRelationAggregateInput
  }

  export type BetWhereUniqueInput = Prisma.AtLeast<{
    bet_id?: string
    AND?: BetWhereInput | BetWhereInput[]
    OR?: BetWhereInput[]
    NOT?: BetWhereInput | BetWhereInput[]
    name?: StringFilter<"Bet"> | string
    isClosed?: BoolFilter<"Bet"> | boolean
    userUser_id?: StringFilter<"Bet"> | string
    openedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    choices?: ChoiceListRelationFilter
    BetStake?: BetStakeListRelationFilter
  }, "bet_id">

  export type BetOrderByWithAggregationInput = {
    bet_id?: SortOrder
    name?: SortOrder
    isClosed?: SortOrder
    userUser_id?: SortOrder
    _count?: BetCountOrderByAggregateInput
    _max?: BetMaxOrderByAggregateInput
    _min?: BetMinOrderByAggregateInput
  }

  export type BetScalarWhereWithAggregatesInput = {
    AND?: BetScalarWhereWithAggregatesInput | BetScalarWhereWithAggregatesInput[]
    OR?: BetScalarWhereWithAggregatesInput[]
    NOT?: BetScalarWhereWithAggregatesInput | BetScalarWhereWithAggregatesInput[]
    bet_id?: StringWithAggregatesFilter<"Bet"> | string
    name?: StringWithAggregatesFilter<"Bet"> | string
    isClosed?: BoolWithAggregatesFilter<"Bet"> | boolean
    userUser_id?: StringWithAggregatesFilter<"Bet"> | string
  }

  export type ChoiceWhereInput = {
    AND?: ChoiceWhereInput | ChoiceWhereInput[]
    OR?: ChoiceWhereInput[]
    NOT?: ChoiceWhereInput | ChoiceWhereInput[]
    choice_id?: StringFilter<"Choice"> | string
    text?: StringFilter<"Choice"> | string
    winningChoice?: BoolFilter<"Choice"> | boolean
    bet_id?: StringFilter<"Choice"> | string
    Bet?: XOR<BetNullableScalarRelationFilter, BetWhereInput> | null
    BetStake?: BetStakeListRelationFilter
  }

  export type ChoiceOrderByWithRelationInput = {
    choice_id?: SortOrder
    text?: SortOrder
    winningChoice?: SortOrder
    bet_id?: SortOrder
    Bet?: BetOrderByWithRelationInput
    BetStake?: BetStakeOrderByRelationAggregateInput
  }

  export type ChoiceWhereUniqueInput = Prisma.AtLeast<{
    choice_id?: string
    AND?: ChoiceWhereInput | ChoiceWhereInput[]
    OR?: ChoiceWhereInput[]
    NOT?: ChoiceWhereInput | ChoiceWhereInput[]
    text?: StringFilter<"Choice"> | string
    winningChoice?: BoolFilter<"Choice"> | boolean
    bet_id?: StringFilter<"Choice"> | string
    Bet?: XOR<BetNullableScalarRelationFilter, BetWhereInput> | null
    BetStake?: BetStakeListRelationFilter
  }, "choice_id">

  export type ChoiceOrderByWithAggregationInput = {
    choice_id?: SortOrder
    text?: SortOrder
    winningChoice?: SortOrder
    bet_id?: SortOrder
    _count?: ChoiceCountOrderByAggregateInput
    _max?: ChoiceMaxOrderByAggregateInput
    _min?: ChoiceMinOrderByAggregateInput
  }

  export type ChoiceScalarWhereWithAggregatesInput = {
    AND?: ChoiceScalarWhereWithAggregatesInput | ChoiceScalarWhereWithAggregatesInput[]
    OR?: ChoiceScalarWhereWithAggregatesInput[]
    NOT?: ChoiceScalarWhereWithAggregatesInput | ChoiceScalarWhereWithAggregatesInput[]
    choice_id?: StringWithAggregatesFilter<"Choice"> | string
    text?: StringWithAggregatesFilter<"Choice"> | string
    winningChoice?: BoolWithAggregatesFilter<"Choice"> | boolean
    bet_id?: StringWithAggregatesFilter<"Choice"> | string
  }

  export type BetStakeWhereInput = {
    AND?: BetStakeWhereInput | BetStakeWhereInput[]
    OR?: BetStakeWhereInput[]
    NOT?: BetStakeWhereInput | BetStakeWhereInput[]
    user_id?: StringFilter<"BetStake"> | string
    choice_id?: StringFilter<"BetStake"> | string
    bet_id?: StringFilter<"BetStake"> | string
    amount?: IntFilter<"BetStake"> | number
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Bet?: XOR<BetScalarRelationFilter, BetWhereInput>
    Choice?: XOR<ChoiceScalarRelationFilter, ChoiceWhereInput>
  }

  export type BetStakeOrderByWithRelationInput = {
    user_id?: SortOrder
    choice_id?: SortOrder
    bet_id?: SortOrder
    amount?: SortOrder
    User?: UserOrderByWithRelationInput
    Bet?: BetOrderByWithRelationInput
    Choice?: ChoiceOrderByWithRelationInput
  }

  export type BetStakeWhereUniqueInput = Prisma.AtLeast<{
    user_id_bet_id_choice_id?: BetStakeUser_idBet_idChoice_idCompoundUniqueInput
    AND?: BetStakeWhereInput | BetStakeWhereInput[]
    OR?: BetStakeWhereInput[]
    NOT?: BetStakeWhereInput | BetStakeWhereInput[]
    user_id?: StringFilter<"BetStake"> | string
    choice_id?: StringFilter<"BetStake"> | string
    bet_id?: StringFilter<"BetStake"> | string
    amount?: IntFilter<"BetStake"> | number
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Bet?: XOR<BetScalarRelationFilter, BetWhereInput>
    Choice?: XOR<ChoiceScalarRelationFilter, ChoiceWhereInput>
  }, "user_id_bet_id_choice_id">

  export type BetStakeOrderByWithAggregationInput = {
    user_id?: SortOrder
    choice_id?: SortOrder
    bet_id?: SortOrder
    amount?: SortOrder
    _count?: BetStakeCountOrderByAggregateInput
    _avg?: BetStakeAvgOrderByAggregateInput
    _max?: BetStakeMaxOrderByAggregateInput
    _min?: BetStakeMinOrderByAggregateInput
    _sum?: BetStakeSumOrderByAggregateInput
  }

  export type BetStakeScalarWhereWithAggregatesInput = {
    AND?: BetStakeScalarWhereWithAggregatesInput | BetStakeScalarWhereWithAggregatesInput[]
    OR?: BetStakeScalarWhereWithAggregatesInput[]
    NOT?: BetStakeScalarWhereWithAggregatesInput | BetStakeScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"BetStake"> | string
    choice_id?: StringWithAggregatesFilter<"BetStake"> | string
    bet_id?: StringWithAggregatesFilter<"BetStake"> | string
    amount?: IntWithAggregatesFilter<"BetStake"> | number
  }

  export type GroupCreateInput = {
    pin?: string
    isActive?: boolean
    User?: UserCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    pin?: string
    isActive?: boolean
    User?: UserUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    pin?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    pin?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    pin?: string
    isActive?: boolean
  }

  export type GroupUpdateManyMutationInput = {
    pin?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupUncheckedUpdateManyInput = {
    pin?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateInput = {
    user_id?: string
    name: string
    group?: GroupCreateNestedOneWithoutUserInput
    UserToken?: UserTokenCreateNestedManyWithoutUserInput
    Bet?: BetCreateNestedManyWithoutOpenedByInput
    BetStake?: BetStakeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: string
    name: string
    groupPin: string
    UserToken?: UserTokenUncheckedCreateNestedManyWithoutUserInput
    Bet?: BetUncheckedCreateNestedManyWithoutOpenedByInput
    BetStake?: BetStakeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneWithoutUserNestedInput
    UserToken?: UserTokenUpdateManyWithoutUserNestedInput
    Bet?: BetUpdateManyWithoutOpenedByNestedInput
    BetStake?: BetStakeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groupPin?: StringFieldUpdateOperationsInput | string
    UserToken?: UserTokenUncheckedUpdateManyWithoutUserNestedInput
    Bet?: BetUncheckedUpdateManyWithoutOpenedByNestedInput
    BetStake?: BetStakeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: string
    name: string
    groupPin: string
  }

  export type UserUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groupPin?: StringFieldUpdateOperationsInput | string
  }

  export type UserTokenCreateInput = {
    token: string
    User: UserCreateNestedOneWithoutUserTokenInput
  }

  export type UserTokenUncheckedCreateInput = {
    user_id: string
    token: string
  }

  export type UserTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutUserTokenNestedInput
  }

  export type UserTokenUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type UserTokenCreateManyInput = {
    user_id: string
    token: string
  }

  export type UserTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type UserTokenUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type BetCreateInput = {
    bet_id: string
    name: string
    isClosed: boolean
    openedBy: UserCreateNestedOneWithoutBetInput
    choices?: ChoiceCreateNestedManyWithoutBetInput
    BetStake?: BetStakeCreateNestedManyWithoutBetInput
  }

  export type BetUncheckedCreateInput = {
    bet_id: string
    name: string
    isClosed: boolean
    userUser_id: string
    choices?: ChoiceUncheckedCreateNestedManyWithoutBetInput
    BetStake?: BetStakeUncheckedCreateNestedManyWithoutBetInput
  }

  export type BetUpdateInput = {
    bet_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    openedBy?: UserUpdateOneRequiredWithoutBetNestedInput
    choices?: ChoiceUpdateManyWithoutBetNestedInput
    BetStake?: BetStakeUpdateManyWithoutBetNestedInput
  }

  export type BetUncheckedUpdateInput = {
    bet_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    userUser_id?: StringFieldUpdateOperationsInput | string
    choices?: ChoiceUncheckedUpdateManyWithoutBetNestedInput
    BetStake?: BetStakeUncheckedUpdateManyWithoutBetNestedInput
  }

  export type BetCreateManyInput = {
    bet_id: string
    name: string
    isClosed: boolean
    userUser_id: string
  }

  export type BetUpdateManyMutationInput = {
    bet_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BetUncheckedUpdateManyInput = {
    bet_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    userUser_id?: StringFieldUpdateOperationsInput | string
  }

  export type ChoiceCreateInput = {
    choice_id: string
    text: string
    winningChoice?: boolean
    Bet?: BetCreateNestedOneWithoutChoicesInput
    BetStake?: BetStakeCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceUncheckedCreateInput = {
    choice_id: string
    text: string
    winningChoice?: boolean
    bet_id: string
    BetStake?: BetStakeUncheckedCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceUpdateInput = {
    choice_id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    winningChoice?: BoolFieldUpdateOperationsInput | boolean
    Bet?: BetUpdateOneWithoutChoicesNestedInput
    BetStake?: BetStakeUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceUncheckedUpdateInput = {
    choice_id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    winningChoice?: BoolFieldUpdateOperationsInput | boolean
    bet_id?: StringFieldUpdateOperationsInput | string
    BetStake?: BetStakeUncheckedUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceCreateManyInput = {
    choice_id: string
    text: string
    winningChoice?: boolean
    bet_id: string
  }

  export type ChoiceUpdateManyMutationInput = {
    choice_id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    winningChoice?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChoiceUncheckedUpdateManyInput = {
    choice_id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    winningChoice?: BoolFieldUpdateOperationsInput | boolean
    bet_id?: StringFieldUpdateOperationsInput | string
  }

  export type BetStakeCreateInput = {
    amount: number
    User: UserCreateNestedOneWithoutBetStakeInput
    Bet: BetCreateNestedOneWithoutBetStakeInput
    Choice: ChoiceCreateNestedOneWithoutBetStakeInput
  }

  export type BetStakeUncheckedCreateInput = {
    user_id: string
    choice_id: string
    bet_id: string
    amount: number
  }

  export type BetStakeUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneRequiredWithoutBetStakeNestedInput
    Bet?: BetUpdateOneRequiredWithoutBetStakeNestedInput
    Choice?: ChoiceUpdateOneRequiredWithoutBetStakeNestedInput
  }

  export type BetStakeUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    choice_id?: StringFieldUpdateOperationsInput | string
    bet_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type BetStakeCreateManyInput = {
    user_id: string
    choice_id: string
    bet_id: string
    amount: number
  }

  export type BetStakeUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type BetStakeUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    choice_id?: StringFieldUpdateOperationsInput | string
    bet_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    pin?: SortOrder
    isActive?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    pin?: SortOrder
    isActive?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    pin?: SortOrder
    isActive?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GroupNullableScalarRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type UserTokenListRelationFilter = {
    every?: UserTokenWhereInput
    some?: UserTokenWhereInput
    none?: UserTokenWhereInput
  }

  export type BetListRelationFilter = {
    every?: BetWhereInput
    some?: BetWhereInput
    none?: BetWhereInput
  }

  export type BetStakeListRelationFilter = {
    every?: BetStakeWhereInput
    some?: BetStakeWhereInput
    none?: BetStakeWhereInput
  }

  export type UserTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BetStakeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    groupPin?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    groupPin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    groupPin?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserTokenCountOrderByAggregateInput = {
    user_id?: SortOrder
    token?: SortOrder
  }

  export type UserTokenMaxOrderByAggregateInput = {
    user_id?: SortOrder
    token?: SortOrder
  }

  export type UserTokenMinOrderByAggregateInput = {
    user_id?: SortOrder
    token?: SortOrder
  }

  export type ChoiceListRelationFilter = {
    every?: ChoiceWhereInput
    some?: ChoiceWhereInput
    none?: ChoiceWhereInput
  }

  export type ChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BetCountOrderByAggregateInput = {
    bet_id?: SortOrder
    name?: SortOrder
    isClosed?: SortOrder
    userUser_id?: SortOrder
  }

  export type BetMaxOrderByAggregateInput = {
    bet_id?: SortOrder
    name?: SortOrder
    isClosed?: SortOrder
    userUser_id?: SortOrder
  }

  export type BetMinOrderByAggregateInput = {
    bet_id?: SortOrder
    name?: SortOrder
    isClosed?: SortOrder
    userUser_id?: SortOrder
  }

  export type BetNullableScalarRelationFilter = {
    is?: BetWhereInput | null
    isNot?: BetWhereInput | null
  }

  export type ChoiceCountOrderByAggregateInput = {
    choice_id?: SortOrder
    text?: SortOrder
    winningChoice?: SortOrder
    bet_id?: SortOrder
  }

  export type ChoiceMaxOrderByAggregateInput = {
    choice_id?: SortOrder
    text?: SortOrder
    winningChoice?: SortOrder
    bet_id?: SortOrder
  }

  export type ChoiceMinOrderByAggregateInput = {
    choice_id?: SortOrder
    text?: SortOrder
    winningChoice?: SortOrder
    bet_id?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BetScalarRelationFilter = {
    is?: BetWhereInput
    isNot?: BetWhereInput
  }

  export type ChoiceScalarRelationFilter = {
    is?: ChoiceWhereInput
    isNot?: ChoiceWhereInput
  }

  export type BetStakeUser_idBet_idChoice_idCompoundUniqueInput = {
    user_id: string
    bet_id: string
    choice_id: string
  }

  export type BetStakeCountOrderByAggregateInput = {
    user_id?: SortOrder
    choice_id?: SortOrder
    bet_id?: SortOrder
    amount?: SortOrder
  }

  export type BetStakeAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BetStakeMaxOrderByAggregateInput = {
    user_id?: SortOrder
    choice_id?: SortOrder
    bet_id?: SortOrder
    amount?: SortOrder
  }

  export type BetStakeMinOrderByAggregateInput = {
    user_id?: SortOrder
    choice_id?: SortOrder
    bet_id?: SortOrder
    amount?: SortOrder
  }

  export type BetStakeSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupInput | UserUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupInput | UserUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupInput | UserUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupInput | UserUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupInput | UserUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupInput | UserUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutUserInput = {
    create?: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUserInput
    connect?: GroupWhereUniqueInput
  }

  export type UserTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput> | UserTokenCreateWithoutUserInput[] | UserTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTokenCreateOrConnectWithoutUserInput | UserTokenCreateOrConnectWithoutUserInput[]
    createMany?: UserTokenCreateManyUserInputEnvelope
    connect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
  }

  export type BetCreateNestedManyWithoutOpenedByInput = {
    create?: XOR<BetCreateWithoutOpenedByInput, BetUncheckedCreateWithoutOpenedByInput> | BetCreateWithoutOpenedByInput[] | BetUncheckedCreateWithoutOpenedByInput[]
    connectOrCreate?: BetCreateOrConnectWithoutOpenedByInput | BetCreateOrConnectWithoutOpenedByInput[]
    createMany?: BetCreateManyOpenedByInputEnvelope
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
  }

  export type BetStakeCreateNestedManyWithoutUserInput = {
    create?: XOR<BetStakeCreateWithoutUserInput, BetStakeUncheckedCreateWithoutUserInput> | BetStakeCreateWithoutUserInput[] | BetStakeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BetStakeCreateOrConnectWithoutUserInput | BetStakeCreateOrConnectWithoutUserInput[]
    createMany?: BetStakeCreateManyUserInputEnvelope
    connect?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
  }

  export type UserTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput> | UserTokenCreateWithoutUserInput[] | UserTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTokenCreateOrConnectWithoutUserInput | UserTokenCreateOrConnectWithoutUserInput[]
    createMany?: UserTokenCreateManyUserInputEnvelope
    connect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
  }

  export type BetUncheckedCreateNestedManyWithoutOpenedByInput = {
    create?: XOR<BetCreateWithoutOpenedByInput, BetUncheckedCreateWithoutOpenedByInput> | BetCreateWithoutOpenedByInput[] | BetUncheckedCreateWithoutOpenedByInput[]
    connectOrCreate?: BetCreateOrConnectWithoutOpenedByInput | BetCreateOrConnectWithoutOpenedByInput[]
    createMany?: BetCreateManyOpenedByInputEnvelope
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
  }

  export type BetStakeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BetStakeCreateWithoutUserInput, BetStakeUncheckedCreateWithoutUserInput> | BetStakeCreateWithoutUserInput[] | BetStakeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BetStakeCreateOrConnectWithoutUserInput | BetStakeCreateOrConnectWithoutUserInput[]
    createMany?: BetStakeCreateManyUserInputEnvelope
    connect?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
  }

  export type GroupUpdateOneWithoutUserNestedInput = {
    create?: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUserInput
    upsert?: GroupUpsertWithoutUserInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutUserInput, GroupUpdateWithoutUserInput>, GroupUncheckedUpdateWithoutUserInput>
  }

  export type UserTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput> | UserTokenCreateWithoutUserInput[] | UserTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTokenCreateOrConnectWithoutUserInput | UserTokenCreateOrConnectWithoutUserInput[]
    upsert?: UserTokenUpsertWithWhereUniqueWithoutUserInput | UserTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTokenCreateManyUserInputEnvelope
    set?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    disconnect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    delete?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    connect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    update?: UserTokenUpdateWithWhereUniqueWithoutUserInput | UserTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTokenUpdateManyWithWhereWithoutUserInput | UserTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTokenScalarWhereInput | UserTokenScalarWhereInput[]
  }

  export type BetUpdateManyWithoutOpenedByNestedInput = {
    create?: XOR<BetCreateWithoutOpenedByInput, BetUncheckedCreateWithoutOpenedByInput> | BetCreateWithoutOpenedByInput[] | BetUncheckedCreateWithoutOpenedByInput[]
    connectOrCreate?: BetCreateOrConnectWithoutOpenedByInput | BetCreateOrConnectWithoutOpenedByInput[]
    upsert?: BetUpsertWithWhereUniqueWithoutOpenedByInput | BetUpsertWithWhereUniqueWithoutOpenedByInput[]
    createMany?: BetCreateManyOpenedByInputEnvelope
    set?: BetWhereUniqueInput | BetWhereUniqueInput[]
    disconnect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    delete?: BetWhereUniqueInput | BetWhereUniqueInput[]
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    update?: BetUpdateWithWhereUniqueWithoutOpenedByInput | BetUpdateWithWhereUniqueWithoutOpenedByInput[]
    updateMany?: BetUpdateManyWithWhereWithoutOpenedByInput | BetUpdateManyWithWhereWithoutOpenedByInput[]
    deleteMany?: BetScalarWhereInput | BetScalarWhereInput[]
  }

  export type BetStakeUpdateManyWithoutUserNestedInput = {
    create?: XOR<BetStakeCreateWithoutUserInput, BetStakeUncheckedCreateWithoutUserInput> | BetStakeCreateWithoutUserInput[] | BetStakeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BetStakeCreateOrConnectWithoutUserInput | BetStakeCreateOrConnectWithoutUserInput[]
    upsert?: BetStakeUpsertWithWhereUniqueWithoutUserInput | BetStakeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BetStakeCreateManyUserInputEnvelope
    set?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    disconnect?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    delete?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    connect?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    update?: BetStakeUpdateWithWhereUniqueWithoutUserInput | BetStakeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BetStakeUpdateManyWithWhereWithoutUserInput | BetStakeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BetStakeScalarWhereInput | BetStakeScalarWhereInput[]
  }

  export type UserTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput> | UserTokenCreateWithoutUserInput[] | UserTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTokenCreateOrConnectWithoutUserInput | UserTokenCreateOrConnectWithoutUserInput[]
    upsert?: UserTokenUpsertWithWhereUniqueWithoutUserInput | UserTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTokenCreateManyUserInputEnvelope
    set?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    disconnect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    delete?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    connect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    update?: UserTokenUpdateWithWhereUniqueWithoutUserInput | UserTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTokenUpdateManyWithWhereWithoutUserInput | UserTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTokenScalarWhereInput | UserTokenScalarWhereInput[]
  }

  export type BetUncheckedUpdateManyWithoutOpenedByNestedInput = {
    create?: XOR<BetCreateWithoutOpenedByInput, BetUncheckedCreateWithoutOpenedByInput> | BetCreateWithoutOpenedByInput[] | BetUncheckedCreateWithoutOpenedByInput[]
    connectOrCreate?: BetCreateOrConnectWithoutOpenedByInput | BetCreateOrConnectWithoutOpenedByInput[]
    upsert?: BetUpsertWithWhereUniqueWithoutOpenedByInput | BetUpsertWithWhereUniqueWithoutOpenedByInput[]
    createMany?: BetCreateManyOpenedByInputEnvelope
    set?: BetWhereUniqueInput | BetWhereUniqueInput[]
    disconnect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    delete?: BetWhereUniqueInput | BetWhereUniqueInput[]
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    update?: BetUpdateWithWhereUniqueWithoutOpenedByInput | BetUpdateWithWhereUniqueWithoutOpenedByInput[]
    updateMany?: BetUpdateManyWithWhereWithoutOpenedByInput | BetUpdateManyWithWhereWithoutOpenedByInput[]
    deleteMany?: BetScalarWhereInput | BetScalarWhereInput[]
  }

  export type BetStakeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BetStakeCreateWithoutUserInput, BetStakeUncheckedCreateWithoutUserInput> | BetStakeCreateWithoutUserInput[] | BetStakeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BetStakeCreateOrConnectWithoutUserInput | BetStakeCreateOrConnectWithoutUserInput[]
    upsert?: BetStakeUpsertWithWhereUniqueWithoutUserInput | BetStakeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BetStakeCreateManyUserInputEnvelope
    set?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    disconnect?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    delete?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    connect?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    update?: BetStakeUpdateWithWhereUniqueWithoutUserInput | BetStakeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BetStakeUpdateManyWithWhereWithoutUserInput | BetStakeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BetStakeScalarWhereInput | BetStakeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserTokenInput = {
    create?: XOR<UserCreateWithoutUserTokenInput, UserUncheckedCreateWithoutUserTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserTokenNestedInput = {
    create?: XOR<UserCreateWithoutUserTokenInput, UserUncheckedCreateWithoutUserTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTokenInput
    upsert?: UserUpsertWithoutUserTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserTokenInput, UserUpdateWithoutUserTokenInput>, UserUncheckedUpdateWithoutUserTokenInput>
  }

  export type UserCreateNestedOneWithoutBetInput = {
    create?: XOR<UserCreateWithoutBetInput, UserUncheckedCreateWithoutBetInput>
    connectOrCreate?: UserCreateOrConnectWithoutBetInput
    connect?: UserWhereUniqueInput
  }

  export type ChoiceCreateNestedManyWithoutBetInput = {
    create?: XOR<ChoiceCreateWithoutBetInput, ChoiceUncheckedCreateWithoutBetInput> | ChoiceCreateWithoutBetInput[] | ChoiceUncheckedCreateWithoutBetInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutBetInput | ChoiceCreateOrConnectWithoutBetInput[]
    createMany?: ChoiceCreateManyBetInputEnvelope
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
  }

  export type BetStakeCreateNestedManyWithoutBetInput = {
    create?: XOR<BetStakeCreateWithoutBetInput, BetStakeUncheckedCreateWithoutBetInput> | BetStakeCreateWithoutBetInput[] | BetStakeUncheckedCreateWithoutBetInput[]
    connectOrCreate?: BetStakeCreateOrConnectWithoutBetInput | BetStakeCreateOrConnectWithoutBetInput[]
    createMany?: BetStakeCreateManyBetInputEnvelope
    connect?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
  }

  export type ChoiceUncheckedCreateNestedManyWithoutBetInput = {
    create?: XOR<ChoiceCreateWithoutBetInput, ChoiceUncheckedCreateWithoutBetInput> | ChoiceCreateWithoutBetInput[] | ChoiceUncheckedCreateWithoutBetInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutBetInput | ChoiceCreateOrConnectWithoutBetInput[]
    createMany?: ChoiceCreateManyBetInputEnvelope
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
  }

  export type BetStakeUncheckedCreateNestedManyWithoutBetInput = {
    create?: XOR<BetStakeCreateWithoutBetInput, BetStakeUncheckedCreateWithoutBetInput> | BetStakeCreateWithoutBetInput[] | BetStakeUncheckedCreateWithoutBetInput[]
    connectOrCreate?: BetStakeCreateOrConnectWithoutBetInput | BetStakeCreateOrConnectWithoutBetInput[]
    createMany?: BetStakeCreateManyBetInputEnvelope
    connect?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutBetNestedInput = {
    create?: XOR<UserCreateWithoutBetInput, UserUncheckedCreateWithoutBetInput>
    connectOrCreate?: UserCreateOrConnectWithoutBetInput
    upsert?: UserUpsertWithoutBetInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBetInput, UserUpdateWithoutBetInput>, UserUncheckedUpdateWithoutBetInput>
  }

  export type ChoiceUpdateManyWithoutBetNestedInput = {
    create?: XOR<ChoiceCreateWithoutBetInput, ChoiceUncheckedCreateWithoutBetInput> | ChoiceCreateWithoutBetInput[] | ChoiceUncheckedCreateWithoutBetInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutBetInput | ChoiceCreateOrConnectWithoutBetInput[]
    upsert?: ChoiceUpsertWithWhereUniqueWithoutBetInput | ChoiceUpsertWithWhereUniqueWithoutBetInput[]
    createMany?: ChoiceCreateManyBetInputEnvelope
    set?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    disconnect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    delete?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    update?: ChoiceUpdateWithWhereUniqueWithoutBetInput | ChoiceUpdateWithWhereUniqueWithoutBetInput[]
    updateMany?: ChoiceUpdateManyWithWhereWithoutBetInput | ChoiceUpdateManyWithWhereWithoutBetInput[]
    deleteMany?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
  }

  export type BetStakeUpdateManyWithoutBetNestedInput = {
    create?: XOR<BetStakeCreateWithoutBetInput, BetStakeUncheckedCreateWithoutBetInput> | BetStakeCreateWithoutBetInput[] | BetStakeUncheckedCreateWithoutBetInput[]
    connectOrCreate?: BetStakeCreateOrConnectWithoutBetInput | BetStakeCreateOrConnectWithoutBetInput[]
    upsert?: BetStakeUpsertWithWhereUniqueWithoutBetInput | BetStakeUpsertWithWhereUniqueWithoutBetInput[]
    createMany?: BetStakeCreateManyBetInputEnvelope
    set?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    disconnect?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    delete?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    connect?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    update?: BetStakeUpdateWithWhereUniqueWithoutBetInput | BetStakeUpdateWithWhereUniqueWithoutBetInput[]
    updateMany?: BetStakeUpdateManyWithWhereWithoutBetInput | BetStakeUpdateManyWithWhereWithoutBetInput[]
    deleteMany?: BetStakeScalarWhereInput | BetStakeScalarWhereInput[]
  }

  export type ChoiceUncheckedUpdateManyWithoutBetNestedInput = {
    create?: XOR<ChoiceCreateWithoutBetInput, ChoiceUncheckedCreateWithoutBetInput> | ChoiceCreateWithoutBetInput[] | ChoiceUncheckedCreateWithoutBetInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutBetInput | ChoiceCreateOrConnectWithoutBetInput[]
    upsert?: ChoiceUpsertWithWhereUniqueWithoutBetInput | ChoiceUpsertWithWhereUniqueWithoutBetInput[]
    createMany?: ChoiceCreateManyBetInputEnvelope
    set?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    disconnect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    delete?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    update?: ChoiceUpdateWithWhereUniqueWithoutBetInput | ChoiceUpdateWithWhereUniqueWithoutBetInput[]
    updateMany?: ChoiceUpdateManyWithWhereWithoutBetInput | ChoiceUpdateManyWithWhereWithoutBetInput[]
    deleteMany?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
  }

  export type BetStakeUncheckedUpdateManyWithoutBetNestedInput = {
    create?: XOR<BetStakeCreateWithoutBetInput, BetStakeUncheckedCreateWithoutBetInput> | BetStakeCreateWithoutBetInput[] | BetStakeUncheckedCreateWithoutBetInput[]
    connectOrCreate?: BetStakeCreateOrConnectWithoutBetInput | BetStakeCreateOrConnectWithoutBetInput[]
    upsert?: BetStakeUpsertWithWhereUniqueWithoutBetInput | BetStakeUpsertWithWhereUniqueWithoutBetInput[]
    createMany?: BetStakeCreateManyBetInputEnvelope
    set?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    disconnect?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    delete?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    connect?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    update?: BetStakeUpdateWithWhereUniqueWithoutBetInput | BetStakeUpdateWithWhereUniqueWithoutBetInput[]
    updateMany?: BetStakeUpdateManyWithWhereWithoutBetInput | BetStakeUpdateManyWithWhereWithoutBetInput[]
    deleteMany?: BetStakeScalarWhereInput | BetStakeScalarWhereInput[]
  }

  export type BetCreateNestedOneWithoutChoicesInput = {
    create?: XOR<BetCreateWithoutChoicesInput, BetUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: BetCreateOrConnectWithoutChoicesInput
    connect?: BetWhereUniqueInput
  }

  export type BetStakeCreateNestedManyWithoutChoiceInput = {
    create?: XOR<BetStakeCreateWithoutChoiceInput, BetStakeUncheckedCreateWithoutChoiceInput> | BetStakeCreateWithoutChoiceInput[] | BetStakeUncheckedCreateWithoutChoiceInput[]
    connectOrCreate?: BetStakeCreateOrConnectWithoutChoiceInput | BetStakeCreateOrConnectWithoutChoiceInput[]
    createMany?: BetStakeCreateManyChoiceInputEnvelope
    connect?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
  }

  export type BetStakeUncheckedCreateNestedManyWithoutChoiceInput = {
    create?: XOR<BetStakeCreateWithoutChoiceInput, BetStakeUncheckedCreateWithoutChoiceInput> | BetStakeCreateWithoutChoiceInput[] | BetStakeUncheckedCreateWithoutChoiceInput[]
    connectOrCreate?: BetStakeCreateOrConnectWithoutChoiceInput | BetStakeCreateOrConnectWithoutChoiceInput[]
    createMany?: BetStakeCreateManyChoiceInputEnvelope
    connect?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
  }

  export type BetUpdateOneWithoutChoicesNestedInput = {
    create?: XOR<BetCreateWithoutChoicesInput, BetUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: BetCreateOrConnectWithoutChoicesInput
    upsert?: BetUpsertWithoutChoicesInput
    disconnect?: BetWhereInput | boolean
    delete?: BetWhereInput | boolean
    connect?: BetWhereUniqueInput
    update?: XOR<XOR<BetUpdateToOneWithWhereWithoutChoicesInput, BetUpdateWithoutChoicesInput>, BetUncheckedUpdateWithoutChoicesInput>
  }

  export type BetStakeUpdateManyWithoutChoiceNestedInput = {
    create?: XOR<BetStakeCreateWithoutChoiceInput, BetStakeUncheckedCreateWithoutChoiceInput> | BetStakeCreateWithoutChoiceInput[] | BetStakeUncheckedCreateWithoutChoiceInput[]
    connectOrCreate?: BetStakeCreateOrConnectWithoutChoiceInput | BetStakeCreateOrConnectWithoutChoiceInput[]
    upsert?: BetStakeUpsertWithWhereUniqueWithoutChoiceInput | BetStakeUpsertWithWhereUniqueWithoutChoiceInput[]
    createMany?: BetStakeCreateManyChoiceInputEnvelope
    set?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    disconnect?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    delete?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    connect?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    update?: BetStakeUpdateWithWhereUniqueWithoutChoiceInput | BetStakeUpdateWithWhereUniqueWithoutChoiceInput[]
    updateMany?: BetStakeUpdateManyWithWhereWithoutChoiceInput | BetStakeUpdateManyWithWhereWithoutChoiceInput[]
    deleteMany?: BetStakeScalarWhereInput | BetStakeScalarWhereInput[]
  }

  export type BetStakeUncheckedUpdateManyWithoutChoiceNestedInput = {
    create?: XOR<BetStakeCreateWithoutChoiceInput, BetStakeUncheckedCreateWithoutChoiceInput> | BetStakeCreateWithoutChoiceInput[] | BetStakeUncheckedCreateWithoutChoiceInput[]
    connectOrCreate?: BetStakeCreateOrConnectWithoutChoiceInput | BetStakeCreateOrConnectWithoutChoiceInput[]
    upsert?: BetStakeUpsertWithWhereUniqueWithoutChoiceInput | BetStakeUpsertWithWhereUniqueWithoutChoiceInput[]
    createMany?: BetStakeCreateManyChoiceInputEnvelope
    set?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    disconnect?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    delete?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    connect?: BetStakeWhereUniqueInput | BetStakeWhereUniqueInput[]
    update?: BetStakeUpdateWithWhereUniqueWithoutChoiceInput | BetStakeUpdateWithWhereUniqueWithoutChoiceInput[]
    updateMany?: BetStakeUpdateManyWithWhereWithoutChoiceInput | BetStakeUpdateManyWithWhereWithoutChoiceInput[]
    deleteMany?: BetStakeScalarWhereInput | BetStakeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBetStakeInput = {
    create?: XOR<UserCreateWithoutBetStakeInput, UserUncheckedCreateWithoutBetStakeInput>
    connectOrCreate?: UserCreateOrConnectWithoutBetStakeInput
    connect?: UserWhereUniqueInput
  }

  export type BetCreateNestedOneWithoutBetStakeInput = {
    create?: XOR<BetCreateWithoutBetStakeInput, BetUncheckedCreateWithoutBetStakeInput>
    connectOrCreate?: BetCreateOrConnectWithoutBetStakeInput
    connect?: BetWhereUniqueInput
  }

  export type ChoiceCreateNestedOneWithoutBetStakeInput = {
    create?: XOR<ChoiceCreateWithoutBetStakeInput, ChoiceUncheckedCreateWithoutBetStakeInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutBetStakeInput
    connect?: ChoiceWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutBetStakeNestedInput = {
    create?: XOR<UserCreateWithoutBetStakeInput, UserUncheckedCreateWithoutBetStakeInput>
    connectOrCreate?: UserCreateOrConnectWithoutBetStakeInput
    upsert?: UserUpsertWithoutBetStakeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBetStakeInput, UserUpdateWithoutBetStakeInput>, UserUncheckedUpdateWithoutBetStakeInput>
  }

  export type BetUpdateOneRequiredWithoutBetStakeNestedInput = {
    create?: XOR<BetCreateWithoutBetStakeInput, BetUncheckedCreateWithoutBetStakeInput>
    connectOrCreate?: BetCreateOrConnectWithoutBetStakeInput
    upsert?: BetUpsertWithoutBetStakeInput
    connect?: BetWhereUniqueInput
    update?: XOR<XOR<BetUpdateToOneWithWhereWithoutBetStakeInput, BetUpdateWithoutBetStakeInput>, BetUncheckedUpdateWithoutBetStakeInput>
  }

  export type ChoiceUpdateOneRequiredWithoutBetStakeNestedInput = {
    create?: XOR<ChoiceCreateWithoutBetStakeInput, ChoiceUncheckedCreateWithoutBetStakeInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutBetStakeInput
    upsert?: ChoiceUpsertWithoutBetStakeInput
    connect?: ChoiceWhereUniqueInput
    update?: XOR<XOR<ChoiceUpdateToOneWithWhereWithoutBetStakeInput, ChoiceUpdateWithoutBetStakeInput>, ChoiceUncheckedUpdateWithoutBetStakeInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserCreateWithoutGroupInput = {
    user_id?: string
    name: string
    UserToken?: UserTokenCreateNestedManyWithoutUserInput
    Bet?: BetCreateNestedManyWithoutOpenedByInput
    BetStake?: BetStakeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGroupInput = {
    user_id?: string
    name: string
    UserToken?: UserTokenUncheckedCreateNestedManyWithoutUserInput
    Bet?: BetUncheckedCreateNestedManyWithoutOpenedByInput
    BetStake?: BetStakeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroupInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput>
  }

  export type UserCreateManyGroupInputEnvelope = {
    data: UserCreateManyGroupInput | UserCreateManyGroupInput[]
  }

  export type UserUpsertWithWhereUniqueWithoutGroupInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutGroupInput, UserUncheckedUpdateWithoutGroupInput>
    create: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput>
  }

  export type UserUpdateWithWhereUniqueWithoutGroupInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutGroupInput, UserUncheckedUpdateWithoutGroupInput>
  }

  export type UserUpdateManyWithWhereWithoutGroupInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutGroupInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    user_id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    groupPin?: StringFilter<"User"> | string
  }

  export type GroupCreateWithoutUserInput = {
    pin?: string
    isActive?: boolean
  }

  export type GroupUncheckedCreateWithoutUserInput = {
    pin?: string
    isActive?: boolean
  }

  export type GroupCreateOrConnectWithoutUserInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput>
  }

  export type UserTokenCreateWithoutUserInput = {
    token: string
  }

  export type UserTokenUncheckedCreateWithoutUserInput = {
    token: string
  }

  export type UserTokenCreateOrConnectWithoutUserInput = {
    where: UserTokenWhereUniqueInput
    create: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput>
  }

  export type UserTokenCreateManyUserInputEnvelope = {
    data: UserTokenCreateManyUserInput | UserTokenCreateManyUserInput[]
  }

  export type BetCreateWithoutOpenedByInput = {
    bet_id: string
    name: string
    isClosed: boolean
    choices?: ChoiceCreateNestedManyWithoutBetInput
    BetStake?: BetStakeCreateNestedManyWithoutBetInput
  }

  export type BetUncheckedCreateWithoutOpenedByInput = {
    bet_id: string
    name: string
    isClosed: boolean
    choices?: ChoiceUncheckedCreateNestedManyWithoutBetInput
    BetStake?: BetStakeUncheckedCreateNestedManyWithoutBetInput
  }

  export type BetCreateOrConnectWithoutOpenedByInput = {
    where: BetWhereUniqueInput
    create: XOR<BetCreateWithoutOpenedByInput, BetUncheckedCreateWithoutOpenedByInput>
  }

  export type BetCreateManyOpenedByInputEnvelope = {
    data: BetCreateManyOpenedByInput | BetCreateManyOpenedByInput[]
  }

  export type BetStakeCreateWithoutUserInput = {
    amount: number
    Bet: BetCreateNestedOneWithoutBetStakeInput
    Choice: ChoiceCreateNestedOneWithoutBetStakeInput
  }

  export type BetStakeUncheckedCreateWithoutUserInput = {
    choice_id: string
    bet_id: string
    amount: number
  }

  export type BetStakeCreateOrConnectWithoutUserInput = {
    where: BetStakeWhereUniqueInput
    create: XOR<BetStakeCreateWithoutUserInput, BetStakeUncheckedCreateWithoutUserInput>
  }

  export type BetStakeCreateManyUserInputEnvelope = {
    data: BetStakeCreateManyUserInput | BetStakeCreateManyUserInput[]
  }

  export type GroupUpsertWithoutUserInput = {
    update: XOR<GroupUpdateWithoutUserInput, GroupUncheckedUpdateWithoutUserInput>
    create: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutUserInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutUserInput, GroupUncheckedUpdateWithoutUserInput>
  }

  export type GroupUpdateWithoutUserInput = {
    pin?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupUncheckedUpdateWithoutUserInput = {
    pin?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTokenWhereUniqueInput
    update: XOR<UserTokenUpdateWithoutUserInput, UserTokenUncheckedUpdateWithoutUserInput>
    create: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput>
  }

  export type UserTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTokenWhereUniqueInput
    data: XOR<UserTokenUpdateWithoutUserInput, UserTokenUncheckedUpdateWithoutUserInput>
  }

  export type UserTokenUpdateManyWithWhereWithoutUserInput = {
    where: UserTokenScalarWhereInput
    data: XOR<UserTokenUpdateManyMutationInput, UserTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTokenScalarWhereInput = {
    AND?: UserTokenScalarWhereInput | UserTokenScalarWhereInput[]
    OR?: UserTokenScalarWhereInput[]
    NOT?: UserTokenScalarWhereInput | UserTokenScalarWhereInput[]
    user_id?: StringFilter<"UserToken"> | string
    token?: StringFilter<"UserToken"> | string
  }

  export type BetUpsertWithWhereUniqueWithoutOpenedByInput = {
    where: BetWhereUniqueInput
    update: XOR<BetUpdateWithoutOpenedByInput, BetUncheckedUpdateWithoutOpenedByInput>
    create: XOR<BetCreateWithoutOpenedByInput, BetUncheckedCreateWithoutOpenedByInput>
  }

  export type BetUpdateWithWhereUniqueWithoutOpenedByInput = {
    where: BetWhereUniqueInput
    data: XOR<BetUpdateWithoutOpenedByInput, BetUncheckedUpdateWithoutOpenedByInput>
  }

  export type BetUpdateManyWithWhereWithoutOpenedByInput = {
    where: BetScalarWhereInput
    data: XOR<BetUpdateManyMutationInput, BetUncheckedUpdateManyWithoutOpenedByInput>
  }

  export type BetScalarWhereInput = {
    AND?: BetScalarWhereInput | BetScalarWhereInput[]
    OR?: BetScalarWhereInput[]
    NOT?: BetScalarWhereInput | BetScalarWhereInput[]
    bet_id?: StringFilter<"Bet"> | string
    name?: StringFilter<"Bet"> | string
    isClosed?: BoolFilter<"Bet"> | boolean
    userUser_id?: StringFilter<"Bet"> | string
  }

  export type BetStakeUpsertWithWhereUniqueWithoutUserInput = {
    where: BetStakeWhereUniqueInput
    update: XOR<BetStakeUpdateWithoutUserInput, BetStakeUncheckedUpdateWithoutUserInput>
    create: XOR<BetStakeCreateWithoutUserInput, BetStakeUncheckedCreateWithoutUserInput>
  }

  export type BetStakeUpdateWithWhereUniqueWithoutUserInput = {
    where: BetStakeWhereUniqueInput
    data: XOR<BetStakeUpdateWithoutUserInput, BetStakeUncheckedUpdateWithoutUserInput>
  }

  export type BetStakeUpdateManyWithWhereWithoutUserInput = {
    where: BetStakeScalarWhereInput
    data: XOR<BetStakeUpdateManyMutationInput, BetStakeUncheckedUpdateManyWithoutUserInput>
  }

  export type BetStakeScalarWhereInput = {
    AND?: BetStakeScalarWhereInput | BetStakeScalarWhereInput[]
    OR?: BetStakeScalarWhereInput[]
    NOT?: BetStakeScalarWhereInput | BetStakeScalarWhereInput[]
    user_id?: StringFilter<"BetStake"> | string
    choice_id?: StringFilter<"BetStake"> | string
    bet_id?: StringFilter<"BetStake"> | string
    amount?: IntFilter<"BetStake"> | number
  }

  export type UserCreateWithoutUserTokenInput = {
    user_id?: string
    name: string
    group?: GroupCreateNestedOneWithoutUserInput
    Bet?: BetCreateNestedManyWithoutOpenedByInput
    BetStake?: BetStakeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserTokenInput = {
    user_id?: string
    name: string
    groupPin: string
    Bet?: BetUncheckedCreateNestedManyWithoutOpenedByInput
    BetStake?: BetStakeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserTokenInput, UserUncheckedCreateWithoutUserTokenInput>
  }

  export type UserUpsertWithoutUserTokenInput = {
    update: XOR<UserUpdateWithoutUserTokenInput, UserUncheckedUpdateWithoutUserTokenInput>
    create: XOR<UserCreateWithoutUserTokenInput, UserUncheckedCreateWithoutUserTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserTokenInput, UserUncheckedUpdateWithoutUserTokenInput>
  }

  export type UserUpdateWithoutUserTokenInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneWithoutUserNestedInput
    Bet?: BetUpdateManyWithoutOpenedByNestedInput
    BetStake?: BetStakeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserTokenInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groupPin?: StringFieldUpdateOperationsInput | string
    Bet?: BetUncheckedUpdateManyWithoutOpenedByNestedInput
    BetStake?: BetStakeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBetInput = {
    user_id?: string
    name: string
    group?: GroupCreateNestedOneWithoutUserInput
    UserToken?: UserTokenCreateNestedManyWithoutUserInput
    BetStake?: BetStakeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBetInput = {
    user_id?: string
    name: string
    groupPin: string
    UserToken?: UserTokenUncheckedCreateNestedManyWithoutUserInput
    BetStake?: BetStakeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBetInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBetInput, UserUncheckedCreateWithoutBetInput>
  }

  export type ChoiceCreateWithoutBetInput = {
    choice_id: string
    text: string
    winningChoice?: boolean
    BetStake?: BetStakeCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceUncheckedCreateWithoutBetInput = {
    choice_id: string
    text: string
    winningChoice?: boolean
    BetStake?: BetStakeUncheckedCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceCreateOrConnectWithoutBetInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutBetInput, ChoiceUncheckedCreateWithoutBetInput>
  }

  export type ChoiceCreateManyBetInputEnvelope = {
    data: ChoiceCreateManyBetInput | ChoiceCreateManyBetInput[]
  }

  export type BetStakeCreateWithoutBetInput = {
    amount: number
    User: UserCreateNestedOneWithoutBetStakeInput
    Choice: ChoiceCreateNestedOneWithoutBetStakeInput
  }

  export type BetStakeUncheckedCreateWithoutBetInput = {
    user_id: string
    choice_id: string
    amount: number
  }

  export type BetStakeCreateOrConnectWithoutBetInput = {
    where: BetStakeWhereUniqueInput
    create: XOR<BetStakeCreateWithoutBetInput, BetStakeUncheckedCreateWithoutBetInput>
  }

  export type BetStakeCreateManyBetInputEnvelope = {
    data: BetStakeCreateManyBetInput | BetStakeCreateManyBetInput[]
  }

  export type UserUpsertWithoutBetInput = {
    update: XOR<UserUpdateWithoutBetInput, UserUncheckedUpdateWithoutBetInput>
    create: XOR<UserCreateWithoutBetInput, UserUncheckedCreateWithoutBetInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBetInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBetInput, UserUncheckedUpdateWithoutBetInput>
  }

  export type UserUpdateWithoutBetInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneWithoutUserNestedInput
    UserToken?: UserTokenUpdateManyWithoutUserNestedInput
    BetStake?: BetStakeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBetInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groupPin?: StringFieldUpdateOperationsInput | string
    UserToken?: UserTokenUncheckedUpdateManyWithoutUserNestedInput
    BetStake?: BetStakeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChoiceUpsertWithWhereUniqueWithoutBetInput = {
    where: ChoiceWhereUniqueInput
    update: XOR<ChoiceUpdateWithoutBetInput, ChoiceUncheckedUpdateWithoutBetInput>
    create: XOR<ChoiceCreateWithoutBetInput, ChoiceUncheckedCreateWithoutBetInput>
  }

  export type ChoiceUpdateWithWhereUniqueWithoutBetInput = {
    where: ChoiceWhereUniqueInput
    data: XOR<ChoiceUpdateWithoutBetInput, ChoiceUncheckedUpdateWithoutBetInput>
  }

  export type ChoiceUpdateManyWithWhereWithoutBetInput = {
    where: ChoiceScalarWhereInput
    data: XOR<ChoiceUpdateManyMutationInput, ChoiceUncheckedUpdateManyWithoutBetInput>
  }

  export type ChoiceScalarWhereInput = {
    AND?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
    OR?: ChoiceScalarWhereInput[]
    NOT?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
    choice_id?: StringFilter<"Choice"> | string
    text?: StringFilter<"Choice"> | string
    winningChoice?: BoolFilter<"Choice"> | boolean
    bet_id?: StringFilter<"Choice"> | string
  }

  export type BetStakeUpsertWithWhereUniqueWithoutBetInput = {
    where: BetStakeWhereUniqueInput
    update: XOR<BetStakeUpdateWithoutBetInput, BetStakeUncheckedUpdateWithoutBetInput>
    create: XOR<BetStakeCreateWithoutBetInput, BetStakeUncheckedCreateWithoutBetInput>
  }

  export type BetStakeUpdateWithWhereUniqueWithoutBetInput = {
    where: BetStakeWhereUniqueInput
    data: XOR<BetStakeUpdateWithoutBetInput, BetStakeUncheckedUpdateWithoutBetInput>
  }

  export type BetStakeUpdateManyWithWhereWithoutBetInput = {
    where: BetStakeScalarWhereInput
    data: XOR<BetStakeUpdateManyMutationInput, BetStakeUncheckedUpdateManyWithoutBetInput>
  }

  export type BetCreateWithoutChoicesInput = {
    bet_id: string
    name: string
    isClosed: boolean
    openedBy: UserCreateNestedOneWithoutBetInput
    BetStake?: BetStakeCreateNestedManyWithoutBetInput
  }

  export type BetUncheckedCreateWithoutChoicesInput = {
    bet_id: string
    name: string
    isClosed: boolean
    userUser_id: string
    BetStake?: BetStakeUncheckedCreateNestedManyWithoutBetInput
  }

  export type BetCreateOrConnectWithoutChoicesInput = {
    where: BetWhereUniqueInput
    create: XOR<BetCreateWithoutChoicesInput, BetUncheckedCreateWithoutChoicesInput>
  }

  export type BetStakeCreateWithoutChoiceInput = {
    amount: number
    User: UserCreateNestedOneWithoutBetStakeInput
    Bet: BetCreateNestedOneWithoutBetStakeInput
  }

  export type BetStakeUncheckedCreateWithoutChoiceInput = {
    user_id: string
    bet_id: string
    amount: number
  }

  export type BetStakeCreateOrConnectWithoutChoiceInput = {
    where: BetStakeWhereUniqueInput
    create: XOR<BetStakeCreateWithoutChoiceInput, BetStakeUncheckedCreateWithoutChoiceInput>
  }

  export type BetStakeCreateManyChoiceInputEnvelope = {
    data: BetStakeCreateManyChoiceInput | BetStakeCreateManyChoiceInput[]
  }

  export type BetUpsertWithoutChoicesInput = {
    update: XOR<BetUpdateWithoutChoicesInput, BetUncheckedUpdateWithoutChoicesInput>
    create: XOR<BetCreateWithoutChoicesInput, BetUncheckedCreateWithoutChoicesInput>
    where?: BetWhereInput
  }

  export type BetUpdateToOneWithWhereWithoutChoicesInput = {
    where?: BetWhereInput
    data: XOR<BetUpdateWithoutChoicesInput, BetUncheckedUpdateWithoutChoicesInput>
  }

  export type BetUpdateWithoutChoicesInput = {
    bet_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    openedBy?: UserUpdateOneRequiredWithoutBetNestedInput
    BetStake?: BetStakeUpdateManyWithoutBetNestedInput
  }

  export type BetUncheckedUpdateWithoutChoicesInput = {
    bet_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    userUser_id?: StringFieldUpdateOperationsInput | string
    BetStake?: BetStakeUncheckedUpdateManyWithoutBetNestedInput
  }

  export type BetStakeUpsertWithWhereUniqueWithoutChoiceInput = {
    where: BetStakeWhereUniqueInput
    update: XOR<BetStakeUpdateWithoutChoiceInput, BetStakeUncheckedUpdateWithoutChoiceInput>
    create: XOR<BetStakeCreateWithoutChoiceInput, BetStakeUncheckedCreateWithoutChoiceInput>
  }

  export type BetStakeUpdateWithWhereUniqueWithoutChoiceInput = {
    where: BetStakeWhereUniqueInput
    data: XOR<BetStakeUpdateWithoutChoiceInput, BetStakeUncheckedUpdateWithoutChoiceInput>
  }

  export type BetStakeUpdateManyWithWhereWithoutChoiceInput = {
    where: BetStakeScalarWhereInput
    data: XOR<BetStakeUpdateManyMutationInput, BetStakeUncheckedUpdateManyWithoutChoiceInput>
  }

  export type UserCreateWithoutBetStakeInput = {
    user_id?: string
    name: string
    group?: GroupCreateNestedOneWithoutUserInput
    UserToken?: UserTokenCreateNestedManyWithoutUserInput
    Bet?: BetCreateNestedManyWithoutOpenedByInput
  }

  export type UserUncheckedCreateWithoutBetStakeInput = {
    user_id?: string
    name: string
    groupPin: string
    UserToken?: UserTokenUncheckedCreateNestedManyWithoutUserInput
    Bet?: BetUncheckedCreateNestedManyWithoutOpenedByInput
  }

  export type UserCreateOrConnectWithoutBetStakeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBetStakeInput, UserUncheckedCreateWithoutBetStakeInput>
  }

  export type BetCreateWithoutBetStakeInput = {
    bet_id: string
    name: string
    isClosed: boolean
    openedBy: UserCreateNestedOneWithoutBetInput
    choices?: ChoiceCreateNestedManyWithoutBetInput
  }

  export type BetUncheckedCreateWithoutBetStakeInput = {
    bet_id: string
    name: string
    isClosed: boolean
    userUser_id: string
    choices?: ChoiceUncheckedCreateNestedManyWithoutBetInput
  }

  export type BetCreateOrConnectWithoutBetStakeInput = {
    where: BetWhereUniqueInput
    create: XOR<BetCreateWithoutBetStakeInput, BetUncheckedCreateWithoutBetStakeInput>
  }

  export type ChoiceCreateWithoutBetStakeInput = {
    choice_id: string
    text: string
    winningChoice?: boolean
    Bet?: BetCreateNestedOneWithoutChoicesInput
  }

  export type ChoiceUncheckedCreateWithoutBetStakeInput = {
    choice_id: string
    text: string
    winningChoice?: boolean
    bet_id: string
  }

  export type ChoiceCreateOrConnectWithoutBetStakeInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutBetStakeInput, ChoiceUncheckedCreateWithoutBetStakeInput>
  }

  export type UserUpsertWithoutBetStakeInput = {
    update: XOR<UserUpdateWithoutBetStakeInput, UserUncheckedUpdateWithoutBetStakeInput>
    create: XOR<UserCreateWithoutBetStakeInput, UserUncheckedCreateWithoutBetStakeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBetStakeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBetStakeInput, UserUncheckedUpdateWithoutBetStakeInput>
  }

  export type UserUpdateWithoutBetStakeInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneWithoutUserNestedInput
    UserToken?: UserTokenUpdateManyWithoutUserNestedInput
    Bet?: BetUpdateManyWithoutOpenedByNestedInput
  }

  export type UserUncheckedUpdateWithoutBetStakeInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groupPin?: StringFieldUpdateOperationsInput | string
    UserToken?: UserTokenUncheckedUpdateManyWithoutUserNestedInput
    Bet?: BetUncheckedUpdateManyWithoutOpenedByNestedInput
  }

  export type BetUpsertWithoutBetStakeInput = {
    update: XOR<BetUpdateWithoutBetStakeInput, BetUncheckedUpdateWithoutBetStakeInput>
    create: XOR<BetCreateWithoutBetStakeInput, BetUncheckedCreateWithoutBetStakeInput>
    where?: BetWhereInput
  }

  export type BetUpdateToOneWithWhereWithoutBetStakeInput = {
    where?: BetWhereInput
    data: XOR<BetUpdateWithoutBetStakeInput, BetUncheckedUpdateWithoutBetStakeInput>
  }

  export type BetUpdateWithoutBetStakeInput = {
    bet_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    openedBy?: UserUpdateOneRequiredWithoutBetNestedInput
    choices?: ChoiceUpdateManyWithoutBetNestedInput
  }

  export type BetUncheckedUpdateWithoutBetStakeInput = {
    bet_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    userUser_id?: StringFieldUpdateOperationsInput | string
    choices?: ChoiceUncheckedUpdateManyWithoutBetNestedInput
  }

  export type ChoiceUpsertWithoutBetStakeInput = {
    update: XOR<ChoiceUpdateWithoutBetStakeInput, ChoiceUncheckedUpdateWithoutBetStakeInput>
    create: XOR<ChoiceCreateWithoutBetStakeInput, ChoiceUncheckedCreateWithoutBetStakeInput>
    where?: ChoiceWhereInput
  }

  export type ChoiceUpdateToOneWithWhereWithoutBetStakeInput = {
    where?: ChoiceWhereInput
    data: XOR<ChoiceUpdateWithoutBetStakeInput, ChoiceUncheckedUpdateWithoutBetStakeInput>
  }

  export type ChoiceUpdateWithoutBetStakeInput = {
    choice_id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    winningChoice?: BoolFieldUpdateOperationsInput | boolean
    Bet?: BetUpdateOneWithoutChoicesNestedInput
  }

  export type ChoiceUncheckedUpdateWithoutBetStakeInput = {
    choice_id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    winningChoice?: BoolFieldUpdateOperationsInput | boolean
    bet_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyGroupInput = {
    user_id?: string
    name: string
  }

  export type UserUpdateWithoutGroupInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    UserToken?: UserTokenUpdateManyWithoutUserNestedInput
    Bet?: BetUpdateManyWithoutOpenedByNestedInput
    BetStake?: BetStakeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    UserToken?: UserTokenUncheckedUpdateManyWithoutUserNestedInput
    Bet?: BetUncheckedUpdateManyWithoutOpenedByNestedInput
    BetStake?: BetStakeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutGroupInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserTokenCreateManyUserInput = {
    token: string
  }

  export type BetCreateManyOpenedByInput = {
    bet_id: string
    name: string
    isClosed: boolean
  }

  export type BetStakeCreateManyUserInput = {
    choice_id: string
    bet_id: string
    amount: number
  }

  export type UserTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type UserTokenUncheckedUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type UserTokenUncheckedUpdateManyWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type BetUpdateWithoutOpenedByInput = {
    bet_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    choices?: ChoiceUpdateManyWithoutBetNestedInput
    BetStake?: BetStakeUpdateManyWithoutBetNestedInput
  }

  export type BetUncheckedUpdateWithoutOpenedByInput = {
    bet_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    choices?: ChoiceUncheckedUpdateManyWithoutBetNestedInput
    BetStake?: BetStakeUncheckedUpdateManyWithoutBetNestedInput
  }

  export type BetUncheckedUpdateManyWithoutOpenedByInput = {
    bet_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BetStakeUpdateWithoutUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    Bet?: BetUpdateOneRequiredWithoutBetStakeNestedInput
    Choice?: ChoiceUpdateOneRequiredWithoutBetStakeNestedInput
  }

  export type BetStakeUncheckedUpdateWithoutUserInput = {
    choice_id?: StringFieldUpdateOperationsInput | string
    bet_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type BetStakeUncheckedUpdateManyWithoutUserInput = {
    choice_id?: StringFieldUpdateOperationsInput | string
    bet_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type ChoiceCreateManyBetInput = {
    choice_id: string
    text: string
    winningChoice?: boolean
  }

  export type BetStakeCreateManyBetInput = {
    user_id: string
    choice_id: string
    amount: number
  }

  export type ChoiceUpdateWithoutBetInput = {
    choice_id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    winningChoice?: BoolFieldUpdateOperationsInput | boolean
    BetStake?: BetStakeUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceUncheckedUpdateWithoutBetInput = {
    choice_id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    winningChoice?: BoolFieldUpdateOperationsInput | boolean
    BetStake?: BetStakeUncheckedUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceUncheckedUpdateManyWithoutBetInput = {
    choice_id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    winningChoice?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BetStakeUpdateWithoutBetInput = {
    amount?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneRequiredWithoutBetStakeNestedInput
    Choice?: ChoiceUpdateOneRequiredWithoutBetStakeNestedInput
  }

  export type BetStakeUncheckedUpdateWithoutBetInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    choice_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type BetStakeUncheckedUpdateManyWithoutBetInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    choice_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type BetStakeCreateManyChoiceInput = {
    user_id: string
    bet_id: string
    amount: number
  }

  export type BetStakeUpdateWithoutChoiceInput = {
    amount?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneRequiredWithoutBetStakeNestedInput
    Bet?: BetUpdateOneRequiredWithoutBetStakeNestedInput
  }

  export type BetStakeUncheckedUpdateWithoutChoiceInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bet_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }

  export type BetStakeUncheckedUpdateManyWithoutChoiceInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bet_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}