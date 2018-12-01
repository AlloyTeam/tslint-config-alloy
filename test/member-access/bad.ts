// bad 没有指定 private protected 或 public
class Foo1 {
    static foo = 'foo';
    static getFoo() {
        return Foo1.foo;
    }
    constructor() {}
    bar = 'bar';
    getBar() {}
    get baz() {
        return 'baz';
    }
    set baz(value) {
        console.log(value);
    }
}
