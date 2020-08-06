import React from "react"

/**
 * Elementor base control.
 *
 * An abstract class for creating new controls in the panel.
 *
 * @since 1.0.0
 * @abstract
 */
export default abstract class Base {
/*   label: string = "";
  description: string = "";
  showLabel: boolean = true;
  labelBlock: boolean = false;
  seperator: string = "default"; */

  /*   constructor() {
      this.label = "";
      this.description = "";
      this.showLabel = true;
      this.labelBlock = false;
      this.seperator = "default";
    } */

  /**
     * Control content template.
     *
     * Used to generate the control HTML in the editor using Underscore JS
     * template. The variables for the class are available using `data` JS
     * object.
     *
     * Note that the content template is wrapped by Base_Control::print_template().
     *
     * @since 1.5.0
     * @access public
     * @abstract
     */
  abstract getContentTemplate() : JSX.Element;



    /**
   * Get control type.
   *
   * Retrieve the control type.
   *
   * @since 1.5.0
   * @access public
   * @abstract
   */
    abstract getType(): void;




    /**
     * Print control template.
     *
     * Used to generate the control HTML in the editor using Underscore JS
     * template. The variables for the class are available using `data` JS
     * object.
     *
     * @since 1.5.0
     * @access public
     */
    printTemplate() {
      return (
        <div className="elementor-control-content">
          {this.getContentTemplate()}
        </div>
      )
    }
  }
