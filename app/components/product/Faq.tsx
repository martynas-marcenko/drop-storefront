import {Faq as FaqProps} from '~/lib/product-types';
import {Disclosure} from '@headlessui/react';
import {Text} from '~/components/ui';
import {IconClose} from '~/components';
import clsx from 'clsx';
import Markdown from 'react-markdown';

export const Faq = ({faq}: {faq: FaqProps[]}) => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex max-w-2xl flex-col w-full">
        {faq?.map(({question, answer}) => (
          <Disclosure
            key={question}
            as="div"
            className="grid w-full shadow-lightHeader"
          >
            {({open}) => (
              <>
                <Disclosure.Button className="text-left">
                  <div className="flex justify-between py-xs">
                    <Text size="text-base" as="h4" className="font-medium">
                      {question}
                    </Text>
                    <div className="w-[20px] flex-0">
                      <IconClose
                        className={clsx(
                          'transition-transform transform-gpu duration-200',
                          !open && 'rotate-[45deg]',
                        )}
                      />
                    </div>
                  </div>
                </Disclosure.Button>

                <Disclosure.Panel className="grid gap-2 pb-xs">
                  <Markdown>{answer}</Markdown>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};
