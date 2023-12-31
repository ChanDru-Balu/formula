"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HemisphereSurface = exports.SphereSurface = exports.ConeSurface = exports.CylinderSurface = exports.RectangularPrismSurface = exports.CubeSurface = exports.EllipseArea = exports.TrapeziumArea = exports.ParallelogramArea = exports.RectangleArea = exports.Square = exports.TriangleArea = exports.CircleArea = void 0;
// Circle , Triangle , Square , Rectangle , Parallelogram , Trapezium , Ellipse
// Cube , Rectangular prism, Cylinder , Cone , Sphere , Hemisphere
// π × r2
// r = radius of the circle
/**
 * Calculates the area of a circle.
 *
 * @param {number} r - The radius of the circle.
 * @returns {ResultOrError<number>} The calculated area of the circle.
 */
const CircleArea = (r) => {
    try {
        if (!r) {
            throw new Error("Radius must be provided for Circle");
        }
        return { success: true, result: (22 / 7) * (r * r) };
    }
    catch (error) {
        return { success: false, error: error.message };
    }
};
exports.CircleArea = CircleArea;
// ½ × b × h
//   b = base
//   h = height
/**
 * Calculates the area of a triangle.
 *
 * @param {number} b - The base of the triangle.
 * @param {number} h - The height of the triangle.
 * @returns {ResultOrError<number>} The calculated area of the triangle.
 */
const TriangleArea = (b, h) => {
    try {
        if (!b || !h) {
            throw new Error("Both base and height must be provided for Triangle");
        }
        return { success: true, result: (1 / 2) * (b * h) };
    }
    catch (error) {
        return { success: false, error: error.message };
    }
};
exports.TriangleArea = TriangleArea;
/**
 * Calculates the area of a square.
 *
 * This function takes the length of the side of a square as a parameter
 * and returns the calculated area.
 *
 * @param {number} a - The length of the side of the square.
 * @returns {Promise<ResultOrError<number>>} A promise that resolves to the calculated area of the square.
 */
const Square = (a) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!a) {
            throw new Error("Area must have one parameter");
        }
        const result = a * a;
        return { success: true, result };
    }
    catch (error) {
        return { success: false, error: error.message };
    }
});
exports.Square = Square;
/**
 * Calculates the area of a rectangle.
 *
 * This function takes the height and width of a rectangle as parameters
 * and returns the calculated area.
 *
 * @param {number} h - The height of the rectangle.
 * @param {number} b - The width of the rectangle.
 * @returns {number} The calculated area of the rectangle.
 */
const RectangleArea = (h, b) => {
    // l × w
    // l = length
    // w = width
    if (h <= 0 || b <= 0) {
        return {
            success: false,
            error: "Height and base must be greater than zero.",
        };
    }
    if (!b) {
        return {
            success: false,
            error: "Please fill all the Parameters for Rectangle",
        };
    }
    return { success: true, result: h * b };
};
exports.RectangleArea = RectangleArea;
// b × h
// b=base
// h=vertical height
/**
 * Calculates the area of a parallelogram.
 *
 * This function takes the base and vertical height of a parallelogram as parameters
 * and returns the calculated area.
 *
 * @param {number} b - The base of the parallelogram.
 * @param {number} h - The vertical height of the parallelogram.
 * @returns {ResultOrError<number>} The calculated area of the parallelogram.
 */
const ParallelogramArea = (b, h) => {
    try {
        // Validate parameters
        if (h <= 0 || b <= 0) {
            throw new Error("Height and base must be greater than zero.");
        }
        // Check if 'b' is provided
        if (!b) {
            throw new Error("Please fill all the Parameters");
        }
        // Calculate and return the area
        return { success: true, result: h * b };
    }
    catch (error) {
        // Return error if any exception occurs
        return { success: false, error: error.message };
    }
};
exports.ParallelogramArea = ParallelogramArea;
// ½(a+b) × h
// a and b are the length of parallel sides
// h = height
/**
 * Calculates the area of a trapezium.
 *
 * This function takes the lengths of the parallel sides (a and b) and the height (h)
 * and returns the calculated area.
 *
 * @param {number} a - The length of one parallel side of the trapezium.
 * @param {number} b - The length of the other parallel side of the trapezium.
 * @returns {ResultOrError<number>} The calculated area of the trapezium.
 */
const TrapeziumArea = (a, b) => {
    try {
        // Validate parameters
        if (a <= 0 || b <= 0) {
            throw new Error("Both sides must be greater than zero.");
        }
        // Check if 'a' and 'b' are provided
        if (!a || !b) {
            throw new Error("Please fill all the Parameters");
        }
        // Calculate and return the area
        return { success: true, result: (1 / 2) * (a + b) };
    }
    catch (error) {
        // Return error if any exception occurs
        return { success: false, error: error.message };
    }
};
exports.TrapeziumArea = TrapeziumArea;
// πab
// a = ½ minor axis
// b = ½ major axis
/**
 * Calculates the area of an ellipse.
 *
 * This function takes the semi-major axis (a) and semi-minor axis (b)
 * of an ellipse as parameters and returns the calculated area.
 *
 * @param {number} a - The semi-major axis of the ellipse.
 * @param {number} b - The semi-minor axis of the ellipse.
 * @returns {ResultOrError<number>} The calculated area of the ellipse.
 */
const EllipseArea = (a, b) => {
    try {
        // Validate parameters
        if (a <= 0 || b <= 0) {
            throw new Error("Both sides must be greater than zero.");
        }
        // Check if 'a' and 'b' are provided
        if (!a || !b) {
            throw new Error("Please fill all the Parameters");
        }
        // Calculate and return the area
        return { success: true, result: (22 / 7) * (a * b) };
    }
    catch (error) {
        // Return error if any exception occurs
        return { success: false, error: error.message };
    }
};
exports.EllipseArea = EllipseArea;
// 6a2
// a = length of the edge
/**
 * Calculates the surface area of a cube.
 *
 * This function takes the length of the cube's edge as a parameter
 * and returns the calculated surface area.
 *
 * @param {number} a - The length of the edge of the cube.
 * @returns {ResultOrError<number>} The calculated surface area of the cube.
 */
const CubeSurface = (a) => {
    try {
        // Validate parameter
        if (!a) {
            throw new Error("Length of the edge must be provided for Cube");
        }
        // Calculate and return the surface area
        return { success: true, result: 6 * (a * a) };
    }
    catch (error) {
        // Return error if any exception occurs
        return { success: false, error: error.message };
    }
};
exports.CubeSurface = CubeSurface;
// 2(wl+hl+hw)
//   l = length
// w = width
// h = height
/**
 * Calculates the surface area of a rectangular prism.
 *
 * This function takes the width, height, and length of a rectangular prism as parameters
 * and returns the calculated surface area.
 *
 * @param {number} w - The width of the rectangular prism.
 * @param {number} h - The height of the rectangular prism.
 * @param {number} l - The length of the rectangular prism.
 * @returns {ResultOrError<number>} The calculated surface area of the rectangular prism.
 */
const RectangularPrismSurface = (w, h, l) => {
    try {
        // Validate parameters
        if (!w || !h || !l) {
            throw new Error("Please fill all the Parameters");
        }
        // Calculate and return the surface area
        return { success: true, result: 2 * ((w * l) + (h * l) + (h * w)) };
    }
    catch (error) {
        // Return error if any exception occurs
        return { success: false, error: error.message };
    }
};
exports.RectangularPrismSurface = RectangularPrismSurface;
// 2πr(r + h)
//   r = radius of circular base
// h = height of the cylinder
/**
 *
 * @param (number) r - Radius of the circular base
 * @param (number) h - Height of the cylinder
 * @returns (ResultOrError<number>) the calculated surface area of Cylinder
 */
const CylinderSurface = (r, h) => {
    try {
        //Vlaidated Parameter
        if (!r || !h) {
            throw new Error("Please fill All Parameters!");
        }
        //calculated and return the Surface area
        return { success: true, result: (2 * (22 / 7) * r) * (r + h) };
    }
    catch (error) {
        // Return error if any exception occurs
        return { success: false, error: error.message };
    }
};
exports.CylinderSurface = CylinderSurface;
// πr(r + l)
//   r = radius of circular base
// l = slant height
/**
 * Calculates the surface area of a cone.
 *
 * This function takes the radius of the circular base (r) and the slant height (l) of the cone
 * as parameters and returns the calculated surface area.
 *
 * @param {number} r - The radius of the circular base of the cone.
 * @param {number} l - The slant height of the cone.
 * @returns {ResultOrError<number>} The calculated surface area of the cone.
 */
const ConeSurface = (r, l) => {
    try {
        // Validate parameters
        if (!r || !l) {
            throw new Error("Please fill all the Parameters");
        }
        // Calculate and return the surface area
        return { success: true, result: (22 / 7) * (r / l) };
    }
    catch (error) {
        // Return error if any exception occurs
        return { success: false, error: error.message };
    }
};
exports.ConeSurface = ConeSurface;
// 4πr2
// r = radius of sphere
/**
 * Calculates the surface area of a sphere.
 *
 * This function takes the radius of the sphere (r) as a parameter
 * and returns the calculated surface area.
 *
 * @param {number} r - The radius of the sphere.
 * @returns {ResultOrError<number>} The calculated surface area of the sphere.
 */
const SphereSurface = (r) => {
    try {
        // Validate parameter
        if (!r) {
            throw new Error("Please fill all the Parameters");
        }
        // Calculate and return the surface area
        return { success: true, result: 4 * (22 / 7) * (r * r) };
    }
    catch (error) {
        // Return error if any exception occurs
        return { success: false, error: error.message };
    }
};
exports.SphereSurface = SphereSurface;
// 3πr2
// r = radius of hemisphere
/**
 * Calculates the surface area of a hemisphere.
 *
 * This function takes the radius of the hemisphere (r) as a parameter
 * and returns the calculated surface area.
 *
 * @param {number} r - The radius of the hemisphere.
 * @returns {ResultOrError<number>} The calculated surface area of the hemisphere.
 */
const HemisphereSurface = (r) => {
    try {
        // Validate parameter
        if (!r) {
            throw new Error("Please fill all the Parameters");
        }
        // Calculate and return the surface area
        return { success: true, result: 3 * (22 / 7) * (r * r) };
    }
    catch (error) {
        // Return error if any exception occurs
        return { success: false, error: error.message };
    }
};
exports.HemisphereSurface = HemisphereSurface;
