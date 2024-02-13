import clsx from 'clsx';
import {missingClass, formatText} from '~/lib/utils';

export function Text({
  as: Component = 'span',
  id,
  className,
  color = 'text-gray-900',
  format,
  size = 'text-base',
  width = 'default',
  children,
}: //   ...props
{
  as?: React.ElementType;
  className?: string;
  id?: string;
  color?: 'text-gray-500' | 'text-gray-700' | 'text-gray-900';
  format?: boolean;
  size?:
    | 'text-sm'
    | 'text-base'
    | 'text-lg'
    | 'text-xl'
    | 'text-2xl'
    | 'text-3xl'
    | 'text-4xl';
  width?: 'default' | 'narrow' | 'wide';
  children: React.ReactNode;
  //   [key: string]: any;
}) {
  const colors: Record<string, string> = {
    'text-gray-500': 'text-gray-500	',
    'text-gray-700': 'text-gray-700',
    'text-gray-900': 'text-gray-900',
  };

  const sizes: Record<string, string> = {
    'text-sm': 'text-sm',
    'text-base': 'text-base',
    'text-lg': 'text-lg',
    'text-xl': 'text-xl',
    'text-2xl': 'text-2xl',
    'text-3xl': 'text-3xl',
    'text-4xl': 'text-4xl',
  };

  const weights: Record<string, string> = {
    'text-sm': 'font-normal',
    'text-base': 'font-normal',
    'text-lg': 'font-normal',
    'text-xl': 'font-medium',
    'text-2xl': 'font-medium',
    'text-3xl': 'font-bold',
    'text-4xl': 'font-bold',
  };

  const widths: Record<string, string> = {
    default: 'max-w-prose',
    narrow: 'max-w-prose-narrow',
    wide: 'max-w-prose-wide',
  };

  const styles = clsx(
    missingClass(className, 'max-w-') && widths[width],
    missingClass(className, 'whitespace-') && 'whitespace-pre-wrap',
    missingClass(className, 'text-') && colors[color],
    missingClass(className, 'font-') && weights[size],
    sizes[size],
    className,
  );

  return (
    <Component id={id} className={styles}>
      {format ? formatText(children) : children}
    </Component>
  );
}

export function PageHeader({
  children,
  className,
  heading,
  variant = 'default',
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  heading?: string;
  variant?: 'default' | 'blogPost' | 'allCollections';
  [key: string]: any;
}) {
  const variants: Record<string, string> = {
    default: 'grid w-full gap-8 p-6 py-8 md:p-8 lg:p-12 justify-items-start',
    blogPost:
      'grid md:text-center w-full gap-4 p-6 py-8 md:p-8 lg:p-12 md:justify-items-center',
    allCollections:
      'flex justify-between items-baseline gap-8 p-6 md:p-8 lg:p-12',
  };

  const styles = clsx(variants[variant], className);

  return (
    <header {...props} className={styles}>
      {heading && (
        <Text as="h1" width="narrow" size="text-4xl" className="inline-block">
          {heading}
        </Text>
      )}
      {children}
    </header>
  );
}
