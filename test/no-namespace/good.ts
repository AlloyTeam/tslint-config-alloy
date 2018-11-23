import { foo } from './Foo';

foo();

declare namespace Bar {
    export function bar(): void;
}

Bar.bar();
