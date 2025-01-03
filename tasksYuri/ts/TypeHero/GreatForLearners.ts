// https://typehero.dev/explore/easy

// Readonly (Универсальные аргументы функций)
// https://typehero.dev/challenge/readonly
// написали свой readonly, 
type MyReadonly<T> = { 
	readonly [K in keyof T]: T[K] 
};

interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}
todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property

// также есть уже готовый Utility Types Readonly<T>, работает также
const todo2: Readonly<Todo> = {
  title: "Hey",
  description: "foobar"
}
todo2.title = "Hello" // Error: cannot reassign a readonly property
todo2.description = "barFoo" // Error: cannot reassign a readonly property
// ------------------------------------------------------- //



// ------------------------------------------------------- //
// Tuple to Object
// https://typehero.dev/challenge/tuple-to-object
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const sym1 = Symbol(1)
const sym2 = Symbol(2)
const tupleSymbol = [sym1, sym2] as const
const tupleMix = [1, '2', 3, '4', sym1] as const
const testErrpr = [[1,2,'qwe'], {}]

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
	[Key in T[number]]: Key;
};

type result = TupleToObject<typeof tuple> 
// expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

type result2 = TupleToObject<typeof tupleNumber> 
// expected { 1: 1, 2: 2, 3: 3, 4: 4 }

type result3 = TupleToObject<typeof tupleSymbol>
// expected { [Symbol(1)]: Symbol(1), [Symbol(2)]: Symbol(2) }

type result4 = TupleToObject<typeof tupleMix>
// expected type { 1: 1, '2': '2', 3: 3, '4': '4', [sym1]: typeof sym1 }

type TestErrpr = TupleToObject<typeof testErrpr>

// ------------------------------------------------------- //



// ------------------------------------------------------- //
// First of Array
// https://typehero.dev/challenge/first-of-array
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type First<T extends (number | string | object | undefined)[]> = T extends [] ? never:  T[0]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
type head3 = First<[() => 123, { a: string }]> // expected to be () => 123
type head4 = First<[]> // expected to be never
type head5 = First<[undefined]> // expected to be undefined
type head6 = First<{ 0: 'arrayLike' }> // expected to be 'arrayLike'
// ------------------------------------------------------- //



// ------------------------------------------------------- //
// Length of Tuple
// https://typehero.dev/challenge/length-of-tuple
const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type Length<T extends readonly string[]> = T['length']
type teslaLength = Length<typeof tesla>  // expected 4
type spaceXLength = Length<typeof spaceX> // expected 5
// ------------------------------------------------------- //



// ------------------------------------------------------- //
// Exclude - Исключить
// https://typehero.dev/challenge/exclude
type Union = "a" | "b" | "c"
type MyExclude<U, Exc> = U extends Exc ? never : U;

type Excluded = MyExclude<Union, "c">;

// уже есть нативныйExclude
// Мы можем разложить это по полочкам следующим образом:
// 1. Может ли "a" быть присвоено (в данном случае равно) "c"? Нет. Возвращает "a".
// 2. Может ли "b" быть присвоено "c"? Нет. Возвращает "b".
// 3. Можно ли присвоить "c" букве "с"? Да. В этом случае мы возвращаем пустой тип (или "никогда").
// ------------------------------------------------------- //



// ------------------------------------------------------- //
// Awaited
// https://typehero.dev/challenge/awaited
// как получить тип из ExampleType если он обернут в Promise
// можно было написать свой Awaited, но хз, есть уже готовый Awaited
type MyAwaited<T> = Awaited<T>

type ExampleType = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }


type Result = MyAwaited<ExampleType> // string
type ResultX = MyAwaited<Y> // { field: number }
// и т.д.
// ------------------------------------------------------- //



// ------------------------------------------------------- //
// Concat
// https://typehero.dev/challenge/concat
type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [...T, ...U]
const tupleConcat = [1] as const

type ResultConcat = Concat<[1], [2]> // expected to be [1, 2]
type ResultConcat2 = Concat<[], [1]>
type ResultConcat3 = Concat<[], []>
type ResultConcat4 = Concat<typeof tupleConcat, typeof tupleConcat>
type ResultConcat5 = Concat<[1, 2], [3, 4]>
type ResultConcat6 = Concat<['1', 2, '3'], [false, boolean, '4']>
// ------------------------------------------------------- //



// ------------------------------------------------------- //
// If
// https://typehero.dev/challenge/if
type If<Condition extends boolean, T, F> = Condition extends true ? T : F


type IfErr = If<null, 'a', 2> // expected err
type IfA = If<true, 'a', 'b'>  // expected to be 'a'
type IfB = If<false, 'a', 'b'> // expected to be 'b'
type IfC = If<boolean, 'a', 2> // expected 2 | 'a'
/*
В TypeScript, когда вы используете условные типы с обобщениями, 
которые могут принимать несколько значений (например, boolean), 
результатом будет объединение всех возможных типов, 
которые могут быть возвращены в зависимости от условий. 
Поэтому IfC возвращает 2 | 'a'.
*/
// ------------------------------------------------------- //



// ------------------------------------------------------- //
// Includes
// https://typehero.dev/challenge/includes

// ------------------------------------------------------- //