import React, { useState } from 'react';
import type { CmsElement as CmsElementType } from '../cms-utils';
import { useLanguage } from '../contexts/LanguageContext';

interface CmsElementProps {
  data: CmsElementType;
  tag?: keyof React.JSX.IntrinsicElements;
  children?: React.ReactNode;
  onClick?: () => void;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  className?: string;
  id?: string;
  [key: string]: unknown; // Allow for other props
}

/**
 * A generic wrapper component that applies dynamic styles and attributes from CMS data.
 * Supports hover states, transitions, and all advanced styling from JSON.
 */
export const CmsElement: React.FC<CmsElementProps> = ({ 
  data, 
  tag: Tag = 'div', 
  children, 
  className,
  id,
  onMouseEnter,
  onMouseLeave,
  ...rest 
}) => {
  const { language } = useLanguage();
  const Component = Tag as React.ElementType;
  const [isHovered, setIsHovered] = useState(false);

  // Handle content translation
  const contentToRender = (data?.content?.[language] || data?.content?.['en'] || '') || children;

  // Merge base styles with hover styles when hovered
  const currentStyles = isHovered && data.hoverStyles 
    ? { ...data.styles, ...data.hoverStyles }
    : data.styles;

  // Handle mouse events for hover effects
  const handleMouseEnter = (e: React.MouseEvent) => {
    if (data.hoverStyles) {
      setIsHovered(true);
    }
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (data.hoverStyles) {
      setIsHovered(false);
    }
    onMouseLeave?.(e);
  };
  
  return (
    <Component 
      ezui-cms={data['ezui-cms']} 
      style={currentStyles}
      className={className}
      id={id || data['ezui-cms']}
      {...data.attributes}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {contentToRender}
    </Component>
  );
};
