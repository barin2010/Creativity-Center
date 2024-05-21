import ForChildren from 'components/forChildren/ForChildren';
import React from 'react';
import { childrensData } from 'helper/childrensData';

const Children = () => {
  return (
    <section>
      <ForChildren
        key={childrensData.id}
        img={childrensData.img}
        space={childrensData.space}
        icon={childrensData.icon}
      />
    </section>
  );
};

export default Children;
