import React from 'react';
import {TableOfContent} from '~/components';

export const NaturalMoisturizingFactor: React.FC = () => {
  return (
    <div id="top">
      <h1>
        The Ultimate Guide to Choosing Face Oil for Dry Skin What You Need to
        Know
      </h1>
      <p>This is a simple component.</p>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="my-[600px]">hello</div>
          <span id="go-here" />
          <div>I am here</div>
        </div>
        <TableOfContent />
      </div>
    </div>
  );
};
