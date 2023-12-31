# Geometric Area and Surface Area Calculator

This TypeScript project provides functions to calculate the area of various geometric shapes and the surface area of solids. The calculations are based on mathematical formulas for each shape.

### 2D Shapes

| Shape          | Function                                                          |
| -------------- | ----------------------------------------------------------------- |
| Circle         | `CircleArea(radius: number): ResultOrError<number>`               |
| Triangle       | `TriangleArea(base: number, height: number): ResultOrError<number>`|
| Square         | `Square(sideLength: number): Promise<ResultOrError<number>>`      |
| Rectangle      | `RectangleArea(height: number, width: number): ResultOrError<number>`|
| Parallelogram  | `ParallelogramArea(base: number, height: number): ResultOrError<number>`|
| Trapezium      | `TrapeziumArea(sideA: number, sideB: number): ResultOrError<number>`|
| Ellipse        | `EllipseArea(semiMajorAxis: number, semiMinorAxis: number): ResultOrError<number>`|


## Functions

### 3D Shapes

| Shape             | Function                                                  |
| ----------------- | --------------------------------------------------------- |
| Cube              | `CubeSurface(edgeLength: number): ResultOrError<number>` |
| Rectangular Prism | `RectangularPrismSurface(width: number, height: number, length: number): ResultOrError<number>` |
| Cylinder          | `CylinderSurface(radius: number, height: number): ResultOrError<number>` |
| Cone              | `ConeSurface(radius: number, slantHeight: number): ResultOrError<number>` |
| Sphere            | `SphereSurface(radius: number): ResultOrError<number>`    |
| Hemisphere        | `HemisphereSurface(radius: number): ResultOrError<number>`|


## Installation

To use this library in your TypeScript project, you can install it via npm:

```bash
npm i formula-test-by-chan
