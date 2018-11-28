// good foo 函数重载写在一起了
declare namespace NSFoo2 {
    export function foo(s: string): void;
    export function foo(n: number): void;
    export function foo(sn: string | number): void;
    export function bar(): void;
}

// good foo 函数重载写在一起了
type TypeFoo2 = {
    foo(s: string): void;
    foo(n: number): void;
    foo(sn: string | number): void;
    bar(): void;
};

// good foo 函数重载写在一起了
interface IFoo2 {
    foo(s: string): void;
    foo(n: number): void;
    foo(sn: string | number): void;
    bar(): void;
}
