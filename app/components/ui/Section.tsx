import clsx from 'clsx';
import {missingClass} from '~/lib/utils';
import {Heading} from '~/components/ui';
import {paddings, dividers, displays, widths} from '~/lib/layoutConstants';

export function Section({
  as: Component = 'section',
  children,
  width = 'default',
  className,
  divider = 'none',
  display = 'grid',
  heading,
  padding = 'all',
  ...props
}: {
  as?: React.ElementType;
  children?: React.ReactNode;
  width?: 'full' | 'default' | 'narrow';
  className?: string;
  divider?: 'none' | 'top' | 'bottom' | 'both';
  display?: 'grid' | 'flex';
  heading?: string;
  padding?: 'x' | 'y' | 'swimlane' | 'all' | 'none';
  [key: string]: any;
}) {
  const styles = clsx(
    'gap-4 md:gap-8',
    missingClass(className, '\\max-w-' || '\\w-') && widths[width],
    displays[display],
    missingClass(className, '\\mp[xy]?-') && paddings[padding],
    dividers[divider],
    className,
  );

  const headingClassName = padding === 'y' ? 'x' : undefined;

  return (
    <Component {...props} className={styles}>
      {heading && (
        <>
          <Heading heading={heading} padding={headingClassName} />
        </>
      )}
      {children}
    </Component>
  );
}
