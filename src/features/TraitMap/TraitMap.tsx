import React, { useEffect, useState } from "react";
import {
  FlexWrapper,
  Title,
  Trait,
  TraitColumn,
  TraitMapWrapper,
  TraitWrapper,
  Wrapper,
} from "./TraitMap.styles";

/**
 * Represents an assignable trait.
 */
interface ITrait {
  id: number;
  parentId: number;
  traitName: string;
}

/**
 * A trait with children.
 */
interface ITraitWithChildren extends ITrait {
  children?: ITraitWithChildren[];
}

/**
 * Shows a map of all traits and allows for new ones
 * to be created.
 */
const TraitMap = () => {
  /*
   * Stores a list of traits.
   */
  const [traits, setTraits] = useState<ITrait[]>([]);

  const fetchTraits = async () => {
    const request = await fetch(`/api/v1/traits`);
    const json = await request.json();
    setTraits(json.traits);
  };

  useEffect(() => {
    fetchTraits();
  }, []);

  /*
   * Maps traits onto a recursive structure.
   */
  const traitMap = (
    traits: ITrait[],
    parentId: number = 0
  ): ITraitWithChildren[] => {
    return traits
      .filter((trait) => trait.parentId === parentId)
      .map((trait) => ({ ...trait, children: traitMap(traits, trait.id) }));
  };

  const map = traitMap(traits);

  const mapToElements = (map: ITraitWithChildren[]) => {
    return map.map((item) => (
      <>
        <TraitColumn>
          <TraitWrapper>
            <Trait
              onClick={(e) => {
                const newTraitName = prompt("Enter a trait name");

                (async () => {
                  const req = await fetch(`/api/v1/traits`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      parentId: item.id,
                      traitName: newTraitName,
                    }),
                  });

                  window.location.reload();
                })();
              }}
            >
              {item.traitName}
            </Trait>
          </TraitWrapper>
          <FlexWrapper>
            {item.children ? mapToElements(item.children) : null}
          </FlexWrapper>
        </TraitColumn>
      </>
    ));
  };

  return (
    <Wrapper>
      <Title>Traits</Title>
      <TraitMapWrapper>
        <FlexWrapper>{mapToElements(map)}</FlexWrapper>
      </TraitMapWrapper>
    </Wrapper>
  );
};

export default TraitMap;
