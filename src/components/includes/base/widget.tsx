import Base from "../controls/Base"

export enum Categories {
    Base = "Base"

}

export enum Widgets {
    Heading = "heading",
    Image = "image", InnerSection = "innersection", TextEditor = "texteditor", Video = "video", Button = "Button", Divider = "divider", Spacer = "spacer", GoogleMaps = "googlemaps", Icon = "icon"
}
/**
 * Elementor widget base.
 *
 * An abstract class to register new Elementor widgets. It extended the
 * `Element_Base` class to inherit its properties.
 *
 * This abstract class must be extended in order to register new widgets.
 *
 * @since 1.0.0
 * @abstract
 */
export default class Widget {

    type: Widgets;
    categories: Categories;
    controls: Base[];

    constructor(type: Widgets, categories: Categories, controls: Base[]) {
        this.type = type;
        this.categories = categories
        this.controls = controls
    }

    getCategories() {
        return this.categories;
    }

    getType() {
        return this.type
    }

    getIcon() {

    }

    getKeywords() {
        return ['heading', 'title', 'text'];
    }


    protected addControl() {


    }



}

