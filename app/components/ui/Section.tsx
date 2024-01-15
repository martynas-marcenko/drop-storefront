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
    missingClass(className, '\\max-w-' || '\\w-') && widths[width],
    displays[display],
    missingClass(className, '\\mp[xy]?-') && paddings[padding],
    dividers[divider],
    className,
  );

  return (
    <Component {...props} className={styles}>
      {heading && (
        <>
          <div className="sm-max:mb-xs mb-md">
            <Heading
              heading={heading}
              className={padding === 'y' ? paddings['x'] : ''}
            />
          </div>
        </>
      )}
      {children}
    </Component>
  );
}
