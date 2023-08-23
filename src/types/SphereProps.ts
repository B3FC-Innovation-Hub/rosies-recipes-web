/**
 * The Sphere components renders a sphere with a png image inside.
 * This will be used across many screens to follow our design system.
 * 
 * backgroundColor: the color of the sphere. Please use color variants from our color palette.
 * 
 * //To define how big will the sphere be
 *  width: number;
    height: number;

    src: The source of the png image, you'll find them in assets/food-assets

    top?, left? ,right?: Since the spheres are absolutely positioned, 
    we can use this properties to position the spheres wherever we want.
 */


export type SphereProps = {
    cssClass: string | undefined;
    src?: string;
    imgWidth?: number;
    imgHeight?: number;
}