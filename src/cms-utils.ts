import type * as React from "react";

export interface CmsElement {
  'ezui-cms': string;
  content: Record<string, string>;
  styles?: React.CSSProperties;
  hoverStyles?: React.CSSProperties; // Styles to apply on hover
  attributes?: Record<string, string>;
  children?: CmsElement[];
}

export type CmsData = CmsElement[];

/**
 * Generates the ezui-cms attribute value.
 * @param screenName The name of the screen/page.
 * @param elementName The name of the UI element.
 * @param occurrence The occurrence number of the element (starts from 1).
 * @returns An object containing the ezui-cms attribute.
 */
export const getCmsAttr = (screenName: string, elementName: string, occurrence: number = 1) => {
  return {
    'ezui-cms': `${screenName}-${elementName}-${occurrence}`
  };
};

/**
 * Finds CMS data for a specific element identifier.
 * @param data The full CMS data list.
 * @param id The unique identifier to look for.
 * @returns The CmsElement or a default empty object.
 */
export const getCmsData = (data: CmsData, id: string): CmsElement => {
  return data.find(item => item['ezui-cms'] === id) || {
    'ezui-cms': id,
    content: {},
    styles: {},
    attributes: {}
  };
};
