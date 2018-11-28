// bad foo 函数重载没有写在一起
declare namespace NSFoo1 {
    export function foo(s: string): void;
    export function foo(n: number): void;
    export function bar(): void;
    export function foo(sn: string | number): void;
}

// bad foo 函数重载没有写在一起
type TypeFoo1 = {
    foo(s: string): void;
    foo(n: number): void;
    bar(): void;
    foo(sn: string | number): void;
};

// bad foo 函数重载没有写在一起
interface IFoo1 {
    foo(s: string): void;
    foo(n: number): void;
    bar(): void;
    foo(sn: string | number): void;
}
