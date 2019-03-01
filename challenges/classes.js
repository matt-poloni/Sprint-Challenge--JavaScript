// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2 { // Appended a 2 at the end since `CuboidMaker` already exists
  constructor(attr) {
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea () {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid2 = new CuboidMaker2({ // Appended 2 again to prove the class works the same as the prototype
  length: 4,
  width: 5,
  height: 5,
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker2 {
  constructor(attr) {
    super(attr);
    this.width = attr.length;
    this.height = attr.length;
  }
  cubeVolume() {
    return this.length ** 3;
  }
  cubeSurfaceArea() {
    return 6 * (this.length ** 2);
  }
}
const cube = new CubeMaker({ length: 5 });
console.log(cube.cubeVolume()); // 125 | Ref: https://www.wolframalpha.com/input/?i=volume+of+a+cube+with+sides+of+length+5
console.log(cube.cubeSurfaceArea()); // 150 | Ref: https://www.wolframalpha.com/input/?i=surface+area+of+a+cube+with+sides+of+length+5

// The original formulas still work, too, because I set height and width equal to length for cubes and the formula for cubes is ultimately the same as for cuboids, once you assume that all sides are of equal length
console.log(cube.volume());
console.log(cube.surfaceArea());