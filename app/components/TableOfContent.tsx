import {Button} from './Button';
import {FeaturedSection} from './FeaturedSection';
import {PageHeader, Text} from './Text';
import {Link} from '~/components';
import {ArrowUpIcon} from '@heroicons/react/20/solid';

export function TableOfContent() {
  return (
    <div className="sm-max:hidden">
      <div className="sticky top-40">
        <div className="flex justify-between">
          <div className="flex items-center py-1 px-xs border border-b-0 border-gray-400 rounded-t-md">
            <h3>Table Of contents</h3>
          </div>
          <div className="flex items-center border border-b-0 border-gray-400 rounded-t-md">
            <Link to="#top">
              <div className="py-1 px-xxs">
                <ArrowUpIcon className="h-[20px] w-[20px]" />
              </div>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 divide-y border border-gray-400 rounded-b-md divide-gray-400">
          <Link to="#go-here">
            <div className="py-2 px-xs">Test</div>
          </Link>
          <div className="py-2 p-xs">
            <Link to="">Test</Link>
          </div>
          <div className="py-2 p-xs">
            <Link to="">Test</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
