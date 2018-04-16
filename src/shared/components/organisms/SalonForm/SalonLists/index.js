/* @flow */
import React from "react";
import styled from "styled-components";
import pure from "recompose/pure";
import SalonList from "shared/components/molecules/SalonList";

type Props = {
  page: number,
  items: Object,
  onInnerWindow: Function,
  shouldAdjustScroll: boolean,
  forceScrollTo: ?{ x: number, y: number },
  linkURL: string
};

export default pure(function SalonLists(props: Props) {
  const { items, onInnerWindow, shouldAdjustScroll, forceScrollTo, linkURL } = props;

  return (
    <Root>
      {Object.keys(items).map(page => (
        <SalonList
          items={items[page]}
          linkURL={linkURL}
          page={+page}
          onInnerWindow={onInnerWindow}
          heightRatio={1.0}
          key={page}
          shouldAdjustScroll={+page === props.page && shouldAdjustScroll}
          forceScrollTo={forceScrollTo}
        />
      ))}
    </Root>
  );
});

export const Root = styled.div`
  text-align: center;
  margin: 0 auto;
`;
