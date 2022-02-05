class Main {
    public static int g = 1;

    public static void main (String[] argv) {
        final int x = 42;
        int y = 41;
        final Integer z = null;

        int a = 1;
        int b = -1;
        int tmp = a;
        a = b;
        b = tmp;

        g += 1;
        y += 1;
        // x += 1;

        System.out.format("g=%d, x=%d, y=%d, z=%s, a=%d, b=%d\n", g, x, y, z, a, b);
        System.out.format("z is null? %s\n", z == null);
        System.out.format("x is %s.\n", x % 2 == 0 ? "even" : "odd");
    }
}
