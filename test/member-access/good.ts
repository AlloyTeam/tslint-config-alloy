// good 每个类成员都设置了可访问性
class Foo2 {
    private static foo = 'foo';
    public static getFoo() {
        return Foo2.foo;
    }
    public constructor() {}
    protected bar = 'bar';
    public getBar() {}
    public get baz() {
        return 'baz';
    }
    public set baz(value) {
        console.log(value);
    }
}
