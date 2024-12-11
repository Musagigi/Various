// https://typehero.dev/explore/beginner

// -----------Generic Function Arguments (Универсальные аргументы функций)
// https://typehero.dev/challenge/generic-function-arguments
type TMapArr = (string | number)[];
type TFn = (value: string | number, index: number, array: TMapArr) => string | number;

const strings = ['1', '1', '2', '3', '5'];
const numbers = [1, 1, 2, 3, 5];
const mapArray = <T, U>(arr: T[], fn: (val: T) => U) => arr.map(fn);

mapArray(numbers, (value) => value)
mapArray(numbers, (value) => value + '')
mapArray(strings, (value) => parseInt(value))
mapArray(numbers, (value) => value * 2)
// ------------------------------------------------------- //



// -----------Generic Type Arguments (Универсальные аргументы типа или интерфейса)
// https://typehero.dev/challenge/generic-type-arguments
interface Row<T> {
  label: string;
  value: T;
  disabled: boolean;
}
type NumberRow = Row<number>;
type StringRow = Row<string>;

//Multiple Generic Arguments
type GroceryItem<Name, Price, InStock> = {
  name: Name;
  price: Price;
  inStock: InStock;
};
type AvocadoToast = GroceryItem<'Avocado Toast', 12.99, true>;

// можно так про satisfies есть видео на ютубе
const avocadoToast = {
  name: 'Avocado Toast',
  price: 12.99,
  inStock: true,
} satisfies AvocadoToast;

// можно так
const avocadoToast2: AvocadoToast = {
  name: 'Avocado Toast',
  price: 12.99,
  inStock: true,
};
// ------------------------------------------------------- //




// -----------Generic Type Constraints (Ограничения универсальных типов)
// Constraints - ограничения
// https://typehero.dev/challenge/generic-type-constraints
type Row2<T> = {
  value: T;
  label: string;
  orientation: 'vertical' | 'horizontal';
};
// Тут в дженерик типе <Т> можно передать любой тип, ЭТО ПЛОХО, нужно его ограничить
type BooleanRow = Row2<boolean>;
type LiteralStrictRow = Row2<'test'>;
type RegexRow = Row2<RegExp>;
type RowRowRowStringRow = Row2<Row2<Row2<Row2<string>>>>;
type VoidFuncRow = Row2<() => void>
type StringArrayRow = Row2<string[]>;

// создаем ограничиваюищй тип для дженерик типа
type RowConstraints = string | number | (() => string | number);

// теперь дженерик тип Т расширяется от RowConstraints, тем самым ограничиваясь
type Row2Constrs<T extends RowConstraints> = {
  value: T;
  label: string;
  orientation: 'vertical' | 'horizontal';
}
// теперь тут будут ошибки
// type BooleanRow2 = Row2Constrs<boolean>;
// type StringArrayRow2 = Row2Constrs<string[]>;
type VoidFuncRow2 = Row2Constrs<() => string | number>
// ------------------------------------------------------- //



// ------------------------------------------------------- //
// Index Signatures
// https://typehero.dev/challenge/index-signatures
// тут вроде все понятно
type GroceryList = {
	[name: string]: number;
};
const groceryList: GroceryList = {
  carrots: 5,
  potatoes: 12,
  sweetPotatoes: 2,
  turnips: 1,
  parsnips: 1,
  beets: 10,
  radishes: 2,
  rutabagas: 1,
  onions: 3,
  garlic: 2,
};

type InappropriateActionBySituation = {
	[action: string]: string[];
};
const inappropriateActionBySituation: InappropriateActionBySituation = {
  funeral: [
    'excessive laughter',
    'bringing up personal achievements',
    'insisting everyone joins you in loudly singing the 1991 Queen track "The Show Must Go On"',
  ],
  medicalDiagnosis: [
    'jokes about American healthcare',
    'arguing that WebMD says otherwise',
    'doomscrolling twitter instead of listening',
  ],
  leetcodeInterview: [
    'praise of CSS',
    'citing XKCD comics by number from memory',
    'use of emojis in whiteboard exercises followed by pontificating about your deep knowledge of UTF-16',
  ],
  friendExperiencingHeartbreak: [
    'victory dance because you hated their S.O.',
    'offers to turn on the 1999 cinematic masterpiece, The Mummy, with Brendan Fraser and Rachel Weisz',
  ],
};

type CharactersById = {
	[char: string]: {
		id: number;
		name: string;
		status: string;
		species: string;
	};
};
const charactersById: CharactersById = {
  1: {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
  },
  2: {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
  },
  3: {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
  },
  4: {
    id: 4,
    name: 'Beth Smith',
    status: 'Alive',
    species: 'Human',
  },
  5: {
    id: 5,
    name: 'Jerry Smith',
    status: 'Alive',
    species: 'Human',
  },
};
// ------------------------------------------------------- //



// ------------------------------------------------------- //
// Indexed Types
// https://typehero.dev/challenge/indexed-types
type Cars = ['Bugatti', 'Ferarri', 'Lambo', 'Porsche', 'Toyota Corolla'];
type SecondCar = Cars[1];

type Donations = {
  Bono: 15_000_000;
  'J.K. Rowling': 160_000_000;
  'Taylor Swift': 45_000_000;
  'Elton John': 600_000_000;
  'Angelina Jolie and Brad Pitt': 100_000_000;
};
type EltonDonations = Donations['Elton John'];

// Со строками так не работает, будет просто string
type Question = 'Have the humans delivered their ultimate cup of coffee?';
type FirstCharacter = Question[0];
// ------------------------------------------------------- //



// ------------------------------------------------------- //
// The `keyof` operator
// https://typehero.dev/challenge/keyof
const casettesByArtist = {
  'Alanis Morissette': 2,
  'Mariah Carey': '8',
  'Nirvana': '3',
  'Oasis': true,
  'Radiohead': 3,
  'No Doubt': 3,
  'Backstreet Boys': 3,
  'Spice Girls': 2,
  'Green Day': 2,
  'Pearl Jam': 5,
  'Metallica': 5,
  "Guns N' Roses": 2,
  'U2': 3,
  'Aerosmith': 4,
  'R.E.M.': 4,
  'Blur': 3,
  'The Smashing Pumpkins': 5,
  'Britney Spears': 3,
  'Whitney Houston': 3,
};

// typeof дает возможность различать значение и тип существующего объекта.
type CasettesByArtist = typeof casettesByArtist
// получили список ключей объекта
type Artist = keyof CasettesByArtist


// можно написать в одну строку
// type CasettesByArtist = keyof typeof casettesByArtist
const getCasetteCount = (artist: Artist) => {
  return casettesByArtist[artist];
}
getCasetteCount('Mariah Carey');
// getCasetteCount('Red Hot Chili Peppers') // будет ошибка 'Red Hot Chili Peppers' нет в типе Artist
// ------------------------------------------------------- //



// ------------------------------------------------------- //
// Literal Types
// https://typehero.dev/challenge/literal-types
// Примитивные литеральные типы в TypeScript — это типы, 
// которые выражаются литералами значений примитивных типов. 
// Например, число 5, строка “apple”, логическое значение true или 
// константа перечисления Fruits.Apple могут выступать в качестве типа данных. 
type LiteralString = "chocolate chips";
type LiteralTrue = true;
type LiteralNumbers = 1 | 2 | 3 | 4 | 5 | 6;
type LiteralObject = {
	name: "chocolate chips";
	inStock: true;
	kilograms: 5;
};
type LiteralFunction = (a: number, b: string) => number | string;


const literalString: LiteralString = "Ziltoid the Omniscient";
const literalTrue: LiteralTrue = true;
const literalNumber: LiteralNumbers = Math.random() > 0.5 ? 1 : 2;
const literalObject: LiteralObject =   {
    origin: 'string',
    command: 'string',
    item: 'string',
    time: 'string'
  };
const literalFunction: LiteralFunction = (a: number, b: string) => a || b;
// ------------------------------------------------------- //



// ------------------------------------------------------- //
// Mapped Object Types
// https://typehero.dev/challenge/mapped-object-types
// mapped type - сопоставление типа
// простой пример, сопоставление типа, который не делает ничего полезного
type MoviesByGenre = {
  action: 'Die Hard';
  comedy: 'Groundhog Day';
  sciFi: 'Blade Runner';
  fantasy: 'The Lord of the Rings: The Fellowship of the Ring';
  drama: 'The Shawshank Redemption';
  horror: 'The Shining';
  romance: 'Titanic';
  animation: 'Toy Story';
  thriller: 'The Silence of the Lambs';
};

type MovieInfoByGenre<Obj> = {
  [Key in keyof Obj]: Obj[Key];
}
type Example = MovieInfoByGenre<MoviesByGenre>;

// преобразовали все значения объекта в булевы
type MovieBooleanByGenre<Obj> = {
  [Key in keyof Obj]: boolean;
}
type ExampleBoolean = MovieBooleanByGenre<MoviesByGenre>;

// более сложный пример
type MovieInfoByGenreAdvanced<Obj> = {
	[Key in keyof Obj]: {
		name: string;
		year: number;
		director: string
	}
};
const test_MoviesInfoByGenre: MovieInfoByGenreAdvanced<MoviesByGenre> = {
  action: {
    name: 'Die Hard',
    year: 1988,
    director: 'John McTiernan',
  },
  comedy: {
    name: 'Groundhog Day',
    year: 1993,
    director: 'Harold Ramis',
  },
  sciFi: {
    name: 'Blade Runner',
    year: 1982,
    director: 'Ridley Scott',
  },
  fantasy: {
    name: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    director: 'Peter Jackson',
  },
  drama: {
    name: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
  },
  horror: {
    name: 'The Shining',
    year: 1980,
    director: 'Stanley Kubrick',
  },
  romance: {
    name: 'Titanic',
    year: 1997,
    director: 'James Cameron',
  },
  animation: {
    name: 'Toy Story',
    year: 1995,
    director: 'John Lasseter',
  },
  thriller: {
    name: 'The Silence of the Lambs',
    year: 1991,
    director: 'Jonathan Demme',
  },
};
// ------------------------------------------------------- //



// Primitive Data Types
// https://typehero.dev/challenge/primitive-data-types
// Примитивные типы, похожи на литеральные, но они не такие строгие, а просто обобщенный
// string, number, boolean и т.д
const artistName: string = "Frank Zappa";
const age: number = 52;

interface Musician {
	artistName: string;
	age: number;
  deceased: boolean
}

const musicianInfo = ({ artistName, age, deceased }: Musician) => {
	return `${artistName}, age ${age}${deceased ? " (deceased)" : ""}`;
};

musicianInfo({
	artistName,
	age,
	deceased: true,
});
// ------------------------------------------------------- //



// ------------------------------------------------------- //
// Type Aliases (псеводонимы типа)
// https://typehero.dev/challenge/type-aliases
// Name, Year, Count и т.д - это псеводонимы для типа, 
// псеводнимы нужно, чтобы описать тип по названию
type Name = string;
type Year = number;
type Count = number
type IsOperational = boolean;
type Kilograms = number;
type Payload = {
  name: Name;
  mass: Kilograms;
};
type StrcitType = 'Строгий тип'

// на основе псевдонимов типа создаем интерфейс
interface Spacecraft {
  name: Name;
  yearBuilt: Year;
  crewCapacity: Count;
  launchDate: Date;
  isOperational: IsOperational;
  propulsionSystem: string[];
  payload: Payload[];
  strictType: StrcitType
}

const voyager1 = {
  name: "Voyager 1",
  yearBuilt: 1977,
  crewCapacity: 0,
  launchDate: new Date("1977 09 05"),
  isOperational: true,
  propulsionSystem: ["RTG (Radioisotope Thermoelectric Generator)"],
  payload: [
    { name: "Golden Record", mass: 0.3 },
    { name: "Instruments", mass: 721 },
  ],
  strictType: 'Строгий тип' // если написать другую строку 'test' то будет ошибка
} satisfies Spacecraft
// ------------------------------------------------------- //



// ------------------------------------------------------- //
// The `typeof` Operator
// https://typehero.dev/challenge/typeof
// typeof используется, чтобы переводить в тип, какое-либо значение
const name2 = "Euler's Number";
const value = 2.7182;

// можно использовать, чтобы создать Type Aliases
type Value = typeof value;
// const testValue: Value = 12 // ошбика, так как не соответствует типу
const testValue2: Value = 2.7182

interface FamousNumbers {
  // или встроенно
  label: typeof name2;
  value: Value;
}

// typeof Наиболее Полезен Для Сложных Типов
const createPoint = (x: number, y: number) => ({ x, y });
// перводим тип этой функции
type CreatePoint = typeof createPoint

const width = 200
const height = 500;
const margin = {
  top: 20,
  right: 30,
  bottom: 40,
  left: 50,
};

const d3ChartConfig = {
  width,
  height,
  margin,
  data: [
    { category: 'A', value: 30 },
    { category: 'B', value: 45 },
  ],
  xScale: {
    type: 'band',
    domain: [0, 100],
    range: [0, width - margin.right - margin.left],
  },
  xAxis: {
    label: 'Categories',
    tickSize: 5,
  },
  bar: {
    fill: 'rebeccapurple',
  },
};

type Width = typeof width;
type Margin = typeof margin;
type Data = typeof d3ChartConfig.data;
type XScale = typeof d3ChartConfig.xScale;
type D3ChartConfig = typeof d3ChartConfig;
// ------------------------------------------------------- //



// -----------Default Generic Arguments (параметры по умолчанию для универсальных типов)
// https://typehero.dev/challenge/default-generic-arguments

// Default Function Arguments
type LogLevel = 'debug' | 'info' | 'notice' | 'warning' | 'error' | 'critical';

const log = (message: string, level: LogLevel = 'info') => {
  return `${message} ${level}`
};
log('this has an explicit debug log level', 'debug');
log('this has an implicit info debug level');


// Default Generic Arguments
type Log<Message, Level = 'info'> = {
  message: Message;
  level: Level;
};

type ExplicitDebugLog = Log<'explicit debug', 'debug'>;
type ImplicitInfo = Log<'implicit info'>;
///////////////
type DataApiRequest = string | number;
type MethodApiRequest = string;

type ApiRequest<GDataApiRequest extends DataApiRequest, GMethodApiRequest = "GET"> = {
	data: GDataApiRequest;
	method: GMethodApiRequest;
};

const apiRequest: ApiRequest<string, 'POST'> = {
  data: 'test',
  method: 'POST'
}
const apiRequest2: ApiRequest<DataApiRequest, MethodApiRequest> = {
  data: 'test',
  method: 'POST'
}
const apiRequest3: ApiRequest<DataApiRequest, MethodApiRequest> = {
  data: 123,
  method: 'asd'
}
// ------------------------------------------------------- //



// ------------------------------------------------------- //
// Type Unions
// https://typehero.dev/challenge/type-unions
type Meters = {
  unit: 'meters';
  value: number;
};

type Miles = {
  unit: 'miles';
  value: number;
};

type Feet = {
  unit: 'feet';
  value: number
}

type Distance = Meters | Miles | Feet;

/* 
satisfies -- соотевтствует.

Если делать без satisfies, то будет простая типизация
{
    unit: string;
    value: number;
}

Если добавить satisfies, то будет литеральный тип 
{
    unit: "meters";
    value: number;
}
*/ 
const getDistanceInMeters = (distance: Distance) => {
  switch (distance.unit) {
    case 'miles':
      return {
        unit: 'meters',
        value: distance.value / 1609.34,
      } satisfies Meters;

    case 'meters':
      return {
        unit: 'meters',
        value: distance.value,
      } satisfies Meters;

    case 'feet':
      return {
        unit: 'meters',
        value: distance.value * 3.28084,
      } satisfies Meters;

    default:
      throw new Error(`unrecognized unit:`)
  }
}
// ------------------------------------------------------- //

// https://typehero.dev/explore/beginner