import two_crystal_balls from "@code/TwoCrystalBalls";

test("two crystal balls", function () {
    const data = new Array(10000).fill(false);
    const index = Math.floor(Math.random() * 10000);

    for (let i = index; i < 10000; ++i) {
        data[i] = true;
    }

    expect(two_crystal_balls(data)).toEqual(index);
    expect(two_crystal_balls(new Array(821).fill(false))).toEqual(-1);
});
